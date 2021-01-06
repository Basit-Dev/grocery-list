// Constructor object
function Items(name, qty, price, arr) {
  this.name = name;
  this.qty = qty;
  this.price = price;
  this.arr = arr;
}

// Object created
var potatoe = new Items("Potatoe", 1, 2.99, []);
var cabbage = new Items("Cabbage", 1, 1.19, []);
var parsnip = new Items("Parsnip", 1, 0.89, []);
var tomatoe = new Items("Tomatoe", 1, 1.49, []);
var okra = new Items("Okra", 1, 2.21, []);
var cucumber = new Items("Cucumber", 1, 0.99, []);
var onion = new Items("Onion", 1, 1.59, []);
var carrot = new Items("Carrot", 1, 1.09, []);

// Global arrays to store total values
var totalPriceCheck = [];
var totalQtyCheck = [];

//  Bill total function
function billCalcTotal() {
  var billTotal = totalPriceCheck.reduce((a, b) => a + b, 0);
  return (document.getElementById("totalAmount").innerHTML =
    "£" + billTotal.toFixed(2));
}
// Bill quantity total function
function qtyCalcTotal() {
  var qtyTotal = totalQtyCheck.reduce((a, b) => a + b, 0);
  return (document.getElementById("totalQty").innerHTML = qtyTotal);
}
// Add item functions
function addItems(itemName, qty, price, arr) {
  // ADD ITEM NAME
  var node = document.createElement("TR");
  var textnode = document.createTextNode(itemName);
  node.appendChild(textnode);
  document
    .getElementById("itemName")
    .appendChild(node)
    .setAttribute("class", itemName);

  // ADD QTY
  var node1 = document.createElement("TR");
  var textnode1 = document.createTextNode(qty);
  qtyConvert = Number(qty);
  node1.appendChild(textnode1);
  document
    .getElementById("qty")
    .appendChild(node1)
    .setAttribute("class", itemName);
  totalQtyCheck.push(qtyConvert);
  arr.push(qtyConvert);
  // Update qty total
  qtyCalcTotal();

  // ADD PRICE
  var node2 = document.createElement("TR");
  var textnode2 = document.createTextNode("£" + price);
  var numConvert = Number(price);
  node2.appendChild(textnode2);
  document
    .getElementById("price")
    .appendChild(node2)
    .setAttribute("class", itemName);
  totalPriceCheck.push(numConvert);
  // Update bill total
  billCalcTotal();
}
// Push values into gobal arrays and object item name array
function pushToArray(itemName) {
  itemName.arr.push(1);
  totalQtyCheck.push(1);
  totalPriceCheck.push(itemName.price);
}
// Multiplier function to add item qty and price
function multiplier(itemName, className) {
  // Push item to array function call
  pushToArray(itemName);
  // Update indivisual item qty and price
  document.getElementById("qty").querySelector(className).innerHTML = itemName.arr.length;
  var multiplierPrice = itemName.arr.length * itemName.price;
  document.getElementById("price").querySelector(className).innerHTML =
  "£" + multiplierPrice.toFixed(2);
  // Update qty and price totals
  qtyCalcTotal();
  billCalcTotal();
}
// Condition function to check if there are any items in the list
function checkItemName(itemName, className) {
  if (itemName.arr.length > 0) {
    multiplier(itemName, className);
  } else {
    addItems(itemName.name, itemName.qty, itemName.price, itemName.arr);
  }
}

// Function calls for items on click
function potatoes() {
  checkItemName(potatoe, ".Potatoe");
}

function cabbages() {
  checkItemName(cabbage, ".Cabbage");
}

function parsnips() {
  checkItemName(parsnip, ".Parsnip");
}

function tomatoes() {
  checkItemName(tomatoe, ".Tomatoe");
}

function okras() {
  checkItemName(okra, ".Okra");
}

function cucumbers() {
  checkItemName(cucumber, ".Cucumber");
}

function onions() {
  checkItemName(onion, ".Onion");
}

function carrots() {
  checkItemName(carrot, ".Carrot");
}
