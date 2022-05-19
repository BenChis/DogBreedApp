<template>
  <div class="text-right flex flex-col">
    <label for="dog-breed-filter">Choose search results ⬇️</label>
    <select
      class="result-field"
      name="dog-breed-filter"
      id="dog-breed-filter"
      @change="onAmountChange"
    >
      <option class="dog-breed__option" value="" selected disabled hidden>
        Clicke here
      </option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="all">all</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ResultsAmount',
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      dogBreeds: [],
      selectedAmount: 5,
    };
  },

  methods: {
    onAmountChange(event) {
      const resultsAmount = event.target.value;
      this.selectedAmount = resultsAmount;
      // console.log(resultsAmount);
      this.$emit('change', this.selectedAmount);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
