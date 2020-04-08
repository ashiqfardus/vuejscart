<template>
  <div class="col-md-9">
    <h3 class="text-center">Products</h3>
    <div class="row" v-if="!loading">
      <div class="col-md-3 mb-2" v-for="(item,index) in items" :key="index">
        <div class="card">
          <img :src="item.image" alt="">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">${{item.price}}</p>
            <a @click="addItem(item)" class="btn btn-sm btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading....</h1>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        data()
        {
            return{
                loading:true,
                items:[]
            }
        },
        mounted()
        {
          this.fetchProduct()
        },
        methods:
            {
                addItem(item)
                {
                    this.$emit('newItemAdded',item)
                },
                fetchProduct()
                {
                    var self=this;
                    axios.get('http://localhost:3000/items').then(response=>
                    {
                        setTimeout(function () {
                            self.items=response.data
                            self.loading=false
                        },3000)

                    })
                }
            }

    }
</script>

<style scoped>

</style>
