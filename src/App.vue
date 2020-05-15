<template>
    <div class="container">
      <app-stock-header></app-stock-header>
      <div class="row">
        <div class="col-xs-12">
          <transition enter-active-class="animated zoomIn" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
  </div>
</template>

<script>
import stockHeader from './components/StockHeader.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    appStockHeader: stockHeader
  },
  created() {
    this.$store.dispatch('availableStocks')
  }
}
</script>

<style>
  body {
    padding: 30px;
  }
</style>
