<template>
	<v-container>
		<v-layout wrap>
			<v-flex xs12 mr-1 ml-1>
				<v-card>
					<v-img :src="imgURL + singleMovie[0].poster_path" aspect-ratio="2"></v-img>
					<v-card-title primary-title>
						<div>
							<h2 class="headline mb-0">{{ singleMovie[0].title }}</h2>
							<p>Date: {{ singleMovie[0].release_date }}</p>
							<p>{{ singleMovie[0].overview }}</p>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn text color="green" @click="back">back</v-btn>
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
			singleMovie: "",
			imgURL: "https://image.tmdb.org/t/p/original"
		};
	},
	mounted() {
		movieApi
			.fetchSingleMovie(this.title)
			.then(response => {
				this.singleMovie = response;
				console.log(this.singleMovie);
			})
			.catch(error => {
				console.log(error);
			});
	},
	methods: {
		back() {
			this.$router.push("/");
		}
	}
};
</script>
<style lang="scss" scoped>
</style>