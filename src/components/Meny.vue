<template>
  <div class="meny">
    <Header/>
    <div class="cart" v-on:click="openCart">
      <img src="../assets/bag.svg">
    </div>
    <CoffeItem/>
    <router-view></router-view> 
  </div>
   
</template>



<script>

import Header from './header'
import CoffeItem from './CoffeItem'

export default {
  components: {
    Header: Header,
    CoffeItem: CoffeItem
  },

  methods: {
    
    openCart() {
      this.$router.push('/meny/cart');
    }
  
  }
}
</script>

<style scoped>

.meny {

  display:flex;
  align-items:center;
  flex-direction:column;
  background-color:#F3E4E1;
  z-index:-1;
  

}

.footer {
  align-self:center;
}

.cart {
  position:absolute;
  right:10px;
  top:7px;
  width:60px;
  height:60px;
  background-color:#2F2926;
  border-radius:50%;
}

.cart img {
  position:relative;
  top:16px;
}

.container {
  z-index:0;
}



</style>