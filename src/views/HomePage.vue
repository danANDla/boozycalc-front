<template>
  <div class="body-container">
    <header>
      <boozy-header></boozy-header>
    </header>

    <main>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </main>

    <nav>
      <nav-menu></nav-menu>
    </nav>

    <aside>Sidebar</aside>
    <footer>Footer</footer>
  </div>
</template>

<script>
import TypedItemSection from "@/components/MainAppComponents/TypedItemSection";
import ItemsGrid from "@/components/MainAppComponents/ItemsGrid";
import RectButton from "@/components/UI/RectButton";
import NavMenu from "@/components/NavMenu";
import BoozyHeader from "@/components/TheHeader";

export default {
  name: "BasicTemplate",
  components: {BoozyHeader, RectButton, ItemsGrid, TypedItemSection, NavMenu},
  methods: {
  }
}
</script>

<style scoped>
.body-container {
  height: 100vh;
  display: grid;
  grid-template-areas:
      'header header header'
      'nav content sidebar'
      'footer footer footer';
  grid-template-columns: 2fr 6fr 1fr;
  grid-template-rows: 80px 1fr 80px;
}

header, footer, nav, aside, main {
  border: skyblue 1px solid;
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
  display: flex;
  justify-content: end;
}


main {
  grid-area: content;
  background-color: #343434;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}


footer {
  grid-area: footer;
}

aside {
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
