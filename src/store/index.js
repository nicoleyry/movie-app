import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    searchresults: [],
    details: [],
    loading: true
  },
  mutations: {
    CLEAR_MOVIES: (state) => {
      state.movies = [];
    },
    FETCH_MOVIES: (state, payload) => {
      for (var i = 0; i < payload.length; i++) {
        state.movies.push(payload[i]);
      }
    },
    FETCH_RESULTS: (state, payload) => {
      state.searchresults = payload;
    },
    FETCH_DETAILS: (state, payload) => {
      state.details = payload;
    },
    CHANGE_LOADING_STATE: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    loadMovies: ({ commit }) => {
      commit("CLEAR_MOVIES");
      axios
        .get("https://api.themoviedb.org/3/discover/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&sort_by=popularity.desc&page=1")
        .then(res => {
          commit("FETCH_MOVIES", res.data.results);
          axios
            .get("https://api.themoviedb.org/3/discover/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&sort_by=popularity.desc&page=2")
            .then(res => {
              commit("FETCH_MOVIES", res.data.results);
              axios
                .get("https://api.themoviedb.org/3/discover/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&sort_by=popularity.desc&page=3")
                .then(res => {
                  commit("FETCH_MOVIES", res.data.results);
                  axios
                    .get("https://api.themoviedb.org/3/discover/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&sort_by=popularity.desc&page=4")
                    .then(res => {
                      commit("FETCH_MOVIES", res.data.results);
                      axios
                        .get("https://api.themoviedb.org/3/discover/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&sort_by=popularity.desc&page=5")
                        .then(res => {
                          commit("FETCH_MOVIES", res.data.results);
                          commit("CHANGE_LOADING_STATE", false);
                        });
                    });
                });
            });
        });
    },
    loadResults: ({ commit }, payload) => {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&query=" + payload)
        .then(res => {
          commit("FETCH_RESULTS", res.data.results);
          commit("CHANGE_LOADING_STATE", false);
        });
    },
    loadDetails: ({ commit }, payload) => {
      axios
        .get("https://api.themoviedb.org/3/movie/" + payload + "?api_key=8e70e008335b9cf0fe44b80e1c509a0d")
        .then(res => {
          commit("FETCH_DETAILS", res.data);
          commit("CHANGE_LOADING_STATE", false);
        });
    },
    loadingState: ({ commit }) => {
      commit("CHANGE_LOADING_STATE", true);
    }
  },
  modules: {}
});
