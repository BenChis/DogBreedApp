<template>
  <div>
    <label for="dog-breed-filter">Choose search results</label>
    <select class="result-field" name="dog-breed-filter" id="dog-breed-filter">
      <option class="dog-breed__option" value="" selected disabled hidden>
        PLEASE choose an amount
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
      selectedBreed: '',
    };
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
<style scoped></style>
