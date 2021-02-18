<template>
    <div>
        <img :src="require('../assets/graphics-header.svg')" class="background"> 
        <div class="navicon-container" v-on:click="switchToNave">
            <img :src="require('../assets/navicon.svg')" class="navicon">
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        switchToNave() {
            this.$router.push('/navigation')
        }
    }

}
</script>

<style scoped>

.background {
    position:relative;

}

.navicon-container {

    position:absolute;
    right:300px;
    top:10px;
    width:48px;
    height:48px;
    border-radius:50%;
    background-color:white;
}

.navicon {
    position:relative;
    top:13px;
}





</style>