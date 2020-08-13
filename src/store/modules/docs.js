// import axios from "axios";

const state = {
  docs: [
    {
      id: 1,
      title: "This is my first document",
      tagline: "First few characters or custom short description",
      // content: "The long content part of this thing!",
    },
    {
      id: 2,
      title: "Another title",
      tagline: "Fsome other oneon",
      // content:
      //   "The long content ptent part of thistent part of thistent part of thistent part of thisart of this thing!",
    },
  ]
};

const getters = {
  all_docs: (state) => state.docs
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};