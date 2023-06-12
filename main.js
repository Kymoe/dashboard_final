import './src/index.css';
import "./node_modules/flowbite/dist/flowbite.min.js";

const body = document.querySelector("body");
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
let theme='light';
window.addEventListener("DOMContentLoaded", loadTheme);
 themeToggleBtn.addEventListener("click", toggleTheme);

 function loadTheme(){
    theme=localStorage.getItem('theme');
   if(theme==='dark'){
       body.classList.add("dark");

       themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
   }
   else{
      body.classList.remove("dark");

      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
   }
 }

 function toggleTheme() {
   if (body.classList.contains("dark")) {
     body.classList.remove("dark");

     themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
     localStorage.setItem('theme','light');
   } else {
     body.classList.add("dark");

     themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
     localStorage.setItem('theme','dark');
   }
 }
