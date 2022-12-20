let randomimage = document.getElementById('randomimage');
let randomname = document.getElementById('randomname');

function random(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>res.json())
    .then((re)=>{
        randomimage.innerHTML=`
        <div>
        <img class="randomimage" src="${re.meals[0].strMealThumb}">
        </div>
        `
        randomname.innerHTML=`
        <div class="randomname">${re.meals[0].strMeal}</div>
        `
    })
}
random();

let button = document.getElementById('button');
let text = document.getElementById('search');
let display=document.querySelector("#results");
let forimage=document.querySelector('#container');


