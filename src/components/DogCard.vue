<template>
  <div
    class="p-6 max-w-z w-96 h-96 mx-auto bg-white rounded-xl shadow-lg flex mb-5 flex-col items-center h-100 transition-all"
  >
    <div class="h-60 overflow-hidden w-full">
      <img
        class="object-cover h-full w-full hover:transform hover:scale-125 hover:rotate-3 transition duration-150 ease-out hover:ease-in"
        v-bind:src="imgLink"
        alt="dog image"
      />
    </div>

    <a
      v-bind:href="imgLink"
      @click.stop.prevent="downloadFile(imgLink)"
      download="imgLink"
    >
      <button
        class="text-pink-600 mt-10 uppercase font-bold border border-pink-600 py-2 px-10 rounded transition-all hover:bg-pink-600 hover:text-white hover:scale-110"
      >
        save me
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'DogCard',
  // Reciving from App.vue
  props: ['imgLink'],

  methods: {
    downloadFile(link) {
      const url = link;
      const options = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      // Method to fetch image src if cross origin is enabled
      fetch(url, options).then(response => {
        response.blob().then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          // Define download name
          // Improve pass in data from Breed Name Array
          a.download = 'Happy_Dog.jpg';
          a.click();
        });
      });
    },
  },
};
</script>

<style></style>
