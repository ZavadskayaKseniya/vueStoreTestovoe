import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";



let store = new Vuex.Store( {
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products=products;
        },
        SET_TO_CART: (state, product) => {
            state.cart.push(product);
        },
        REMOVE_FROM_CART: (state, id)=> {
            return state.cart.filter((item) => {
                return item.id===id;
            });
        }

    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}) {
            return axios("http://localhost:3000/products", {
                method: "GET"
            })
                .then((products) => {

                    commit("SET_PRODUCTS_TO_STATE", products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });

        },
        ADD_TO_CART({commit}, product) {
            commit("SET_TO_CART", product);
        },
        DELETE_FROM_CART({commit}, id) {
            commit("REMOVE_FROM_CART",id);
        }

    },
    getters:{
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },


    }
});

export default store;