// getting all required elements
const start_btn=document.querySelector(".start_btn ");
const info_box=document.querySelector(".info_box");
const exit_btn=info_box.querySelector(".buttons .quit");
const continue_btn=info_box.querySelector(".buttons .continue");
//if start button is clicked
start_btn.addEventListener("click",()=>{
    info_box.classList.add("activeInfo");
})
exit_btn.addEventListener("click",()=>{
    info_box.classList.remove("activeInfo");
})
