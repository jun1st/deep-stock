<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Deep Stock</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link">Stocks</router-link>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>Stocks List</h2>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
