import { createApp } from "vue";
import App from "./App.vue";
import {Vuelidate} from "vuelidate";
import Vue from "vue";
import store from "@/vuex/store";
require("@/assets/styles/styles.scss");
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";



import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";




createApp(App).use(store).use(BootstrapIconsPlugin).mount("#app");

