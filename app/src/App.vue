<script setup>
function resetSession() {
  sessionStorage.clear()
  location.reload()
}

</script>

<template class="">
  <header class="">
    <div>
      <h1 class="flex items-center justify-center text-3xl">
        Rate Kendrick Lamar Albums (+ Not Like Us)
      </h1>
    </div>

    <div class="wrapper flex items-center justify-center p-4">
      <nav class="flex space-x-4">
        <RouterLink
          to="/"
          class="border-r border-black-500 pr-4 py-2"
          active-class="router-link-exact-active"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/MyReviews"
          class="border-r border-black-500 pr-4 py-2"
          active-class="router-link-exact-active"
        >
          My Reviews
        </RouterLink>

        <RouterLink to="/ReviewStats"   class="border-r border-black-500 pr-4 py-2" active-class="router-link-exact-active">
          Review Stats
        </RouterLink>
        <RouterLink to="/ResetAll" class="pr-4 py-2" active-class="exact-active" @click="resetSession"> Reset Reviews </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a.button-exact-active {
  color: var(--color-text);
}

nav a.exact-active:hover {
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
/*
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

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
} */
</style>
