<template>
  <div class="min-h-full px-4 py-10 text-center text-gray-900 bg-glovo-yellow">
    <h1 class="text-2xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
      <span class="text-glovo-green">Glovo</span> Brewery Search
    </h1>

    <main class="max-w-5xl mx-auto">
      <brewery-search-input @search="onSearch" />

      <brewery-list :breweries="breweries" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BreweryList from './components/BreweryList.vue';
import BrewerySearchInput from './components/BrewerySearchInput.vue';

import { searchBrewery } from './api';
import { Brewery } from './types/brewery';

type Data = {
  breweries: Brewery[];
};

export default Vue.extend({
  name: 'App',
  components: {
    BrewerySearchInput,
    BreweryList
  },

  data(): Data {
    return {
      breweries: []
    };
  },

  methods: {
    async onSearch(query: string) {
      this.breweries = await searchBrewery(query);
    }
  }
});
</script>
