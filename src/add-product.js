const form = document.querySelector("#add-product-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const submitBtn=document.querySelector(".submit-btn");



form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    

 try{
      await  fetch('https://fakestoreapi.com/products',{
        method:'POST',
        body:JSON.stringify(
            {title:title.value,
                price:price.value,
                category:category.value,
                description:description.value
            }),
    });
    
 }
 catch(error){
     console.log(error);
 }
});