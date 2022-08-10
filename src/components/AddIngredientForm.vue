<template>
  <form @submit.prevent>
    <div class="container">
      <div>
        <my-input
            v-model="ingredient.name"
            type="text"
            placeholder="item name"
        />
      </div>
      <div>
        <my-input
            v-model="ingredient.description"
            type="text"
            placeholder="description"
        />
      </div>
      <div class="btn-container">
        <rect-button btn-type="purple"> add </rect-button>
      </div>
    </div>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import RectButton from "@/components/UI/RectButton";
export default {
  name: "AddIngredientForm",
  components: {RectButton, MyInput},
  data(){
    return{
      ingredient:{
        name: '',
        description: ''
      }
    }
  }

}
</script>

<style scoped>
form{
  width: 100%;
  padding: 10px;
  display: flex;
  background-color: #3D5E6B;
  justify-content: center;
}
.container{
  width: 100%;
  display:flex;
  flex-direction: column;
}
.container div{
  padding: 10px;
}

.btn-container{
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>