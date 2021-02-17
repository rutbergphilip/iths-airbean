<template>
  <div class="navigation">
      <div class="close-nav">
          <img class="close" src="@/assets/close.svg">
      </div>
      <ul>
          <li>Meny</li>
          <li>Vårt kaffe</li>
          <li>Min profil</li>
          <li>Orderstatus</li>
      </ul>
  </div>
</template>

<script>
export default {
name: 'Navigation'
}
</script>

<style>
.navigation{
    padding: 20px;
    background-color:#2F2926 ;
    color: white;
    font-size: 32px;
    font-weight: 700;
}
.close-nav {
    display: flex;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 50%;
}

.close{
    width: 40%;
}

li {
    padding: 30px;
    list-style: none;
}
ul {
    padding-top: 20%;
    padding-bottom: 32%;
}
</style>