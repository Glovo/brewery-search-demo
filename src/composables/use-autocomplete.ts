import { fetchAutocompleteItems } from '@/api';
import { Autocomplete } from '@/types';
import { computed, ref, Ref, watchEffect } from '@vue/composition-api';

export function useAutocomplete(query: Ref<string>) {
  const autocompleteItems = ref<Autocomplete[]>([]);

  const shouldShowAutocomplete = computed(
    () => autocompleteItems.value.length > 0
  );

  watchEffect(async () => {
    autocompleteItems.value = await fetchAutocompleteItems(query.value);
  });

  return { autocompleteItems, shouldShowAutocomplete };
}
