<template>
  <Authenticated page-sub-title="Dashboard">
    <router-view />
    <template #footer>
      <p>© 2020 This Dot. All Rights Reserved.</p>
    </template>
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/layouts/Authenticated';

export default {
  nam: 'Dashboard',
  components: { Authenticated },
};
</script>
