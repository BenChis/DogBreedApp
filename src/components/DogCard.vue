<template>
  <div
    class="p-6 max-w-z w-96 mx-auto bg-white rounded-xl shadow-lg flex mb-5 flex-col items-center space-x-4 h-100 transition duration-500 "
  >
    <div class="h-80 overflow-hidden w-full">
      <img
        class="object-cover h-60 w-full"
        v-bind:src="imgLink"
        alt="dog image"
      />
    </div>
    <button
      class="text-pink-600 hover:text-white-600 uppercase font-bold border border-pink-600 py-2 px-10 rounded transition-all bg-white hover:bg-pink hover:text-white-600"
    >
      save me
    </button>
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

<style src="../assets/css/tailwind.css">

