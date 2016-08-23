var page = require('webpage').create();

page.viewportSize = { width: 1920, height: 1080 };
page.open('https://codepen.io/tmrDevelops/full/dPdQyR/', function () {
  takeShotTimes(4);
});

function takeShotTimes(num) {
  setTimeout(function () {
    page.render('screenshots/canvas' + num + '.png');
    if (num) {
      takeShotTimes(--num);
    }else{
      phantom.exit();
    }
  }, 3000/(num+1));
}