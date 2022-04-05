// THIS INFORMATION SIMULATES GETTING DATA FROM A DATABASE
var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>ABOUT</h1>`;
var productsContent = `<h1>PRODUCTS</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

// THIS FUNCTION IS BEING CALLED BY app.js which has the page name
export function modelPageName(pgName) {
  console.log(pgName);

  $("#app").html(eval(pgName));
}
