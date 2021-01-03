function Items(name, qty, price, arr) {
  this.name = name;
  this.qty = qty;
  this.price = price;
  this.arr = arr;
}

var potatoe = new Items("Potatoe", 1, 2.99, []);
var cabbage = new Items("Cabbage", 1, 1.19, []);
var parsnip = new Items("Parsnip", 1, 0.89, []);
var tomatoe = new Items("Tomatoe", 1, 1.49, []);
var okra = new Items("Okra", 1, 2.21, []);
var cucumber = new Items("Cucumber", 1, 0.99, []);
var onion = new Items("Onion", 1, 1.59, []);
var carrot = new Items("Carrot", 1, 1.09, []);

var totalPriceCheck = [];
var totalQtyCheck = [];
var qtyIncrement = [];

//  Bill total function
function billCalc() {
  var total = totalPriceCheck.reduce((a, b) => a + b, 0);
  return (document.getElementById("totalAmount").innerHTML =
    "£" + total.toFixed(2));
}
// Bill quantity total function
function qtyCalc() {
  var total = totalQtyCheck.reduce((a, b) => a + b, 0);
  return (document.getElementById("totalQty").innerHTML = total);
}
function addItems(itemName, qty, price, arr) {
  // ADD ITEMS
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
  qtyCalc();

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
  billCalc();
}
function multiplier(objName, className) {
  qtyIncrement = objName.arr.push(1);
  totalQtyCheck.push(1);
  totalPriceCheck.push(objName.price);
  var getQtyClass = document.getElementById("qty");
  getQtyClass.querySelector(className).innerHTML = qtyIncrement;
  var getPriceClass = document.getElementById("price");
  var multiplierPrice = qtyIncrement * objName.price;
  getPriceClass.querySelector(className).innerHTML =
    "£" + multiplierPrice.toFixed(2);
  qtyCalc();
  billCalc();
}

function potatoes() {
  if (potatoe.arr.length > 0) {
    multiplier(potatoe, ".Potatoe");
  } else {
    addItems(potatoe.name, potatoe.qty, potatoe.price, potatoe.arr);
  }
}

function cabbages() {
  if (cabbage.arr.length > 0) {
    multiplier(cabbage, ".Cabbage");
  } else {
    addItems(cabbage.name, cabbage.qty, cabbage.price, cabbage.arr);
  }
}

function parsnips() {
  if (parsnip.arr.length > 0) {
    multiplier(parsnip, ".Parsnip");
  } else {
    addItems(parsnip.name, parsnip.qty, parsnip.price, parsnip.arr);
  }
}

function tomatoes() {
  if (tomatoe.arr.length > 0) {
    multiplier(tomatoe, ".Tomatoe");
  } else {
    addItems(tomatoe.name, tomatoe.qty, tomatoe.price, tomatoe.arr);
  }
}

function okras() {
  if (okra.arr.length > 0) {
    multiplier(okra, ".Okra");
  } else {
    addItems(okra.name, okra.qty, okra.price, okra.arr);
  }
}

function cucumbers() {
  if (cucumber.arr.length > 0) {
    multiplier(cucumber, ".Cucumber");
  } else {
    addItems(cucumber.name, cucumber.qty, cucumber.price, cucumber.arr);
  }
}

function onions() {
  if (onion.arr.length > 0) {
    multiplier(onion, ".Onion");
  } else {
    addItems(onion.name, onion.qty, onion.price, onion.arr);
  }
}

function carrots() {
  if (carrot.arr.length > 0) {
    multiplier(carrot, ".Carrot");
  } else {
    addItems(carrot.name, carrot.qty, carrot.price, carrot.arr);
  }
}
