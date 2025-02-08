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
    width: 200px;
  }
  </style>
  