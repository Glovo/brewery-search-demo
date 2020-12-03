<template>
  <div class="min-h-full px-4 py-10 text-center text-gray-900 bg-glovo-yellow">
    <h1 class="text-2xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
      Brewery Search 🍻
    </h1>

    <main class="flex flex-col items-center max-w-5xl mx-auto">
      <brewery-search-input @search="onSearch" />

      <svg
        v-if="isSearching"
        class="inline-block w-16 h-16 mt-24 animate-bounce text-glovo-green"
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
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import BreweryList from './components/BreweryList.vue';
import BrewerySearchInput from './components/BrewerySearchInput.vue';
import { searchBreweries, fetchBreweries } from './api';
import { Brewery } from './types/brewery';

export default defineComponent({
  name: 'App',
  components: {
    BrewerySearchInput,
    BreweryList
  },

  setup() {
    const breweries = ref<Brewery[]>([]);
    const isSearching = ref(false);

    onMounted(async () => {
      isSearching.value = true;
      breweries.value = await fetchBreweries();
      isSearching.value = false;
    });

    return {
      isSearching,
      breweries
    };
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
