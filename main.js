const list = document.querySelector('.list');
const hamburger = document.querySelector('.hamburger');
const hamToggle = document.querySelector('.ham-toggle');
const arrow = document.querySelectorAll('.toggle-img');
const subMenu = document.querySelectorAll('.subMenu');


function openHamburger() {
    hamburger.addEventListener('click', () => {
        list.classList.toggle('active');
        hamToggle.src = 'images/icon-close.svg';
    
        if(list.classList.contains('active')){
            list.style.visibility = 'visible';
        } else{
            list.style.visibility = 'hidden';
            hamToggle.src = 'images/icon-hamburger.svg';
        }
    })
}

openHamburger();


function openMenu(){
    let opened;
    subMenu.forEach(subMenuItem => {
        subMenuItem.addEventListener("click", (e) => {
            e.preventDefault()
            const targetItem = e.target;
            if (!targetItem.closest(".subMenu")) return
            if (opened && opened != targetItem) {
                opened.classList.remove("active")
            }
            targetItem.classList.toggle("active")
            opened = targetItem
        })
    })
}

openMenu();



// function openMenu() {
//     subMenu.forEach(function(subMenuItem) {
//         subMenuItem.addEventListener('click', function(e) {
//             e.preventDefault();
    
//             subMenu.forEach(function(subMenuItem){
//                 subMenuItem.classList.remove('active');
//             })
//             subMenuItem.classList.add('active');
//         })
//     })   
// } 
// openMenu();


