<template>
  <div class="content-container">
    <rect-button btn-tyoe="safe" @click="fetchIngredients"> Fetch Ingredients</rect-button>
    <typed-item-section v-bind:items="ingredients" type-name="type 1"> </typed-item-section>
  </div>
</template>

<script>

import RectButton from "@/components/UI/RectButton";
async function sendReq(url, reqMethod, params){
  url = "http://127.0.0.1:8080/api/" + url;
  if(reqMethod === "GET"){
    return await fetch(url, {
      method: reqMethod,
    })
  }
  else{
    return await fetch(url, {
      method: reqMethod,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(params)
    })
  }
}

import TypedItemSection from "@/components/MainAppComponents/TypedItemSection";
import axios from 'axios';

export default {
  name: "listsViewer",
  components: {RectButton, TypedItemSection},
  data(){
    return{
      ingredients: this.$store.state.items.ingredients,
      api_url: "http://127.0.0.1:8080/api/"
    }
  },
  methods:{
    async fetchIngredients(){
      try{
        const response = await axios.get(this.api_url + 'ingredients/all')
        console.log(response)
        this.$store.commit("items/updateIngredients", response.data)
        this.ingredients = this.$store.state.items.ingredients
      } catch (e){
        alert(e.message)
      }
    },
    // updateIngredients(){
    //   console.log("FUNC: updateIngredients")
    //   sendReq("ingredients/all", "GET", "")
    //       .then(response => {
    //         if(response.status == 401){
    //           console.log("401 error")
    //         }
    //         return response
    //       })
    //       .then(response => response.json())
    //       .then(data =>{
    //         console.log("Received:")
    //         console.log(data)
    //         this.$store.commit('items/updateIngredients', data)
    //         this.items = this.$store.state.items.ingredients
    //       })
    // },
    mounted(){
      // this.updateIngredients();
      this.fetchIngredients()
    }
  }
}
</script>

<style scoped>
.content-container{
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>