const tl = new TimelineMax();

tl.add("orange");
tl.to(
  "#eyeLeft , #eyeRight",
  0.5,
  {
    scaleY: 0.1,
    transformOrigin: "50% 70%",
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    ease: Sine.easeOut,
  },
  "orange"
);
tl.to("#Leaf", 2, {
  repeat: -1,
  yoyo: true,
  skewX: 33,
  transformOrigin: "bottom",
});
