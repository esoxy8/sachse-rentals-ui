<template>
  <v-app>
    <default-nav-bar></default-nav-bar>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import DefaultNavBar from '@/components/DefaultNavBar.vue';

export default {
  name: 'App',
  components: {
    DefaultNavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
</style>
