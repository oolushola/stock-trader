import  stockList  from '../../models/data'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS': (state, stockList)=> {
        state.stocks = stockList
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))

        }); 
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCKS', order)
    },
    availableStocks: ({ commit }) => {
        commit('SET_STOCKS', stockList)
    },
    randomnizeStock: ({ commit }) => {
        commit('RND_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default {
    state,
        mutations,
            actions,
                getters
}