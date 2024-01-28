let offset = $(".nav-links").offset();
let x = $(".nav-links").innerWidth(); 



$(".bars-x").on("click",function()
{
    if($(".nav-side").css("left")==`0px`)
    {

        $(".nav-side").animate({left:`-${x}`},1000)
        
        
        $(".fa-x").fadeOut(50,function(){
            $(".fa-bars").fadeIn(50,function()
            {
                $(".list ul li").slideUp(1500);
            });
        });
    }
    else
    {
        $(".nav-side").animate({left:`0px`},1000)
        
        $(".fa-bars").fadeOut(50,function(){
            $(".fa-x").fadeIn(50,function()
            {
                $(".list ul li").slideDown(1500);
            });
        });
    }
    
})


$(document).ready(function(){
    $(".loading i").fadeOut(500,function(){
        $(".loading").fadeOut(500,function(){
            $(".nav-side").animate({left:`-${x}`},500);
            $(".loading").css({overflow:"auto"});
        });
    });
});


console.log(x);




async function emtyMeals()
{
    let object = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    let result = await object.json();
    console.log(result);
    showMeals(result);
    mealDeatails(result);
    }

emtyMeals();


 function showMeals(out){
 let temp =``;
 for(let i = 0 ; i<20 ; i++)
 {
     temp += `   <div id="meal" class="col-md-3  meal-name  g-4">
                <div class="innercontainer">
                <img src="${out.meals[i].strMealThumb}" class="w-100" alt="">
            <div class="layer">
                <h3 class="px-2">${out.meals[i].strMeal}</h3>
            </div>
            </div>
        </div>   `;
 }
 document.querySelector("#card").innerHTML=temp;
 }


  function mealDeatails(result)
  {

    $("#meal").on("click",function(){
        let temp = ``;
            temp=`
                    <div class="col-4 my-3 text-white">
                        <img src="${result.meals[0].strMealThumb}" class="w-100 rounded-2" alt="">
                        <h2>${result.meals[0].strMeal}</h2>
                    </div>
                    <div class="col-8 text-white">
                        <h2>Instructions</h2>
                        <p>${result.meals[0].strInstructions}</p>
    
                        <div class="lists">
                                <h3> <span>Area :</span> ${result.meals[0].strArea}</h3>
                                <h3> <span>category :</span> ${result.meals[0].strCategory}</h3>
                                <h3> <span>recipes :</span></h3>
    
                                <ul class="list-unstyled d-flex flex-wrap justify-content-between">
                                <li> <p class="alert alert-info">${result.meals[0].strIngredient1}</p> </li> 
                                <li> <p class="alert alert-info">${result.meals[0].strIngredient2}</p> </li> 
                                <li> <p class="alert alert-info">${result.meals[0].strIngredient3}</p> </li> 
                                <li> <p class="alert alert-info">${result.meals[0].strIngredient4}</p> </li> 
                                <li> <p class="alert alert-info">${result.meals[0].strIngredient5}</p> </li> 
                                <li> <p class="alert alert-info">${result.meals[0].strIngredient6}</p> </li> 
                                <li> <p class="alert alert-info">${result.meals[0].strIngredient7}</p> </li> 
                                </ul>
                        

                                <h3 class="mb-3">Tags :</h3>
    <ul class="list-unstyled d-flex gap-3 ps-2">
      <li>
        <a class="text-decoration-none text-light btn btn-success" href="${result.meals[0].strSource}"
          >Source</a>
      </li>
      <li>
        <a class="text-decoration-none text-light btn btn-danger" href="${result.meals[0].strYoutube}"
          >Youtube</a>
      </li>
    </ul>
                                </div>
                    </div>`;
        
    
        document.querySelector("#card").innerHTML=temp;

    })

            }

 


$("#search").on("click",function()
{
    $("#firstappear").removeClass("d-flex").addClass("d-none");
    $("#searchCard").removeClass("d-none").addClass("d-flex");
    $("#categoryCard").removeClass("d-flex").addClass("d-none");
    $("#areaaa").removeClass("d-flex").addClass("d-none");
    $("#in").removeClass("d-flex").addClass("d-none");
    $("#contact").removeClass("d-flex").addClass("d-none");
    $(".nav-side").animate({left:`-${x}`},1000);
    $(".fa-x").fadeOut(50,function(){
        $(".fa-bars").fadeIn(50)})
})


let result ; 
async function ByName(name)
{
    let names = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
     result = await names.json();
    console.log(result);
    searchOutPut ()
}


function searchOutPut()
{
let temp =``;
for(let i=0 ; i < result.meals.length; i++ )
{
    temp +=`
    <div id="meal" class="col-md-3  meal-name  g-4">
    <div class="innercontainer">
    <img src="${result.meals[i].strMealThumb}" class="w-100" alt="">
<div class="layer">
    <h3 class="px-2">${result.meals[i].strMeal}</h3>
</div>
</div>
</div> 
    `
}
document.querySelector("#searchcard").innerHTML=temp;
}


