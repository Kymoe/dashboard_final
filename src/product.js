const tableBody=document.querySelector(".table-body");

let products=[];

//run function when document is ready to show
window.addEventListener("DOMContentLoaded", getProductData);
 


//data fetching
async function getProductData(){
    tableBody.textContent='loading...';
try{
     const response= await  fetch('https://fakestoreapi.com/products?limit=10');
    const data= await response.json();
    products=data;
    tableBody.innerHTML='';
     products.forEach((product) => {addProductToTableBody(product)});
  
}
catch(error){
    console.log(error);
}
}

 //Dom API
 function addProductToTableBody(product){
     const trE1=document.createElement('tr');
     trE1.classList.add("table-row");
     trE1.innerHTML = ` <td class="table-col">${product.title.substring(0,10)}</td>
                                          <td class="table-col">${product.price}</td>
                                          <td class="table-col">${product.description.substring(0,20)}...</td>
                                          <td class="table-col">${product.category}</td>
                                           <td class="table-col">
                                             <button class="btn-primary">Edit</button>
                                           </td>
                                            <td class="table-col">
                                            <button type="button" class="btn-danger">Delete</button>
                                           </td>
                                          `;
                                         
                                          tableBody.appendChild(trE1);
 }




