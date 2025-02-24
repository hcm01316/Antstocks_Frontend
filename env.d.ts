/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
      VUE_APP_SSE_URL: string;
      VUE_APP_API_URL: string;
      // 다른 환경 변수들 추가
    }
  }