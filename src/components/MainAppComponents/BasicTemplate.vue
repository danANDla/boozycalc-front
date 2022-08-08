<template>
  <div class="body-container">
    <header>Header</header>
    <main>
      <div class="content-container">
        <typed-item-section :items="items" type-name="type 1"> </typed-item-section>
        <typed-item-section :items="items" type-name="type 2"> </typed-item-section>
      </div>
    </main>
    <nav>
      <div class="nav-container">
        Navigation
        <rect-button @click.native="update" btn-tyoe="purple"> get data </rect-button>
      </div>
    </nav>
    <aside>Sidebar</aside>
    <footer>Footer</footer>
  </div>
</template>

<script>
import TypedItemSection from "@/components/MainAppComponents/TypedItemSection";
import ItemsGrid from "@/components/MainAppComponents/ItemsGrid";
import RectButton from "@/components/UI/RectButton";
export default {
  name: "BasicTemplate",
  components: {RectButton, ItemsGrid, TypedItemSection},
  data(){
    return{
      items: this.$store.state.items.ingredients
    }
  },
  methods:{
    update: function(){
      this.$emit('getItems')
    }
  }
}
</script>

<style scoped>
.body-container{
  height: 100vh;
  display: grid;
  grid-template-areas:
      'header header header'
      'nav content sidebar'
      'footer footer footer';
  grid-template-columns: 2fr 5fr 1fr;
  grid-template-rows: 80px 1fr 80px;
}

header, footer, nav, aside, main{
  border: skyblue 1px solid;
}

header{
  grid-area: header;
}
nav{
  grid-area: nav;
  padding-left: 30px;
  padding-right: 30px;
}
.nav-container{
  background-color: steelblue;
  height: 100%;
  width: 100%;
}
main{
  grid-area: content;
  background-color: #343434;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.content-container{
  display: flex;
  flex-direction: column;
  gap: 18px;

}
footer{
  grid-area: footer;
}
aside{
  grid-area: sidebar;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background-color: #d4aa70;
  border-radius: 100px;
}
</style>