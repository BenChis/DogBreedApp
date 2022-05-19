<template>
  <section id="app">
    <div
      class="bg-slate-100 rounded-xl max-w-2xl shadow-lg sm:w-8/12 mx-auto mt-10 p-6 mb-8"
    >
      <img
        class="h-16 block mx-auto mb-2"
        src="./assets/Svgs/Dog_App_Logo.svg"
        alt="Dog App Logo"
      />
      <h1 class="text-pink-600 uppercase font-bold text-5xl mb-4 text-center">
        Dog Breed App
      </h1>
      <p class="justify-center mb-4 flex align-center sm:items-center gap-0.5">
        <!-- Create Sprite for SVGs -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Download beautiful <span class="uppercase"> dog images </span> 😍
      </p>

      <form class="sm:flex sm:flex-row justify-between">
        <dog-filters @change="onBreedChange" />
        <results-amount @change="onAmountChange" />
      </form>
    </div>

    <!-- To make transition work nodes need unique-key -->
    <transition-group name="dog-card" tag="ul">
      <div class="flex flex-wrap justify-start" v-if="isDogCardVisible" key="">
        <dog-card
          v-for="link in dogSrcArr.slice(0, currentSearchResults)"
          :img-link="link"
          :key="link.id"
        />
      </div>
    </transition-group>
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
      //Set default Search Results
      currentSearchResults: 5,
      // local state for Card rendering
      isDogCardVisible: false,
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
    },

    onAmountChange(num) {
      if (num === 'all') {
        this.currentSearchResults = -1;
      } else this.currentSearchResults = num;
    },

    getDogImgSrcUrls(dogBreed) {
      axios
        .get(`https://dog.ceo/api/breed/${dogBreed}/images`)
        .then(res => {
          const resDogImgSrc = res.data.message;

          this.dogSrcArr = resDogImgSrc;

          this.toggleShowDogCard(true);
        })
        .catch(err => {
          // Error handling missing
          console.error(err);
        });
    },

    toggleShowDogCard(state) {
      this.isDogCardVisible = state;
    },
  },
};
</script>

<style scoped>
.dog-card-leave-active,
.dog-card-enter-active {
  @apply duration-500;
  @apply transition;
}

.dog-card {
  @apply -translate-y-1;
  @apply transform;
  @apply opacity-0;
}
</style>
