<template>
    <div class="jumbotron">
        <h1>Trade or view your protfolio</h1>
        <h6>You may save & load your day</h6>
        <h6>Click on 'End Day' to begin new day</h6>
        <hr>
        <p>Your funds: ${{ funds.toFixed(2) }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>