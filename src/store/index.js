import Vue from 'vue'
import Vuex from 'vuex'
import {http, apiKey, availableFormats} from '../config'

Vue.use(Vuex)

const state = {

  products: [],
  cart: [],
  error: false,
  loading: true,
  availableFormats
}

const getters = {
  listProducts: (state) => (format) => {
    return state.products.filter(item => item.format === format)
  },
  listCart: state => {
    return state.cart.map(({id, quantity}) => {
       const dataItem = state.products.find(item => item.id === id)
       return {
        id,
        format: dataItem.format,
        image: dataItem.image,
        name: dataItem.name,
        quantity,
        price: dataItem.price,
        subTotal: (quantity * dataItem.price).toFixed(2)
       }
    })
  },
  numCartItems: (state, getters) => {
    return getters.listCart.reduce((num, item) => num + item.quantity, 0)
  },  
  totalCart: (state, getters) => {
    return getters.listCart.reduce((total, item) => total + (item.quantity * item.price), 0)
  }
}

const actions = {
  async FETCH_ITEMS ({ commit, getters, state }, format) {

    if ((typeof (state.availableFormats.find(k => k == format)) !== "undefined") 
        && (getters.listProducts(format).length == 0)){
      commit('TOGGLE_LOADING', true)

      await http.get('comics', {
  //    await http.get('/static/datademo.json', {
        params: {
            apikey: apiKey,
            orderBy: '-focDate',
            format: format,
            limit: 30
          }
      })
      .then(response => {
        commit('TOGGLE_LOADING', false)
        commit('LOAD_ITEMS', {data: response.data.data, format: format})
      })
      .catch(e => {
        commit('FIRE_ERROR')
      })
    }   
  },

  ADD_TO_CART ({ commit, state }, id) {          
    const productsItem = state.products.find(item => item.id == id)

    if (productsItem.stock > 0) {
      const cartItem = state.cart.find(item => item.id == id)
      if (!cartItem) {
        commit('ADD_ITEM_TO_CART', id)
      }
      else {
        commit('INCREMENT_ITEM_UNITS', id)
      }

      commit('DECREMENT_ITEM_STOCK', id)
    }
  },

  REMOVE_FROM_CART ({ commit, state }, id) {
    const cartItem = state.cart.find(item => item.id === id)
    commit('REMOVE_ITEM_FROM_CART', id)
    commit('INCREMENT_ITEM_STOCK', {id: id, quantity: cartItem.quantity})
  },

  VALIDATE_CHECKOUT ({ commit }){
    commit('CLEAR_ITEMS')
  },

  EMPTY_CART ({ commit }){
    state.cart.forEach((item) => {
      commit('INCREMENT_ITEM_STOCK', {id: item.id, quantity: item.quantity})
    })
    commit('CLEAR_ITEMS')
  }
}

const mutations = {

  LOAD_ITEMS (state, { data , format}) {
    for (var i = 0; i < data.results.length; i++) {
      let thumb = '';

      const item = data.results[i];  
    
      const image =  typeof item.images[0] !== 'undefined' ? item.images[0].path+'/portrait_incredible.'+item.images[0].extension : '';
   
      if (typeof item.thumbnail !== 'undefined'){
        if (item.thumbnail.path.search('image_not_available') == -1){
          thumb = item.thumbnail.path+'/portrait_incredible.'+item.thumbnail.extension
        }
        else{
          if (image == '') {
            thumb = item.thumbnail.path +'.'+item.thumbnail.extension;
          }
          else{
            thumb = image;
          }
        }
      }
      state.products.push({        
        id: item.id,
        format,
        name: item.title,
        description: item.description,
        image: thumb,
        price: item.prices[0].price > 0 ? item.prices[0].price : 1.99,
        stock: Math.floor(Math.random() * 20)
      })
    }
  },
  ADD_ITEM_TO_CART (state, id) {
    state.cart.push({
      id,
      quantity: 1
    })
  },
  REMOVE_ITEM_FROM_CART (state, id) {
    const index = state.cart.findIndex(item => item.id === id)
    state.cart.splice(index, 1)
  },
  CLEAR_ITEMS (state){
    state.cart = [];
  },
  INCREMENT_ITEM_UNITS (state, id) {
    const cartItem = state.cart.find(item => item.id === id)
    cartItem.quantity++
  },
  INCREMENT_ITEM_STOCK (state, {id, quantity}) {
    const dataItem = state.products.find(item => item.id === id)
    dataItem.stock = dataItem.stock + quantity
  },
  DECREMENT_ITEM_STOCK (state, id) {
    const dataItem = state.products.find(item => item.id === id)
    dataItem.stock--
  },
  TOGGLE_LOADING (state, value) {
    state.loading = value
  },
  FIRE_ERROR (state) {
    state.error = true
    state.loading = false
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations
})

export default store
