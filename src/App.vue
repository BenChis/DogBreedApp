<template>
  <section id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="bg-slate-100 rounded-xl max-w-2xl shadow-lg w-8/12 mx-auto mt-10 p-6 mb-8" >

      <!-- <svg class="icon">
        <use v-bind="Sprite" xlink:href="Sprite#Dog_Breed_App_Logo"></use>
      </svg> -->
      <h1 class="text-pink-600 uppercase font-bold text-4xl mb-4 text-center">Dog Breed App</h1>
      <p class="justify-center mb-4 flex align-center items-center gap-0.5" >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        Download beautiful dog pictures listed <span class="underline">by breed</span>
      </p>

      <form class="flex justify-between">
        <DogFilters @change="onBreedChange" />
        <ResultsAmount @change="onAmountChange"/>
      </form>
    </div>

      <div class="flex flex-wrap justify-center" v-if="showDogCard">
        <DogCard v-for="link in dogSrcArr.slice(0,currentSearchResults)" :img-link="link" :key="link.id" />
      </div>

  </section>
</template>

<script>
import DogFilters from './components/DogFilters.vue';
import ResultsAmount from './components/ResultsAmount.vue';
import DogCard from './components/DogCard.vue';
import axios from 'axios';
// import Sprite from './assets/Svgs/Sprite.svg';


export default {

  data() {
    return {
      currentBreed: '',
      //Set default Search Results
      currentSearchResults: 5,
      showDogCard: false,
      dogSrcArr: [],
    };
  },

  name: 'App',

  components: {
    DogFilters,
    ResultsAmount,
    DogCard,
  },

  methods: {
    onBreedChange(val) {
      this.currentBreed = val;
      this.getDogImgSrcUrls(val);
      console.log(this.currentBreed);
    },

    onAmountChange(num) {
      if(num === 'all') {
      this.currentSearchResults = -1;
      } else this.currentSearchResults = num;

      console.log(this.currentSearchResults);
    },

    getDogImgSrcUrls(dogBreed) {
      axios
        .get(`https://dog.ceo/api/breed/${dogBreed}/images`)
        .then(res => {
          const resDogImgSrc = res.data.message;
          // this.dogBreeds = dogBreedArr;
          console.log(resDogImgSrc);

          this.dogSrcArr = resDogImgSrc;

          console.log(this.dogSrcArr);

          this.toggleShowDogCard(true);
        })
        .catch(err => {
          console.error(err);
        });
    },

    toggleShowDogCard(state) {
      this.showDogCard = state;
    },

  },
};
</script>

<style src="./assets/css/tailwind.css">
