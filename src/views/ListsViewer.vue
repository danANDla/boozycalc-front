<template>
  <dialog-window v-model:show="ingrsDialogVisible">
    <div class="form-container">
      <add-ingredient-form @submitData="sendIngredient"></add-ingredient-form>
    </div>
  </dialog-window>
  <dialog-window v-model:show="ingrsSureVisible">
    <div class="form-container">
      <are-you-sure @sure="sure" @notsure="notsure"> delete {{ ingrSureId }}</are-you-sure>
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
      <typed-item-section v-bind:items="ingredients" type-name="" @addItem="showIngredientsDialog"
                          @deleteItem="showSureIngredient"></typed-item-section>
    </div>
    <div v-else>
      <typed-item-section v-bind:items="cocktails" type-name=""></typed-item-section>
    </div>
  </div>
</template>

<script>

import TypedItemSection from "@/components/listsViewer/TypedItemSection";
import Toggle from "@vueform/toggle"
import axios from 'axios';
import AddIngredientForm from "@/components/AddIngredientForm";
import RectButton from "@/components/UI/RectButton";
import DialogWindow from "@/components/UI/DialogWindow";
import AreYouSure from "@/components/AreYouSure";

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
  components: {AreYouSure, DialogWindow, RectButton, AddIngredientForm, TypedItemSection, Toggle},
  data() {
    return {
      ingredients: this.$store.state.items.ingredients,
      cocktails: this.$store.state.items.cocktails,
      api_url: "http://127.0.0.1:8080/api/",
      page: 0,
      ingrsDialogVisible: false,
      ingrsSureVisible: false,
      ingrSureId: Number
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
    showIngredientsDialog(id) {
      this.ingrsDialogVisible = true
    },
    tabsHandler: function (r) {
      this.page = r.tab.toLowerCase()
    },
    async sendIngredient(newIngredient) {
      const response = await axios.post(this.api_url + 'ingredients/add', newIngredient)
          .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
          })
      if (response.status === 200) {
        console.log(response.status.valueOf())
        await this.fetchIngredients()
        this.ingrsDialogVisible = false
      }
    },
    showSureIngredient(id) {
      this.ingrsSureVisible = true
      this.ingrSureId = id
    },
    sure: function () {
      this.deleteIngredient(this.ingrSureId)
      this.ingrsSureVisible = false
    },
    notsure: function () {
      this.ingrsSureVisible = false
    },
    async deleteIngredient(id) {
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
.form-container {
  width: 350px;
}

.list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-container div {
  width: 100%;
}
</style>