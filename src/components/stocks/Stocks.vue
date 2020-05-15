<template>
    <div>    
        <app-stock v-for="(stock, index) in stocks " :key="index" :stock="stock"></app-stock>
    </div>
</template>

<script>
import stock from '../stocks/stock.vue'
export default {
    data() {
        return {
            //stocks: [...stockListing]
        }
    },
    components: {
        appStock: stock
    },
    computed: {
        stocks() { 
            return this.$store.getters.stocks
        }
    }
}
</script>