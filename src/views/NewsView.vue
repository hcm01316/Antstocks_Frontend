<template>
  <div class="refresh-container">
    <RefreshButton/>
  </div>
  <!-- 뉴스속보 -->
  <div class ="page-body mt-0">
    <div class="container-xl">
      <div class="row g-4">
        <div class="col-md-2">
          <StockList/>
        </div>
        <div class="col-md-7">
          <div class="sticky-top bg-indigo-lt border-bottom" style="padding: 0.1rem 0px; top: 56px; z-index : 1000;">
            <h2 class="my-2 ms-3 text-github fs-3">{{ today }} 속보</h2>
          </div>
          <div class="row row-cards">
            <div class="space-y-0">
              <div class="card border-0" v-for="article in visibleArticles" :key="article.id">
                <div class="row g-0">
                  <div class="col-auto">
                    <div class="card-body">
                      <p class="badge mt-1" :class="article.score == 9 ? 'bg-orange-lt' : 'bg-gray-500'"><span>{{ formatDate(article.time) }}</span></p>
                    </div>
                    <div class="d-flex" style="height: 7rem;">
                      <div class="vr mx-auto"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card-body ps-0">
                      <div class="row">
                        <div class="col">
                          <h3 class="mb-2" :class="{ 'text-orange': article.score == 9 }">{{ article.title }}</h3>
                          <p class="lh-lg fs-4"> <!-- text-truncate-multi -->
                            <template v-for="(part, index) in formattedText(article.summary)" :key="index">
                              <span v-if="part.highlight" class="text-google">{{ part.text }}</span>
                              <span v-else class="text-github">{{ part.text }}</span>
                            </template>
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md">
                          <div class="list-inline list-inline-dots mb-0 text-muted d-sm-block d-none">
                            <span v-for="(stock, index) in stockList(article.stocks)" :key="index" class="badge badge-outline text-github me-1">
                              {{ stock }}
                            </span>
                          </div>
                        </div>
                        <div class="col-md-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container text-center px-0">
            <button v-if="visibleCount < articles.length" class="btn btn-pill my-3 fs-3 fw-semibold" @click="loadMore" style="width: 100%;">
              뉴스 더보기
            </button>
          </div>

        </div>


      </div>

    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { useArticlesStore } from "@/stores/articles";
import StockList from "../components/StockList.vue"; // StockList 컴포넌트 import
import RefreshButton from "../components/RefreshButton.vue"; // RefreshButton 컴포넌트 import
import { useSseStore } from "@/stores/sseStore";
const sseStore = useSseStore();


onMounted(() => {
  console.log("✅ SSE 연결 시도 중...");
  sseStore.connectSSE();
});


onUnmounted(() => {
  console.log("❌ SSE 연결 해제");
  sseStore.disconnectSSE();
});

interface Article {
  id: number;
  title: string;
  summary: string;
  time: string;
  stocks: string;
  score: number;
}

const articles = ref<Article[]>([]);
const visibleCount = ref<number>(10);

const visibleArticles = computed<Article[]>(() => articles.value.slice(0, visibleCount.value));
const today = ref<string>(
  new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date())
);

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // return `${month}월 ${day}일 ${hours}시 ${minutes.toString().padStart(2, "0")}분`;
  return `${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")}`;
};

const getCsrfToken = (): string => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]');
  return csrfToken ? csrfToken.getAttribute('content') || '' : '';
};

const loadMore = (): void => {
  visibleCount.value += 10;
};

const formattedText = (text: string) => {
  const regex = /(<[^>]+>)/g;  // '<'와 '>' 사이에 있는 내용을 캡쳐
  const parts = text.split(regex);
  return parts.map((part: string) => ({
    text: part.replace(/<|>/g, ""),  // < > 제거
    highlight: part.startsWith("<") && part.endsWith(">"),
  }));
};

const stockList = (stocks: string): string[] => {
  return stocks ? stocks.split(",") : [];
};

onMounted(() => {
  axios
    .get<Article[]>('http://localhost:8081/api/allArticles', {
      headers: {
        'X-CSRF-TOKEN': getCsrfToken(),
      },
    })
    .then((response) => {
      console.log("Response: ", response.data);
      articles.value = response.data;
    })
    .catch((error) => {
      console.error("Error occurred: ", error);
    });
  // articles.value = useArticlesStore().articles;
  // console.log(articles);
});

</script>

<style scoped>
.text-truncate-multi {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 최대 3줄까지 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 5em; /* 줄 높이 * 최대 줄 수 */
  line-height: 1.5em; /* 줄 높이 */
  white-space: normal;
}

.refresh-container {
  position: fixed; /* 🔥 항상 화면에 고정 */
  top: 50px; /* 상단 여백 */
  right: 50%; /* 오른쪽 여백 */
  z-index: 1001; /* 다른 요소 위로 올리기 */
}

</style>