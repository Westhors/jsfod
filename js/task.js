let searchInput = document.getElementById('searchInput');
let searchBtn   = document.getElementById('searchbtn');
let displayData = document.getElementById("displayData");
let display2    = document.getElementById("display2");
let close       = document.getElementById("close");
let containerImage = document.getElementById("containerImage");
let allFood = [];
async function getpast(){
    let allRecipes = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`);
    let recipesJson = await allRecipes.json();
    allFood = recipesJson.recipes;
    console.log(allFood);
    displayImg();
}
getpast()
//وظيفة لعرض المعلومات 
function displayImg(){
    let box = '';
    for(let i=0;i<9;i++)
    {
        box +=
        `<div class="col-lg-4 col-md-6 pb-3 mb-5" onclick="recipesId('${allFood[i].recipe_id}')">
            <div class="cont-img ">
                <img src="${allFood[i].image_url}" class=" img-fluid" alt="...">
                <div class="opacity"></div>
            </div>

            <div class="body pt-3 text-center mb-3 text-light">
                <h3>${allFood[i].title}</h3>
                <p class="lead">${allFood[i].publisher}</p>
                <a href='${allFood[i].source_url}'>Details</a>
            </div>
        </div>`
    }
    displayData.innerHTML=box;
}
//وظيفة لجلب البيانات عن طريق الايدي عند الضغط على العنصر
async function recipesId(id){
    let getId = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    let getIdJson = await getId.json();
    let allId = getIdJson.recipe;
    console.log(allId);
    show(allId)
}
// وظيفة لجلب معلومات عن طريق الايدي وعرضها 
 function show(element){
     let cartona =
     `<div class="conts col-md-6">
        <div class="cont-img">
            <img src="${element.image_url}" class=" img-fluid" alt="...">
            <div class="opacity"></div>
        </div>

        <div class="body pt-3 text-center mb-3 text-light">
            <h3 class="h3">${element.title}</h3>
            <p class="lead">${element.publisher}</p>
            <a class="a" href='${element.source_url}'>Details</a>
        </div>
    </div>
    <ul class="lists col-md-6" style="color:#fff">`
        for(let i = 0 ; i < element.ingredients.length ; i++){
            cartona+=`<li>${element.ingredients[i]}</li>`
        }
        `
    </ul>
    `
    containerImage.style.display='flex';
    display2.innerHTML=cartona;
}

// closed The containerImage
close.addEventListener("click",closes);
function closes(){
    containerImage.style.display='none';
}


// closed The containerImage From KeyBoard
document.addEventListener("keydown",backs);
function backs(e){
    if(e.keyCode==27){
        closes()
    }
}
// البحث عن معلومات داخل المصفوفة
searchInput.addEventListener("keyup",function(){
    searchArray(searchInput.value)
})

function searchArray (searchInput)
{
    let box = '';
    for(let i=0;i<9;i++)
    {
        if(allFood[i].title.toLowerCase().includes(searchInput.toLowerCase()))
        {
        box +=
        `<div class="col-lg-4 col-md-6 pb-3 mb-5" onclick="recipesId('${allFood[i].recipe_id}')">
            <div class="cont-img ">
                <img src="${allFood[i].image_url}" class=" img-fluid" alt="...">
                <div class="opacity"></div>
            </div>

            <div class="body pt-3 text-center mb-3 text-light">
                <h3>${allFood[i].title}</h3>
                <p class="lead">${allFood[i].publisher}</p>
                <a href='${allFood[i].source_url}'>Details</a>
            </div>
        </div>`
        }
    }
    displayData.innerHTML=box;
}

















let x = $(".section1").offset().top;
$(window).scroll(function(){
    let c =$(window).scrollTop();
    console.log(c);
    if (c>x-110) {
        $("#navbars").css("backgroundColor","rgba(0, 0, 0, 0.5)")
    }
    else
    {
        $("#navbars").css("backgroundColor","transparent")
    }
})
console.log(x)