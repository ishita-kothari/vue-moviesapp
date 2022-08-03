<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <label v-if="genre">{{ genre }}</label>
    <ul class="listWrapper">
      <li v-for="item in updateProps" :key="item.id" class="listItem">
        <RouterLink :to="`/movie/${item.id}`">
          <img v-if="item.image !== null" :src="item.image.medium" />
          <img
            v-else
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrCLVFxspMjR9vel4ADGO4Zh2i6x50OdaWkXFLltcWrTIaZe0Mz9WEe_SQEPkgBBmWq4&usqp=CAU"
            :style="{ height: '372px' }"
          />

          <h2>Name: {{ item.name }}</h2>
          <h2>Rating: {{ item.rating.average }}</h2>
          <h2 class="genre">Genre: {{ item.genres.join(", ") }}</h2>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GenreMovie",

  props: {
    movieList: {
      type: Array,
      required: true,
    },
    genre: {
      type: String,
    },
  },

  computed: {
    updateProps() {
      return this.genre
        ? this.movieList
            .filter(
              (i) => i.genres.includes(this.genre) && i.rating.average > 8.3
            )
            .sort((a, b) => b.rating.average - a.rating.average)
        : this.movieList;
    },
  },
};
</script>

<style scoped>
.listWrapper {
  display: flex;
  overflow: auto;
}

.listItem {
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
  list-style: none;
  padding: 10px;
  flex-shrink: 0;
  margin: 10px;
}

img {
  width: 100%;
}

.genre {
  word-break: break-word;
}

ul {
  padding: 0;
}

label {
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
  margin-right: 15px;
}

@media (max-width: 786px) {
  .listItem {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media (min-width: 787px) {
  .listItem {
    width: 23%;
  }

  .listWrapper::-webkit-scrollbar {
    height: 0;
  }
}
</style>
