<template>
  <div class="section-container">
    <div class="section-header"> {{this.typeName}}  </div>
    <div class="section-body">
      <items-grid :items="items"></items-grid>
    </div>
  </div>
</template>

<script>
import ItemsGrid from "@/components/MainAppComponents/ItemsGrid";
export default {
  name: "TypedItemSection",
  components: {ItemsGrid},

  props: {
    typeName:{
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
  }
}
</script>

<style scoped>
.section-container{
  background-color: slategray;
  display: flex;
  flex-direction: column;
}
.section-header{
  font-size: 30px;
  padding: 10px;
}
.section-body{
  padding: 10px;
}

</style>