<template>
  <div class="page-container">
    <input
      type="text"
      placeholder="Search For Movie"
      v-model.trim="formValue.searchedItem"
      class="search-input"
      data-id="test-search-input"
    />
    <button
      @click="handleSearch"
      class="search-button"
      data-id="test-search-button"
    >
      Search
    </button>

    <div v-if="formValue.searchedItem.length > 0">
      <GenreMovie :movieList="searchedList" />
    </div>
    <div v-else class="container">
      <GenreMovie :movieList="list" genre="Drama" />
      <div class="spacing" />
      <GenreMovie :movieList="list" genre="Action" />
      <div class="spacing" />
      <GenreMovie :movieList="list" genre="Crime" />
      <div class="spacing" />
      <GenreMovie :movieList="list" genre="Science-Fiction" />
      <div class="spacing" />
      <GenreMovie :movieList="list" genre="Thriller" />
      <div class="spacing" />
      <GenreMovie :movieList="list" genre="Mystery" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GenreMovie from "../components/GenreView.vue";

export default {
  name: "MovieList",
  components: {
    GenreMovie,
  },
  data() {
    return {
      list: [],
      searchedList: [],
      formValue: {
        searchedItem: "",
      },
    };
  },
  mounted() {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        this.list = response.data;
      })
      .catch();
  },
  methods: {
    handleSearch() {
      console.log("this/.ff", this.formValue);
      axios
        .get(
          `https://api.tvmaze.com/search/shows?q=${this.formValue.searchedItem}`
        )
        .then(
          (response) => (this.searchedList = response.data.map((i) => i.show))
        );
    },
  },
  // computed: {
  //   getFList(type) {
  //     return this.list
  //       .filter((i) => i.genres.includes(type) && i.rating.average > 8.3)
  //       .sort((a, b) => b.rating.average - a.rating.average);
  //   },
  // },
};
</script>

<style scoped>
.spacing {
  margin-bottom: 10px;
  margin-top: 10px;
  height: 10px;
}

.search-input {
  height: 40px;
  min-width: 300px;
  border: 0;
  box-shadow: 0 0 1px 1px rgb(0 0 0 / 20%);
  border-radius: 3px;
  padding: 8px 5px;
  font-size: 18px;
}

.search-button {
  height: 40px;
  width: 70px;
  border: 0;
  margin-left: 5px;
  box-shadow: 0 0 1px 1px rgb(0 0 0 / 20%);
  border-radius: 3px;
  font-size: 18px;
}

.container {
  margin-top: 40px;
}

@media (max-width: 786px) {
  .search-input {
    min-width: 240px;
  }
}
</style>
