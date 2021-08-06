function dayReciepe(e){
    e.preventDefault();
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(function (res) {
        res.json().then(function (res) {
            console.log("res",res);
            showDayReciepe(res);
        })
    })
    .catch(function (err) {
        console.log("err:", err);
    });
    
}

function showDayReciepe(res) {
    let data_div = document.getElementById("data");

    let div = document.createElement("div");

    let p_dishName = document.createElement("h3");

    p_dishName.innerHTML = res.meals[0].strMeal;

    
    let ingredients = document.createElement("p")
    
    ingredients.innerHTML = "Ingredients :" + res.meals[0].strIngredient1 + ":" + res.meals[0].strMeasure1 +
                                              res.meals[0].strIngredient2 + ":" + res.meals[0].strMeasure2 + 
                                              res.meals[0].strIngredient3 + ":" + res.meals[0].strMeasure3 + 
                                              res.meals[0].strIngredient4 + ":" + res.meals[0].strMeasure4 +
                                              res.meals[0].strIngredient5 + ":" + res.meals[0].strMeasure5  ;
    
    let instructions = document.createElement("p");

    instructions.innerHTML = "Instructions : " + res.meals[0].strInstructions;

    let meal_image = document.createElement("img");

    meal_image.src = res.meals[0].strMealThumb;

    meal_image.style.width = "10%";

    let youTubeLink = document.createElement("a");

    youTubeLink.setAttribute("href",res.meals[0].strYoutube);

    youTubeLink.innerHTML = "YouTube link for receipe";

    div.append(p_dishName,ingredients,instructions,meal_image,youTubeLink);

    data_div.append(div);

}