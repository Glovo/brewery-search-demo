<template>
  <form class="flex mt-8 space-x-6" @submit.prevent="onSubmit">
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
    >
      Search
    </button>
  </form>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  watchEffect
} from '@vue/composition-api';
import { Autocomplete } from '@/types';
import { fetchAutocompleteItems } from '@/api';

export default defineComponent({
  setup(props, { emit }) {
    const query = ref<string>('');
    const autocompleteItems = ref<Autocomplete[]>([]);

    const shouldShowAutocomplete = computed(
      () => autocompleteItems.value.length > 0
    );

    watchEffect(async () => {
      autocompleteItems.value = await fetchAutocompleteItems(query.value);
    });

    function selectAutocompleteItem(item: Autocomplete) {
      emit('search', item.name);
      query.value = '';
    }

    async function onSubmit() {
      emit('search', query.value);
      query.value = '';
    }

    return {
      query,
      autocompleteItems,
      shouldShowAutocomplete,

      selectAutocompleteItem,
      onSubmit
    };
  }
});
</script>
