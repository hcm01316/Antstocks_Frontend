<template>
    <div class="sse-container">
      <h3>📈 상위 언급 종목</h3>
      <ul>
        <li v-for="(stock, index) in topStocks" :key="index">
          {{ stock.key }} - {{ stock.value }}회
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { storeToRefs } from "pinia";
  import { useSseStore } from "@/stores/sseStore";
  
  const sseStore = useSseStore();
  const { topStocks } = storeToRefs(sseStore); // Pinia store에서 topStocks 가져오기
  </script>
  
  <style scoped>
  .sse-container {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    background: #f9f9f9;
    position: sticky;
    top: 0; /* Keep top at 0 to enable sticky behavior */
    width: 200px;
    display: flex;
    flex-direction: column;
    max-height: 500px;
  }

  .sse-container h3 {
    margin: 0;
    padding-bottom: 10px;
  }

  .sse-container ul {
    overflow-y: auto;
    flex-grow: 1;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .sse-container li {
    padding: 5px 0;
  }
  </style>
  