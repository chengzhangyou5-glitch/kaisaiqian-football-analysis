(() => {
  const page = document.body.dataset.authPage;
  const form = document.querySelector("#auth-form");
  const message = document.querySelector("#auth-message");
  const submit = form?.querySelector("button[type=submit]");
  const originalLabel = submit?.innerHTML;

  function deviceId() {
    let id = localStorage.getItem("ksq_device_id");
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : `device-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      localStorage.setItem("ksq_device_id", id);
    }
    return id;
  }

  function show(text, type = "error") {
    message.hidden = false;
    message.className = `auth-message is-${type}`;
    message.textContent = text;
  }

  if (page === "login" && new URLSearchParams(location.search).get("created") === "1") {
    show("账号创建成功，请使用邮箱和密码登录。", "success");
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    submit.disabled = true;
    submit.innerHTML = '<i class="ri-loader-4-line auth-spinner"></i><span>处理中</span>';
    message.hidden = true;
    const values = Object.fromEntries(new FormData(form));
    if (page === "login") values.deviceId = deviceId();
    try {
      const response = await fetch(page === "login" ? "/api/auth/login" : "/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "操作失败，请稍后重试");
      if (page === "activate") location.replace("/login.html?created=1");
      else {
        const next = new URLSearchParams(location.search).get("next");
        location.replace(next && next.startsWith("/") && !next.startsWith("//") ? next : "/");
      }
    } catch (error) {
      show(error.message);
      submit.disabled = false;
      submit.innerHTML = originalLabel;
    }
  });
})();
