import stockHome from './components/Home.vue'
import appStocks from './components/stocks/Stocks.vue'
import appPortfolio from './components/portfolio/Portfolio.vue'

export const routes = [
    { path: '/', component: stockHome },
    { path: '/stocks', component: appStocks },
    { path: '/portfolio', component: appPortfolio }
]