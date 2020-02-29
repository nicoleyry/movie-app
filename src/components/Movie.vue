<template>
	<v-container>
		<v-layout wrap>
			<v-flex xs12 mr-1 ml-1>
				<v-card>
					<v-img :src="imgURL + singleMovie[0].poster_path" aspect-ratio="2"></v-img>
					<v-card-title primary-title>{{ singleMovie[0].title }}</v-card-title>
					<v-card-subtitle class="subtitle-1">{{ moment(singleMovie[0].release_date) }}</v-card-subtitle>
					<v-card-text class="body-1 font-italic">{{ singleMovie[0].overview }}</v-card-text>
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
import moment from "moment";
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
		},
		moment(date) {
			return moment(date).format("MMM Do YYYY");
		}
	}
};
</script>
<style lang="scss" scoped>
</style>