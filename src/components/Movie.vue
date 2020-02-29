<template>
	<v-container>
		<v-layout wrap>
			<v-flex xs12 mr-1 ml-1>
				<v-card>
					<v-img :src="imgURL + details.poster_path" aspect-ratio="2"></v-img>
					<v-card-title primary-title>{{ details.title }}</v-card-title>
					<v-card-subtitle class="subtitle-1">{{ moment(details.release_date) }}</v-card-subtitle>
					<v-card-text class="body-1 font-italic">{{ details.overview }}</v-card-text>
					<v-card-actions>
						<v-btn text color="green" @click="back">back</v-btn>
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
	props: ["id"],
	data() {
		return {
			imgURL: "https://image.tmdb.org/t/p/original"
		};
	},
	computed: {
		...mapState(["details"])
	},
	created() {
		this.$store.dispatch("loadDetails", this.id);
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