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
  background: $white;
  border-radius: 0 0 12px 12px;

  nav {
    margin-left: auto;

    a {
      font-size: 24px;
      padding: 0 12px;
      color: $primary;
      border-left: 1px solid $black;

      &:first-of-type {
        border-left: none;
      }

      &:hover {
        color: $secondary;
        transition: color 200ms ease-in-out;
      }
    }

    .router-link-exact-active {
      color: $secondary;
      text-decoration: underline;
    }
  }
}
</style>
