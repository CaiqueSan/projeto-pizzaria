<template>
  <nav class="nav-bar">
    <router-link to="/"><h1>Pizzaria</h1></router-link>
    <ul class="nav-menu">
      <router-link to="/"><li>Controle de pedidos</li></router-link>
      <router-link to="/pizzas"><li>Pizzas</li></router-link>
      <router-link to="/bebidas"><li>Bebidas</li></router-link>
    </ul>
  </nav>  
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  width: 100%;
  background-color: tomato;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
}

ul {
  list-style-type: none;
}

.nav-menu {
  display: flex;
}

li {
  margin: 1em;
}

li:hover{
  color: black;
  font-weight:500;
}

a {
  color: white;
  text-decoration: none;
}
</style>