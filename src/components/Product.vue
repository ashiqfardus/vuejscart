<template>
  <div class="col-md-9">
    <h3 class="text-center">Products</h3>
    <div class="row">
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
  </div>
</template>

<script>
    export default {
        props:['items'],
        methods:
            {
                addItem(item)
                {
                    this.$emit('newItemAdded',item)
                }
            }

    }
</script>

<style scoped>

</style>
