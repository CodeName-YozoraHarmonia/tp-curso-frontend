import { products } from "./data.js"

const shuffle = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item)
}

const container = document.getElementById("products")

if (container) {
  const featured = shuffle(products).slice(0, 3)

  container.innerHTML = featured
    .map(
      (product) => `
        <a
          href="/pages/products/detail.html?id=${product.id}"
          class="relative aspect-square w-full max-w-72 overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <img
            src="${product.image}"
            alt="${product.name}"
            class="absolute inset-0 size-full object-cover"
          />
          <div class="absolute inset-0 flex flex-col items-start justify-end p-3 bg-black/40">
            <p class="text-lg font-bold uppercase md:text-xl">
              ${product.name}
            </p>
            <p class="text-sm md:text-base">$${product.price}</p>
          </div>
        </a>
      `
    )
    .join("")
}
