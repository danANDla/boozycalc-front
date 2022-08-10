<template>
  <Toggle v-model="page"></Toggle>
  <div class="content-container" v-if="page===true">
    <typed-item-section v-bind:items="ingredients" type-name="Ingredients"></typed-item-section>
  </div>
  <div class="content-container" v-else>
    <typed-item-section v-bind:items="cocktails" type-name="Cocktails"></typed-item-section>
  </div>
</template>

<script>

import TypedItemSection from "@/components/MainAppComponents/TypedItemSection";
import Toggle from "@vueform/toggle"
import axios from 'axios';

async function sendReq(url, reqMethod, params) {
  url = "http://127.0.0.1:8080/api/" + url;
  if (reqMethod === "GET") {
    return await fetch(url, {
      method: reqMethod,
    })
  } else {
    return await fetch(url, {
      method: reqMethod,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(params)
    })
  }
}

export default {
  name: "listsViewer",
  components: {TypedItemSection, Toggle},
  data() {
    return {
      ingredients: this.$store.state.items.ingredients,
      cocktails: this.$store.state.items.cocktails,
      api_url: "http://127.0.0.1:8080/api/",
      page: false
    }
  },
  methods: {
    async fetchIngredients() {
      try {
        const response = await axios.get(this.api_url + 'ingredients/all')
        console.log(response)
        this.$store.commit("items/updateIngredients", response.data)
        this.ingredients = this.$store.state.items.ingredients
      } catch (e) {
        alert(e.message)
      }
    },
    async fetchCocktails() {
      try {
        const response = await axios.get(this.api_url + 'cocktails/all')
        console.log(response)
        this.$store.commit("items/updateCocktails", response.data)
        this.cocktails = this.$store.state.items.cocktails
      } catch (e) {
        alert(e.message)
      }
    },
  },
  mounted() {
    console.log("Fetching")
    this.fetchIngredients()
    this.fetchCocktails()
  }
}
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>