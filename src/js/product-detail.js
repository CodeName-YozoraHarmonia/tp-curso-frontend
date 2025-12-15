import { products } from "./data.js"
import { isLogged } from "./auth.js"
import { load, save, STATE_KEYS } from "./state.js"

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const product = products.find(p => p.id === id)
const container = document.getElementById("product-detail")

if (!product) {
  container.innerHTML = "<p>Producto no encontrado</p>"
} else {
  container.innerHTML = `
  <section class="flex flex-col w-full p-6">

    <!-- Hero del producto -->
    <div class="flex flex-col md:flex-row md:justify-center gap-6">

      <!-- Imagen -->
      <div class="w-full md:w-1/2 flex justify-center max-w-96 mx-auto md:mx-0">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="w-3/4 md:w-full border border-neon-red rounded-md shadow-lg object-cover"
        />
      </div>

      <!-- Info -->
      <div class="w-full md:w-1/2 flex flex-col justify-center gap-4 text-center md:text-left">
        <h1 class="text-2xl md:text-4xl font-bold uppercase font-orbitron">
          ${product.name}
        </h1>

        <p class="text-lg md:text-xl text-neon-red font-semibold">
          $${product.price}
        </p>

        <button
          id="add-cart"
          class="mx-auto md:mx-0 w-full max-w-xs border border-neon-red bg-black px-4 py-2 text-neon-red uppercase font-medium transition hover:bg-neon-red hover:text-black font-orbitron"
        >
          Agregar al carrito
        </button>
      </div>
    </div>

    <!-- Descripción -->
    <div class="flex flex-col w-full max-w-9/10 justify-center mx-auto">
      <div class="mt-8 text-sm md:text-base leading-relaxed">
        <p class="mb-2">
          ${product.description}
        </p>
      </div>

      <!-- Especificaciones -->
      ${
        product.specs
          ? `
        <div class="mt-8">
          <h2 class="text-lg md:text-xl font-bold uppercase mb-3 font-orbitron">
            Especificaciones
          </h2>
          <ul class="list-disc pl-5 space-y-1 text-sm md:text-base">
            ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
          </ul>
        </div>
        `
          : ""
      }
    </div>

  </section>
`


  document.getElementById("add-cart").addEventListener("click", () => {
    if (!isLogged()) {
      alert("Debes iniciar sesión para comprar")
      return
    }

    const cart = load(STATE_KEYS.CART, [])
    cart.push({ ...product, qty: 1 })
    save(STATE_KEYS.CART, cart)
  })
}