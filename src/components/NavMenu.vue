<template>
  <div class="container">
    <div class="menu">
      <div class="item">
        <menu-nav-button>Ingredients | Cocktails</menu-nav-button>
      </div>
      <div class="item">
        <menu-nav-button>Stock Manager</menu-nav-button>
      </div>
      <div class="item">
        <menu-nav-button>Parties</menu-nav-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  components: {}

}
</script>

<style scoped>
.container{
  width: 60%;
  padding-top: 200px;
}
.menu{
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 10px;
  background-color: black;
  color: black;
  align-items: center;
  justify-content: start;
}

.item{
  width: 100%;
  display: flex;
  justify-content: start;
  background-color: white;
}
</style>