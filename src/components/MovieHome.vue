<template>
	<div>
		<v-container grid-list-xl>
			<v-layout wrap>
				<v-flex xs4 v-for="(item, index) in results" :key="index" mb-2>
					<v-card>
						<v-img :src="imgURL + item.poster_path" aspect-ratio="1"></v-img>
						<v-card-title primary-title>{{ item.title }}</v-card-title>
						<v-card-subtitle>Date: {{ moment(item.release_date) }}</v-card-subtitle>
						<v-card-actions class="justify-center">
							<v-btn text color="green" @click="singleMovie(item.title)">View</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import movieApi from "@/services/MovieApi";
import moment from "moment";
export default {
	data() {
		return {
			results: [],
			imgURL: "https://image.tmdb.org/t/p/w342/"
		};
	},
	mounted() {
		this.fetchResult();
	},
	methods: {
		fetchResult() {
			movieApi
				.fetchMovies()
				.then(response => {
					this.results = response;
					console.log(this.results);
				})
				.catch(error => {
					console.log(error);
				});
		},
		singleMovie(title) {
			title = title.replace(/\s/g, "+").toLowerCase();
			console.log(title);
			this.$router.push("/movie/" + title);
		},
		moment(date) {
			return moment(date).format("MMM Do YYYY");
		}
	}
};
</script>

<style lang="scss" scoped>
</style>