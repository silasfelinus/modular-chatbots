<template>
    <div class="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-start justify-center pl-10">
      <h1 class="text-4xl my-10 text-white font-bold">Serendipity: Your Next-Generation Digital Assistant</h1>
      <!-- Friendly buttons Make Art, View Gallery-->
      <div class="flex space-x-4 mb-8">
        <button class="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-200">Make Art</button>
        <button class="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-200">View Gallery</button>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <!-- OpenAI sliders: temperature, etc -->
        <div>
          <!-- Slider for temperature -->
          <label for="temperature" class="block text-gray-700 font-semibold mb-2">Temperature:</label>
          <input type="range" id="temperature" name="temperature" min="0" max="100" class="w-full">
        </div>
        
        <!-- Labeled dropdown to change AI personality, selection for Serendipity -->
        <div class="mt-4">
          <label for="ai-personality" class="block text-gray-700 font-semibold mb-2">AI Personality:</label>
          <select id="ai-personality" name="ai-personality" class="w-full border border-gray-300 px-3 py-2 rounded shadow-sm focus:outline-none focus:border-blue-300">
            <option value="serendipity" selected>Serendipity</option>
            <option value="personality-2">Personality 2</option>
            <option value="personality-3">Personality 3</option>
          </select>
        </div>
        <!-- Fancy styling and a pleasant background -->
      </div>
    </div>
  </template>
  