import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// 뉴스 아이템의 타입 정의
interface BreakingNewsItem {
  title: string
  originLink: string
}

// 스토어 정의
export const useBreakingNewsStore = defineStore('breakingNews', () => {
  const breakingNews = ref<BreakingNewsItem[]>([]) // 초기 데이터 비움
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // 뉴스 데이터를 가져오는 함수
  const fetchBreakingNews = async (): Promise<void> => {
    loading.value = true
    error.value = null
    try {
    //   breakingNews.value = [
    //     {
    //         "title": "파나소닉, 구조조정 계획 발표 후 주가 급등, 파나소닉, 구조조정 계획 발표 후 주가 급등",
    //         "originLink": "https://finance.yahoo.com/news/tesla-supplier-panasonic-cut-costs-101150905.html"
    //     },
    //     {
    //         "title": "미-중 관세 전쟁 속 주식시장 반등 및 기업 실적 발표",
    //         "originLink": "https://finance.yahoo.com/news/live/stock-market-today-dow-sp-500-nasdaq-recover-as-traders-assess-tariff-developments-new-jobs-data-210134859.html"
    //     },
    //     {
    //         "title": "DeepSeek: 중국 AI 스타트업의 불법 반도체 획득 의혹과 시장 영향",
    //         "originLink": "https://finance.yahoo.com/news/deepseek-trojan-horse-kevin-oleary-203017747.html"
    //     },
    // ]
      const response = await axios.get<BreakingNewsItem[]>("/api/breakingNews")
      breakingNews.value = response.data // API 응답 데이터를 상태에 저장
    } catch (err) {
      error.value = err instanceof Error ? err.message : '알 수 없는 오류 발생'
    } finally {
      loading.value = false
    }
  }

  return { breakingNews, loading, error, fetchBreakingNews }
})
