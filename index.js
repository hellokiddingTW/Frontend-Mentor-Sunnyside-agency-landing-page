const moblieMenuBtn = document.querySelector(".moblieMenu__btn")
const mobileMenuList = document.querySelector(".mobileMenu__list")
const shape = document.querySelector(".shape")

moblieMenuBtn.addEventListener("click", toggleList)


function toggleList(){
    console.log('123')
    mobileMenuList.classList.toggle('open')
    shape.classList.toggle('open')
}