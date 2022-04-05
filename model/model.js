// *Think of exporting as making something public
var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>ABOUT</h1>`;
var productsContent = `<h1>PRODUCTS</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

export var myName = "Aiden Kosegi";

export function modelPageName(pgName) {
  console.log(pgName);

  $("#app").html(eval(pgName));
}
