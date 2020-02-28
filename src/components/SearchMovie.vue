<template>
	<v-container v-if="noData">
		<div class="text-xs-center">
			<h2>Can't find the movie data</h2>
		</div>
	</v-container>

	<v-container v-else grid-list-xl>
		<v-layout wrap>
			<v-flex xs4 v-for="(item, index) in movieResponse" :key="index" mb-2>
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
						<v-btn text color="green" @click="singleMovie(item.imdbID)">View</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";

export default {
	props: ["title"],
	data() {
		return {
			movieResponse: [],
			loading: true,
			noData: false
		};
	},
	methods: {
		singleMovie(title) {
			title = title.replace(/\s/g, "+").toLowerCase();
			console.log(title);
			this.$router.push("/movie/" + title);
		},

		fetchResult(value) {
			movieApi
				.fetchSingleMovie(value)
				.then(response => {
					if (response.Response === "True") {
						this.movieResponse = response.Search;
						this.noData = false;
					} else {
						this.noData = true;
					}
				})
				.catch(error => {
					console.log(error);
				});
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
