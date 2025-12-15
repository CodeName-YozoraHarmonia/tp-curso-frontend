const loadComponent = async (selector, url) => {
  const container = document.querySelector(selector)
  if (!container) return

  const res = await fetch(url)
  container.innerHTML = await res.text()
}

export const loadLayout = async () => {
  await loadComponent("#header", "/src/components/header.html")
  await loadComponent("#footer", "/src/components/footer.html")
}