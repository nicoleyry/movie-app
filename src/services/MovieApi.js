import axios from 'axios'

export default {
  fetchSingleMovie (title) {
    return axios.get('https://api.themoviedb.org/3/search/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&query=' + title)
      .then(response => {
        return response.data.results
      })
  }
}
