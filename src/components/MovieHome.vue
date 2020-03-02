<template>
	<v-container v-if="loading">
		<div class="text-xs-center">
			<v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
		</div>
	</v-container>
	<v-container v-else grid-list-xl>
		<v-layout wrap>
			<v-flex xs4 v-for="(movie, index) in movies" :key="index" mb-2>
				<v-card>
					<v-img :src="imgURL + movie.poster_path" aspect-ratio="1"></v-img>
					<v-card-title primary-title>{{ movie.title }}</v-card-title>
					<v-card-subtitle>Date: {{ moment( movie.release_date) }}</v-card-subtitle>
					<v-card-text>Rank: {{ index+1 }}</v-card-text>
					<v-card-actions class="justify-center">
						<v-btn text color="green" @click="singleMovie(movie.id)">View</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
	data() {
		return {
			imgURL: "https://image.tmdb.org/t/p/w342"
		};
	},
	computed: {
		...mapState(["movies", "loading"])
	},
	created() {
		this.$store.dispatch("loadMovies");
		console.log(this.movies);
		this.$store.dispatch("loadingState");
	},
	methods: {
		singleMovie(id) {
			console.log(id);
			this.$router.push("/movie/" + id);
		},
		moment(date) {
			return moment(date).format("MMM Do YYYY");
		}
	}
};
</script>

<style lang="scss" scoped>
.v-progress-circular {
	margin: 1rem;
}
</style>