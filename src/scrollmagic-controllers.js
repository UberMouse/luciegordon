 /* eslint-disable no-undef */
import Bean from 'bean';

export default () => {
  const controller = new ScrollMagic.Controller();

  controller.scrollTo(function (newpos) {
    TweenLite.to(window, 0.7, {ease: GreenSockGlobals.Quad.easeInOut, scrollTo: {y: newpos}});
  });

  Bean.on(document, 'click', 'a[href^="#"]', function (e) {
    // Go to top is an image and Bean gives me the img element instead of a when clicked
    const target = e.target.tagName === 'A' ? e.target : e.target.parentElement;
    const id = target.getAttribute("href");

    if (document.querySelectorAll(id) !== null) {
      e.preventDefault();

      controller.scrollTo(id);
    }
  });
}
