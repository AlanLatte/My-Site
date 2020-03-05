TweenMax.from(".account", 1.6, {
  delay: 0.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 1.6, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".menu-btn", 1.4, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".contact", 1.4, {
  delay: 1,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from(".metier", 2, {
  delay: 1.6,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from([".year", ".add"], 2, {
  delay: 1.6,
  opacity: 0,
  x: -40,
  ease: Expo.easeInOut
});

TweenMax.from(".corner-top", 1.4, {
  delay: 1.7,
  opacity: 0,
  y: -80,
  ease: Expo.easeInOut
});

TweenMax.from(".corner-bottom", 1.4, {
  delay: 1.7,
  opacity: 0,
  y: 80,
  ease: Expo.easeInOut
});

TweenMax.from(".s-one", 4, {
  delay: 0.5,
  opacity: 0,
  y: -1080,
  ease: Expo.linear
});

TweenMax.from(".s-two", 4, {
  delay: 0.5,
  opacity: 0,
  y: -1080,
  ease: Expo.linear
});

TweenMax.from(".tag", 2, {
  delay: 2.2,
  opacity: 0,
  x: -150,
  // ease: Expo.easeOutExpo
});

TweenMax.staggerFrom(".line", 1.5, {
  delay: 1.9,
  opacity: 0,
  x: -70,
  ease: Expo.linear
});

TweenMax.staggerFrom(".media ul li", 2, {
  delay: 2.8,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
}, 0.2);
