<template>
  <div>
    <p
      v-if="breweriesCount"
      class="mt-6 text-sm font-semibold text-gray-700 uppercase"
    >
      {{ breweriesCount }} breweries
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
  </div>
</template>

<script lang="ts">
import { Brewery } from '@/types';
import { defineComponent, computed } from '@vue/composition-api';
import BreweryListItem from './BreweryListItem.vue';

export default defineComponent({
  components: {
    BreweryListItem
  },

  props: {
    breweries: {
      type: Array as () => Brewery[],
      default: []
    }
  },

  setup(props) {
    const breweriesCount = computed(() => props.breweries.length);

    return { breweriesCount };
  }
});
</script>
