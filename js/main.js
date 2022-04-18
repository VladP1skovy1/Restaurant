let SearchButton = document.querySelector(".SearchButton");
let SearchInput = document.querySelector("#input");

function CloseSearchInput(){
    SearchInput.style.display = "none";
    SearchButton.style.display="flex";
}
function OpenSearchInput(){
    SearchInput.style.display = "flex";
    SearchButton.style.display="none";
    setTimeout(CloseSearchInput, 5000);
}