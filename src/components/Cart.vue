<template>
  <div class="col-md-3">
    <h3 class="text-center">Cart</h3>
    <ul class="list-group">
      <li class="list-group-item">
        <h5 class="float-left"> Name </h5> <h5 class="float-right"> Price</h5>
      </li>
      <li class="list-group-item" v-for="(item,index) in items" :key="index">
        <button class="btn btn-danger btn-sm" @click="removeItem(index)">x</button>
        <h5 class="float-left"> {{item.name}} </h5> <h5 class="float-right"> {{item.price}}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="float-left"> Total </h5> <h5 class="float-right"> ${{total}}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props:['items'],
        computed:
            {
                total()
                {
                    var total=0;
                    this.items.forEach(item=>
                    {
                        total += parseFloat(item.price);
                    });
                    return total;
                }
            },
        methods:
            {
                removeItem(index)
                {
                    this.$emit('itemRemoved',index)
                }
            }
    }
</script>

<style scoped>

</style>
