<template>
  <v-app>
    <movie-home/>
  </v-app>
</template>

<script>
import MovieHome from '@/components/MovieHome';
export default {
  name: "App",

  components: {
    MovieHome
  },

  data: () => ({
    //
  })
};
</script>
