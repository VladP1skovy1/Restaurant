let SearchButton = document.querySelector(".SearchButton");
let SearchInput = document.querySelector("#input");
let BurgerButton = document.querySelector("#Burger");
let PhoneMenu = document.querySelector(".PhoneMenu");

function CloseSearchInput(){
    if(SearchInput.value != ""){
        setTimeout(CloseSearchInput, 5000);
    }else{
        SearchInput.style.display = "none";
        SearchButton.style.display="flex";
    }
}
function OpenSearchInput(){
    SearchInput.style.display = "flex";
    SearchButton.style.display="none";
    setTimeout(CloseSearchInput, 10000);
}

function OpenPhoneMenu(){
    BurgerButton.style.display = "none";
    // PhoneMenu.style.display = "block";
    // PhoneMenu.classList.toggle("_active");
    // document.body.classList.toggle("_lock");
    PhoneMenu.style.left = "0%";
    document.body.style.overflow = "hidden"

}
function ClosePhoneMenu(){
    // if(window.innerWidth <= 720){
    //     BurgerButton.style.display = "flex";
    // }
    document.body.style.overflow = "auto"
    BurgerButton.style.display = "flex";
    // PhoneMenu.style.display = "none";
    PhoneMenu.style.left = "-100%";
}
// window.addEventListener("orientationchange", function() {
//      if(window.innerWidth <= 770){
//          BurgerButton.style.display = "none";
//      }else if(window.innerWidth >770){
//         BurgerButton.style.display = "flex";
//      }
//     }, false);