// THIS INFORMATION SIMULATES GETTING DATA FROM A DATABASE
var homeContent = `      <div class="fullsite">
<div class="home-content">
  <div class="hero">
    <h1>The Blackbriar Breakfast House</h1>
    <p>Where great taste dwells...</p>
  </div>
  <div class="mission">
    <h1>High class. High Quality.</h1>
    <p>
      Here at the Blackbriar Breakfast House, we offer a dining
      experience so enjoyable, you will be coming back for seconds!
    </p>
  </div>
</div>
</div>`;
var aboutContent = ``;
var menuContent = ``;
var contactContent = ``;

// THIS FUNCTION IS BEING CALLED BY app.js which has the page name
export function modelPageName(pgName) {
  console.log(pgName);

  $("#app").html(eval(pgName));
}
