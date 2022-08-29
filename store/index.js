import Vue from "vue";

export const store = Vue.observable({
  theme: false,
})

export const mutations = {
  setTheme(value) {
    store.theme = value;
  },
}
