<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrCLVFxspMjR9vel4ADGO4Zh2i6x50OdaWkXFLltcWrTIaZe0Mz9WEe_SQEPkgBBmWq4&usqp=CAU"
      :style="{ height: '80px' }"
    />
    <RouterLink to="/"><h1>Movie Land</h1></RouterLink>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (max-width: 786px) {
  h1 {
    font-size: 30px;
  }
}
@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
