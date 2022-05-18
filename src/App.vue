<template>
  <section id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="bg-white">
      <h1 class="text-pink-400">Dog Breed App</h1>

      <form class="dogselecter">
        <DogFilters @change="onBreedChange" />
        <ResultsAmount />
      </form>

      <div class="dog-images-wrapper" v-if="showDogCard">
        <DogCard v-for="link in dogSrcArr" :img-link="link" :key="link.id" />
      </div>
    </div>
  </section>
</template>

<script>
import DogFilters from './components/DogFilters.vue';
import ResultsAmount from './components/ResultsAmount.vue';
import DogCard from './components/DogCard.vue';
import axios from 'axios';


export default {
  data() {
    return {
      currentBreed: '',
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
