<template>
  <div>
    <template v-if="hasBreweries">
      <p class="mt-6 text-sm font-semibold text-gray-700 uppercase">
        {{ breweriesCountText }}
      </p>
      <ul
        class="grid grid-cols-1 gap-5 mt-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <brewery-list-item
          v-for="brewery in breweries"
          :key="brewery.id"
          :brewery="brewery"
        />
      </ul>
    </template>
    <p v-else class="mt-6 text-sm font-semibold text-gray-700 uppercase">
      No results for your search
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Brewery } from '@/types';
import BreweryListItem from './BreweryListItem.vue';

export default Vue.extend({
  components: {
    BreweryListItem
  },

  props: {
    breweries: {
      type: Array as PropType<Brewery[]>,
      default: []
    }
  },

  computed: {
    hasBreweries(): boolean {
      return this.breweries.length > 0;
    },
    breweriesCountText(): string {
      const count = this.breweries.length;
      return count === 1 ? `${count} brewery` : `${count} breweries`;
    }
  }
});
</script>
