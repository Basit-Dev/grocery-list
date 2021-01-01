function Items(name, qty, price) {
  this.name = name;
  this.qty = qty;
  this.price = price;
}

var potatoe = new Items('Potatoe', 1, 3.99);
var cabbage = new Items('Cabbage', 1, 1.19);
var parsnip = new Items('Parsnip', 1, 0.89);
var tomatoe = new Items('Tomatoe', 1, 1.49);
var okra = new Items('Okra', 1, "2.20");

var x = [];
var y = [];


function billCalc() {
  return x.reduce((a, b) => a + b, 0);
}

function qtyCalc() {
  return y.reduce((a, b) => a + b, 0);
}

function addItems(itemName, qty, price) {

if(itemName) {

var qtyConvert = Number(qty) * 1;
  //node1.appendChild(textnode1);
  document.getElementById("test2").innerHTML = qty*1;
  y.push(qtyConvert);


document.getElementById("test2").innerHTML = "1";
}

   // if itemname is true then jydt change inner html
  var node = document.createElement("TR");
  var textnode = document.createTextNode(itemName);
  node.appendChild(textnode);
  document.getElementById("test").appendChild(node);

  var node1 = document.createElement("TR");
  var textnode1 = document.createTextNode(qty);
  qtyConvert = Number(qty);
  node1.appendChild(textnode1);
  document.getElementById("test2").appendChild(node1);
  y.push(qtyConvert);

  var node2 = document.createElement("TR");
  var textnode2 = document.createTextNode("£" + price);
  var numConvert = Number(price);
  node2.appendChild(textnode2);
  document.getElementById("test3").appendChild(node2);
  x.push(numConvert);
  totalAmounts();

   //return itemName, qty, price;
}

function totalAmounts() {
  document.getElementById("totalAmount").innerHTML = "£" + billCalc().toFixed(2);
  document.getElementById("totalQty").innerHTML = qtyCalc();
}

function potatoes() {
addItems(potatoe.name, potatoe.qty, potatoe.price)
}

function cabbages() {
addItems(cabbage.name, cabbage.qty, cabbage.price)
}

function parsnips() {
addItems(parsnip.name, parsnip.qty, parsnip.price)
}

function tomatoes() {
addItems(tomatoe.name, tomatoe.qty, tomatoe.price)
}

function okras() {
addItems(okra.name, okra.qty, okra.price)
}



/*function potatoes() {
  var node = document.createElement("TR");
  var textnode = document.createTextNode(potatoe.name);
  node.appendChild(textnode);
  document.getElementById("test").appendChild(node);

  var node1 = document.createElement("TR");
  var textnode1 = document.createTextNode(potatoe.qty);
  var qtyConvert = Number(potatoe.qty);
  node1.appendChild(textnode1);
  document.getElementById("test2").appendChild(node1);
  y.push(qtyConvert);

  var node2 = document.createElement("TR");
  var textnode2 = document.createTextNode("£" + potatoe.price);
  var numConvert = Number(potatoe.price);
  node2.appendChild(textnode2);
  document.getElementById("test3").appendChild(node2);
  x.push(numConvert);
  totalAmounts(); 
}

function cabbages() {
  var node = document.createElement("TR");
  var textnode = document.createTextNode(cabbage.name);
  node.appendChild(textnode);
  document.getElementById("test").appendChild(node);

  var node1 = document.createElement("TR");
  var textnode1 = document.createTextNode(cabbage.qty);
  var qtyConvert = Number(cabbage.qty);
  node1.appendChild(textnode1);
  document.getElementById("test2").appendChild(node1);
  y.push(qtyConvert);

  var node2 = document.createElement("TR");
  var textnode2 = document.createTextNode("£" + cabbage.price);
  var numConvert = Number(cabbage.price);
  node2.appendChild(textnode2);
  document.getElementById("test3").appendChild(node2);
  x.push(numConvert)
  totalAmounts(); 
}*/


