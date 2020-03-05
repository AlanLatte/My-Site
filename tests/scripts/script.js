var letter = document.querySelector('.letters')

for (var i = 0; i < letter.childElementCount; i++) {
  var span_tag = letter.children[i]
  if (span_tag.localName == "span") {
    span_tag.innerHTML = span_tag.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }
}

anime.timeline({
  loop: false,
  easing: 'easeOutExpo'
})
  .add({
    opacity: [0,1],
    targets: '.letter',
    delay: (el, i) => 70 * (i + 1) + 2200
  })
