<template>
  <dialog-window v-model:show="ingrsDialogVisible">
    <div class="form-container">
      <add-ingredient-form @submitData="sendIngredient"></add-ingredient-form>
    </div>
  </dialog-window>

<!--  <Toggle v-model="page"></Toggle>-->
  <div class="list-container">
    <div>
      <my-tabz
          :data="['Cocktails', 'Ingredients']"
          main-color="#CFE5EE"
          @clickedTab="tabsHandler"
      />
    </div>
    <div v-if="page==='ingredients'">
      <typed-item-section  v-bind:items="ingredients" type-name="" @addItem="showIngredientsDialog" @deleteItem="deleteIngredient"></typed-item-section>
    </div>
    <div v-else>
      <typed-item-section v-bind:items="cocktails" type-name="" ></typed-item-section>
    </div>
  </div>
</template>

<script>

import TypedItemSection from "@/components/MainAppComponents/TypedItemSection";
import Toggle from "@vueform/toggle"
import axios from 'axios';
import AddIngredientForm from "@/components/AddIngredientForm";
import RectButton from "@/components/UI/RectButton";
import DialogWindow from "@/components/UI/DialogWindow";

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
  components: {DialogWindow, RectButton, AddIngredientForm, TypedItemSection, Toggle},
  data() {
    return {
      ingredients: this.$store.state.items.ingredients,
      cocktails: this.$store.state.items.cocktails,
      api_url: "http://127.0.0.1:8080/api/",
      page: 0,
      ingrsDialogVisible: false
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
    showIngredientsDialog(){
      this.ingrsDialogVisible = true
    },
    tabsHandler: function(r){
      this.page=r.tab.toLowerCase()
    },
    async sendIngredient (newIngredient){
      const response = await axios.post(this.api_url + 'ingredients/add', newIngredient)
      console.log(response)
      await this.fetchIngredients()
      this.ingrsDialogVisible = false
    },
    async deleteIngredient(id){
      const response = await axios.delete(this.api_url + 'ingredients?id=' + id)
      console.log(response)
      await this.fetchIngredients()
    }
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
.form-container{
  width: 350px;
}
.list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-container div{
  width: 100%;
}
</style>