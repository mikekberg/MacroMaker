<template>
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Search for a meal</h4>
                </div>
                <div class="modal-body">
                    <input class="form-control input-lg" type="text" placeholder="Yummy foods..." v-model="searchText">
                    <div class="col-xs-12">
                        <div style="margin-top:20px">
                            <!-- /.box-header -->
                            <div v-if="searchResults.length > 0" class="box-body table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style="width:30%; text-align:center">Image</th>
                                            <th style="width:25%; text-align:center">Title</th>
                                            <th style="width:10%; text-align:center">Protein</th>
                                            <th style="width:10%; text-align:center">Fats</th>
                                            <th style="width:10%; text-align:center">Carbs</th>
                                            <th style="width:10%; text-align:center">Calories</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </table>
                                <div style="max-height: 500px; overflow-y: scroll">
                                    <table class="table table-hover">
                                        <tbody>
                                            <tr v-for="item in searchResults">
                                                <td> <img :src="item.image" alt="" style="width:65%"></td>
                                                <td><strong style="text-align:center" v-text="item.title"></strong></td>
                                                <td><span class="label label-success" style="text-align:center" v-text="item.protein"></span></td>
                                                <td><span class="label label-warning" style="text-align:center" v-text="item.fat"></span></td>
                                                <td><span class="label label-danger" style="text-align:center" v-text="item.carbs"></span></td>
                                                <td><span class="label label-danger" style="text-align:center" v-text="item.calories"></span></td>
                                                <td>
                                                    <Button @click="addItem(item)" type="button" class="btn btn-success" style="text-align:center"><i class="fa fa-plus"></i></Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- /.box-body -->
                        </div>
                        <!-- /.box -->
                    </div>
                </div>
                <div class="modal-footer" style="text-align: center">
                    <button type="button" class="btn btn-primary" @click="searchItems">Search</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    module.exports = {
        data: function () {
            return {
                "searchText": "",
                "searchResults": []
            };
        },
        mixins: [services],
        methods: {
            addItem: function (item) {
                this.$emit("additem", item);
            },
            searchItems: function () {
                var $this = this;

                this.$foodService.searchRecipes(this.searchText).done(function (data) {
                    $this.searchResults = data.results;
                });
            },
            openDialogue: function () {
                $(this.$el).modal("show");
            }
        },
        props: [],
    };
</script>