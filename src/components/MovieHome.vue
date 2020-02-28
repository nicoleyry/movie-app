<template>
	<div>
		<v-container grid-list-xl>
			<v-layout wrap>
				<v-flex xs4 v-for="(item, index) in results" :key="index" mb-2>
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
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
            results: [],
			imgURL: "https://image.tmdb.org/t/p/w342/"
		};
	},
	mounted() {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&sort_by=popularity.desc"
			)
			.then(res => {
				console.log(res.data.results);
				this.results = res.data.results;
			})
			.catch(error => {
				console.log(error);
			});
	},
	methods: {
		singleMovie(title) {
			title = title.replace(/\s/g, "+").toLowerCase();
			console.log(title);
			this.$router.push("/movie/" + title);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>