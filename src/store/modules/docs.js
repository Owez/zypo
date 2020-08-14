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
  ],
  cur_doc: { id: 23213, tagline: "This is a work-in-progress feature", content: "This contains the main content for this feature" }
};

const getters = {
  all_docs: (state) => state.docs,
  cur_doc: (state) => state.cur_doc // NOTE: this should be updated with current document and such
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};