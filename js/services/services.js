var foodService = new FoodService();


var services = {
    created: function () {
        this.$foodService = foodService;
    },
};