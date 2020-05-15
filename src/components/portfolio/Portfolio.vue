<template>
    <div>
        <section>
            <p v-if="stocks.length > 0">Stocks History</p>
            <p v-else>You</p>
            <app-stock v-for="(stock, index) in stocks " :stock="stock" :key="index"></app-stock>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue'
export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        appStock: Stock
    }
}
</script>