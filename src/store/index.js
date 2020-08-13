import Vuex from "vuex";
import Vue from "vue";
import docs from "./modules/docs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    docs
  }
});
