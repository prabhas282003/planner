import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const LOCAL_STORAGE_KEY = "daily-planner-dark-mode";

const storedMode = browser ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : false;

export const darkMode = writable(storedMode || false);

if (browser) {
  darkMode.subscribe(value => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
    document.documentElement.classList.toggle('dark', value);
  });
}