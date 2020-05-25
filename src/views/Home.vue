<template>
  <Static>
    <h1>Home</h1>
    <router-view />
    <router-link to="/dashboard">Login</router-link>
  </Static>
</template>

<script>
// @ is an alias to /src
import Static from "@/layouts/Static";

export default {
  name: "Home",
  components: { Static }
};
</script>
