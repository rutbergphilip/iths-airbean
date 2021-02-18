<template>
  <div class="meny">
    <Header/>
    <CoffeItem/>
  </div>
</template>



<script>

import Header from './header'
import CoffeItem from './CoffeItem'

export default {
  components: {
    Header: Header,
    CoffeItem: CoffeItem
  }
}
</script>

<style scoped>

.meny {
  display:flex;
  align-items:center;
  flex-direction:column;
  background-color:#F3E4E1;
  

}

.footer {
  align-self:center;
}

</style>