<template>
  <div
    class="p-6 max-w-z w-96 h-96 mx-auto bg-white rounded-xl shadow-lg flex mb-5 flex-col items-center space-x-4 h-100 transition duration-500 "
  >
    <div class="h-60 overflow-hidden w-full">
      <img
        class="object-cover h-full w-full hover:transform hover:scale-125 hover:rotate-3 transition duration-150 ease-out hover:ease-in "
        v-bind:src="imgLink"
        alt="dog image"
      />
    </div>

    <a v-bind:href="imgLink" @click.stop.prevent="downloadFile(imgLink)"  class=""  download="imgLink" target="_blank">
      <button
        class="text-pink-600 mt-10 hover:text-white-600 uppercase font-bold border border-pink-600 py-2 px-10 rounded transition-all hover:bg-pink hover:text-white-600"
      >
        save me
      </button>
    </a>
  </div>

</template>

<script>
export default {
 
  name: 'DogCard',
  props: ['imgLink'],
  // props: {
  //   msg: String,
  // },

  methods: {
    downloadFile(link ) {
      console.log(link);
        const url = link;
        const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
        
      fetch(url, options)
        .then( response => {
          response.blob().then(blob => {
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement('a');
              a.href = url;
              a.download = "Happy_Dog.jpg";
              a.click();
            });
          }); 
      }
  }
};
</script>

<style src="../assets/css/tailwind.css">

