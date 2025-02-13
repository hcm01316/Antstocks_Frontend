<template>
    <div class="container">
      <!-- 알림이 있을 때만 버튼을 표시 -->
      <button @click="handleRefreshClick" class="btn btn-azure my-2" v-if="notification">{{ notification }}</button>
    </div>
  </template>
  
  <script setup>
  import { storeToRefs } from "pinia";
  import { useSseStore } from "@/stores/sseStore";
  
  const sseStore = useSseStore();
  const { notification } = storeToRefs(sseStore); // Pinia store에서 notification 가져오기
  
  const handleRefreshClick = () => {
    window.location.reload(); // 페이지 새로 고침
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    position: sticky;
    z-index: 2;
  }
  
  button {
    height: 50px; /* 버튼 세로 크기 */
    width: auto; /* 가로 크기는 내용에 맞게 */
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  