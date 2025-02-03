<template>
  <div>
    <div class="col-md-9">
      <div class="row row-cards">
        <div class="space-y">
          <div class="card" v-for="article in visibleArticles" :key="article.id">
            <div class="row g-0">
              <div class="col-auto">
                <div class="card-body">
                </div>
              </div>
              <div class="col">
                <div class="card-body ps-0">
                  <div class="row">
                    <div class="col">
                      <h1 class="mb-0">{{ article.title }}</h1>
                      <p>{{ article.summary }}</p>
                      <p class="text-muted mb-2">Posted on: <span>{{ formatDate(article.time) }}</span></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md">
                      <div class="mt-3 list-inline list-inline-dots mb-0 text-muted d-sm-block d-none">
                        <div class="list-inline-item">{{ article.stocks }}</div>
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
    </div>
    <button v-if="visibleCount < articles.length" class="btn btn-primary" @click="loadMore">
      더 보기
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  summary: string;
  time: string;
  stocks: string;
}

const articles = ref<Article[]>([]);
const visibleCount = ref<number>(10);

const visibleArticles = computed<Article[]>(() => articles.value.slice(0, visibleCount.value));

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${month}월 ${day}일 ${hours}시 ${minutes.toString().padStart(2, "0")}분`;
};

const getCsrfToken = (): string => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]');
  return csrfToken ? csrfToken.getAttribute('content') || '' : '';
};

const loadMore = (): void => {
  visibleCount.value += 10;
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
});
</script>
