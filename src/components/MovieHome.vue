<template>
  <div>
    <!-- <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs4 v-for="(item, index) in wholeResponse" :key="index" mb-2>
          <v-card>
            <v-img :src="item.Poster" aspect-ratio="1"></v-img>
            <v-card-title primary-title>
              <div>
                <h2>{{item.Title}}</h2>
                <div>Year: {{item.Year}}</div>
                <div>Type: {{item.Type}}</div>
                <div>IMDB-id: {{item.imdbID}}</div>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn flat color="green" @click="singleMovie(item.imdbID)">View</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted () {
  axios
    .get('https://api.themoviedb.org/3/discover/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&sort_by=popularity.desc&page=1')
    .then(res => {
      console.log(res.data.results);
    })
    .catch(error => {
      console.log(error);
    });
}
};
</script>

<style lang="scss" scoped>
</style>