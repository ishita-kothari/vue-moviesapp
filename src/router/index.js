import { createRouter, createWebHistory } from "vue-router";
import MovieList from "../views/MovieView.vue";
import MovieDetail from "../views/MovieDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "movie",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MovieList,
    },
    {
      path: "/movie/:id",
      name: "movieId",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MovieDetail,
    },
  ],
});

export default router;
