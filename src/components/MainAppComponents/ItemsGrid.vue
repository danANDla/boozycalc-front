<template>
  <div class="grid-container">

    <div class="item-container" v-for="item in items">
      <div class="item-navbar">
        <div class="nav-option">
          <div class="nav-icon">
            <font-awesome-icon icon="fa-solid fa-bars"/>
          </div>
        </div>
        <div class="nav-option">
          <div class="nav-icon-trash">
            <font-awesome-icon icon="fas fa-trash"/>
          </div>
        </div>
      </div>
      <div class="item-body">
        <div>{{ item.name }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>
    <div class="add-item-btn-container">
      <font-awesome-icon icon="fas fa-plus"></font-awesome-icon>
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

.item-container, .add-item-btn-container{
  background-color: #69AAB8;
  font-size: 20px;
  border: skyblue 1px solid;
  height: 200px;

  display: grid;
  grid-template-rows: 40px 1fr;
}

.add-item-btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  font-size: 30px;
}

.add-item-btn-container:hover{
  background-color: #CFE5EE;
  color: skyblue;
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

.item-container {
  pointer-events: none;
  transition: all 0.2s;
}

.nav-option > .nav-icon-trash  {
  pointer-events: auto;
}

.item-container:hover {
  background: darkred;
}
</style>