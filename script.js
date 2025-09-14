 const cart = []
const cartBox = document.getElementById("yourCart")
const sum = document.getElementById("total")
const allclear = document.getElementById("clearCart")

// cart
const heading = document.createElement("h2")
heading.className = "text-2xl font-semibold pt-[10px] pb-[10px]"
heading.innerText = "Your Cart (0 items)"
cartBox.insertBefore(heading, sum)

// total + count
function updateTotal() {
  let total = 0
  cart.forEach(item => {
    total += parseInt(item.price.replace("৳", ""))
  })
  sum.innerText = "Total: ৳" + total
  heading.innerText = `Your Cart (${cart.length} items)`
}

// Add to cart
function addToCart(nameId, priceId) {
  const name = document.getElementById(nameId).innerText
  const price = document.getElementById(priceId).innerText

  cart.push({ name, price })

  const item = document.createElement("div")
  item.className = "flex justify-between items-center mt-2 bg-[#F9FAFB] p-2 rounded-md"

  const itemText = document.createElement("span")
  itemText.innerText = name + " - " + price

  const cancelBtn = document.createElement("button")
  cancelBtn.innerText = "❌"
  cancelBtn.style.cursor = "pointer"
  cancelBtn.addEventListener("click", function () {
    cartBox.removeChild(item)
    const index = cart.findIndex(i => i.name === name && i.price === price)
    if (index > -1) cart.splice(index, 1)
    updateTotal()
  })

  item.appendChild(itemText)
  item.appendChild(cancelBtn)
  cartBox.insertBefore(item, sum)
  updateTotal()
}