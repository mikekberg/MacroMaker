<template>
    <div class="box box-primary meal-box">
        <div class="box-header with-border">
            <div class="box-title" style="width:100%; position:relative">
                <h2>Meal <span v-text="index"></span></h2>
                <button class="btn btn-danger" style="position:absolute; right:0; top:0" @click="removeMeal">X</button>

            </div>
        </div>

        <div class="box-body meal-items">
            <p v-show="isListEmpty" class="text-center">There are no items</p>
            <meal-item v-for="item in mealItems" :info="item" v-on:remove="removeItem"></meal-item>
        </div>
        <div class="box-footer text-center">
            <a href="#" class="btn btn-success" @click="showItemSearch()">Add Item</a>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                mealItems: (this.initialMealItems || []),
            };
        },
        components: {
            "meal-item": "url:js/components/meal-item-component.vue"
        },
        mixins: [services],
        props: [
            'index',
            'initialMealItems'
        ],
        computed: {
            isListEmpty: function () {
                return this.mealItems.length == 0;
            }
        },
        methods: {
            itemDetails: function (item) {
                var $this = this;
                this.$foodService.itemDetails(item.id).done(function (data) {
                    item.details = data.results;
                });
            },
            showItemSearch: function () {
                this.$emit("openitemsearch", this);
            },
            removeMeal: function () {
                this.$emit("remove", (this.index - 1));

            },
            removeItem: function (info) {
                this.mealItems.splice(this.mealItems.indexOf(info), 1);
            },
            addItem: function (data) {
                this.mealItems.push(
                    data
                );


            }
        }
    };
</script>