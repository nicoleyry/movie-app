<template>
	<v-app>
		<v-toolbar>
			<v-toolbar-title class="headline text-uppercase">
				<router-link to="/" tag="span" style="cursor: pointer">Movie App</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-flex xs12 sm6 md3>
				<v-text-field dense label="Movie Name" v-model="searchString"></v-text-field>
			</v-flex>
			<v-btn text :disabled="!dataAvailable" @click="searchMovie">
				<span class="mr-2">Search</span>
			</v-btn>
		</v-toolbar>
		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			searchString: ""
		};
	},
	methods: {
		searchMovie() {
			this.$router.push("/search/" + this.searchString);
			this.searchString = "";
		}
	},
	computed: {
		dataAvailable() {
			return this.searchString !== null && this.searchString !== "";
		}
	}
};
</script>
