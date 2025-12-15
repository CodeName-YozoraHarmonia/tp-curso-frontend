import { products } from "./data.js"
import { isLogged } from "./auth.js"
import { load, save, STATE_KEYS } from "./state.js"

export function renderProducts(container) {
  container.innerHTML = ""

  products.forEach(product => {
    const card = document.createElement("div")
    card.className =
      "w-64 border border-neon-red p-4 flex flex-col gap-2"

    card.innerHTML = `
      <img src="${product.image}" class="h-40 object-cover" />
      <h3 class="font-orbitron uppercase">${product.name}</h3>
      <p class="text-sm">${product.description}</p>
      <p class="text-neon-red font-bold">$${product.price}</p>
      <button
        class="add-cart border border-neon-red px-2 py-1 text-neon-red hover:bg-neon-red hover:text-black"
        data-id="${product.id}"
      >
        Agregar
      </button>
    `

    container.appendChild(card)
  })

  container.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!isLogged()) {
        alert("Debes iniciar sesión para agregar productos")
        return
      }

      addToCart(Number(btn.dataset.id))
    })
  })
}

function addToCart(id) {
  const cart = load(STATE_KEYS.CART, [])
  const product = products.find(p => p.id === id)

  const item = cart.find(i => i.id === id)

  if (item) {
    item.qty++
  } else {
    cart.push({ ...product, qty: 1 })
  }

  save(STATE_KEYS.CART, cart)
}
