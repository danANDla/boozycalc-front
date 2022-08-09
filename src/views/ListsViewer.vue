<template>
  <basic-template :items="items" @getItems="getData"></basic-template>
</template>

<script>

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

import BasicTemplate from "@/components/MainAppComponents/BasicTemplate";
export default {
  name: "listsViewer",
  components: {BasicTemplate},
  data(){
    return{
      items: this.$store.state.items.ingredients
    }
  },
  methods:{
    getData: function(){
      sendReq("ingredients/all", "GET", "")
          .then(response => {
            if(response.status == 401){
              console.log("401 error")
            }
            return response
          })
          .then(response => response.json())
          .then(data =>{
            this.$store.commit('items/updateIngredients', data)
            this.items = this.$store.state.items.ingredients
          })
    }
  }
}
</script>

<style scoped>
</style>