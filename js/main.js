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
    PhoneMenu.style.left = "0%";
    document.body.style.overflow = "hidden"

}
function ClosePhoneMenu(){
    document.body.style.overflow = "auto"
    BurgerButton.style.display = "flex";
    PhoneMenu.style.left = "-100%";
}