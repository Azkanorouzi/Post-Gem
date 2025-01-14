// composables/useLocalStorage.ts
import { ref, watch } from "vue";

/**
 * A composable to interact with localStorage.
 * @param key - The key under which the value is stored in localStorage.
 * @param defaultValue - The default value to use if no value is found in localStorage.
 * @returns A ref that is synced with localStorage.
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  // Create a ref that holds the current value
  const storedValue = ref<T>(defaultValue);

  // Try to read from localStorage
  try {
    const item = window.localStorage.getItem(key);
    if (item !== null) {
      storedValue.value = JSON.parse(item);
    }
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
  }

  // Watch for changes to the value and update localStorage
  watch(
    storedValue,
    (newValue) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error(`Error writing to localStorage key "${key}":`, error);
      }
    },
    { deep: true },
  );

  return storedValue;
}