$("#searchByName").keyup(function (e) {
    let y = e.target.value; 
    ByName(y);
    
});

async function Byletter(letter)
{
    let names = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`);
     result = await names.json();
    console.log(result);
    searchOutPut ()
}


$("#searchByFLetter").keyup(function (e) {
    let z = e.target.value; 
            Byletter(z);
      
});



let obj;
async function category()
{
    let cat= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    obj = await cat.json();
    console.log(obj);
    allCategories();
    // getCatDetais (i)
}

 ;
function allCategories()
{
    let temp =``;
    for(let i = 0 ; i < obj.categories.length; i++ )
    {
        temp +=`
        <div id="meal" class="col-md-3  meal-name  g-4 overflow-hidden">
        <div class="innercontainer">
        <img src="${obj.categories[i].strCategoryThumb}"  class="w-100" alt="">
    <div class="layer overflow-hidden d-flex flex-column">
    <h2 class="text-center">${obj.categories[i].strCategory}</h2>
        <h6 class="px-2 fs-6 text-center" maxlength="20">${obj.categories[i].strCategoryDescription}</h6>
    </div>
    </div>
    </div> 
        `
    }
    document.querySelector("#catcard").innerHTML=temp;
}

// function getCatDetais (index)
// {
//     console.log("ddd",obj.categories[index]);

// }



$("#cat").on("click",function()
{
    $("#firstappear").removeClass("d-flex").addClass("d-none");
    $("#searchCard").removeClass("d-flex").addClass("d-none");
    $("#categoryCard").removeClass("d-none").addClass("d-flex");
    $("#areaaa").removeClass("d-flex").addClass("d-none");
    $("#in").removeClass("d-flex").addClass("d-none");
    $("#contact").removeClass("d-flex").addClass("d-none");
    $(".nav-side").animate({left:`-${x}`},1000);
    $(".fa-x").fadeOut(50,function(){
        $(".fa-bars").fadeIn(50)});
    category();
})


async function insidecateg (name) {
    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let obj = await url.json()
console.log(obj);
}

let object;
async function area()
{
    let list = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    object = await list.json();
    console.log(object);
    showArea(object);
} 


function showArea(obj)
{
    let temp=``;
    for(let i = 0 ; i< obj.meals.length ; i++)
    {
        temp += `<div class=" areas col-3 text-white">
        <div class="text-center my-2">
            <i class="fa-solid mx-auto fa-house-laptop fa-4x"></i>
        </div>
        <h3 class="text-center ">${obj.meals[i].strArea}</h3>
       </div>`
    }
    document.querySelector("#areacard").innerHTML=temp
}

$("#area").on("click",function(){
    $("#firstappear").removeClass("d-flex").addClass("d-none");
    $("#searchCard").removeClass("d-flex").addClass("d-none");
    $("#categoryCard").removeClass("d-flex").addClass("d-none");
    $("#areaaa").removeClass("d-none").addClass("d-flex");
    $("#contact").removeClass("d-flex").addClass("d-none");
    $("#in").removeClass("d-flex").addClass("d-none");
    $(".nav-side").animate({left:`-${x}`},1000);
    $(".fa-x").fadeOut(50,function(){
        $(".fa-bars").fadeIn(50)});
        area();

})


let arr;
async function ingrideants()
{
    let list = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
     arr= await list.json();

     console.log(arr);
     showin(arr);
} 

function showin(obj)
{
    let temp=``;
    for(let i = 0 ; i< obj.meals.length ; i++)
    {
        temp += `<div class=" areas col-3 text-white my-3">
        <div class="text-center my-4">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        </div>
        <h3 class="text-center ">${obj.meals[i].strIngredient}</h3>
       </div>`
    }
    document.querySelector("#incard").innerHTML=temp;
}



$("#ingrid").on("click",function(){
    $("#firstappear").removeClass("d-flex").addClass("d-none");
    $("#searchCard").removeClass("d-flex").addClass("d-none");
    $("#categoryCard").removeClass("d-flex").addClass("d-none");
    $("#areaaa").removeClass("d-flex").addClass("d-none");
    $("#in").removeClass("d-none").addClass("d-flex");
    $("#contact").removeClass("d-flex").addClass("d-none");
    $(".nav-side").animate({left:`-${x}`},1000);
    $(".fa-x").fadeOut(50,function(){
        $(".fa-bars").fadeIn(50)});
        ingrideants();
})


$("#contact-us").on("click",function(){
    $("#firstappear").removeClass("d-flex").addClass("d-none");
    $("#searchCard").removeClass("d-flex").addClass("d-none");
    $("#categoryCard").removeClass("d-flex").addClass("d-none");
    $("#areaaa").removeClass("d-flex").addClass("d-none");
    $("#in").removeClass("d-flex").addClass("d-none");
    $("#contact").removeClass("d-none").addClass("d-flex");
    $(".nav-side").animate({left:`-${x}`},1000);
    $(".fa-x").fadeOut(50,function(){
        $(".fa-bars").fadeIn(50)});
})