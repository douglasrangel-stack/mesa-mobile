import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "@/services.js"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        login: false,
        user: {
            id: "",
            name: "",
            email: "",
            password: "",
            first_name: "",
        }
    },
    mutations: {
        UPDATE_LOGIN(state, payload) {
            state.login = payload;
        },
        UPDATE_USER(state, payload) {
            state.user = Object.assign(state.user, payload);
        }
    },
    actions: {
        getUser(context, payload) {
            return api.get(`/users/${payload}`).then(r => {

                context.commit("UPDATE_USER", r.data.data)
                context.commit("UPDATE_LOGIN", true)
            })
        },
        createUser(context, payload) {
            return api.post("/register", payload).then(r => {
                context.commit("UPDATE_USER", { id: r.data.id })
            })
        },
        getUserUpdate(context, payload) {
            return api.get(`/users/${payload}`).then(r => {

                context.commit("UPDATE_USER", r.data.data)
                context.commit("UPDATE_LOGIN", true)
            })
        },
        logoutUser(context) {
            context.commit("UPDATE_USER", {
                id: "",
                name: "",
                email: "",
                password: "",
                first_name: ""
            });
            context.commit("UPDATE_LOGIN", false);
        },
        loginUser(context, payload) {
            return api.login({
                email: payload.email,
                password: payload.password
            });
        }
    },
    modules: {}
})