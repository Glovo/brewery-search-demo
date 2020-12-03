<template>
  <div class="min-h-full px-4 py-10 text-center text-gray-900 bg-glovo-yellow">
    <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
      Glovo Brewery Search
    </h1>

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {}
});
</script>
