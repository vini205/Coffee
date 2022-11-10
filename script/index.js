const MODAL = document.querySelector('dialog');
const TOGGLE_MODAL = document.querySelectorAll('.toggle-modal');



TOGGLE_MODAL.forEach((item) => {
  item.addEventListener('click',()=>{
  MODAL.classList.toggle('pop-out');
  })
});
