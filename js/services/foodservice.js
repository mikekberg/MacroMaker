function FoodService() {
    this.itemDetails = function (item) {
        return jQuery.ajax({
            "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+ item +"/information?includeNutrition=true",
            "headers": {
                "X-Mashape-Key": "KgEL3FQ0vKmshsnSncd7JKeuCwTop19Cii8jsnJy9pki2S1sZK"
            }
        })
    }
    this.searchRecipes = function (searchText) {
        return jQuery.ajax({
            "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex",
            "data": {
                "query": searchText,
                "minCalories": 1,
                "number": 50,

            }, 
            "headers": {
                "X-Mashape-Key": "KgEL3FQ0vKmshsnSncd7JKeuCwTop19Cii8jsnJy9pki2S1sZK"
            }
        })
    }
    this.getJoke = function () {
        return {"text": "A joke"};
        /*jQuery.ajax({
            "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random",
            "headers": {
                "X-Mashape-Key": "KgEL3FQ0vKmshsnSncd7JKeuCwTop19Cii8jsnJy9pki2S1sZK"
            }
        })*/
    };
}