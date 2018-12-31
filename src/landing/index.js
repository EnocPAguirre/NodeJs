var = require('yo-yo');

/* Definir la estructura */

module.exports = function landing(box) {
  return yo`<div class="container">
    <div class="row">
      <div class="col s10 push-s1">
      <div class="row">
        <div class="col m5 hide-on-small-only">
            <img src="iphone3.png" class="iphone">
        </div>
          ${box}
        </div>
      </div>
    </div>
  </div>`;

}
