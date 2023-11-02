<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/people">People</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 0 2rem;
  background: #ffffff;

  nav {
    margin-left: auto;

    a {
      font-size: 24px;
      padding: 0 12px;
      color: #283f69;
      border-left: 1px solid #000000;

      &:first-of-type {
        border-left: none;
      }

      &:hover {
        color: #f7ab05;
        transition: color 200ms ease-in-out;
      }
    }

    .router-link-exact-active {
      color: #f7ab05;
      text-decoration: underline;
    }
  }
}
</style>
