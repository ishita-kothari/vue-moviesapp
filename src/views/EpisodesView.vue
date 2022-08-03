<template>
  <div class="button-group">
    <span>Seasons: </span>
    <button
      v-for="season in seasons"
      :key="season.id"
      @click="getFilteredData(season.number)"
      class="action-button"
    >
      {{ season.number }}
    </button>
  </div>
  <div
    class="flexLayout episode-wrapper"
    v-for="episode in filteredEpisodes"
    :key="episode.id"
  >
    <img :src="episode.image.medium" v-if="episode.image" />
    <div class="episode-detail">
      <p v-html="episode.summary" />
      <h3 :style="{ 'margin-top': '15px' }">
        Rating: {{ episode.rating.average }}
      </h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EpisodeList",
  data() {
    return {
      episodes: [],
      seasons: [],
      filteredEpisodes: [],
    };
  },
  props: {
    movieId: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    axios
      .get(`https://api.tvmaze.com/shows/${this.movieId}/episodes`)
      .then((res) => (this.episodes = res.data));

    axios
      .get(`https://api.tvmaze.com/shows/${this.movieId}/seasons`)
      .then((res) => (this.seasons = res.data));
  },
  methods: {
    getFilteredData(selectedItem) {
      console.log("selecte", selectedItem, this.episodes);
      this.filteredEpisodes = this.episodes.filter(
        (i) => i.season === selectedItem
      );
    },
  },
};
</script>

<style scoped>
.action-button {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(0 189 132);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border: 0;
  margin-left: 10px;
}

.button-group {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}

.episode-wrapper {
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  .episode-detail {
    padding-left: 20px;
  }
}
</style>
