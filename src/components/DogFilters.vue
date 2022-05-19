<template>

  <div class="flex flex-col mb-3 sm:mb-0">
    <label for="dog-breed" class="font-bold uppercase">Pick a breed 🐕 <span class="ml-3">⬇️</span></label>
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
  
  data() {
    return {
      dogBreeds: [],
      selectedBreed: '',
    };
  },

  mounted() {

    // AJAX to retrieve all breeds
    // Refactor AJAX call function to one method and pass it down to child components
    axios
      // Create config file variable for URL
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        const resDogBreeds = res.data.message;
        const dogBreedArr = Object.keys(resDogBreeds);
        this.dogBreeds = dogBreedArr;

        // Log dog breeds disable to avoid side-effects
        // console.log(this.dogBreeds);

      })
      .catch(err => {
        // ERROR Handling
        // Insert here more methods to inform user
        console.error(err);
      });

  },

  methods: {
    onBreedChange(event) {
      const breedInput = event.target.value;
      this.selectedBreed = breedInput;

      // Pass data to parent component(App.vue)
      this.$emit('change', this.selectedBreed);
    },
  },
};
</script>

<style src="../assets/css/tailwind.css">

