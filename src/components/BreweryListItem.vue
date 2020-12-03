<template>
  <li
    class="flex col-span-1 overflow-hidden text-left duration-150 ease-in-out transform rounded-md shadow-md hover:scale-105"
  >
    <div class="flex flex-col flex-1 px-4 py-3 space-y-1 text-sm bg-white">
      <h2 class="text-lg font-semibold transition text-glovo-green">
        {{ brewery.name }}
      </h2>
      <div class="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        {{ brewery.country }}, {{ brewery.state }}, {{ brewery.city }}
      </div>
      <div v-if="brewery.phone" class="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="inline w-4 h-4"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {{ brewery.phone }}
      </div>
      <a
        :href="brewery.website_url"
        target="_blank"
        rel="noopener noreferrer"
        v-if="brewery.website_url"
        class="text-gray-500 hover:text-glovo-green"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="inline w-4 h-4"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        {{ brewery.website_url }}
      </a>
    </div>
  </li>
</template>

<script lang="ts">
import { Brewery } from '@/types';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    brewery: {
      type: Object as () => Brewery,
      required: true
    }
  }
});
</script>
