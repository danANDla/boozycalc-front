<template>
  <div class="grid-container">

    <div class="grid-item" v-for="item in items">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
      <div>{{ item.description }}</div>
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
.grid-container{
  padding: 10px;
  display: grid;

  gap: 10px;
  grid-template-columns: repeat(auto-fill, 200px);
}

.grid-item{
  background-color: steelblue;
  font-size: 20px;
  padding: 20px;
  border: skyblue 1px solid;
  height: 200px;

  overflow-y: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 1px;
}

</style>