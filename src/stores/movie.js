import { defineStore } from "pinia";
import axios from "axios";

export const useMoviesStore = defineStore({
  id: "moviesStore",
  state: () => ({
    moviesList: [],
  }),
  actions: {
    getMovieList() {
      axios
        .get("https://api.tvmaze.com/shows")
        .then((response) => {
          this.moviesList = response.data;
        })
        .catch();
    },
  },
});
