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

// clear
allclear.addEventListener("click", function () {
  cart.length = 0
  const items = cartBox.querySelectorAll(".flex.justify-between")
  items.forEach(item => item.remove())
  updateTotal()
})

document.getElementById("card1").addEventListener("click", () => addToCart("mango-tree", "mango-tree-price"))
document.getElementById("card2").addEventListener("click", () => addToCart("jack-tree", "jack-tree-price"))
document.getElementById("card3").addEventListener("click", () => addToCart("banana-tree", "banana-tree-price"))
document.getElementById("card4").addEventListener("click", () => addToCart("Bamboo-tree", "Bamboo-tree-price"))
document.getElementById("card5").addEventListener("click", () => addToCart("Teak-Tree", "Teak-Tree-price"))
document.getElementById("card6").addEventListener("click", () => addToCart("Kanthalichapa", "Kanthalichapa-price"))
document.getElementById("card7").addEventListener("click", () => addToCart("Baby-Coconut-Palm-tree", "Baby-Coconut-Palm-tree-price"))
document.getElementById("card8").addEventListener("click", () => addToCart("rose", "rose-price"))
document.getElementById("card9").addEventListener("click", () => addToCart("Marigold", "Marigold-price"))
document.getElementById("card10").addEventListener("click", () => addToCart("Madhabilata", "Madhabilata-price"))
document.getElementById("card11").addEventListener("click", () => addToCart("Waterlettuce", "Waterlettuce-price"))
document.getElementById("card12").addEventListener("click", () => addToCart("Tuberose", "Tuberose-price"))