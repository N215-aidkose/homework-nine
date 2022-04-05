import * as MODEL from "../model/model.js";
// Now we have app.js has access to model.js //

var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>ABOUT</h1>`;
var productsContent = `<h1>PRODUCTS</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

function route() {
  let hashTag = window.location.hash;
  let pageName = hashTag.replace("#", "");
  console.log(pageName);
  let pageContent = pageName + "Content";

  if (pageName == "") {
    pageContent = "homeContent";
  }

  $("#app").html(eval(pageContent));
}

function initListeners() {
  //.on is a function, and it works like this. Whenever the hashtag changes, we execute the route function//
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  console.log(MODEL.myName);
  MODEL.modelPageName();
  initListeners();
});
