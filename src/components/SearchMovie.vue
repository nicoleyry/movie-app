<template>
	<v-container grid-list-xl>
		<v-layout wrap>
			<v-flex xs4 v-for="(result, index) in searchresults" :key="index" mb-2>
				<v-card>
					<v-img :src="imgURL + result.poster_path" aspect-ratio="1"></v-img>
					<v-card-title primary-title>{{ result.title }}</v-card-title>
					<v-card-subtitle>Date: {{ moment(result.release_date) }}</v-card-subtitle>
					<v-card-actions class="justify-center">
						<v-btn text color="green" @click="singleMovie(result.id)">View</v-btn>
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
	props: ["title"],
	data() {
		return {
			imgURL: "https://image.tmdb.org/t/p/w342"
		};
	},
	computed: {
		...mapState(["searchresults"])
	},
	created() {
		this.$store.dispatch("loadResults", this.title);
	},
	methods: {
		singleMovie(id) {
			console.log(id);
			this.$router.push("/movie/" + id);
		},
		moment(date) {
			return moment(date).format("MMM Do YYYY");
		}
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
