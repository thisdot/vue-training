<template>
  <Authenticated>
    <h2>Dashboard default</h2>
    <router-view />
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from "@/layouts/Authenticated";
export default {
  nam: "Dashboard",
  components: { Authenticated }
};
</script>
