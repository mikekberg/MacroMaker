<template>
    <div class="col-md-3">
        <div class="info-box">
            <span class="info-box-icon bg-aqua"><i v-bind:class="image"></i></span>

            <div class="info-box-content">
                <span class="info-box-text"><span v-text="type"></span></span>
                <span class="info-box-number" v-text="amount() + ' g'"></span>
            </div>
        </div>
    </div>

</template>


<script>
    module.exports = {
        data: function () {
            return {};
        },
        mixins: [services],
        props: [
            'type',
            'amount',
            'image'
        ],
    };
</script>