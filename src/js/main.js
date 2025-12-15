import { isLogged, login, logout } from "./auth.js"

async function loadPartial(id, url) {
  const res = await fetch(url)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
}

await loadPartial("header", "/src/components/header.html")
await loadPartial("footer", "/src/components/footer.html")

const loginBtn = document.getElementById("login-btn")

if (loginBtn) {
  renderAuth()

  loginBtn.addEventListener("click", () => {
    if (isLogged()) {
      logout()
    } else {
      login()
    }
    renderAuth()
  })
}

function renderAuth() {
  if (!loginBtn) return

  if (isLogged()) {
    loginBtn.textContent = "Logout"
  } else {
    loginBtn.textContent = "Login"
  }
}
