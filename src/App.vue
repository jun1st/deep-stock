<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a href="#" class="navbar-brand">Deep Stock</a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >指数</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a href="/stocks?type=hs300" class="dropdown-item">沪深 300</a>
                        <a href="/stocks?type=zz500" class="dropdown-item">中证 500</a>
                    </div>
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
