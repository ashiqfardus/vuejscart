<template>
  <div id="app">
<!--    Navbar here -->
    <navbar @search="search"></navbar>

    <div class="container-fluid">
      <div class="row">
        <product @newItemAdded="addItem" :items="items"></product>
        <cart @itemRemoved="itemRemove" :items="cart"></cart>

      </div>
    </div>


  </div>
</template>

<script>
import 'bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import  data from'./data.js'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Product from './components/Product'
export default {
  components:
      {
          Navbar,
          Cart,
          Product
      },
    data()
    {
      return{
          items:[],
          cart:[]

      }
    },
    mounted() {
      this.items=data
    },
    methods:
    {
        addItem(item)
        {
            this.cart.push(item)
        },
        itemRemove(index)
        {
            this.cart.splice('index',1)
        },
        search(keyword)
        {
            this.items= data.filter(item=>
            {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !==-1
            })
        }
    }
}
</script>

<style>

</style>
