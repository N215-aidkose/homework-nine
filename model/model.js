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
var aboutContent = `      <div class="fullsite">
<div class="about-content">
  <h1>More about us:</h1>
  <div class="chef">
    <div class="chef-pic1"></div>
    <div class="chef-header">Chef Ryan</div>
    <div class="chef-text">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Officia natus ipsam porro nisi eaque! Recusandae consequuntur
        eum saepe neque illum, ab est autem ea, aut sunt quaerat,
        similique soluta. Tempore.
      </p>
    </div>
  </div>
  <div class="chef">
    <div class="chef-pic2"></div>
    <div class="chef-header">Chef Adwa</div>
    <div class="chef-text">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Officia natus ipsam porro nisi eaque! Recusandae consequuntur
        eum saepe neque illum, ab est autem ea, aut sunt quaerat,
        similique soluta. Tempore.
      </p>
    </div>
  </div>
  <div class="chef">
    <div class="chef-pic3"></div>
    <div class="chef-header">Chef Rachel</div>
    <div class="chef-text">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Officia natus ipsam porro nisi eaque! Recusandae consequuntur
        eum saepe neque illum, ab est autem ea, aut sunt quaerat,
        similique soluta. Tempore.
      </p>
    </div>
  </div>
</div>
</div>`;
var menuContent = `<div class="fullsite">
<div class="menu-content">
  <h1>Our menu:</h1>
  <div class="menu-item-one">
    Chicken and Waffles
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
      explicabo a odit nobis, quis amet rerum excepturi ex vel optio
      adipisci quasi quae distinctio neque sint facere commodi hic
      perspiciatis?
    </p>
  </div>
  <div class="menu-item-two">
    Blueberry Pancakes
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
      explicabo a odit nobis, quis amet rerum excepturi ex vel optio
      adipisci quasi quae distinctio neque sint facere commodi hic
      perspiciatis?
    </p>
  </div>
  <div class="menu-item-three">
    Omelette
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
      explicabo a odit nobis, quis amet rerum excepturi ex vel optio
      adipisci quasi quae distinctio neque sint facere commodi hic
      perspiciatis?
    </p>
  </div>
  <div class="blocker"></div>
</div>
</div>`;
var contactContent = ``;

// THIS FUNCTION IS BEING CALLED BY app.js which has the page name
export function modelPageName(pgName) {
  console.log(pgName);

  $("#app").html(eval(pgName));
}
