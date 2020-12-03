<template>
  <div class="min-h-full px-4 py-10 text-center text-gray-900 bg-glovo-yellow">
    <h1 class="text-2xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
      Brewery Search 🍻
    </h1>

    <main class="flex flex-col items-center max-w-5xl mx-auto">
      <brewery-search-input @search="onSearch" />

      <svg
        v-if="isSearching"
        class="inline-block w-20 h-20 mt-12 animate-bounce text-glovo-green"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <brewery-list v-else :breweries="breweries" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BreweryList from './components/BreweryList.vue';
import BrewerySearchInput from './components/BrewerySearchInput.vue';

import { searchBreweries, fetchBreweries } from './api';
import { Brewery } from './types/brewery';

type Data = {
  breweries: Brewery[];
  isSearching: boolean;
};

export default Vue.extend({
  name: 'App',
  components: {
    BrewerySearchInput,
    BreweryList
  },

  data(): Data {
    return {
      breweries: [],
      isSearching: false
    };
  },

  async mounted() {
    this.isSearching = true;
    this.breweries = await fetchBreweries();
    this.isSearching = false;
  },

  methods: {
    async onSearch(query: string) {
      this.isSearching = true;
      this.breweries = await searchBreweries(query);
      this.isSearching = false;
    }
  }
});
</script>
