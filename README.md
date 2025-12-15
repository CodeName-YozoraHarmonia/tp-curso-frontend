# 🦾 Chrome Revolution

Proyecto de **e-commerce frontend simulado**, desarrollado como parte de un curso de Frontend.  
La aplicación simula un flujo completo de tienda online **sin backend real**, utilizando **HTML, CSS (Tailwind) y JavaScript puro**, con persistencia en `localStorage`.

Inspirado en una estética **cyberpunk**.

---

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- Tailwind CSS
- JavaScript (ES Modules)
- LocalStorage (simulación de backend)
- SVG Sprite Icons

---

## 📁 Estructura del proyecto

├── index.html
├── pages/
│ ├── products/
│ │ ├── list.html
│ │ └── detail.html
│ ├── cart.html
│ ├── contact.html
│ └── faq.html
├── src/
│ ├── assets/
│ │ ├── fonts/
│ │ │ ├── FiraMono-Regular.ttf
│ │ │ └── Orbitron-VariableFont_wght.ttf
│ │ ├── icons/
│ │ │ └── sprite-outlined.svg
│ │ └── img/
│ ├── components/
│ │ ├── header.html
│ │ └── footer.html
│ ├── js/
│ │ ├── auth.js
│ │ ├── cart.js
│ │ ├── components.js
│ │ ├── data.js
│ │ ├── index.js
│ │ ├── main.js
│ │ ├── product-detail.js
│ │ ├── products-list.js
│ │ ├── state.js
│ │ └── ui.js
│ └── styles/
│ ├── input.css
│ └── output.css
├── package.json
├── package-lock.json
└── README.md

---

## 🧠 Simulación de Backend

El proyecto **no utiliza base de datos ni servidor**.  
Toda la lógica se simula en el cliente:

### 📦 Productos
- Definidos en `data.js`
- Renderizados dinámicamente
- Acceso por `id` mediante query params

### 🛒 Carrito
- Persistido en `localStorage`
- Un solo producto por ítem (no cantidades)
- Agregar / eliminar productos
- Total calculado dinámicamente
- Accesible solo si el usuario está logueado

### 🔐 Login simulado
- Estado guardado en `localStorage`
- Botón Login / Logout
- El estado se conserva entre páginas
- El carrito se bloquea si no hay sesión

---

## 🧩 Componentes reutilizables

- **Header y Footer** se cargan dinámicamente en todas las páginas
- Conservan estado de login y carrito
- Permiten navegación sin perder información

---

## 🛍 Funcionalidades principales

- Listado de productos
- Detalle de producto
- Agregar al carrito (sin duplicados)
- Eliminar productos del carrito
- Total del carrito
- Login / Logout simulado
- Newsletter (email)
- Formulario de contacto
- Diseño responsive

---

## 🎨 Diseño

- Estética **cyberpunk**
- Colores neon
- Tipografías personalizadas
- SVG icons mediante sprite
- Totalmente responsive

---

## ⚠️ Notas

- Proyecto **100% frontend**
- No hay validaciones de backend
- No hay pagos reales
- Ideal para demostración de lógica, estructura y UI

---

## 👤 Autor

Desarrollado por **Yozora Harmonia**  
🔗 GitHub: https://github.com/CodeName-YozoraHarmonia

---

## 📌 Licencia

Proyecto educativo sin fines comerciales.
