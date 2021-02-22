<template>
    <div class="container">
        <div v-for="coffe in getData" v-bind:key="coffe.id" class="items">
            <div class="first-line">
                <span v-on:click="addToCart(coffe.id)">+</span>
                <p class="title">{{coffe.title}}</p>
                <p class="price"> {{coffe.price}} kr</p>
            </div>
            <p class="description">Bryggd på månadens bönor</p>
        </div>
    </div>
</template>

<script>



export default {

    computed: {

        getData() {
            return this.$store.state.coffeTypes;
        }
    },

    methods: {

        addToCart(id) {
            this.$store.dispatch('sendOrder', id);
        }

    },

    beforeCreate() {
        this.$store.dispatch('getCoffeTypes');
    }

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans:wght@400&display=swap');


.items{
    margin-top:30px;
}

.first-line {
    display:flex;
    justify-content:center;
}
.container {
    background-color: #F3E4E1;
    height:839px;
    width:375px;
}

.title {
     font-family: 'PT Serif', serif;
     color:#2F2926;
     font-size:23px;
   
     width:194.44px;
     border-bottom: dashed 1px black;
}

.price {
    font-family: 'PT Serif', serif;
    color:#2F2926;
}

.description {
    font-family: 'Work Sans', sans-serif;
    font-size:12px;
}

span {
    width:32px;
    height:32px;
    border-radius:50%;
    background-color:#2F2926;
    color:white;
    text-align:center;
    font-size:23px;
}

</style>