<template>
  <div>
    <label for="dog-breed">Choose a breed</label>
    <select
      class="breed-field"
      name="dog-breed"
      id="dog-breed"
      @change="onBreedChange"
    >
      <option class="dog-breed__option" value="" selected disabled hidden>
        PLEASE choose an option
      </option>
      <option
        v-for="dogBreed in dogBreeds"
        v-bind:value="dogBreed"
        :key="dogBreed"
      >
        {{ dogBreed }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DogFilters',
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      dogBreeds: [],
      selectedBreed: '',
    };
  },

  mounted() {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        const resDogBreeds = res.data.message;
        const dogBreedArr = Object.keys(resDogBreeds);
        this.dogBreeds = dogBreedArr;
        console.log(this.dogBreeds);
      })
      .catch(err => {
        console.error(err);
      });
  },

  methods: {
    onBreedChange(event) {
      const breedInput = event.target.value;
      this.selectedBreed = breedInput;
      console.log(breedInput);
      this.$emit('change', this.selectedBreed);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
