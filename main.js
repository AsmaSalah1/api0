
async function getproducts(){
    const response=await fetch("https://dummyjson.com/products");
    const products=await response.json();
   const pro=products.products;
   console.log(pro);
   const result=pro.map(function(product){
       return `
       <div class="asma">
       <h2>${product.title}</h2>
       <img  class="yy" src=${product.thumbnail} />
       <span>${product.brand}</span>
       <h4> price : ${product.price}</h4>
       </div>
       `
   }).join(' ');
   
   document.querySelector(".products").innerHTML=result;
   
    }
    getproducts();