"use strict";

import "babel-polyfill";
import GACE from "./googleAnalyticsCustomEvents";
import SideScroller from "./components/SideScroller";

Array.prototype.shuffle = function () {
  return this.sort(function () {
    return Math.random() - 0.5;
  });
};

Array.prototype.getRandomValue = function () {
  return this.shuffle()[0];
};

Array.prototype.uniqueValues = function () {
  return [...new Set(this)];
};

// Polyfill for nodelist forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

//Polyfill for closest
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i,
      el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}

document.addEventListener("DOMContentLoaded", function () {
  // set GA-ID
  // const gace = new GACE({
  //   id: "UA-164327129-1",
  // });

  const sidescroller = new SideScroller({
    snapSection: false,
    snapCallback: () => {},
  });

  const controller = new ScrollMagic.Controller({
    vertical: false,
  });

  let duration = window.innerWidth;
  const offset = window.innerWidth / 2;

  // first slide
  // -----------------------
  const splatterTween = TweenMax.from(".imgWrapper__splatter1", 5, {
    opacity: 0,
  });
  const splatterScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 4,
    offset: window.innerWidth * 0.5,
  })
    .setTween(splatterTween)
    .addIndicators({ name: `splatter` })
    .addTo(controller);

  const blockTween = TweenMax.from(".imgWrapper__block1", 5, {
    opacity: 0,
    yPercent: 10,
    scale: 0.8,
  });
  const blockScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 2,
    offset: window.innerWidth * 0.55,
  })
    .setTween(blockTween)
    .addIndicators({ name: `block` })
    .addTo(controller);

  const cityTween = TweenMax.from(".imgWrapper__city1", 5, {
    opacity: 0,
    yPercent: 15,
    scale: 0.8,
  });
  const cityScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 2,
    offset: window.innerWidth * 0.6,
  })
    .setTween(cityTween)
    .addIndicators({ name: `block` })
    .addTo(controller);

  const splatter2Tween = TweenMax.from(".imgWrapper__splatter2", 5, {
    opacity: 0,
  });
  const splatter2Scene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration * 2,
    offset: window.innerWidth * 0.6,
  })
    .setTween(splatter2Tween)
    .addIndicators({ name: `splatter2` })
    .addTo(controller);

  const roadTween = TweenMax.from(".imgWrapper__road", 5, {
    opacity: 0,
  });
  const roadScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 4,
    offset: window.innerWidth * 0.7,
  })
    .setTween(roadTween)
    .addIndicators({ name: `road` })
    .addTo(controller);

  const bus1Tween = TweenMax.from(".imgWrapper__bus1", 5, {
    opacity: 0,
    xPercent: -50,
    yPercent: 20,
    scale: 0.8,
  });
  const bus1Scene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 3,
    offset: window.innerWidth * 0.75,
  })
    .setTween(bus1Tween)
    .addIndicators({ name: `bus` })
    .addTo(controller);

  const patternTween = TweenMax.from(".imgWrapper__squarePattern", 5, {
    opacity: 0,
    rotation: -45,
    scale: 0.5,
  });
  const patternScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 3,
    offset: window.innerWidth * 0.8,
  })
    .setTween(patternTween)
    .addIndicators({ name: `pattern` })
    .addTo(controller);

  const mountainTween = TweenMax.from(".imgWrapper__mountain1", 5, {
    opacity: 0,
    scale: 0.5,
  });
  const mountainScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 3,
    offset: window.innerWidth * 0.9,
  })
    .setTween(mountainTween)
    .addIndicators({ name: `mountain` })
    .addTo(controller);

  const cactusTween = TweenMax.from(".imgWrapper__cactus", 5, {
    opacity: 0,
    scale: 0.2,
  });
  const cactusScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 3,
    offset: window.innerWidth * 0.95,
  })
    .setTween(cactusTween)
    .addIndicators({ name: `cactus` })
    .addTo(controller);

  const earthTween = TweenMax.from(".imgWrapper__earth", 5, {
    opacity: 0,
    xPercent: -25,
  });
  const earthScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 3,
    offset: window.innerWidth * 0.95,
  })
    .setTween(earthTween)
    .addIndicators({ name: `earth` })
    .addTo(controller);

  const signTween = TweenMax.from(".imgWrapper__sign1", 5, {
    opacity: 0,
    scale: 0.2,
  });
  const signScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 3,
    offset: window.innerWidth * 1.3,
  })
    .setTween(signTween)
    .addIndicators({ name: `sign` })
    .addTo(controller);

  const bus2Tween = TweenMax.from(".imgWrapper__bus2", 5, {
    opacity: 0,
    scale: 0.2,
    xPercent: 90,
    yPercent: -100,
  });
  const bus2Scene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 2,
    offset: window.innerWidth * 0.7,
  })
    .setTween(bus2Tween)
    .addIndicators({ name: `sign` })
    .addTo(controller);

  const splatter3Tween = TweenMax.from(".imgWrapper__splatter3", 5, {
    opacity: 0,
    scale: 0.2,
  });
  const splatter3Scene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 2,
    offset: window.innerWidth * 1.1,
  })
    .setTween(splatter3Tween)
    .addIndicators({ name: `splatter 3` })
    .addTo(controller);

  const landscapeTween = TweenMax.from(".imgWrapper__landscape", 5, {
    opacity: 0,
    xPercent: 50,
  });
  const landscapeScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 2,
    offset: window.innerWidth * 1.3,
  })
    .setTween(landscapeTween)
    .addIndicators({ name: `landscape` })
    .addTo(controller);

  const ferrisWheelTween = TweenMax.from(".imgWrapper__ferrisWheel", 5, {
    opacity: 0,
    xPercent: 50,
  });
  const ferrisWheelScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration / 2,
    offset: window.innerWidth * 1.5,
  })
    .setTween(ferrisWheelTween)
    .addIndicators({ name: `ferrisWheel` })
    .addTo(controller);

  const ferrisWheelShineTween = TweenMax.from(
    ".imgWrapper__ferrisWheelShine",
    5,
    {
      opacity: 0,
      scale: 0,
      xPercent: 20,
      yPercent: 15,
      rotation: 360,
    }
  );
  const ferrisWheelShineScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration * 1.2,
    offset: window.innerWidth * 1.5,
  })
    .setTween(ferrisWheelShineTween)
    .addIndicators({ name: `ferrisWheelShine` })
    .addTo(controller);

  const tentsTween = TweenMax.from(".imgWrapper__tents", 5, {
    opacity: 0,
    scale: 0,
    xPercent: -10,
    yPercent: 15,
  });
  const tentsScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration,
    offset: window.innerWidth * 1.6,
  })
    .setTween(tentsTween)
    .addIndicators({ name: `tents` })
    .addTo(controller);

  const cloudTween = TweenMax.from(".imgWrapper__cloud", 5, {
    opacity: 0,
    xPercent: -30,
  });
  const cloudScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration,
    offset: window.innerWidth * 1.7,
  })
    .setTween(cloudTween)
    .addIndicators({ name: `cloud` })
    .addTo(controller);

  const concertTween = TweenMax.from(".imgWrapper__concert", 5, {
    opacity: 0,
    scale: 0.8,
    yPercent: 10,
  });
  const concertScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: duration,
    offset: window.innerWidth * 1.7,
  })
    .setTween(concertTween)
    .addIndicators({ name: `concert` })
    .addTo(controller);

  const stickyScene = new ScrollMagic.Scene({
    triggerElement: "#pin1",
    duration: "220%",
    offset: window.innerWidth / 2,
  })
    .setPin("#pin1")
    .addIndicators({ name: `1 sticky` })
    .addTo(controller);
  // -----------------------

  const stickyScene2 = new ScrollMagic.Scene({
    triggerElement: "#pin2",
    duration: duration,
    offset: window.innerWidth / 2,
  })
    .setPin("#pin2")
    // .setTween(tween)
    .addIndicators({ name: `2 sticky` })
    .addTo(controller);

  [...document.querySelectorAll(".section2 p")].forEach((el, key) => {
    const elTween = TweenMax.from(el, 5, {
      opacity: 0,
      scale: 0.8,
      yPercent: 10,
    });
    const elScene = new ScrollMagic.Scene({
      triggerElement: "#pin2",
      duration: duration / 3,
      offset: (duration / 3) * (key + 1),
    })
      .setTween(elTween)
      .addIndicators({ name: `el ${key + 1}` })
      .addTo(controller);
  });

  const parallaxImageTween = TweenMax.to(".parallaxImage img", 5, {
    xPercent: -50,
  });
  const parallaxImageScene = new ScrollMagic.Scene({
    triggerElement: "#pin2",
    duration: duration,
    offset: window.innerWidth / 2,
  })
    .setTween(parallaxImageTween)
    .addIndicators({ name: `parallaxImage` })
    .addTo(controller);
  // -----------------------

  duration = window.innerWidth * 2;

  const stickyScene3 = new ScrollMagic.Scene({
    triggerElement: "#pin3",
    duration: duration,
    offset: window.innerWidth / 2,
  })
    .setPin("#pin3")
    // .setTween(tween)
    .addIndicators({ name: `3 sticky` })
    .addTo(controller);

  [...document.querySelectorAll(".section3 p")].forEach((el, key) => {
    // const elTween = TweenMax.from(el, 5, {
    //   opacity: 0,
    //   scale: 0.8,
    //   yPercent: 10,
    // });
    const elScene = new ScrollMagic.Scene({
      triggerElement: "#pin3",
      duration: duration / 5,
      offset: window.innerWidth / 2 + (duration / 5) * key,
    })
      .setClassToggle(el, "active")
      // .setTween(elTween)
      .addIndicators({ name: `el ${key + 1}` })
      .addTo(controller);
  });
});
