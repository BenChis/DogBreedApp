<template>
  <div class="text-left sm:text-right flex flex-col">
    <label for="dog-breed-filter" class="font-bold uppercase"
      >search results ⬇️</label
    >
    <select
      class="result-field"
      name="dog-breed-filter"
      id="dog-breed-filter"
      @change="onAmountChange"
    >
      <option class="dog-breed__option" value="" selected disabled hidden>
        Clicke here
      </option>
      <!-- Hard coded values for search results -->
      <!-- Use config and insert inputs dynamical -->
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="all">all</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ResultsAmount',

  data() {
    return {
      dogBreeds: [],
      // Default amount for search Results
      selectedAmount: 5,
    };
  },

  methods: {
    onAmountChange(event) {
      const resultsAmount = event.target.value;
      this.selectedAmount = resultsAmount;

      // Pass data to parent component(App.vue)
      this.$emit('change', this.selectedAmount);
    },
  },
};
</script>

<style scoped></style>
