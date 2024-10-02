async function getProducts(){

     const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
     const data = await response.json();
     const recipes = data.recipes;
     

     const result = recipes.map(function(recipe){
        
        return `
         <div class="recipes">
            <h2>${recipe.title}</h2>
            <img src="${recipe.image_url}" />     
         </div>
        `
     }).join('');


     console.log(data);
     document.querySelector(".recipes .row").innerHTML = result;
}

getProducts();