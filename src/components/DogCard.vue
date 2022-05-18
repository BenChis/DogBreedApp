<template>
  <div class="card">
    <div class="card__img-box">
      <img class="card__img" v-bind:src="imgLink" alt="dog image" />
    </div>
    <button class="btn card__btn">save me</button>
  </div>
</template>

<script>
export default {
  name: 'DogCard',
  props: ['imgLink'],
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
