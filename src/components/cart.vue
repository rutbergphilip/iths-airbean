<template>
    <div class="container">
        <h1>Din beställning</h1>
        <div>
            <div class="first-line">
                <p class="title">Bryggkaffe</p>
                <span></span>
                <div class="amount">
                <img src="../assets/arrow-up.svg">
                <p>1</p>
                <img src="../assets/arrow-down.svg">
                </div>
                
            </div>
        </div>
         <p class="price">98 kr</p>
        <div class="first-line">
            <p>Total</p>
            <span class="price-border"/>
            <p>343 kr</p>
        </div>
        <p class="price">inkl moms + drönarleverans</p>
    </div>
</template>



<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans:wght@400&display=swap');

.container {
    position:relative;
    z-index:10;
    background-color:white;
    width:341px;
    height:565.77px;
    display:flex;
    flex-direction:column;
 
    
}


.first-line {
    display:flex;
    margin-top:20px;
    margin-left:17px;
    font-family: 'PT Serif', serif;
    font-size:20px;
}

span {
    width:151px;
    border-top:dashed 0.5px rgba(0, 0, 0, 0.4);
    margin-top:17px;
}

.price-border {
    width:160px;

}

.amount {
    margin-left:50px;
    margin-top:-20px;
    font-family: 'Work Sans', sans-serif;
    font-size:14px;
}

.price {
    align-self:flex-start;
    margin-left:17px;
    
    font-family: 'Work Sans', sans-serif;
    font-size:12px;
}


</style>