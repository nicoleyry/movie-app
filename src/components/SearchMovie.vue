<template>
	<v-container grid-list-xl>
		<v-layout wrap>
			<v-flex xs4 v-for="(item, index) in movieResponse" :key="index" mb-2>
				<v-card>
					<v-img :src="imgURL + item.poster_path" aspect-ratio="1"></v-img>
					<v-card-title primary-title>
						<div>
							<h2>{{item.title}}</h2>
								<div>Date: {{item.release_date}}</div>
						</div>
					</v-card-title>

					<v-card-actions class="justify-center">
						<v-btn text color="green" @click="singleMovie(item.title)">View</v-btn>
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
			imgURL: "https://image.tmdb.org/t/p/w342/"
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
					this.movieResponse = response;
					console.log(this.movieResponse);
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
