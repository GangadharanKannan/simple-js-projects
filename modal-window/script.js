'use strict';

const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

function openModal(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function remModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
for(let i = 0; i < showModal.length;i++) {
    showModal[i].addEventListener("click", openModal)
}
closeModal.addEventListener("click", remModal);
overlay.addEventListener("click", remModal);

document.addEventListener("keydown" , function(e){
    if(e.key == "Escape" && !modal.classList.contains("hidden")){
        remModal();
    }
})