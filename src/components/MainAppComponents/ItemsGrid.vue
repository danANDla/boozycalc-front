<template>
  <div class="grid-container">

    <div class="item-container" v-for="item in items">
      <div class="item-navbar">
        <div class="nav-option">
          <font-awesome-icon icon="fa-solid fa-bars"/>
        </div>
        <div class="nav-option">
          <font-awesome-icon icon="fas fa-trash"/>
        </div>
      </div>
      <div class="item-body">
        <div>{{ item.name }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ItemsGrid",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.grid-container {
  padding: 10px;
  display: grid;

  gap: 10px;
  grid-template-columns: repeat(auto-fill, 200px);
}

::-webkit-scrollbar {
  width: 1px;
}

.item-container {
  background-color: #69AAB8;
  font-size: 20px;
  border: skyblue 1px solid;
  height: 200px;

  display: grid;
  grid-template-rows: 40px 1fr;
}

.item-navbar {
  padding: 10px 10px;
  display: flex;
  justify-content: end;
}

.nav-option {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.item-body {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>