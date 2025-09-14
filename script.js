 const cart = []
const cartBox = document.getElementById("yourCart")
const sum = document.getElementById("total")
const allclear = document.getElementById("clearCart")

// cart
const heading = document.createElement("h2")
heading.className = "text-2xl font-semibold pt-[10px] pb-[10px]"
heading.innerText = "Your Cart (0 items)"
cartBox.insertBefore(heading, sum)