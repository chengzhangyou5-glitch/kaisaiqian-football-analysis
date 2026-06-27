import json
import subprocess
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
OUTPUT.mkdir(parents=True, exist_ok=True)

pdfmetrics.registerFont(TTFont("Deng", r"C:\Windows\Fonts\Deng.ttf"))
pdfmetrics.registerFont(TTFont("DengBold", r"C:\Windows\Fonts\Dengb.ttf"))

LIME = colors.HexColor("#82F600")
INK = colors.HexColor("#111713")
MUTED = colors.HexColor("#5F6A61")
PANEL = colors.HexColor("#F2F6EF")
LINE = colors.HexColor("#D8E2D5")
RISK = colors.HexColor("#C95E45")

base = getSampleStyleSheet()
BODY = ParagraphStyle("CNBody", parent=base["BodyText"], fontName="Deng", fontSize=10.5, leading=17, textColor=INK)
MUTED_TEXT = ParagraphStyle("CNMuted", parent=BODY, fontSize=8.5, leading=13, textColor=MUTED)
TITLE = ParagraphStyle("CNTitle", parent=BODY, fontName="DengBold", fontSize=24, leading=30, alignment=TA_CENTER)
SECTION = ParagraphStyle("CNSection", parent=BODY, fontName="DengBold", fontSize=13, leading=18, spaceBefore=4, spaceAfter=7)
SCORE_TEXT = ParagraphStyle("CNScore", parent=BODY, fontSize=8.5, leading=10.5)


def load_site_data():
    script = """
      import { matches, historyRecords } from './assets/js/data.js';
      console.log(JSON.stringify({matches, historyRecords}));
    """
    result = subprocess.run(
        ["node", "--input-type=module", "-e", script], cwd=ROOT,
        check=True, capture_output=True, text=True, encoding="utf-8"
    )
    def normalize(value):
        if isinstance(value, str):
            return value.replace("–", "-").replace("—", "-").replace("‑", "-")
        if isinstance(value, list):
            return [normalize(item) for item in value]
        if isinstance(value, dict):
            return {key: normalize(item) for key, item in value.items()}
        return value
    return normalize(json.loads(result.stdout))


def frame(canvas, doc):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, height - 16 * mm, width, 16 * mm, fill=1, stroke=0)
    canvas.setFillColor(LIME)
    canvas.setFont("DengBold", 12)
    canvas.drawString(18 * mm, height - 10.5 * mm, "开赛前")
    canvas.setFillColor(colors.HexColor("#A8B2AA"))
    canvas.setFont("Deng", 7.5)
    canvas.drawRightString(width - 18 * mm, height - 10.5 * mm, "PRE-MATCH MODEL REPORT")
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 13 * mm, width - 18 * mm, 13 * mm)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8 * mm, "赛前分析 · 观赛参考 · 开赛后锁定验证")
    canvas.drawRightString(width - 18 * mm, 8 * mm, f"第 {doc.page} 页")
    canvas.restoreState()


def panel(title, text, accent=False):
    bg = colors.HexColor("#ECFBD9") if accent else PANEL
    return KeepTogether([
        Paragraph(title, SECTION),
        Table([[Paragraph(text, BODY)]], colWidths=[174 * mm], style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), bg),
            ("BOX", (0, 0), (-1, -1), 0.7, LINE),
            ("LEFTPADDING", (0, 0), (-1, -1), 12),
            ("RIGHTPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING", (0, 0), (-1, -1), 10),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ])), Spacer(1, 3 * mm)
    ])


