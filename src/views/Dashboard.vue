<template>
  <Authenticated page-sub-title="Dashboard">
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
