// init controller
var controller = new ScrollMagic.Controller();

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.7, {ease: GreenSockGlobals.Expo.easeInOut, scrollTo: {y: newpos}});
});

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
  var id = $(this).attr("href");
  if ($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);
  }
});
