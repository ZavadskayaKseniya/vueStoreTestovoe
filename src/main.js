import { createApp } from "vue";
import App from "./App.vue";
import {Vuelidate} from "vuelidate";
import Vue from "vue";
import store from "@/vuex/store";
require("@/assets/styles/styles.scss");



import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";





createApp(App).use(store).mount("#app");
