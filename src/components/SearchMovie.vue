<template>
	<v-container grid-list-xl>
		<v-layout wrap>
			<v-flex xs4 v-for="(item, index) in movieResponse" :key="index" mb-2>
				<v-card>
					<v-img :src="imgURL + item.poster_path" aspect-ratio="1"></v-img>
					<v-card-title primary-title>{{ item.title }}</v-card-title>
					<v-card-subtitle>Date: {{ moment(item.release_date) }}</v-card-subtitle>
					<v-card-actions class="justify-center">
						<v-btn text color="green" @click="singleMovie(item.id)">View</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";
import moment from "moment";
export default {
	props: ["title"],
	data() {
		return {
			movieResponse: [],
			imgURL: "https://image.tmdb.org/t/p/w342"
		};
	},
	methods: {
		singleMovie(id) {
			// title = title.replace(/\s/g, "+").toLowerCase();
			console.log(id);
			this.$router.push("/movie/" + id);
		},

		fetchResult(value) {
			movieApi
				.SearchMovies(value)
				.then(response => {
					this.movieResponse = response;
					console.log(this.movieResponse);
				})
				.catch(error => {
					console.log(error);
				});
		},
		moment(date) {
			return moment(date).format("MMM Do YYYY");
		}
	},
	mounted() {
		this.fetchResult(this.title);
	},
	watch: {
		title(value) {
			this.fetchResult(value);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
