<template>
    <div class="meal-item">
        <h4 v-text="info.title"></h4>
        <span class="label label-success"><span v-text="info.protein"></span> protein</span>
        <span class="label label-warning"><span v-text="info.fat"></span> Fats</span>
        <span class="label label-danger"><span v-text="info.carbs"></span> carbs</span>
        <span class="label label-danger"><span v-text="info.calories"></span>g calories</span>
        <a style="top: 8px" class="btn btn-app" @click="removeItem()">
            <i class="fa fa-trash"></i><span>Remove</span>
        </a>
    </div>
</template>


<script>
    module.exports = {
        data: function () {
            return {};
        },
        props: [
            'info'
        ],
        methods: {
            removeItem: function () {
                this.$emit("remove", this.info);
            }
        }
    };
</script>