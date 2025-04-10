<script>
    import { diaryStore } from '$lib/stores/diary';
    let entry = '';
  </script>
  
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 dark:text-white">Daily Journal</h1>
    <textarea 
      bind:value={entry} 
      class="w-full h-64 p-4 border rounded dark:bg-gray-700 dark:text-white" 
      placeholder="Write your thoughts..."
    ></textarea>
    <button 
      on:click={() => diaryStore.addEntry(entry)} 
      class="mt-4 bg-blue-500 text-white p-2 rounded"
    >
      Save Entry
    </button>
  </div>