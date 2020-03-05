
function img_hover() {
      const cursor = document.querySelector('.cursor');
      anime({
        targets : ".cursor",
        opacity: [0,1],
        delay : 1,
      })
      // cursor.style.opacity = "1";
      const editCursor = e => {
        console.log(e);
        const { layerX: x, layerY: y } = e;
        cursor.style.left = (x - 10) + 'px';
        cursor.style.top = (y - 10) + 'px';
      };
      window.addEventListener('mousemove', editCursor);
};

(function(){
  const cursor = document.querySelector('.cursor');
  const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = (x - 10) + 'px';
    cursor.style.top = (y - 10) + 'px';
  };
  window.addEventListener('mousemove', editCursor);
})();

function img_no_hover(){
  const cursor = document.querySelector('.cursor');
  anime({
    targets : ".cursor",
    opacity: [1,0],
    delay : 1,
  })

  const editCursor = e => {
    const { layerX: x, layerY: y } = e;
    cursor.style.left = 0 + 'px';
    cursor.style.top = 0 + 'px';
  };
  window.addEventListener('mousemove', editCursor);
}
