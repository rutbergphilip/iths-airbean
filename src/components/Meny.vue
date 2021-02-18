<template>
  <div class="meny">
    <Header/>
  </div>
</template>



<script>

import Header from './header'

export default {
  components: {
    Header: Header
  }
}
</script>

<style scoped>

.meny {
  display:flex;
  align-items:flex-start;

}

.footer {
  align-self:center;
}

</style>