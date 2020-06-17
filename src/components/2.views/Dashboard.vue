<template>
  <Authenticated page-sub-title="Dashboard">
    <DashboardDefault />
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/components/1.layouts/Authenticated';
import DashboardDefault from '@/components/3.sections/dashboard/Default';

export default {
  nam: 'Dashboard',
  components: { Authenticated, DashboardDefault },
};
</script>

<style lang="scss" scoped></style>
