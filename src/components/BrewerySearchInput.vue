<template>
  <form class="flex max-w-xl mx-auto mt-8 space-x-6" @submit.prevent="onSubmit">
    <input
      v-model="query"
      type="text"
      name="search"
      id="search"
      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-glovo-green focus:border-glovo-green sm:text-sm"
      placeholder="San Diego"
    />

    <button
      type="submit"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-white duration-150 transform border border-transparent rounded-md shadow-sm hover:scale-105 bg-glovo-green focus:outline-none"
    >
      Search
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      query: ''
    };
  },

  methods: {
    async onSubmit() {
      this.$emit('search', this.query);
    }
  }
});
</script>
