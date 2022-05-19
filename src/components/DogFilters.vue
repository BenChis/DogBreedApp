<template>
  <div class="flex flex-col">
    <label for="dog-breed">Pick a breed 🐕 <span class="ml-3">⬇️</span></label>
    <select
      class="breed-field"
      name="dog-breed"
      id="dog-breed"
      @change="onBreedChange"
    >
      <option class="dog-breed__option" value="" selected disabled hidden>
        Click here
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

<style src="../assets/css/tailwind.css">

