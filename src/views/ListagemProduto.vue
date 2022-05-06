<template>
  <div class="container">
    <h1>Bebidas</h1>
    <div>
      <button>Adicionar</button>
    </div>
    <br>
    <div class="item-produto">
      <div style="display: flex; align-items: center;">
        <img src="../assets/pizza1.png" width="80px">
        <span class="dado-produto">Coca cola</span>
        <span class="dado-produto">Preço</span>
      </div>
      <button class="excluir">Excluir</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .container {
    width: 1000px;
    margin: 1em auto;
    display: flex;
    flex-flow: column wrap;
    /* background-color: green; */
  }

  .item-produto {
    background-color: gray;
    display: flex;
    align-items: center;
    font-size: 2em;
    justify-content: space-between;
  }
  
  .dado-produto{
    margin: 0 1em;
  }

  .excluir{
    margin-right: 2em;
  }
</style>