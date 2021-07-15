<template>
  <div class="flex mt-8 space-x-6">
    <div class="flex flex-col">
      <input
        v-model="query"
        type="text"
        name="search"
        id="search"
        class="relative block border-gray-300 rounded-md shadow-sm w-72 focus:ring-glovo-green focus:border-glovo-green sm:text-sm"
        placeholder="San Diego"
      />

      <div
        v-if="shouldShowAutocomplete"
        class="absolute z-50 mt-12 origin-bottom bg-white rounded-md shadow-lg w-72 ring-1 ring-black ring-opacity-5"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            v-for="item in autocompleteItems"
            :key="item.id"
            class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-glovo-green hover:text-gray-100"
            role="menuitem"
            @click="selectAutocompleteItem(item)"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-white duration-150 transform border border-transparent rounded-md shadow-sm hover:scale-105 bg-glovo-green focus:outline-none"
      @click="onSearch"
      data-qa="submit-button"
    >
      Search
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Autocomplete } from '@/types';
import { fetchAutocompleteItems } from '@/api';

type Data = {
  query: string;
  autocompleteItems: Autocomplete[];
};

export default Vue.extend({
  data(): Data {
    return {
      query: 'asd',
      autocompleteItems: []
    };
  },

  watch: {
    async query(newQuery: string) {
      this.autocompleteItems = newQuery
        ? await fetchAutocompleteItems(newQuery)
        : [];
    }
  },

  computed: {
    shouldShowAutocomplete(): boolean {
      return this.autocompleteItems.length > 0;
    }
  },

  methods: {
    async onSearch() {
      this.$emit('search', this.query);
      this.query = '';
    },

    selectAutocompleteItem(item: Autocomplete) {
      this.$emit('search', item.name);
      this.query = '';
    }
  }
});
</script>
