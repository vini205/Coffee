const MODAL = document.querySelector('dialog');
const TOGGLE_MODAL = document.querySelectorAll('.toggle-modal');
const ProductCart = document.querySelector(".cadastro__product");
const FORM = document.querySelector("form");
const newProduct = ProductCart.cloneNode(true)

TOGGLE_MODAL.forEach((item) => {
  item.addEventListener('click',()=>{
  MODAL.classList.toggle('pop-out');
  })
});

if(window.innerWidth<535){
  document.querySelector('.cadastro__body').insertBefore(ProductCart, FORM)
}
