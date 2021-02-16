<template>
  <div class="home">
    <h1>Home</h1>
  <Navigation></Navigation>
    <img class="left" src="@/assets/intro-graphic-left.svg">

    <img class="logo" src="@/assets/airbean-landing.svg">
    
    <img class="right" src="@/assets/intro-graphic-right.svg">
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
  components: { Navigation },
  name: 'Home',
}
</script>

<style>
  .home {
    background-color: #0E927D;
    display: grid;
    grid-template-columns: repeat(3, 125px);
    grid-template-rows: repeat(3, 270px);
  }

  .right {
    grid-column: 3;
  }

  .logo {
    /* position: absolute; */
    grid-column: 2;
    grid-row: 2;
    /* margin: auto; */
  }

  .left {
    grid-column: 1;
  }
</style>
