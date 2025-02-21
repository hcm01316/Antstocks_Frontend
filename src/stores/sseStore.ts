import { defineStore } from "pinia";
import { ref, onMounted, watch } from "vue";

export const useSseStore = defineStore("sse", () => {
  const notification = ref(""); // 새 속보 알림
  const topStocks = ref<{ key: string; value: number }[]>([]); // 상위 종목 리스트
  let eventSource: EventSource | null = null; // SSE 연결 객체
  let retryTimeout: number | null = null; // 재연결 대기 타이머

  // 🔹 1️⃣ 앱이 처음 로드될 때 LocalStorage에서 기존 데이터 불러오기
  onMounted(() => {
    const savedStocks = localStorage.getItem("topStocks");
    if (savedStocks) {
      topStocks.value = JSON.parse(savedStocks);
    }
  });

  // 🔹 2️⃣ 상위 종목 리스트 업데이트 + LocalStorage 저장
  const updateStocks = (data: { [key: string]: number }[]) => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD 형식
  
    topStocks.value = data.map(stock => {
      const [key, value] = Object.entries(stock)[0];
      return { key, value: Number(value) };
    });
  
    // LocalStorage에 데이터 + 오늘 날짜 저장
    localStorage.setItem("topStocks", JSON.stringify({ date: today, stocks: topStocks.value }));
  };
  
  const checkAndLoadStocks = () => {
    const storedData = localStorage.getItem("topStocks");
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const today = new Date().toISOString().split("T")[0];
  
      if (parsedData.date === today) {
        topStocks.value = parsedData.stocks;
      } else {
        localStorage.removeItem("topStocks"); // 🔥 날짜가 바뀌었으면 초기화
      }
    }
  };

  // SSE 연결 함수
  const connectSSE = () => {
    checkAndLoadStocks;
    if (!eventSource) {
      eventSource = new EventSource("http://localhost:8081/sse/subscribe", {
        withCredentials: true,
      });

      // 연결 성공 시
      eventSource.onopen = () => {
        console.log("✅ SSE 연결됨");
        console.log("readyState: ", eventSource?.readyState); // 연결 상태 로그
        if (retryTimeout) {
          clearTimeout(retryTimeout); // 재연결 대기 타이머가 있으면 초기화
        }
      };

      // 데이터 수신
      eventSource.addEventListener("combinedData", (event) => {
        const data = JSON.parse(event.data);
        notification.value = data.notification; // 속보 메시지 업데이트

        // 🔹 topStocks 업데이트 + LocalStorage 저장
        updateStocks(data.topStocks);

        console.log("📢 새 속보 메시지:", notification.value);
        console.log("📈 상위 종목 리스트:", topStocks.value);
      });

      // 연결 오류 발생 시
      eventSource.onerror = (err) => {
        console.error("⚠️ SSE 연결 실패", err);
        if (eventSource) {
          console.log("readyState onError:", eventSource.readyState);
        }
        eventSource?.close();
        eventSource = null;

        // 재연결 시도
        retryConnection();
      };
    }
  };

  // 재연결 시도 함수
  const retryConnection = () => {
    if (retryTimeout) {
      clearTimeout(retryTimeout); // 이전 타이머를 초기화
    }

    retryTimeout = setTimeout(() => {
      console.log("🔄 SSE 재연결 시도 중...");
      connectSSE(); // 재연결
    }, 5000); // 5초 후에 재연결 시도
  };

  // SSE 연결 해제 함수
  const disconnectSSE = () => {
    if (eventSource) {
      eventSource.close();
      eventSource = null;
      if (retryTimeout) {
        clearTimeout(retryTimeout); // 타이머 초기화
      }
    }
  };

  // 🔹 3️⃣ `topStocks`가 변경될 때 자동으로 LocalStorage 저장 (선택 사항)
  watch(topStocks, (newValue) => {
    localStorage.setItem("topStocks", JSON.stringify(newValue));
  }, { deep: true });

  return { notification, topStocks, connectSSE, disconnectSSE };
});
