import { products } from "./data.js"

const container = document.getElementById("products-list")

products.forEach(product => {
  const card = document.createElement("a")
  card.href = `/pages/products/detail.html?id=${product.id}`
  card.className =
    "relative aspect-square w-full overflow-hidden transform transition duration-300 hover:scale-105"

  card.innerHTML = `
    <img
      src="${product.image}"
      alt="${product.name}"
      class="absolute inset-0 size-full object-cover"
    />
    <div
      class="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-3"
    >
      <p class="text-lg font-bold uppercase md:text-xl">
        ${product.name}
      </p>
      <p class="text-sm md:text-base">$${product.price}</p>
    </div>
  `

  container.appendChild(card)
})
