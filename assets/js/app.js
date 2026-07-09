import { upcomingPage, detailPage, historyDetailPage, historyPage, searchPage, noticeModal } from "./components.js?v=20260709-quarterfinals";

const app = document.querySelector("#app");
const modalLayer = document.querySelector("#modal-layer");
const modalContent = document.querySelector("#modal-content");
const toast = document.querySelector("#toast");
let searchQuery = "";
let toastTimer;
let isComposing = false;
let skipNextInput = false;
const officialNoticeKey = "kaisaiqian-official-notice-seen-v2";

function route() {
  const hash = location.hash.replace(/^#/, "") || "upcoming";
  const [page, id] = hash.split("/");
  return { page, id };
}

function setActiveNav(page) {
  const active = page === "detail" ? "upcoming" : page === "history-detail" ? "history" : page;
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("is-active", link.dataset.nav === active));
}

function render({ preserveFocus = false } = {}) {
  const current = route();
  if (current.page === "detail") app.innerHTML = detailPage(current.id);
  else if (current.page === "history-detail") app.innerHTML = historyDetailPage(current.id);
  else if (current.page === "history") app.innerHTML = historyPage();
  else if (current.page === "search") app.innerHTML = searchPage(searchQuery);
  else app.innerHTML = upcomingPage();
  setActiveNav(current.page);
  document.body.dataset.page = current.page;
  if (!preserveFocus) {
    window.scrollTo({ top: 0, behavior: "instant" });
    app.focus({ preventScroll: true });
  }
}

function openMatch(id) {
  location.hash = `detail/${id}`;
}

function openHistory(id) {
  location.hash = `history-detail/${id}`;
}

function showModal(content) {
  modalContent.innerHTML = content;
  modalLayer.hidden = false;
  document.body.classList.add("modal-open");
  modalLayer.querySelector(".modal-close").focus();
}

function closeModal() {
  if (modalContent.querySelector("[data-official-notice]")) {
    try { sessionStorage.setItem(officialNoticeKey, "1"); } catch {}
  }
  modalLayer.hidden = true;
  document.body.classList.remove("modal-open");
}

function showOfficialNoticeOnce() {
  try {
    if (sessionStorage.getItem(officialNoticeKey)) return;
  } catch {}
  window.setTimeout(() => {
    if (!modalLayer.hidden) return;
    showModal(noticeModal());
  }, 420);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.addEventListener("click", (event) => {
  const matchTarget = event.target.closest("[data-open-match]");
  if (matchTarget) { event.stopPropagation(); openMatch(matchTarget.dataset.openMatch); return; }
  const historyTarget = event.target.closest("[data-open-history]");
  if (historyTarget) { event.stopPropagation(); openHistory(historyTarget.dataset.openHistory); return; }
  const historyCard = event.target.closest(".history-card");
  if (historyCard) {
    const detail = historyCard.querySelector(".history-expand");
    detail.hidden = !detail.hidden;
    historyCard.classList.toggle("is-open", !detail.hidden);
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "back") location.hash = "upcoming";
  if (action === "back-history") location.hash = "history";
  if (action === "notice") showModal(noticeModal());
  if (action === "print-pdf") window.print();
  if (action === "close-modal") closeModal();
  if (action === "clear-search") { searchQuery = ""; render(); document.querySelector("#history-search")?.focus(); }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modalLayer.hidden) closeModal();
    else if (route().page === "search" && searchQuery) { searchQuery = ""; render(); }
  }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-match]")) openMatch(event.target.dataset.openMatch);
});

document.addEventListener("input", (event) => {
  if (event.target.id !== "history-search") return;
  if (skipNextInput) { skipNextInput = false; return; }
  if (isComposing || event.isComposing) return;
  searchQuery = event.target.value;
  const caret = event.target.selectionStart;
  render({ preserveFocus: true });
  const input = document.querySelector("#history-search");
  input.focus(); input.setSelectionRange(caret, caret);
});

document.addEventListener("compositionstart", (event) => {
  if (event.target.id === "history-search") isComposing = true;
});

document.addEventListener("compositionend", (event) => {
  if (event.target.id !== "history-search") return;
  isComposing = false;
  skipNextInput = true;
  setTimeout(() => { skipNextInput = false; }, 0);
  searchQuery = event.target.value;
  render({ preserveFocus: true });
  const input = document.querySelector("#history-search");
  input?.focus();
  input?.setSelectionRange(searchQuery.length, searchQuery.length);
});

window.addEventListener("hashchange", () => render());
render();
showOfficialNoticeOnce();
