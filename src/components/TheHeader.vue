<template>
  <div class="container">
    <router-link  to ="/" class="logo">
      BoozyCalc
    </router-link>

    <ul class="nav">
      <li>
        <router-link to="/"> Home </router-link>
      </li>
      <li>
        Log in
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BoozyHeader",
  components: {}

}
</script>

<style scoped>

.container{
  height: 100%;
  padding: 0 30px;
  background-color: #2E5B88BB;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo{
  font-size: x-large;
  font-weight: bold;
}

.container ul{
  list-style: none;
  display: flex;
}

.container ul li{
  margin-left: 25px;
}

.container ul li a:hover{
  color: navajowhite;
}

.container a{
  color: whitesmoke;
  text-decoration: none;
}
</style>