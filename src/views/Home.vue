<template>
  <div class="home">
    <div class="home-container">
      <img src="@/assets/intro-graphic-left.svg">
      <img class="right" src="@/assets/intro-graphic-right.svg">
    </div>
  <div>
    <img class="logo" @click="goToNavigation" src="@/assets/airbean-landing.svg">

  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods:{
    goToNavigation(){
      this.$router.push('/navigation')
    }
  }
}
</script>

<style>
@media only screen and (max-width: 375px) {
  .home-container {
    max-width:375px;
    max-height: 667px;
    background-color: #0E927D;
    display: grid;
    grid-template-columns: repeat(2,auto);
  }

  .right {
    grid-column: 2/2 ;
    padding-left: 65px;
   
  }

  .logo {
    position: absolute;
    top:35%;
    right: 11%;

  }
  
  a {
    cursor: pointer;
  } 
  
}
 


  

  
</style>
