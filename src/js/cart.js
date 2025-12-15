import { isLogged } from "./auth.js"
import { load, save, STATE_KEYS } from "./state.js"

if (!isLogged()) {
  alert("Debes iniciar sesión para ver el carrito")
  window.location.href = "/index.html"
}

const container = document.getElementById("cart-container")
const totalEl = document.getElementById("cart-total")
const summary = document.getElementById("cart-summary")

let cart = load(STATE_KEYS.CART, [])

function renderCart() {
  container.innerHTML = ""

  if (cart.length === 0) {
    container.innerHTML = `
      <p class="text-center uppercase text-gray-400">
        El carrito está vacío
      </p>
    `
    summary.classList.add("hidden")
    return
  }

  summary.classList.remove("hidden")

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="flex flex-col md:flex-row items-center gap-4 border border-neon-red p-4">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="w-24 h-24 object-cover border border-neon-red"
        />

        <div class="flex-1 text-center md:text-left grow">
          <h2 class="uppercase font-orbitron">${item.name}</h2>
          <p class="text-2xl">$${item.price}</p>
        </div>

        <button
          class="remove-btn uppercase text-neon-red px-4"
          data-index="${index}"
        >
          Eliminar
        </button>
      </div>
    `
  })

  totalEl.textContent = `$${cart.reduce(
    (acc, item) => acc + item.price,
    0
  )}`
}

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    cart.splice(e.target.dataset.index, 1)
    save(STATE_KEYS.CART, cart)
    renderCart()
  }
})

renderCart()
