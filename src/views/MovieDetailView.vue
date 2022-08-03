<template>
  <div class="page-container">
    <div v-for="item in list" :key="item.id">
      <div class="flexLayout">
        <img :src="item.image.original" class="movie-image" />
        <div class="details">
          <h1>{{ item.name }}</h1>
          <p v-html="item.summary" />
          <hr />
          <h3 class="sub-info"><span>Type:</span> {{ item.type }}</h3>
          <h3 class="sub-info"><span>Language:</span> {{ item.language }}</h3>
          <h3 class="sub-info">
            <span>Genre:</span> {{ item.genres.join(", ") }}
          </h3>
          <h3 class="sub-info"><span>Premiered:</span> {{ item.premiered }}</h3>
          <h3 class="sub-info"><span>Ended:</span> {{ item.ended }}</h3>
          <h3 class="sub-info">
            <span>Rating:</span> {{ item.rating.average }}
          </h3>
        </div>
      </div>
      <!-- <p>{{ item.id }}</p> -->
      <hr />
      <EpisodeList :movieId="item.id" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EpisodeList from "./EpisodesView.vue";

export default {
  name: "MovieDetail",
  data() {
    return {
      list: [],
    };
  },
  components: {
    EpisodeList,
  },
  mounted() {
    axios
      .get(`https://api.tvmaze.com/shows/${this.$route.params.id}`)
      .then((response) => {
        console.log("res", response);
        this.list = [response.data];
      })
      .catch();
  },
  methods: {
    filterBy(type) {
      if (type !== "All") {
        this.filteredList = this.list
          .filter((i) => i.genres.includes(type) && i.rating.average > 8.3)
          .sort((a, b) => b.rating.average - a.rating.average);
      } else {
        this.filteredList = this.list;
      }
    },
  },
};
</script>

<style scoped>
.sub-info {
  font-weight: bold;
  padding: 10px;
}

.sub-info span {
  font-size: 14px;
}
@media (max-width: 786px) {
  .listItem {
    width: 100%;
    margin-bottom: 20px;
  }

  .movie-image {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .details {
    margin-left: 40px;
    width: 100%;
  }

  .movie-image {
    height: 600px;
  }
}
</style>
