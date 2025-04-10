import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const DIARY_KEY = "daily-planner-diaries";

function createDiaryStore() {
  const initialEntries = browser ? JSON.parse(localStorage.getItem(DIARY_KEY)) || [] : [];
  
  const { subscribe, set, update } = writable(initialEntries);

  return {
    subscribe,
    addEntry: (entry) => {
      if (!browser) return;
      update(entries => {
        const newEntry = {
          ...entry,
          id: Date.now().toString(),
          createdAt: new Date().toISOString()
        };
        const updated = [...entries, newEntry];
        localStorage.setItem(DIARY_KEY, JSON.stringify(updated));
        return updated;
      });
    }
  };
}

export const diaryStore = createDiaryStore();