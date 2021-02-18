<template>
  <div class="profil">
      <div class="header">
        <img src="../assets/graphics-header.svg">
      </div>
      <div class="form-container">
        <h1>Välkomen till AirBean-familjen!</h1>
        <p class="instructions">Genom att skapa ett konto nedan kan<br> du spara och se din orderhistorik.</p>
        <p class="input-label">Namn</p>
        <input v-model="userInfo.name"  type="text" class="input-text">
        <p class="input-label">E-post</p>
        <input v-model="userInfo.email" type="text" class="input-text">
        <div class="gdpr-container">
          <input type="checkbox" name="gdpr">
          <label for="gdpr">GDPR Ok!</label>
        </div>
        <button v-on:click="sendData(userInfo)">Brew me a cup!</button>
      </div>
  </div>
</template>

<script>
export default {
  data() { return {
    
    userInfo: {
      name: "",
      email: ""
    }

  }},

  methods: {

  
    sendData(payload) {

      this.$store.commit('sendData', payload);
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans:wght@400&display=swap');

@media only screen and (max-width: 375px) {

 .profil {
    max-width:375px;
    max-height: 667px;
    background-color: #2F2926;
  }

  .form-container {
    width:341px;
    height:565.77px;
    background-color:#F3E4E1;
    margin:auto;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .input-text {
    width:320px;
    border-radius:5px;
    height:40px;
    border-style:solid;
    border-color:black;
    border-width:1px;
       
  }

  p {
    color:#2F2926;
  }

  .input-label {
    align-self:flex-start;
    margin-left:10px;
    margin-top:20px;
    font-family: 'Work Sans', sans-serif;    
    font-size:12px;
  }

  .gdpr-container {
    display:flex;
    align-self:flex-start;
    margin-left:10px;
    margin-top:20px;

  }

  .gdpr-container label {
    margin-left:5px;
    font-family: 'Work Sans', sans-serif;
    font-size:12px;    
    color:#2F2926;

  }


  h1 {
    font-family: 'PT Serif', serif;
    color:#2F2926;
    margin-top:40px;
  }

  .instructions {
    margin-top:20px;
    font-family: 'Work Sans', sans-serif;
    color:#2F2926;
  }

  button {
    width:248px;
    height:55px;
    border-radius: 50px;
    background-color:#2F2926;
    color:white;
    font-family: 'PT Serif', serif;
    font-size:24px;
    margin-top:80px;
  }

}

</style>