def facts_table(items):
    cells = [Paragraph(f"<font size='8'>{label}</font><br/><font size='16'><b>{value}</b></font>", BODY) for label, value in items]
    table = Table([cells], colWidths=[174 * mm / len(cells)] * len(cells), rowHeights=[20 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return table


def goal_range_label(value):
    return value if "球" in value else f"{value} 球"


def score_paths_table(match):
    cells = []
    for label, start in (("首选", 0), ("次选", 2), ("延伸", 4)):
        rows = []
        for index in (start, start + 1):
            rows.append(
                f"<font size='10'><b>{match['scores'][index]} · {match['model']['scoreWeights'][index]}%</b></font>"
                f"<br/><font size='7'>{match['model']['scoreNotes'][index]}</font>"
            )
        cells.append(Paragraph(f"<font size='7'>{label}</font><br/>{'<br/>'.join(rows)}", SCORE_TEXT))
    cells.append(Paragraph(
        f"<font size='7'>比赛区间</font><br/><font size='10'><b>{goal_range_label(match['goals'])}</b></font>"
        f"<br/><font size='7'>风险等级</font><br/><font size='10'><b>{match['risk']}</b></font>",
        SCORE_TEXT
    ))
    table = Table([cells], colWidths=[43.5 * mm] * 4, rowHeights=[25 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
    ]))
    return table


def build_upcoming(match):
    handicap = match["handicap"]
    story = [
        Paragraph(match["competition"], MUTED_TEXT), Spacer(1, 3 * mm),
        Paragraph(f"{match['home']['name']}  VS  {match['away']['name']}", TITLE),
        Paragraph(match["time"], ParagraphStyle("Time", parent=MUTED_TEXT, alignment=TA_CENTER)), Spacer(1, 5 * mm),
        panel("本场结论", match["conclusion"], True),
        Paragraph("比分路径", SECTION),
        score_paths_table(match),
        Paragraph("胜平负趋势", SECTION),
        facts_table([("主胜", f"{match['trend'][0]}%"), ("平局", f"{match['trend'][1]}%"), ("客胜", f"{match['trend'][2]}%")]), Spacer(1, 4 * mm),
        Paragraph(f"让胜平负趋势 · 主队 {handicap['line']:+d}", SECTION),
        facts_table([("让胜", f"{handicap['trend'][0]}%"), ("让平", f"{handicap['trend'][1]}%"), ("让负", f"{handicap['trend'][2]}%")]), Spacer(1, 4 * mm),
        panel("风险提醒", "<br/>".join(f"- {item}" for item in match["riskNotes"])),
        panel("为什么这样看", match["why"]),
    ]
    return story


def build_history(record):
    report = record["report"]
    handicap = record["handicap"]
    handicap_status = "命中" if handicap["hit"] else "未中"
    tags = " / ".join(record["tags"] + [f"让球{handicap_status}"])
    story = [
        Paragraph(record["competition"], MUTED_TEXT), Spacer(1, 3 * mm),
        Paragraph(record["match"], TITLE),
        Paragraph(f"历史预测 · {record['date']} · 实际结果 {record['result']}", ParagraphStyle("HistoryTime", parent=MUTED_TEXT, alignment=TA_CENTER)), Spacer(1, 5 * mm),
        panel("本场结论", report["conclusion"], True),
        Paragraph("比分路径", SECTION),
        score_paths_table(report),
        Paragraph("胜平负趋势", SECTION),
        facts_table([("主胜", f"{report['trend'][0]}%"), ("平局", f"{report['trend'][1]}%"), ("客胜", f"{report['trend'][2]}%")]), Spacer(1, 3 * mm),
        Paragraph(f"让胜平负趋势 · 主队 {handicap['line']:+d}", SECTION),
        facts_table([("让胜", f"{handicap['trend'][0]}%"), ("让平", f"{handicap['trend'][1]}%"), ("让负", f"{handicap['trend'][2]}%")]), Spacer(1, 3 * mm),
        facts_table([("模型一致度", f"{report['model']['consistency']}%"), ("总进球区间", goal_range_label(report['goals'])), ("实际比分", record["result"])]), Spacer(1, 3 * mm),
        panel("验证标签", tags),
        panel("复盘说明", report["why"]),
    ]
    return story


def write_pdf(item, history=False):
    path = OUTPUT / f"{item['id']}-analysis.pdf"
    title = item["match"] if history else f"{item['home']['name']} vs {item['away']['name']}"
    doc = SimpleDocTemplate(
        str(path), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=18 * mm, bottomMargin=18 * mm, title=f"{title} 分析", author="开赛前"
    )
    story = build_history(item) if history else build_upcoming(item)
    story.append(Paragraph("说明：本报告用于足球情报整理与观赛参考，比赛结果存在不确定性。", MUTED_TEXT))
    doc.build(story, onFirstPage=frame, onLaterPages=frame)
    print(path)


if __name__ == "__main__":
    data = load_site_data()
    selected_ids = set(sys.argv[1:])
    for match in data["matches"]:
        if not selected_ids or match["id"] in selected_ids:
            write_pdf(match)
    for record in data["historyRecords"]:
        if not selected_ids or record["id"] in selected_ids:
            write_pdf(record, history=True)
