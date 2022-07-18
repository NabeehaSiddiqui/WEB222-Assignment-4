/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Nabeeha Siddiqui
 *      Student ID: 129947214
 *      Date:       17/07/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
window.onload = function () {
  var menuElement = document.getElementById("menu");
  var categories = window.categories;
  for (let i = 0; i < categories.length; i++) {
    var menuButton = document.createElement("button");
    menuButton.setAttribute("id", categories[i].id);
    menuButton.setAttribute("class", "btn");
    menuButton.type = "button";
    menuButton.innerHTML = categories[i].name;
    menuElement.appendChild(menuButton);
  }
  var defaultTable = window.categories[0];
  display(defaultTable);
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((node, index) => {
    node.addEventListener("click", function () {
      display(categories[index]);
    });
  });
};
function display(catObj) {
  var tableHeading = document.getElementById("selected-category");
  var heading = document.createTextNode("Genre: " + catObj.name);
  tableHeading.setAttribute('class','heading');
  tableHeading.innerHTML = "";
  tableHeading.appendChild(heading);
  var tableBody = document.getElementById("category-products");
  var rows = document.getElementById("category-products").rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i].innerHTML = " ";
  }
  var arrProducts = window.products;
  var filteredArray = [];
  filteredArray = arrProducts.filter((products) => {
    return products.categories.includes(catObj.id) && products.discontinued === false;
  });
  filteredArray.forEach(function displayArr(arrPassed) {
    var tableRow = document.createElement("tr");
    var albumTitleData = document.createElement("td");
    var albumDescdata = document.createElement("td");
    var albumPriceData = document.createElement("td");

    var albumTitle = document.createTextNode(arrPassed.title);
    var albumDescription = document.createTextNode(arrPassed.description);
    var albumPrice = document.createTextNode(
      new Intl.NumberFormat("je-JY", { style: "currency", currency: "CAD" }).format(arrPassed.price)
    );

    albumTitleData.appendChild(albumTitle);
    albumDescdata.appendChild(albumDescription);
    albumPriceData.appendChild(albumPrice);
    tableRow.append(albumTitleData, albumDescdata, albumPriceData);
    tableBody.appendChild(tableRow);
  });
}
// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
