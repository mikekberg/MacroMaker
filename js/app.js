Vue.use(httpVueLoader);


var macromaker = new Vue({
    el: "#macromaker",
    components: {
        "meal-box": "url:js/components/meal-box-component.vue",
        "meal-macro": "url:js/components/meal-macro-component.vue",
        "meal-search": "url:js/components/meal-search-component.vue"
    },
    mixins: [services],
    methods: {
        makeMeal: function () {
            this.meals.push({items:[]});
        },
        onAddItem: function (itemData) {
            this.currentMealBox.addItem(itemData);
            this.currentMealBox.itemDetails(itemData);
        },
        onOpenItemSearch: function (mealBox) {
            this.$refs.searchDialogue.openDialogue();
            this.currentMealBox = mealBox;
        },
        searchItems: function () {
            var $this = this;

            this.$foodService.searchRecipes(this.searchText).done(function (data) {
                $this.searchResults = data.results;
            });
        },
        removeMeal: function (index) {
            this.meals.splice(index, 1);
        },
        getTotalProtein: function () {
            return this.totalProteins;
        },
        getTotalFats: function () {
            return this.totalFats;
        },
        getTotalCarbs: function () {
            return this.totalCarbs;
        }
    },
    created: function () {
        var $this = this;
        this.joke = this.$foodService.getJoke().text;
    },
    computed: {
        totalProteins: function () {
            var totalProteins = 0
            for (meal of this.meals) {
                for (item of meal.items) {
                    totalProteins += item.protein
                }
            }

            return totalProteins;
        },
        totalFats: function () {
            var totalFats = 0
            for (meal of this.meals) {
                for (item of meal.items) {
                    totalFats += item.fats
                }
            }
            return totalFats;
        },
        totalCarbs: function () {
            var totalCarbs = 0
            for (meal of this.meals) {
                for (item of meal.items) {
                    totalCarbs += item.carbs
                }
            }
            return totalCarbs;
        }
    },
    data: {
        joke: "",
        currentMealBox: null,
        searchResults: [],
        searchText: "",
        meals: []
    }
})