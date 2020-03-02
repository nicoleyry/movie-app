<template>
	<v-container v-if="loading">
		<div class="text-xs-center">
			<v-progress-circular indeterminate :size="150" :width="8" color="dark"></v-progress-circular>
		</div>
	</v-container>
	<v-container v-else>
		<v-layout wrap>
			<v-flex xs12 mr-1 ml-1>
				<v-card>
					<v-row>
						<v-col class="mb-4">
							<v-img :src="imgURL + details.poster_path" contain aspect-ratio="2"></v-img>
						</v-col>
						<v-col class="mb-8">
							<v-card-title primary-title>{{ details.title }}</v-card-title>
							<v-card-subtitle class="subtitle-1 font-italic font-weight-medium">{{ details.tagline }}</v-card-subtitle>
							<v-card-text>
								<p class="font-weight-regular">Date: {{ moment(details.release_date) }}</p>
								<p class="font-weight-medium">{{ details.overview }}</p>
							</v-card-text>
							<v-card-actions>
								<v-btn text color="green" @click="back">back to home</v-btn>
							</v-card-actions>
						</v-col>
					</v-row>
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
			imgURL: "https://image.tmdb.org/t/p/w500"
		};
	},
	computed: {
		...mapState(["details", "loading"])
	},
	created() {
		this.$store.dispatch("loadDetails", this.id);
		this.$store.dispatch("loadingState");
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
.v-progress-circular {
	margin: 1rem;
}
</style>