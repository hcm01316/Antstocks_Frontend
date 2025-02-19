import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref(
    [
      {
          "id": 56,
          "title": "Alphabet Inc. (GOOG) 4분기 실적 발표: 강력한 매출 성장과 AI 발전",
          "summary": "Alphabet의 2024년 4분기 실적 발표에 따르면, 매출은 전년 대비 12% 증가한 965억 달러를 기록했습니다. Google Cloud 매출은 30% 증가했고, AI 기술 발전 또한 성장을 견인했습니다.  <Alphabet은 강력한 매출 성장과 Google Cloud, AI 분야의 성과를 바탕으로 긍정적인 실적을 발표했다.>  하지만,  Cloud 부문의 용량 제약과 2025년 증가할 자본 지출은 성장에 대한 우려를 남겼습니다.",
          "time": "2025-02-05T07:14:52",
          "stocks": "GOOG",
          "originTitle": "Alphabet Inc (GOOG) Q4 2024 Earnings Call Highlights: Strong Revenue Growth and AI Advancements ...",
          "originLink": "https://finance.yahoo.com/news/alphabet-inc-goog-q4-2024-071452663.html",
          "score": 7
      },
      {
          "id": 40,
          "title": "WEC Energy Group Inc. 실적 발표 하이라이트: 280억 달러 투자 계획 및 배당금 증가",
          "summary": "WEC Energy Group Inc.는 2024년 주당순이익(EPS)이 $4.88로 전년 대비 $0.25 증가했으며, 역대 최대 규모인 280억 달러 규모의 5개년 투자 계획을 발표했습니다.  <이는 재생에너지 및 인프라 투자에 중점을 둔 계획으로, 회사의 지속적인 성장을 뒷받침할 것으로 기대됩니다.>  배당금 또한 6.9% 인상되었고, 향후 EPS 성장률은 6.5%~7%로 예상됩니다.  클로버리프 데이터센터 프로젝트 등의 사업 확장으로 인한 추가 투자 필요성도 언급되었습니다.",
          "time": "2025-02-05T07:11:30",
          "stocks": "WEC,MSFT",
          "originTitle": "WEC Energy Group Inc (WEC) Q4 2024 Earnings Call Highlights: Record Capital Plan and Dividend ...",
          "originLink": "https://finance.yahoo.com/news/wec-energy-group-inc-wec-071130647.html",
          "score": 4
      },
      {
          "id": 67,
          "title": "에스티로더 2분기 실적 발표: 재구조화 및 성장 계획 발표",
          "summary": "Estee Lauder는 2분기 실적 발표에서 매출 감소에도 불구하고, <새로운 전략 'Beauty Reimagined'을 통해 지속 가능한 매출 성장과 두 자릿수 영업이익률 달성을 목표>로 재구조화 및 비용 절감 계획을 발표했습니다.  중국 소비 심리 위축 및 경영 효율성 저하를 극복하기 위해 조직 개편, AI 활용, 소비자 중심 투자 확대 등을 추진합니다.",
          "time": "2025-02-05T06:00:51",
          "stocks": "EL,AMZN",
          "originTitle": "Q2 2025 Estee Lauder Companies Inc Earnings Call",
          "originLink": "https://finance.yahoo.com/news/q2-2025-estee-lauder-companies-060051554.html",
          "score": 6
      },
      {
          "id": 57,
          "title": "Alphabet(GOOG) 4분기 실적 발표 요약",
          "summary": "Alphabet의 2024년 4분기 실적 발표에서는 AI 주도 성장과 Google Cloud의 괄목할 만한 성장이 두드러졌습니다.  검색, 유튜브 광고 수익 증가와 Google Cloud 매출 30% 증가가 주요 내용이며,  AI 기술 도입으로 검색 사용량 증가 및 광고 수익 증대가 기대됩니다. <AI 기술을 활용한 검색 및 광고 부문의 성장이 Alphabet의 4분기 실적을 견인했습니다.>  2025년에는 AI 투자 확대 및 Google Cloud의 지속 성장이 예상됩니다.",
          "time": "2025-02-05T05:30:37",
          "stocks": "GOOG",
          "originTitle": "Alphabet (GOOG) Q4 2024 Earnings Call Transcript",
          "originLink": "https://finance.yahoo.com/news/alphabet-goog-q4-2024-earnings-053037997.html",
          "score": 7
      },
      {
          "id": 68,
          "title": "Sun Country Airlines 4분기 실적 발표 요약",
          "summary": "Sun Country Airlines는 4분기 연속 수익성을 달성했으며, 특히 화물 부문의 성장이 두드러졌습니다.  <Amazon과의 계약으로 화물 운송이 크게 증가할 것으로 예상되며, 이는 향후 수익성 향상에 기여할 전망입니다.>  회사는 2025년에도 10%대의 운항 시간 증가와 업계 최고 수준의 수익률을 유지할 것으로 예상하고 있습니다.  항공기 임대 계약 연장 및 효율적인 운영으로 재무 건전성도 강화될 것으로 보입니다.",
          "time": "2025-02-05T05:28:22",
          "stocks": "AMZN,SNCY",
          "originTitle": "Q4 2024 Sun Country Airlines Holdings Inc Earnings Call",
          "originLink": "https://finance.yahoo.com/news/q4-2024-sun-country-airlines-052822522.html",
          "score": 4
      },
      {
          "id": 22,
          "title": "호주, 정부 기기에서 DeepSeek 사용 금지",
          "summary": "호주 정부가 모든 정부 기관에 DeepSeek 제품, 애플리케이션 및 웹 서비스의 사용을 금지하는 지침을 내렸습니다.  <이는 DeepSeek의 보안 및 신뢰성에 대한 우려를 반영하는 것으로,  투자자들은 DeepSeek의 향후 성장 전망에 대한 재평가가 필요할 수 있습니다.>",
          "time": "2025-02-05T04:17:00",
          "stocks": "NVDA",
          "originTitle": "Australia Bans DeepSeek From Government Devices",
          "originLink": "https://finance.yahoo.com/m/e7015d6e-d6f9-3f7a-b7b2-19b097d2de30/australia-bans-deepseek-from.html",
          "score": 2
      },
      {
          "id": 21,
          "title": "Alphabet, AI 투자 대폭 확대",
          "summary": "Alphabet은 AI 개발 가속화를 위해 올해 자본 지출을 42% 증가한 750억 달러로 늘린다고 발표했습니다.  <이는 DeepSeek의 저렴한 AI 모델에도 불구하고, AI 사용 증가로 인한 수익 증대를 기대하기 때문입니다.>  경쟁사 Meta와 마찬가지로 Alphabet도 AI 투자 경쟁에서 물러서지 않고 있습니다.",
          "time": "2025-02-05T04:11:00",
          "stocks": "NVDA,GOOG",
          "originTitle": "Alphabet praises DeepSeek, but it's massively ramping up its AI spending",
          "originLink": "https://finance.yahoo.com/news/alphabet-praises-deepseek-massively-ramping-000733975.html",
          "score": 4
      },
      {
          "id": 58,
          "title": "구글, 클라우드 성장 둔화에도 AI 검색에 주목해야",
          "summary": "Google parent Alphabet의 4분기 실적 발표 후 주가가 8% 하락했습니다. 클라우드 성장 둔화에도 불구하고, <AI 기반 검색의 수익화 가능성과 시장 점유율 유지가 향후 주가에 중요한 영향을 미칠 것입니다.>  Google은 AI 검색에 대한 투자를 확대하고 있지만, 수익화 및 사용자 검색 빈도 변화에 대한 불확실성이 남아있습니다.  경쟁사들의 AI 챗봇 등장으로 Google의 검색 시장 지배력 유지가 관건입니다.",
          "time": "2025-02-05T01:20:07",
          "stocks": "GOOG",
          "originTitle": "Google whiffed on cloud, but what’s happening in search is the real area to keep an eye on",
          "originLink": "https://finance.yahoo.com/news/google-whiffed-cloud-happening-search-012007553.html",
          "score": 5
      },
      {
          "id": 101,
          "title": "파나소닉, 구조조정 계획 발표 후 주가 급등",
          "summary": "Panasonic Holdings Corp. 주가가 구조조정 계획 발표 후 11년 만에 최고치를 기록했습니다.  <파나소닉은 저성장 사업 구조조정 및 인력 감축을 통해 AI 데이터센터 등 고수익 사업에 집중할 계획입니다.>  수익 증대 목표를 설정하고,  미국 인플레이션 감축법 수혜도 예상됩니다.",
          "time": "2025-02-05T01:18:08",
          "stocks": "TSLA,PCRHY",
          "originTitle": "Panasonic Shares Jump Most in 11 Years on Restructuring Plans",
          "originLink": "https://finance.yahoo.com/news/tesla-supplier-panasonic-cut-costs-101150905.html",
          "score": 8
      },
      {
          "id": 102,
          "title": "Tesla, 중국 Model 3 구매자 보험 보조금 제공",
          "summary": "Tesla China는 Model 3 구매자에게 8,000위안(약 1,103달러)의 보험 보조금을 제공한다고 발표했습니다.  이는 중국 시장 점유율 확대를 위한 Tesla의 전략으로 해석되며, <판매 증진을 위한 Tesla의 적극적인 마케팅 전략이 주목된다.>  이번 조치가 중국 전기차 시장에 미치는 영향과 Tesla 주가에 어떤 영향을 미칠지 귀추가 주목됩니다.",
          "time": "2025-02-05T01:02:23",
          "stocks": "TSLA",
          "originTitle": "Tesla offers insurance subsidy for Model 3 buyers in China",
          "originLink": "https://finance.yahoo.com/news/tesla-offers-insurance-subsidy-model-010223646.html",
          "score": 2
      },
      {
          "id": 23,
          "title": "구글 모회사 알파벳, AI 투자에 750억 달러 투입 계획",
          "summary": "구글 모회사 알파벳이 AI 인프라 확장을 위해 올해 750억 달러를 투자할 계획이라고 발표했습니다.  이는 마이크로소프트와 메타의 AI 투자와 맞물려 있으며,  <AI 경쟁 심화에 따른 대규모 투자는 관련 기술 기업에 긍정적 영향을 미칠 것으로 예상됩니다.>  특히,  Nvidia와 같은 칩 제조업체에 긍정적일 수 있습니다.  4분기 클라우드 매출 부진으로 주가는 하락했지만, 장기적인 AI 투자는 성장 동력으로 작용할 전망입니다. Alphabet(GOOGL)의 공격적인 AI 투자는 주목할 만합니다.",
          "time": "2025-02-05T00:55:20",
          "stocks": "GOOG,MSFT,NVDA",
          "originTitle": "Google Parent Alphabet Plans to Spend $75B This Year, as Big Tech Goes All in on AI",
          "originLink": "https://finance.yahoo.com/news/google-parent-alphabet-plans-spend-005520107.html",
          "score": 5
      },
      {
          "id": 59,
          "title": "Alphabet 실적 발표: 클라우드 매출 부진에 주가 급락",
          "summary": "Alphabet의 4분기 매출이 예상치를 하회하며 주가가 9% 이상 급락했습니다. 클라우드 사업 성장 둔화와 AI 투자 증가에 대한 우려가 투자자들의 불안감을 키웠습니다.  <AI 투자 확대에도 불구하고 클라우드 매출 부진으로 Alphabet의 실적이 시장 예상치를 밑돌았습니다.>  경쟁 심화와 수익성에 대한 의문이 제기되면서 Alphabet의 AI 전략에 대한 재검토 필요성이 대두되고 있습니다.",
          "time": "2025-02-05T00:30:03",
          "stocks": "GOOG",
          "originTitle": "Alphabet Slides After Cloud Sales Fall Short of Expectations",
          "originLink": "https://finance.yahoo.com/news/alphabet-falls-disappointing-cloud-sales-211034415.html",
          "score": 7
      },
      {
          "id": 117,
          "title": "미 재무부, 머스크 DOGE팀 출신 2명 영입",
          "summary": "미 재무부가 머스크의 DOGE팀과 연관된 인물 2명을 영입, 정부 지급 시스템 개선 목표로 코드 접근 시도 논란이 일고 있습니다.  <일부 직원들은 이들의 코드 접근 시도에 우려를 표명했으며,  상원의원들은 정부 감사원에 조사를 요청했습니다.>  Cloud Software Group CEO Krause와 SpaceX 엔지니어 Elez의 정확한 역할과 목적에 대한 의문이 제기되고 있습니다.  이들의 행동이 재무 시스템의 무결성을 위협할 수 있다는 우려가 나오고 있습니다.  Bloomberg 보도에 따르면,  트럼프 전 대통령은 머스크의 행동에 대해 승인을 줄 것이라고 언급했습니다.",
          "time": "2025-02-05T00:15:04",
          "stocks": "AVGO",
          "originTitle": "US Treasury Brings In Two Members From Musk’s DOGE Team",
          "originLink": "https://finance.yahoo.com/news/us-treasury-brings-two-members-171641951.html",
          "score": 5
      },
      {
          "id": 41,
          "title": "구글, 매출 증가 둔화로 주가 하락",
          "summary": "Google's revenue growth slowed due to deceleration in its cloud computing business, causing a more than 7% after-hours share drop.  <Google의 클라우드 컴퓨팅 사업 성장 둔화로 매출 증가세가 꺾이며 주가가 7% 이상 급락했습니다.>  This negatively impacts investor confidence and may affect the tech sector.",
          "time": "2025-02-05T00:09:00",
          "stocks": "GOOG,AMZN,MSFT",
          "originTitle": "Google’s Revenue Growth Slows, Sending Shares Down",
          "originLink": "https://finance.yahoo.com/m/67e5a20a-c85c-3ff8-a8ea-b8bc36c0ad74/google%E2%80%99s-revenue-growth.html",
          "score": 4
      },
      {
          "id": 44,
          "title": "머스크 vs. OpenAI:  법정 공방의 향방은?",
          "summary": "Elon Musk는 OpenAI의 영리 전환을 저지하려 소송을 제기했으나, 판사는  Musk의 손해 주장에 대해 회의적이었지만,  소송 진행은 허가했습니다. <판사는 Musk의 손해 주장이 과장되었지만,  소송은 계속 진행될 것이라고 밝혔습니다.>  OpenAI의 Microsoft와의 관계와 이사회 구성에 대한 우려도 제기되었습니다.  이 소송은 AI 업계의 주요 이슈이며, 향후 AI 산업의 발전 방향에 영향을 미칠 수 있습니다.  Musk는 OpenAI의 초기 투자자였으나, 이후 CEO 자리를 놓고 갈등을 빚은 바 있습니다.",
          "time": "2025-02-05T00:02:14",
          "stocks": "MSFT",
          "originTitle": "Judge says Elon Musk's claims of harm from OpenAI are a 'stretch' but welcomes possible trial",
          "originLink": "https://finance.yahoo.com/news/judge-says-elon-musks-claims-201644258.html",
          "score": 4
      },
      {
          "id": 103,
          "title": "머스크의 정치적 행보, 테슬라 주가에 미칠 영향은?",
          "summary": "테슬라 투자자들은 4분기 실적 발표를 앞두고, 엘론 머스크의 정치 참여와 자율주행 기술 개발 등에 대한 우려를 제기하고 있습니다. 특히 머스크의 트럼프 지지가 규제 완화에 도움이 될지, 또는 테슬라 이미지에 부정적 영향을 미칠지에 대한 의문이 커지고 있습니다.  <머스크의 정치적 행보가 테슬라의 경영과 주가에 미칠 영향에 대한 투자자들의 우려가 고조되고 있다.>  Tesla 주가는 현재 상승세이나,  CEO의 역할 분담과 정치적 입장이 장기적으로 회사에 어떤 영향을 줄지 불확실성이 남아있습니다.",
          "time": "2025-02-05T00:00:26",
          "stocks": "TSLA",
          "originTitle": "Elon Musk Is 'All-In' On Trump – Tesla Investors Holding 600,000+ Shares Question If He Can Still Run A $1.25 Trillion Company",
          "originLink": "https://finance.yahoo.com/news/elon-musk-trump-tesla-investors-000026953.html",
          "score": 5
      },
      {
          "id": 24,
          "title": "AMD 주가, GPU 판매 성장 불확실성에 9% 급락",
          "summary": "AMD 주가가 AI 소프트웨어용 GPU 판매 성장세 불확실성으로 9% 하락했다.  <AMD는 AI 시장 점유율 확대에 어려움을 겪고 있다.>  경쟁 심화와 시장 성장 둔화 우려가 투자 심리를 위축시켰다.",
          "time": "2025-02-04T23:50:44",
          "stocks": "AMD,NVDA",
          "originTitle": "AMD Shares Drop 9% As GPU Sales Growth Remains Murky",
          "originLink": "https://finance.yahoo.com/news/amd-shares-drop-9-gpu-235044615.html",
          "score": 2
      },
      {
          "id": 69,
          "title": "UPS 매출 수정",
          "summary": "Wall Street Journal은 UPS의 Amazon.com 관련 매출액을 잘못 보도했음을 정정했습니다. 실제 매출액은 107억 달러이며, 이전 보도는 10억 7천만 달러로 잘못 기재되었습니다.  <This correction clarifies UPS's revenue from Amazon, impacting financial reporting accuracy.>  UPS 주가에 미치는 영향은 제한적일 것으로 예상됩니다.",
          "time": "2025-02-04T23:39:00",
          "stocks": "AMZN,UPS",
          "originTitle": "Corrections &\n\t\t\n\t\t\t\n\t\t\n\tAmplifications",
          "originLink": "https://finance.yahoo.com/m/cf0b767d-52c3-3e81-aaba-a24a5c6badd6/corrections.html",
          "score": 0
      },
      {
          "id": 52,
          "title": "AMD와 Alphabet, 4분기 실적 발표 후 주가 하락",
          "summary": "Alphabet의 4분기 매출이 예상치를 약간 하회하며 주가가 7% 이상 급락했고, AMD도 데이터센터 매출 부진으로 주가가 하락했습니다.  <Alphabet과 AMD의 실적 발표가 시장에 부정적 영향을 미쳤다.>  두 회사의 실적 부진은 클라우드 매출 부족과 CapEx 증가 등이 주요 원인으로 분석됩니다.  투자자들은 향후 실적 전망에 주목해야 합니다.",
          "time": "2025-02-04T23:09:12",
          "stocks": "GOOG,AMD",
          "originTitle": "AMD, Alphabet fall after Q4 results: Biggest earnings takeaways",
          "originLink": "https://finance.yahoo.com/video/amd-alphabet-fall-q4-results-230912773.html",
          "score": 3
      },
      {
          "id": 104,
          "title": "델라웨어 대법원, 일부 기업의 주 이전 용이하게 해",
          "summary": "델라웨어 대법원의 TripAdvisor 사건 판결로 일부 기업의 주 이전이 용이해졌다.  <TripAdvisor의 네바다주 이전 결정에서,  주주들의 소송 위험을 줄이는 '사업 판단' 기준이 적용되어 이전이 쉬워졌다.>  이는 Tesla, Meta Platforms 등 다른 기업들의 주 이전에도 영향을 미칠 수 있다.  델라웨어의 기업 친화적인 법률에도 불구하고,  기업들의 주 이전 사례가 증가하고 있다.",
          "time": "2025-02-04T23:07:01",
          "stocks": "TRIP,TSLA",
          "originTitle": "Delaware Supreme Court eases path for some companies to leave state",
          "originLink": "https://finance.yahoo.com/news/delaware-supreme-court-eases-path-230701710.html",
          "score": 3
      },
      {
          "id": 39,
          "title": "Alphabet과 Microsoft의 AI 데이터센터 투자 확대로 AI 관련주 강세 예상",
          "summary": "Alphabet과 Microsoft의 AI 데이터센터 투자 확대 소식이 전해졌습니다.  Blackstone 부회장 겸 CFO인 Michael Chae는 AI 인프라에 대한 Big Tech의 지출 증가를 강조하며, 이는 데이터 생성 및 저장량 증가라는 거대 추세에 따른 것이라고 설명했습니다. <이는 AI 관련 기술 및 인프라 투자에 대한 시장의 기대감을 높이고 관련 주식의 상승을 촉진할 가능성이 높습니다.>  Meta도 AI 인프라 투자를 지속하고 있습니다.",
          "time": "2025-02-04T23:05:26",
          "stocks": "GOOG,BX,MSFT,META",
          "originTitle": "AI data center play 'reinforced' by Alphabet, Microsoft spending",
          "originLink": "https://finance.yahoo.com/video/ai-data-center-play-reinforced-230526183.html",
          "score": 5
      },
      {
          "id": 25,
          "title": "AMD 실적 발표 후 주가 급락: AI 성장 전망 부진",
          "summary": "AMD의 데이터센터 사업 전망 부진으로 주가가 8% 이상 급락했습니다.  4분기 매출은 예상치를 상회했으나, AI 분야 경쟁사 Nvidia에 비해 성장세가 더딘 것으로 나타났습니다. <AI 성장 전망 부진으로 인해 AMD 주가가 급락했다.>  중국 신생 기업의 저가 AI 모델 등장도 투자 심리 악화에 영향을 미쳤습니다.  AMD는 향후 제품 개선을 통해 성장세를 회복할 것으로 예상하고 있습니다.",
          "time": "2025-02-04T23:04:05",
          "stocks": "AMD,NVDA",
          "originTitle": "AMD Tumbles After Giving Disappointing Outlook for AI Growth",
          "originLink": "https://finance.yahoo.com/news/amd-data-center-sales-miss-214423845.html",
          "score": 4
      },
      {
          "id": 26,
          "title": "NVIDIA, TRC Capital의 소액 주식 공개 매수 제안에 대한 답변",
          "summary": "TRC Capital이 NVIDIA 주식 100만주를 주당 $131.50에 매수하는 소액 공개 매수 제안을 했으나, NVIDIA는 제안과 관련이 없으며 중립적인 입장을 취하고 있습니다.  <NVIDIA는 투자자들에게 시장 가격 확인 및 전문가 상담을 권고하며, SEC의 소액 공개 매수 관련 지침을 참고할 것을 당부했습니다.>  이 거래는 NVIDIA 주가에 미미한 영향을 줄 것으로 예상됩니다.",
          "time": "2025-02-04T23:00:00",
          "stocks": "NVDA",
          "originTitle": "NVIDIA Responds to TRC Capital’s ‘Mini-Tender’ Offer",
          "originLink": "https://finance.yahoo.com/news/nvidia-responds-trc-capital-mini-230000202.html",
          "score": 0
      },
      {
          "id": 99,
          "title": "Elon Musk vs. OpenAI: 배심원 재판으로 향하는 소송",
          "summary": "Elon Musk is suing OpenAI, alleging its shift to a for-profit model creates unfair competition and antitrust concerns.  A federal judge indicated the case is likely heading to a jury trial. <OpenAI의 이윤 추구 모델 전환이 불공정 경쟁 및 반독점 문제를 야기한다는 이유로 엘론 머스크가 소송을 제기했고, 연방 판사는 배심원 재판으로 갈 가능성이 높다고 밝혔다.>  The outcome could significantly impact OpenAI and the AI industry. Tesla (TSLA) is indirectly involved.",
          "time": "2025-02-04T22:54:08",
          "stocks": "TSLA",
          "originTitle": "Federal judge points to Elon Musk-OpenAI case heading to jury trial",
          "originLink": "https://finance.yahoo.com/video/federal-judge-points-elon-musk-225408424.html",
          "score": 3
      },
      {
          "id": 27,
          "title": "엔비디아(NVDA) 주가 상승 및 전망 분석",
          "summary": "엔비디아(Nvidia) 주가가 전일 대비 1.71% 상승한 $118.65를 기록하며 S&P 500 지수 상승률을 웃돌았습니다.  2025년 2월 26일 예정된 실적 발표에서 EPS $0.84 (전년 동기 대비 61.54% 증가), 매출 $377.2억 달러 (전년 동기 대비 70.68% 증가)가 예상되며, Zacks Rank는 2(매수)로 평가되었습니다. <엔비디아의 강세는 향후 실적 전망치 상향 조정 및 Zacks Rank 상승과 밀접한 관련이 있습니다.>  투자자들은 향후 실적 발표와 분석가 전망치 변화를 주의 깊게 관찰해야 합니다.",
          "time": "2025-02-04T22:45:19",
          "stocks": "NVDA",
          "originTitle": "Nvidia (NVDA) Beats Stock Market Upswing: What Investors Need to Know",
          "originLink": "https://finance.yahoo.com/news/nvidia-nvda-beats-stock-market-224519408.html",
          "score": 5
      },
      {
          "id": 60,
          "title": "Alphabet 실적 발표 후 주가 급락: AI 투자에도 매출 기대치 미달",
          "summary": "Alphabet (GOOGL)의 4분기 매출이 예상치를 하회하며 주가가 시간외 거래에서 7% 이상 급락했습니다.  AI 투자 확대에도 불구하고 매출 성장세 둔화와 높은 자본 지출에 대한 우려가 투자자들의 실망감으로 이어졌습니다. <AI 투자에도 불구하고 매출 기대치를 충족하지 못한 것이 주가 하락의 주요 원인입니다.>  그러나  AI 관련 사업부 성장 가능성과 장기 성장 전망은 여전히 긍정적입니다.",
          "time": "2025-02-04T22:45:00",
          "stocks": "GOOG",
          "originTitle": "Alphabet stock falls after missing revenue expectations despite strong momentum",
          "originLink": "https://finance.yahoo.com/news/alphabet-stock-falls-missing-revenue-214522982.html",
          "score": 5
      },
      {
          "id": 42,
          "title": "Alphabet 매출 예상치 못 미쳐 주가 급락",
          "summary": "Alphabet의 2분기 클라우드 매출이 예상치($122억)에 미치지 못한 $120억을 기록하며 주가가 급락했습니다.  <Alphabet의 실적 부진은 투자자들의 우려를 불러일으키며 주가 하락으로 이어졌습니다.>  이는 투자자들의 기대치를 충족시키지 못한 결과입니다.",
          "time": "2025-02-04T22:38:00",
          "stocks": "GOOG,MSFT",
          "originTitle": "Alphabet Revenue Misses Expectations. The Stock Is Down Sharply.",
          "originLink": "https://finance.yahoo.com/m/e88be967-65fb-3b90-a874-1d5b1c93906c/alphabet-revenue-misses.html",
          "score": 3
      },
      {
          "id": 3,
          "title": "미-중 관세, 멕시코와 캐나다에 미치는 영향",
          "summary": "Trump 행정부의 관세 부과로 인한 무역 전쟁의 불확실성이 커지고 있습니다.  <미국과 중국 간의 관세 분쟁이 멕시코와 캐나다에도 영향을 미칠 것으로 예상됩니다.>  기본적인 내용들은 윤곽을 드러내고 있지만,  전반적인 경제적 영향은 아직 불확실합니다.  투자자들은 상황을 예의주시해야 합니다.",
          "time": "2025-02-04T22:31:00",
          "stocks": "AAPL",
          "originTitle": "How U.S.-China Tariffs Will Work—and What’s in Store for Mexico and Canada",
          "originLink": "https://finance.yahoo.com/m/35b64eb0-0902-3f88-b5b8-770635e93f99/how-u-s-china-tariffs-will.html",
          "score": 5
      },
      {
          "id": 61,
          "title": "Google, 예상 상회했지만 2025년 투자 계획에 주가 급락",
          "summary": "Alphabet's Q4 earnings slightly beat expectations, but revenue fell short.  <Google's announcement of its 2025 capital spending plans negatively impacted investor sentiment, leading to a stock price decline.>  This suggests caution among investors regarding future growth prospects despite the positive earnings report.  The news may impact tech indices.",
          "time": "2025-02-04T22:30:56",
          "stocks": "GOOG",
          "originTitle": "Google Earnings Edge By Estimates As 2025 Capital Spending Outlook Spooks Wall Street",
          "originLink": "https://finance.yahoo.com/m/9036ce8f-ee3a-3d01-9a54-9b350a430e4a/google-earnings-edge-by.html",
          "score": 3
      },
      {
          "id": 62,
          "title": "Alphabet(GOOGL) 4분기 실적 발표: 주요 지표 분석",
          "summary": "Alphabet(GOOGL)의 2024년 4분기 매출은 전년 대비 12.9% 증가한 816억 달러, EPS는 2.15달러를 기록했습니다.  대부분의 주요 지표는 예상치를 상회했으나 Google Network 매출은 감소했습니다. <Alphabet의 4분기 실적은 예상치를 상회하며 시장 기대치를 웃돌았습니다.>  Google Cloud 매출은 30.1% 증가세를 보였습니다.",
          "time": "2025-02-04T22:30:03",
          "stocks": "GOOG",
          "originTitle": "Alphabet (GOOGL) Reports Q4 Earnings: What Key Metrics Have to Say",
          "originLink": "https://finance.yahoo.com/news/alphabet-googl-reports-q4-earnings-223003745.html",
          "score": 4
      },
      {
          "id": 63,
          "title": "Alphabet(GOOGL) 4분기 실적 발표: 예상치 상회",
          "summary": "Alphabet(GOOGL)이 4분기 실적 발표에서 주당순이익(EPS) 2.15달러로 컨센서스 추정치를 상회했으며, 매출도 예상치를 넘어섰습니다.  <이는 Alphabet의 주가 상승을 견인할 가능성이 높습니다.>  하지만 향후 전망은 불확실하며,  Zacks Rank는 3(보유)로 평가되었습니다.  관련 업계 전망과 추정치 수정 추이를 주의 깊게 살펴봐야 합니다.",
          "time": "2025-02-04T22:10:07",
          "stocks": "GOOG,SHOP",
          "originTitle": "Alphabet (GOOGL) Beats Q4 Earnings and Revenue Estimates",
          "originLink": "https://finance.yahoo.com/news/alphabet-googl-beats-q4-earnings-221007161.html",
          "score": 5
      },
      {
          "id": 64,
          "title": "Alphabet Inc.(GOOG) 4분기 실적 발표 및 전망",
          "summary": "Alphabet Inc.의 4분기 실적이 예상치를 상회했습니다. 주당순이익(EPS)은 $2.15로 컨센서스 추정치 $2.12를 웃돌았고, 매출은 $816억 달러로 예상치를 초과했습니다.  하지만 향후 주가 움직임은 경영진의 전망에 달려있으며, 현재 Zacks Rank는 3(보유)입니다. <Alphabet의 4분기 실적은 예상치를 넘어섰지만, 향후 주가 전망은 불확실하며, 경영진의 발표가 중요하다.>",
          "time": "2025-02-04T22:10:06",
          "stocks": "GOOG,EB",
          "originTitle": "Alphabet Inc. (GOOG) Q4 Earnings and Revenues Top Estimates",
          "originLink": "https://finance.yahoo.com/news/alphabet-inc-goog-q4-earnings-221006164.html",
          "score": 6
      },
      {
          "id": 70,
          "title": "아마존과의 거래 중단으로 파산한 Essex Technology Group",
          "summary": "Essex Technology Group이 아마존과의 거래 중단으로 파산 신청을 했습니다. 아마존이 역물류 사업 입찰 과정에서 Essex를 제외시킨 것이 주요 원인이며, 이로 인해 Essex의 도매 사업이 사실상 종료되었습니다. <Essex는 아마존의 역물류 사업 축소로 인해 주요 고객을 잃고 파산에 이르렀습니다.> 현재 자산 매각을 통해 회사 가치를 극대화하려 하고 있습니다.",
          "time": "2025-02-04T21:58:25",
          "stocks": "AMZN",
          "originTitle": "This Bankrupt Reverse Logistics Expert/Closeout Chain Blames Amazon",
          "originLink": "https://finance.yahoo.com/news/bankrupt-reverse-logistics-expert-closeout-215825488.html",
          "score": 1
      },
      {
          "id": 65,
          "title": "구글 모회사 알파벳, 클라우드 매출 부진에 주가 하락",
          "summary": "알파벳(GOOGL)의 4분기 실적은 예상치를 상회했지만, 클라우드 매출 부진으로 시간외 거래에서 주가가 8% 가까이 하락했습니다.  <클라우드 매출 성장세 둔화가 알파벳 주가 하락의 주요 원인이 되었습니다.>  투자는 증가하지만, 중국 경쟁업체의 등장과 규제 리스크도 존재합니다.",
          "time": "2025-02-04T21:55:06",
          "stocks": "GOOG",
          "originTitle": "Google Parent Alphabet's Stock Slides as Cloud Revenue Disappoints",
          "originLink": "https://finance.yahoo.com/news/google-parent-alphabets-stock-slides-215506513.html",
          "score": 7
      },
      {
          "id": 105,
          "title": "테슬라 주가, 엘론 머스크 문제 때문인가?",
          "summary": "테슬라 주가가 GM, 포드보다 더 큰 폭으로 하락했다.  캐나다와 멕시코에 대한 관세 영향이 적음에도 불구하고, <엘론 머스크 관련 리스크가 주가 하락의 주요 원인으로 작용한 것으로 보인다.>  Tesla의 투자 전략 재검토가 필요할 수 있다.",
          "time": "2025-02-04T21:50:00",
          "stocks": "TSLA",
          "originTitle": "Does Tesla Stock Have an Elon Musk Problem?",
          "originLink": "https://finance.yahoo.com/m/3de07c7a-08fc-300e-8b16-e99e758dc99e/does-tesla-stock-have-an-elon.html",
          "score": 2
      },
      {
          "id": 85,
          "title": "Meta, 12일 연속 주가 상승으로 시가총액 2400억 달러 증가",
          "summary": "Meta Platforms Inc. 주가가 12일 연속 상승하며 사상 최장 기록을 세웠습니다.  AI 전략에 대한 투자자들의 긍정적 반응 덕분에 시가총액이 약 2400억 달러 증가, 1.8조 달러에 육박했습니다.  <Meta의 AI 전략 성공으로 주가가 급등하며 시가총액이 크게 증가했습니다.>  Meta는 2025년까지 AI 투자에 650억 달러를 배정할 계획입니다.",
          "time": "2025-02-04T21:38:29",
          "stocks": "META",
          "originTitle": "Meta Adds $240 Billion of Value in Longest Winning Streak Ever",
          "originLink": "https://finance.yahoo.com/news/meta-adds-235-billion-value-160559815.html",
          "score": 6
      },
      {
          "id": 53,
          "title": "미-중 관세 전쟁 속 주식시장 반등 및 기업 실적 발표",
          "summary": "미국의 대중 관세 부과에 대한 중국의 맞대응에도 불구하고, 미국 주식시장은 기술주 중심으로 상승세를 보였습니다.  <고용 지표는 예상보다 감소했지만, 시장은 여전히 긍정적인 신호로 해석했습니다.>  Alphabet, AMD, Snap 등 주요 기업들의 실적 발표가 시장에 영향을 미쳤으며,  중국은 Alphabet에 대한 반독점 조사를 시작했습니다.",
          "time": "2025-02-04T21:37:04",
          "stocks": "^GSPC,GOOG,YM=F,^IXIC,^DJI",
          "originTitle": "Stock market today: Dow, S&P 500, Nasdaq recover as traders assess tariff developments, new jobs data",
          "originLink": "https://finance.yahoo.com/news/live/stock-market-today-dow-sp-500-nasdaq-recover-as-traders-assess-tariff-developments-new-jobs-data-210134859.html",
          "score": 10
      },
      {
          "id": 28,
          "title": "주요 주식 시장 움직임: Palantir, Alphabet, Tesla 등",
          "summary": "Palantir는 AI 성장에 힘입어 실적 호조를 보였으나, Alphabet은 중국의 반독점 조사를 받고 있으며, Merck는 부진한 전망으로 주가가 하락했습니다.  <Palantir의 AI 기반 실적 호조와 Alphabet에 대한 중국 반독점 조사가 주목할 만한 사건입니다.>  Tesla, PayPal 등 다른 기업들의 주가 변동도 있었습니다.",
          "time": "2025-02-04T21:34:00",
          "stocks": "NVDA,SMCI,SYNA,GOOG,PLTR",
          "originTitle": "These Stocks Moved the Most Today: Palantir, Alphabet, Tesla, Merck, PayPal, Super Micro, Spotify, Estée Lauder, and More",
          "originLink": "https://finance.yahoo.com/m/6193abd6-521f-347a-95f5-7dbfe0b105a3/these-stocks-moved-the-most.html",
          "score": 4
      },
      {
          "id": 43,
          "title": "Alphabet(GOOGL) 4분기 실적 발표: 예상치 충족에도 주가 하락",
          "summary": "Alphabet의 4분기 매출은 전년 대비 11.8% 증가한 964.7억 달러로 예상치에 부합했으나, Google Cloud 매출은 예상치를 하회하며 주가가 6.5% 하락했습니다.  <Google 검색 매출은 예상치를 상회했지만, AI 경쟁 심화에 대한 우려가 주가 하락의 주요 원인으로 분석됩니다.>  Alphabet은 여전히 높은 성장세를 보이고 있으나, AI 경쟁 환경 변화에 대한 지속적인 모니터링이 필요합니다.",
          "time": "2025-02-04T21:13:38",
          "stocks": "GOOG,MSFT,META",
          "originTitle": "Alphabet’s (NASDAQ:GOOGL) Q4 Earnings Results: Revenue In Line With Expectations But Stock Drops",
          "originLink": "https://finance.yahoo.com/news/alphabet-nasdaq-googl-q4-earnings-211338728.html",
          "score": 3
      },
      {
          "id": 66,
          "title": "Alphabet 실적 발표 후 주가 급락: 클라우드 부문 매출 부진 및 투자 확대",
          "summary": "Alphabet(GOOGL)의 4분기 실적 발표에서 클라우드 부문 매출 부진과 대규모 투자 계획 발표로 주가가 하락했다.  <클라우드 매출 목표 미달 및 투자 증가로 인해 Alphabet 주가가 하락세를 보였다.> 경쟁사 Meta의 실적 호조와 중국의 반독점 조사 등 외부 요인도 영향을 미쳤다.  Alphabet은 AI 투자 확대에도 불구하고,  규제 리스크와 시장 경쟁 심화에 직면해 있다.",
          "time": "2025-02-04T21:09:36",
          "stocks": "AMZN,GOOG,META,MSFT",
          "originTitle": "Alphabet stock tumbles after cloud revenue miss, spending growth",
          "originLink": "https://finance.yahoo.com/news/alphabet-stock-tumbles-after-cloud-revenue-miss-spending-growth-210708696.html",
          "score": 6
      },
      {
          "id": 29,
          "title": "엔비디아(NVDA), 매수 의견 유지 및 블랙웰 전환 주목",
          "summary": "Bank of America는 엔비디아(NVDA)에 대한 매수 의견을 유지하며 목표주가를 190달러로 제시했습니다. 블랙웰 전환과 중국 시장 제한으로 인해 1분기 매출 성장률이 다소 둔화될 것으로 예상되지만,  <엔비디아의 블랙웰 전환 성공과 2026 회계연도의 높은 성장률 전망은 투자 심리를 개선할 것으로 기대됩니다.>.  AI 시장의 변화에도 불구하고 GPU 수요 증가를 예상하며,  엔비디아의 성장 잠재력을 높게 평가하고 있습니다.",
          "time": "2025-02-04T21:08:07",
          "stocks": "NVDA",
          "originTitle": "NVIDIA (NVDA) Gets Buy Rating, Blackwell Execution in Focus",
          "originLink": "https://finance.yahoo.com/news/nvidia-nvda-gets-buy-rating-210807251.html",
          "score": 6
      },
      {
          "id": 54,
          "title": "구글, 무기용 AI 개발 불가 약속 삭제",
          "summary": "Google이 웹사이트에서 AI를 무기 또는 감시에 사용하지 않겠다는 약속을 삭제했습니다.  <Google의 AI 원칙 변경은 군사 및 감시 분야 AI 개발 가능성을 열어놓은 것으로, 투자자들의 우려를 불러일으킬 수 있습니다.>  회사는 책임감 있는 AI 개발을 강조하지만,  미군과의 계약 및 AI 모델의 군사적 활용 가능성에 대한 우려가 제기됩니다.  이러한 변화는 투자자들에게 Google의 윤리적 가치와 미래 전략에 대한 불확실성을 야기할 수 있습니다.",
          "time": "2025-02-04T21:05:09",
          "stocks": "GOOG",
          "originTitle": "Google removes pledge to not use AI for weapons from website",
          "originLink": "https://finance.yahoo.com/news/google-removes-pledge-not-ai-210509291.html",
          "score": 3
      },
      {
          "id": 71,
          "title": "Amazon 주가 상승세 지속될까? 4분기 실적 발표 앞두고",
          "summary": "Amazon의 4분기 실적 발표를 앞두고 투자 심리가 고조되고 있습니다.  <Amazon은 4분기 매출 10% 증가, EPS는 50% 증가를 기록할 것으로 예상되며, Zacks 예상치를 상회할 가능성도 높습니다.>  AWS 성장세도 지속되고 있으며, 장기 투자 관점에서도 매력적인 가격대에 있습니다.  하지만, 고평가 우려도 존재합니다.",
          "time": "2025-02-04T20:43:00",
          "stocks": "AMZN",
          "originTitle": "Can the Surge in Amazon Stock Continue as Q4 Earnings Approach?",
          "originLink": "https://finance.yahoo.com/news/surge-amazon-stock-continue-q4-204300450.html",
          "score": 5
      },
      {
          "id": 106,
          "title": "테슬라 유럽 판매 급감: 머스크 효과?",
          "summary": "Tesla's January sales slumped in five major European markets due to increased competition and negative public perception of Elon Musk.  Despite this, Tesla's stock continues to outperform the market. <테슬라의 유럽 판매 부진은 경쟁 심화와 엘론 머스크에 대한 부정적 여론 때문으로 분석되지만, 주가는 여전히 강세를 보이고 있다.>  This raises questions about the sustainability of Tesla's current valuation.",
          "time": "2025-02-04T20:39:56",
          "stocks": "TSLA",
          "originTitle": "Musk effect? Tesla sales slump in five European markets in January",
          "originLink": "https://finance.yahoo.com/news/musk-effect-tesla-sales-slump-203956004.html",
          "score": 3
      },
      {
          "id": 30,
          "title": "DeepSeek: 중국 AI 스타트업의 불법 반도체 획득 의혹과 시장 영향",
          "summary": "중국 AI 스타트업 DeepSeek가 미국 제재를 우회하여 Nvidia칩을 불법적으로 획득했다는 의혹이 제기되면서 미국 정부의 조사를 받고 있습니다.  <DeepSeek의 AI 모델 성능과 저렴한 가격이 Nvidia 주가 폭락 및 미국 내 AI 개발에 대한 우려를 불러일으켰습니다.>  Kevin O'Leary는 DeepSeek를 국가 지원 기업으로 규정하며 데이터 탈취 가능성을 경고했습니다. 이 사건은 미중 기술 패권 경쟁과 AI 산업 전반에 큰 파장을 일으킬 전망입니다.  DeepSeek의 성공은 미국 기술 제재의 효과성에 대한 의문을 제기하며,  투자자들의 AI 관련 투자 결정에 영향을 줄 수 있습니다.",
          "time": "2025-02-04T20:30:17",
          "stocks": "NVDA",
          "originTitle": "DeepSeek A Trojan Horse? Kevin O'Leary Calls BS On DeepSeek's $6M Budget, Claims They Ripped Off 60k Nvidia Chips From The Black Market",
          "originLink": "https://finance.yahoo.com/news/deepseek-trojan-horse-kevin-oleary-203017747.html",
          "score": 10
      },
      {
          "id": 4,
          "title": "Magnificent Seven 주식: Apple과 Nvidia 반등, Alphabet 실적 발표 앞두고 신고가 경신",
          "summary": "2024년 괄목할 만한 성장세를 보였던 Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta, Tesla (Magnificent Seven)이 2025년에는 엇갈린 성과를 보이고 있습니다.  <Apple과 Nvidia는 반등했지만,  시장의 기대치를 충족시킬지는 아직 불확실합니다.>  투자자들은 실적 발표와 향후 시장 전망을 주의 깊게 살펴볼 필요가 있습니다.",
          "time": "2025-02-04T20:27:42",
          "stocks": "NVDA,AAPL,TSLA,META,MSFT",
          "originTitle": "Magnificent Seven Stocks: Apple, Nvidia Rebound; Alphabet Hits New High Ahead Of Earnings",
          "originLink": "https://finance.yahoo.com/m/4205eaa9-f620-3a0b-a81a-0e82c7c9fd0b/magnificent-seven-stocks-.html",
          "score": 1
      },
      {
          "id": 5,
          "title": "다우존스 주요 종목 상승세: 애플, 엔비디아, 아마존",
          "summary": "2025년 2월 다우존스 지수 상승세를 주도하는 종목으로 아마존, 애플, 엔비디아, 세일즈포스, 월트디즈니가 꼽히고 있습니다.  특히 아마존은 신고가를 경신했습니다. <아마존을 비롯한 주요 기술주들의 강세가 다우존스 지수 상승을 견인하고 있습니다.>",
          "time": "2025-02-04T20:27:33",
          "stocks": "AAPL,MSFT,^DJI",
          "originTitle": "Dow Jones Stocks: Apple, Nvidia Rally; Amazon Hits New High",
          "originLink": "https://finance.yahoo.com/m/65b53896-faf4-3a06-9d0d-a63cf3c83192/dow-jones-stocks-apple-.html",
          "score": 4
      },
      {
          "id": 6,
          "title": "Globalstar (GSAT) 주가 급락 분석: Apple의 SpaceX 선택이 미친 영향",
          "summary": "1월 주가 폭락 상위 15개 종목 중 Globalstar (GSAT)가 33.4% 하락했습니다. Apple이 SpaceX의 Starlink 서비스와 제휴하면서 GSAT와의 기존 파트너십이 위협받아 주가가 급락했지만,  일부 분석가들은 여전히 GSAT의 성장 가능성에 대해 긍정적입니다. <Apple의 SpaceX와의 제휴로 Globalstar의 주가가 급락했다.> Score: 1,0,0,0,1,0,1,0,0,0",
          "time": "2025-02-04T20:24:21",
          "stocks": "^GSPC,AAPL",
          "originTitle": "Globalstar, Inc. (GSAT): One of January’s Biggest Losers",
          "originLink": "https://finance.yahoo.com/news/globalstar-inc-gsat-one-january-202421682.html",
          "score": 3
      },
      {
          "id": 135,
          "title": "KKR, 3개사 지분 직접 투자 확대",
          "summary": "KKR이 3개사에 대한 지분 투자를 11억 달러 늘린다고 발표했습니다.  이는 장기 투자 전략의 일환으로, 선호하는 기업에 대한 장기적인 투자를 강화하는 비전통적인 접근 방식입니다. <KKR의 장기 투자 전략 강화는 시장에 긍정적 신호를 줄 수 있습니다.>",
          "time": "2025-02-04T20:05:00",
          "stocks": "BRK-B",
          "originTitle": "KKR Raises Its Direct Stakes in Three Companies",
          "originLink": "https://finance.yahoo.com/m/cb070717-29dc-3a37-a083-03d117cfbe9e/kkr-raises-its-direct-stakes.html",
          "score": 1
      },
      {
          "id": 72,
          "title": "아마존 주가 상승 배경: 뱅크오브아메리카의 긍정적 전망",
          "summary": "Bank of America와 Benchmark는 Amazon(AMZN)의 4분기 실적이 예상치를 상회할 것이라 전망하며 목표주가를 상향 조정했습니다. 특히 뱅크오브아메리카는 효율적인 운영과 AWS 성장세를 강조했습니다.  <Amazon 주가는 뱅크오브아메리카의 긍정적 4분기 실적 전망에 힘입어 상승세를 보이고 있습니다.>",
          "time": "2025-02-04T20:00:32",
          "stocks": "AMZN",
          "originTitle": "Why AMZN Is Advancing Today",
          "originLink": "https://finance.yahoo.com/news/why-amzn-advancing-today-200032047.html",
          "score": 5
      },
      {
          "id": 8,
          "title": "관세 충격에 가장 큰 타격을 입은 테슬라와 애플",
          "summary": "Trump 행정부의 관세 부과 계획으로 인해 Tesla와 Apple의 주가가 큰 폭으로 하락했습니다. 특히 Tesla는 북미 동맹국에 대한 관세 유예에도 불구하고 주가가 회복되지 않았습니다.  <Tesla는 세계적인 공급망에 의존하고 있어 관세 부과는 사업과 수익성에 영향을 미칠 것이라고 Tesla CFO Vaibhav Taneja가 밝혔습니다.>  Apple은 중국산 제품에 대한 관세 영향이 제한적일 것으로 예상되지만, 생산 조정 가능성은 존재합니다.",
          "time": "2025-02-04T19:37:03",
          "stocks": "TSLA,AAPL",
          "originTitle": "Tesla and Apple are the ‘Magnificent Seven’ firms hit hardest by tariff shocks",
          "originLink": "https://finance.yahoo.com/news/tesla-apple-magnificent-seven-firms-174816277.html",
          "score": 7
      },
      {
          "id": 31,
          "title": "중국, 트럼프 관세 이후 구글을 넘어 미국 기업 조사 착수",
          "summary": "중국은 미국의 관세 부과에 대한 보복으로 Google, Nvidia, Intel 등 미국 기업들에 대한 조사를 시작했습니다. 특히 Nvidia는 중국 시장 의존도가 높아 타격이 클 것으로 예상되며,  <Google의 경우 중국 시장 점유율은 낮지만 Android 운영체제 점유율이 높아 영향을 미칠 수 있습니다.>  이번 조치는 미중 무역 전쟁의 심화를 의미하며 시장의 불확실성을 증폭시킬 수 있습니다. TheStreet는 투자자들에게 시장 변동성에 대비할 것을 조언합니다.",
          "time": "2025-02-04T19:33:00",
          "stocks": "GOOG,NVDA",
          "originTitle": "China fires back at more than just Google after Trump tariffs",
          "originLink": "https://finance.yahoo.com/news/china-fires-back-more-just-193300857.html",
          "score": 8
      },
      {
          "id": 32,
          "title": "초거대 기술 기업의 과감한 AI 투자",
          "summary": "Motley Fool 분석에 따르면 Meta와 Microsoft는 AI 인프라 구축에 막대한 투자를 하고 있으며, 이는 시장 기대치를 상회합니다.  <이는 향후 AI 관련 매출 증가를 위한 선제적 투자로 해석되나, 투자 위험도 존재합니다.>  DeepSeek의 등장으로 AI 경쟁이 심화되고 있으며, Nvidia 등 관련 기업에도 영향을 미칠 전망입니다.",
          "time": "2025-02-04T19:33:00",
          "stocks": "MSFT,META,NVDA",
          "originTitle": "The Hyperscalers Are Hyperspending",
          "originLink": "https://finance.yahoo.com/news/hyperscalers-hyperspending-193300642.html",
          "score": 6
      },
      {
          "id": 73,
          "title": "선컨트리 항공(SNCY) 4분기 실적 발표 요약",
          "summary": "Sun Country Airlines (SNCY)는 2024년 4분기 연속 수익성을 달성했으며, 총 매출 2억 6040만 달러, 조정 영업 마진 10.6%를 기록했습니다.  <Amazon과의 계약 확대로 2025년 화물 매출이 두 배로 증가할 것으로 예상되며,  운항 효율성 개선과 수익 증대로 지속적인 성장이 기대됩니다.>  2025년에는 블록 시간 9~10% 증가와 함께 조정 CASM은 중~고 한 자릿수 증가를 예상합니다.",
          "time": "2025-02-04T19:30:12",
          "stocks": "SNCY,AMZN",
          "originTitle": "Sun Country Airlines (SNCY) Q4 2024 Earnings Call Transcript",
          "originLink": "https://finance.yahoo.com/news/sun-country-airlines-sncy-q4-193012606.html",
          "score": 2
      },
      {
          "id": 33,
          "title": "중국, 구글·엔비디아·인텔 겨냥 반독점 조사 강화",
          "summary": "중국은 미국의 기술 대기업들에 대한 압박을 강화하고 있습니다. 구글, 엔비디아에 대한 반독점 조사를 재개하고 인텔에 대한 조사도 검토 중입니다.  이는 미중 무역 갈등과 맞물려 있어,  <미중 무역 협상에서 중국의 압력 수단으로 활용될 가능성이 높습니다>.  투자자들은 이러한 지정학적 위험을 주시해야 합니다. Google, Nvidia, Intel의 실적 전망에 부정적 영향을 미칠 수 있습니다.",
          "time": "2025-02-04T19:27:35",
          "stocks": "NVDA,INTC,GOOG",
          "originTitle": "China Hits Back: Google, Nvidia, Intel in the Crosshairs",
          "originLink": "https://finance.yahoo.com/news/china-hits-back-google-nvidia-192735604.html",
          "score": 8
      },
      {
          "id": 136,
          "title": "버크셔 해서웨이, 시리우스XM 주식 대량 매입",
          "summary": "버크셔 해서웨이가 시리우스XM(SIRI) 주식 230만 주를 추가 매입하며 지분율을 35.4%로 높였습니다.  주가 하락에도 불구하고 버크셔 해서웨이는 2024년부터 매수를 지속하고 있으며, 이는 시장의 부정적 전망과는 대조적입니다. <버크셔 해서웨이의 시리우스XM 주식 대량 매입은 시장의 역행 투자 전략으로 해석될 수 있습니다.>",
          "time": "2025-02-04T19:25:39",
          "stocks": "SIRI,BRK-B",
          "originTitle": "Warren Buffett's Big Bet: Berkshire Just Bought Millions More Shares of This Beaten-Down Stock",
          "originLink": "https://finance.yahoo.com/news/warren-buffetts-big-bet-berkshire-192539375.html",
          "score": 1
      },
      {
          "id": 86,
          "title": "트럼프 관세, 광고 업계에 그림자 (Trump Tariffs Loom Over Ad Industry)",
          "summary": "Trump's tariffs threaten the advertising industry.  Automotive and other sectors may cut ad spending due to tariffs, impacting major brands like Temu. <관세 위협으로 자동차 및 기타 부문의 광고 지출 감소가 예상되며, Temu와 같은 대형 브랜드에도 부정적 영향을 미칠 전망입니다.> Score: 1,0,0,1,1,0,1,0,0,1",
          "time": "2025-02-04T19:22:00",
          "stocks": "TFC,BAC,GOOG,META",
          "originTitle": "Trump Tariffs Loom Over Ad Industry, From Brands to Digital Sellers",
          "originLink": "https://finance.yahoo.com/m/15e2d581-bc0f-3d9c-9c8e-598e19216cd1/trump-tariffs-loom-over-ad.html",
          "score": 5
      },
      {
          "id": 7,
          "title": "관세 인상으로 아이폰 가격 상승 가능성",
          "summary": "새로운 관세가 아이폰 가격을 6개월에서 12개월 후에 인상할 수 있다는 분석이 나왔습니다.  <이는 애플을 포함한 기술주에 부정적 영향을 미칠 수 있으며, 투자자들은 주의 깊게 관찰해야 합니다.>  Apple에 대한 투자 결정에 영향을 줄 수 있는 뉴스입니다.",
          "time": "2025-02-04T19:09:00",
          "stocks": "AAPL,INTC,DELL",
          "originTitle": "New Tariffs Could Push iPhone Prices Higher. How a Trade War Could Play Out for Tech Devices.",
          "originLink": "https://finance.yahoo.com/m/95cc455b-d3f0-3e88-bbee-1b31c0dab989/new-tariffs-could-push-iphone.html",
          "score": 4
      },
      {
          "id": 74,
          "title": "아마존, 배송 경쟁력 강화로 실적 개선",
          "summary": "Amazon(AMZN)의 오프라인 매장은 어려움을 겪고 있지만, 탁월한 배송 서비스로 경쟁사들을 압도하고 있습니다.  <Amazon은 당일 또는 익일 배송 건수를 90억 건 이상 기록하며 배송 속도에서 경쟁사인 Walmart와 Target을 앞질렀습니다.>  Prime 회원들의 배송비 절감 효과는 950억 달러에 달하며,  미국 고객 평균 절감액은 500달러를 넘습니다.  Amazon의 투자는 배송 네트워크 확장 및 당일 배송 지역 확대로 이어졌습니다.  하지만 Amazon Go 매장 축소 등 오프라인 사업은 부진을 겪고 있습니다.",
          "time": "2025-02-04T19:00:44",
          "stocks": "AMZN",
          "originTitle": "Amazon stores may be struggling — but delivery is better than ever",
          "originLink": "https://finance.yahoo.com/news/amazon-stores-may-struggling-delivery-180921129.html",
          "score": 4
      },
      {
          "id": 34,
          "title": "엔비디아 투자자를 위한 주요 지표 관찰",
          "summary": "중국 헤지펀드 DeepSeek의 AI 개발 소식으로 엔비디아 주가가 11% 하락했습니다.  <엔비디아의 향후 실적 발표(2월 26일)에서 데이터센터 부문 매출 성장률이 중요한 지표가 될 것입니다.>  단기적으로는 데이터센터 매출 성장 둔화, 장기적으로는 자동차 및 로봇 부문 성장 가능성에 주목해야 합니다.",
          "time": "2025-02-04T18:57:17",
          "stocks": "NVDA",
          "originTitle": "Every Nvidia Investor Should Keep an Eye on This Number",
          "originLink": "https://finance.yahoo.com/news/every-nvidia-investor-keep-eye-185717790.html",
          "score": 4
      },
      {
          "id": 35,
          "title": "엔비디아, 여전히 최고의 선택: 마이크로소프트와 메타의 지속적인 GPU 사용",
          "summary": "BofA Securities는 엔비디아(NVDA)에 대한 매수 의견을 유지하며,  <마이크로소프트와 메타의 지속적인 GPU 사용에도 불구하고, 엔비디아는 인공지능 컴퓨팅 시장의 성장과 함께 2025년까지 60% 이상의 데이터센터 매출 성장이 기대된다.>고 분석했습니다.  중국 규제에도 불구하고, 서구 시장의 수요 증가로 상쇄될 것으로 예상하며,  4분기 매출 387억 달러, 주당순이익 0.86달러를 전망했습니다.",
          "time": "2025-02-04T18:55:00",
          "stocks": "NVDA",
          "originTitle": "Nvidia Still A Top Pick As Microsoft, Meta Stick With GPUs Despite DeepSeek Challenge: Analyst",
          "originLink": "https://finance.yahoo.com/news/nvidia-still-top-pick-microsoft-185500754.html",
          "score": 9
      },
      {
          "id": 100,
          "title": "머스크, JP모건에서 정부 지출 삭감 주장",
          "summary": "일론 머스크가 재무적 청중 앞에서 정부 지출 삭감의 이점을 주장할 예정입니다.  JP모건 행사에서 제이미 다이먼 CEO와 만나 채권 공매도에 대한 우려를 표명하며, 정부 효율성 부서(DOGE)의 재정 낭비 방지 노력을 강조할 것으로 예상됩니다.  <머스크의 JP모건 발표는 정부 지출 삭감과 재정 정책 변화에 대한 시장의 인식에 영향을 미칠 수 있습니다.>  Tesla와 JP모건 간의 과거 갈등 이후 관계 개선을 보여주는 사례이기도 합니다.",
          "time": "2025-02-04T18:40:08",
          "stocks": "JPM,TSLA",
          "originTitle": "Elon Musk to make his case about DOGE before a JPMorgan audience that includes Jamie Dimon",
          "originLink": "https://finance.yahoo.com/news/elon-musk-to-make-his-case-about-doge-before-a-jpmorgan-audience-that-includes-jamie-dimon-181229060.html",
          "score": 4
      },
      {
          "id": 87,
          "title": "Meta 주가, AI 낙관론에 사상 최고치 경신 및 전망 분석",
          "summary": "Meta 주가가 견조한 분기 실적과 AI 성장 기대감으로 사상 최고치를 경신했습니다. 기술적 분석에 따르면, 단기 목표가는 $755, 장기 목표가는 $935이며, 주요 지지선은 $632와 $600입니다.  <Meta의 AI 성장에 대한 낙관론이 주가 상승을 견인하고 있습니다.>  투자자는 지지선과 목표가를 주시해야 합니다.",
          "time": "2025-02-04T18:19:31",
          "stocks": "META",
          "originTitle": "Watch These Meta Price Levels as Stock Hits Record Highs on AI Optimism",
          "originLink": "https://finance.yahoo.com/news/watch-meta-price-levels-stock-181931903.html",
          "score": 4
      },
      {
          "id": 108,
          "title": "테슬라 유럽 판매 급감, Model Y 신차 출시에 기대",
          "summary": "테슬라 유럽 판매가 1월 급감(스웨덴 44%, 프랑스 63%)하며 1분기 실적에 악영향을 미칠 전망이다.  <Model Y 개선 모델 출시가 Tesla의 유럽 시장 부진을 만회할 열쇠가 될 것이다.>  경쟁 심화와 CEO 이미지 악화도 부정적 요인으로 작용한다.  3월 출시 예정인 Model Y 'Juniper'의 판매 성과가 중요하다.",
          "time": "2025-02-04T18:15:11",
          "stocks": "TSLA",
          "originTitle": "Model Y refresh can’t come soon enough for Tesla as preliminary January sales in Europe look dire",
          "originLink": "https://finance.yahoo.com/news/model-y-refresh-t-come-151340191.html",
          "score": 6
      },
      {
          "id": 36,
          "title": "Nvidia 주가 상승: 관세 위협 완화",
          "summary": "Nvidia 주가가 상승세를 보였습니다.  <관세 위협이 완화되면서 반도체 부문의 차질 가능성이 줄어들었기 때문입니다.>  이는 Nvidia와 같은 AI 칩 제조업체에 긍정적인 소식입니다.  투자자들은 관세 리스크 감소에 주목해야 합니다.",
          "time": "2025-02-04T18:15:00",
          "stocks": "NVDA",
          "originTitle": "Nvidia Stock Rises. What Tariff Threats Mean for the AI Chip Maker.",
          "originLink": "https://finance.yahoo.com/m/fee1c112-af6b-36e0-99e0-b9be54a81c97/nvidia-stock-rises-what.html",
          "score": 2
      },
      {
          "id": 80,
          "title": "제이미 다이먼, 아마존 사장직 제안 거절 후 JP모건 CEO로",
          "summary": "JP모건 CEO 제이미 다이먼이 Citigroup 퇴사 후 아마존의 제프 베조스로부터 사장직 제안을 받았으나 거절했다는 내용입니다.  <다이먼은 아마존의 사업을 완전히 이해하지 못했고, 가족을 시애틀로 이전해야 한다는 점이 걸렸다고 밝혔습니다.>  Home Depot의 제안도 받았으나, 결국 Bank One의 CEO직을 수락하며 금융계에 남았습니다.  이 외에도 다양한 기업의 제안을 받았으나,  자신의 역량을 최대한 발휘할 수 있는 '큰 게임'을 선택했다는 내용이 담겨 있습니다. JPMorgan Chase & Co.",
          "time": "2025-02-04T18:14:42",
          "stocks": "AMZN,HD",
          "originTitle": "Jamie Dimon spoke to Jeff Bezos about joining Amazon as president before JPMorgan career",
          "originLink": "https://finance.yahoo.com/news/jamie-dimon-spoke-jeff-bezos-152135715.html",
          "score": 0
      },
      {
          "id": 45,
          "title": "빌 게이츠, 90년대 후반까지 마이크로소프트의 실패 가능성에 늘 불안감 느껴",
          "summary": "빌 게이츠는 1990년대 마이크로소프트의 성공에도 불구하고, 90년대 후반까지는 항상 실패 가능성에 늘 불안해했으며, 한 번의 실수로도 회사가 망할 수 있다고 생각했다고 밝혔습니다.  <마이크로소프트의 성공에도 불구하고, 빌 게이츠는 90년대 후반까지 회사의 실패 가능성에 끊임없는 불안감을 느꼈다.>  이는 그의 극심한 경쟁 의식과 수면 부족 등 극단적인 노력에서 기인하며, 반독점 소송 이후에야 안정적인 위치에 있다고 느꼈다고 합니다.  이러한 그의 심리적 상태는 투자자들에게 기업의 성장 과정과 불확실성에 대한 통찰을 제공합니다. Microsoft.",
          "time": "2025-02-04T18:13:35",
          "stocks": "MSFT",
          "originTitle": "Bill Gates thought he was “one mistake away from death” with Microsoft until the late 90s",
          "originLink": "https://finance.yahoo.com/news/bill-gates-thought-one-mistake-164846769.html",
          "score": 1
      },
      {
          "id": 37,
          "title": "Nvidia, 4분기 실적 호조 및 Blackwell 칩 개발 진전으로 투자자 우려 해소 기대",
          "summary": "BofA Securities는 Nvidia(NVDA)를 최고종목으로 유지하며, 4분기 실적이 예상치를 상회하고 Blackwell 칩 개발이 진행 중이라고 밝혔습니다.  이는 투자자들의 우려를 다소 완화시킬 것으로 예상됩니다. <Nvidia의 긍정적 실적 발표와 기술 개발 진전이 주가에 긍정적 영향을 미칠 것으로 전망됩니다.>",
          "time": "2025-02-04T17:58:48",
          "stocks": "NVDA",
          "originTitle": "Nvidia to Sooth Worrisome Investors With Q4 Beat, Progress on Blackwell Chip, BofA Securities Says",
          "originLink": "https://finance.yahoo.com/news/nvidia-sooth-worrisome-investors-q4-175848508.html",
          "score": 4
      },
      {
          "id": 75,
          "title": "아마존 4분기 실적 전망: AI 기여도 증가 예상",
          "summary": "BofA Securities는 아마존(AMZN)의 4분기 실적에 대해 긍정적 전망을 제시했습니다. 매출액은 예상치에 부합하고, 영업이익은 시장 예상치를 상회할 것으로 예상하며, 특히 AWS의 성장에 AI 기여가 클 것으로 분석했습니다.  <아마존의 4분기 실적은 AWS의 AI 기여도 증가로 인해 시장 예상치를 웃돌 것으로 예상됩니다.>  그러나 편의점 사업 축소는 부정적 요소입니다.",
          "time": "2025-02-04T17:57:32",
          "stocks": "AMZN",
          "originTitle": "What's In Store For Amazon In Q4? Analyst Sees Growing AI-Contribution For AWS",
          "originLink": "https://finance.yahoo.com/news/whats-store-amazon-q4-analyst-175732559.html",
          "score": 4
      },
      {
          "id": 76,
          "title": "관세 우려에도 불구하고 성장하는 3가지 주식",
          "summary": "관세 및 무역 전쟁에도 불구하고 Amazon, Meta Platforms, Interactive Brokers 등 주요 주식들이 강세를 보이고 있습니다.  <이들 기업은 강력한 성장 전망과 높은 Zacks 순위를 바탕으로 투자자들의 주목을 받고 있습니다.>  Amazon의 경우 전자상거래, 클라우드 컴퓨팅, 디지털 광고 부문의 성장세가 두드러지며, Meta Platforms와 Interactive Brokers 역시 견조한 실적을 기록하고 있습니다. 장기적인 투자 관점에서 꾸준한 실적 성장을 보이는 기업에 주목해야 합니다.",
          "time": "2025-02-04T17:51:00",
          "stocks": "IBKR,AMZN,META",
          "originTitle": "3 Stocks Thriving Despite Tariffs Concerns",
          "originLink": "https://finance.yahoo.com/news/3-stocks-thriving-despite-tariffs-175100126.html",
          "score": 3
      },
      {
          "id": 77,
          "title": "아마존의 오프라인 매장 사업 실패",
          "summary": "Amazon is closing more physical convenience stores due to poor performance.  A retail consultant criticized Amazon's apparent lack of understanding of the physical retail market. <아마존의 오프라인 편의점 사업이 부진으로 인해 더 많은 매장을 폐점하고 있다는 소식은,  그들의 리테일 시장 이해도에 대한 의문을 제기한다.>  This news highlights Amazon's struggles in the brick-and-mortar sector, impacting investor confidence.",
          "time": "2025-02-04T17:51:00",
          "stocks": "AMZN",
          "originTitle": "Amazon, King of Online Retail, Can’t Seem to Make Its Physical Stores Work",
          "originLink": "https://finance.yahoo.com/m/34bd2281-d13f-370b-b6f9-c79f950174af/amazon-king-of-online.html",
          "score": 2
      },
      {
          "id": 88,
          "title": "Zacks 투자 연구 보고서: Meta, Mastercard, Adobe 등 주요 기업 실적 분석",
          "summary": "Zacks Investment Research는 Meta, Mastercard, Adobe 등 16개 주요 기업의 4분기 실적과 분석가 보고서를 발표했습니다. Meta는 사용자 증가와 AI 활용으로 성장세를 보이고 있으나 AI 서비스의 수익화는 시간이 걸릴 것으로 예상됩니다.  <Meta의 사용자 증가와 AI 활용이 성장을 견인하지만, AI 서비스 수익화 지연은 우려되는 부분입니다.> Mastercard는 디지털 결제 확산에 따른 성장이 기대되지만 높은 운영 비용이 부담입니다. Adobe는 경쟁 심화와 수익화 문제에 직면하고 있으나, GenAI 기반 제품 출시로 성장 가능성을 유지합니다.",
          "time": "2025-02-04T17:49:00",
          "stocks": "ADBE,META,MA,ANET,TJX",
          "originTitle": "Earnings Season Scorecard and Analyst Reports for Meta Platforms, Mastercard & Adobe",
          "originLink": "https://finance.yahoo.com/news/earnings-season-scorecard-analyst-reports-174900765.html",
          "score": 7
      },
      {
          "id": 38,
          "title": "엔비디아(NVDA): 견고한 성장주인가? 3가지 이유",
          "summary": "Zacks 투자 연구에 따르면 엔비디아(NVDA)는 강력한 성장 잠재력을 지닌 성장주입니다.  <43.2%의 예상 EPS 성장률과 303.7%의 현금흐름 성장률을 바탕으로 높은 성장세가 기대됩니다.>  높은 Zacks 순위와 성장 점수(A)는 투자 매력도를 높입니다.  하지만 성장주 투자는 위험이 따르므로 신중한 접근이 필요합니다.",
          "time": "2025-02-04T17:45:06",
          "stocks": "NVDA",
          "originTitle": "Is Nvidia (NVDA) a Solid Growth Stock? 3 Reasons to Think \"Yes\"",
          "originLink": "https://finance.yahoo.com/news/nvidia-nvda-solid-growth-stock-174506774.html",
          "score": 5
      },
      {
          "id": 89,
          "title": "Meta, AR/VR에 200억 달러 투자, 스마트 안경 판매 증가",
          "summary": "Meta는 AR/VR 사업부인 Reality Labs에 2024년 200억 달러를 투자할 계획입니다.  Ray-Ban Meta 스마트 안경 판매가 증가하고 있고,  2025년을 스마트 안경의 원년으로 보고 있습니다.  <Meta의 대규모 AR/VR 투자는 장기적인 성장 전략으로 해석되지만,  단기적인 수익성에는 의문이 제기되고 있습니다.>  투자에도 불구하고,  Meta 주가는 지난 1년간 54% 상승했습니다.",
          "time": "2025-02-04T17:40:32",
          "stocks": "META",
          "originTitle": "Meta Pours $20 Billion Into AR/VR as Smart Glasses Sales Climb",
          "originLink": "https://finance.yahoo.com/news/meta-pours-20-billion-ar-174032155.html",
          "score": 3
      },
      {
          "id": 15,
          "title": "애플, EU 규정으로 인한 성인 앱 허용에 반발",
          "summary": "애플이 EU의 디지털 시장법(DMA)에 따라 허용된 성인 콘텐츠 앱 출시에 우려를 표명했습니다.  <애플은 해당 앱이 소비자 신뢰를 저해하고 안전 위험을 초래한다고 주장하며,  EU 규정 준수를 강조하지만 자사의 안전 기준과는 상반된다고 비판했습니다.>  하지만 AltStore 및 Epic Games는 애플의 독점력 유지를 위한 변명이라고 반박했습니다.  이 사건은 애플의 App Store 정책과 EU 규제 간의 갈등을 보여주는 사례입니다. Apple은 DMA 규정 준수를 강요받았지만,  안전상의 우려를 제기하며 비판적인 입장을 유지하고 있습니다.",
          "time": "2025-02-04T17:34:18",
          "stocks": "AAPL",
          "originTitle": "Apple lashes out at iPhone porn app maker and the EU rules allowing its download",
          "originLink": "https://finance.yahoo.com/news/apple-lashes-iphone-porn-app-151406991.html",
          "score": 5
      },
      {
          "id": 9,
          "title": "애플, 구독 서비스 확장 위한 새로운 초대장 앱 및 AppleCare+ 변경 발표",
          "summary": "Apple이 이벤트 초대장 앱인 'Apple Invites'와 AppleCare+ 구독 변경을 발표했습니다.  Apple Invites는 iCloud+ 구독 필요하며, AppleCare+는 월/연간 결제로 전환되어 초기 비용 부담을 줄이고, 도난 및 분실 보험 강화했습니다. <Apple은 서비스 및 구독 사업 확장을 통해 매출 증대를 추구하고 있습니다.>  이는 경쟁 서비스에 영향을 미칠 수 있으며, Apple의 서비스 부문 성장 전략을 보여줍니다.",
          "time": "2025-02-04T17:11:06",
          "stocks": "AAPL",
          "originTitle": "Apple Debuts Invites App, Care+ Changes in Subscription Push",
          "originLink": "https://finance.yahoo.com/news/apple-debuts-invites-app-applecare-163935852.html",
          "score": 2
      },
      {
          "id": 90,
          "title": "Meta Platforms(META) 주식 매수 타당성 분석",
          "summary": "Zacks 투자 조사에 따르면, Meta Platforms(META)는 강력한 모멘텀 점수(A)와 매수 등급(#2)을 받았습니다. 주가는 최근 급등세를 보이며, 시장 평균을 상회하는 성과를 거두고 있습니다.  <META의 강한 모멘텀과 매수 등급은 단기 투자에 매력적인 요소로 작용할 수 있다.>  단기 및 장기 주가 상승세와 긍정적인 수익 추정치 수정 등이 이를 뒷받침합니다.",
          "time": "2025-02-04T17:00:04",
          "stocks": "META",
          "originTitle": "Meta Platforms (META) is a Great Momentum Stock: Should You Buy?",
          "originLink": "https://finance.yahoo.com/news/meta-platforms-meta-great-momentum-170004988.html",
          "score": 5
      },
      {
          "id": 10,
          "title": "애플, 2025년 시가총액 1위 자리 내놓을 가능성 높아",
          "summary": "애플(AAPL)의 시가총액 성장세 둔화 우려가 제기됨.  매출 성장률 둔화와 iPhone 16 판매 부진 등이 원인으로 지목되며,  <2025년까지 시가총액 1위 자리를 유지하기 어려울 것이라는 전망이 나온다.>  하지만 서비스 부문 성장과 향후 신제품 출시 가능성 등 긍정적 요인도 존재한다.  높은 주가수익비율(PER)은 투자 위험 요소.",
          "time": "2025-02-04T16:55:00",
          "stocks": "AAPL",
          "originTitle": "Apple Will Probably Lose Its Market Cap Crown in 2025",
          "originLink": "https://finance.yahoo.com/news/apple-probably-lose-market-cap-165500397.html",
          "score": 3
      },
      {
          "id": 11,
          "title": "워렌 버핏의 투자 전략: 버크셔 해서웨이 포트폴리오 분석",
          "summary": "This article discusses Warren Buffett's investment strategy and the current holdings of Berkshire Hathaway.  <버크셔 해서웨이 CEO 워렌 버핏의 투자 전략과 포트폴리오 구성에 대한 분석입니다.>  Buffett's consistent approach and dynamic adjustments within his portfolio are highlighted for investors.",
          "time": "2025-02-04T16:50:15",
          "stocks": "BRK-A,AAPL",
          "originTitle": "Warren Buffett Stocks: What's Inside Berkshire Hathaway's Portfolio?",
          "originLink": "https://finance.yahoo.com/m/ce2ffe06-f882-3e0d-8b97-fa77d137e8bb/warren-buffett-stocks-what-s.html",
          "score": 1
      },
      {
          "id": 91,
          "title": "미국인 직원 이직률 감소",
          "summary": "미 노동부에 따르면, 지난해 미국인의 이직률이 2020년 이후 최저치를 기록했습니다.  이는 고용 시장 안정화를 시사하며, <미국 경제의 긍정적 신호로 해석될 수 있습니다.>  이는 투자 심리에 긍정적 영향을 미칠 가능성이 있습니다.  ",
          "time": "2025-02-04T16:33:00",
          "stocks": "META,KFY",
          "originTitle": "Fewer Americans Are Quitting Their Jobs",
          "originLink": "https://finance.yahoo.com/m/9e95fc08-46d1-32d8-ae6c-e20b80e0b868/fewer-americans-are-quitting.html",
          "score": 1
      },
      {
          "id": 92,
          "title": "CMB International, Meta Platforms 전망치 상향 조정",
          "summary": "CMB International은 Meta Platforms (META)에 대해 '매수' 등급을 유지하며, AI와 광고 부문 성장에 힘입어 1분기 실적 호조를 전망했습니다.  <Meta Platforms의 1분기 매출 성장은 AI 투자와 핵심 사업 부문 성장에 힘입어 8-15%로 예상됩니다.>  하지만 DeepSeek의 저가 AI 모델 등장으로 인한 시장 불확실성도 존재합니다.",
          "time": "2025-02-04T16:24:15",
          "stocks": "META",
          "originTitle": "CMB International Maintains ‘Buy’ Rating on Meta Platforms, Inc. (META), Projecting Strong Q1 Growth Driven by AI and Advertising",
          "originLink": "https://finance.yahoo.com/news/cmb-international-maintains-buy-rating-162415825.html",
          "score": 6
      },
      {
          "id": 78,
          "title": "아마존, 4분기 실적 호조 전망 - BofA",
          "summary": "BofA Securities는 아마존(AMZN)의 4분기 실적이 인공지능 부문 성장에 힘입어 강세를 보일 것으로 예상합니다.  <아마존의 4분기 실적 호조는 인공지능 부문 성장에 기인할 것으로 보입니다.>  이는 투자자들에게 긍정적인 신호이며 주가 상승을 기대하게 합니다.",
          "time": "2025-02-04T16:23:07",
          "stocks": "AMZN",
          "originTitle": "Amazon Poised for 'Strong' Q4 Results, BofA Says",
          "originLink": "https://finance.yahoo.com/news/amazon-poised-apos-strong-apos-162307098.html",
          "score": 3
      },
      {
          "id": 12,
          "title": "BofA, Apple 주가 '매수' 재확인 - AI 성장 및 공급망 회복력에 주목",
          "summary": "BofA는 Apple(AAPL)에 대한 투자 의견을 '매수'로 유지했습니다.  <Apple의 AI 기술 활용 증가와 관세 속에서도 탄력적인 공급망을 고려했기 때문입니다.>  중국 DeepSeek의 AI 모델 등장으로 인한 시장 불확실성에도 불구하고, Apple의 안정적인 현금흐름과 수익성, AI 기술 경쟁력을 높이 평가했습니다.  다만, 다른 AI 주식의 높은 성장 잠재력도 언급했습니다.",
          "time": "2025-02-04T16:18:39",
          "stocks": "AAPL",
          "originTitle": "BofA Reiterates ‘Buy’ on Apple Inc. (AAPL), Citing AI Growth and Resilient Supply Chain Amid Tariffs",
          "originLink": "https://finance.yahoo.com/news/bofa-reiterates-buy-apple-inc-161839806.html",
          "score": 4
      },
      {
          "id": 13,
          "title": "애플, 새로운 이벤트 초대 앱 'Apple Invites' 출시",
          "summary": "애플이 새로운 이벤트 초대 앱 Apple Invites를 출시했습니다.  사진, 비디오 공유, Apple Music 플레이리스트 연동 등 다양한 기능을 제공하며, iCloud+ 사용자에게는 더욱 풍부한 기능을 제공합니다. <Apple은 새로운 앱 Apple Invites를 통해 이벤트 계획 및 공유 기능을 강화했습니다.>",
          "time": "2025-02-04T16:00:00",
          "stocks": "AAPL",
          "originTitle": "Introducing Apple Invites, a new app that brings people together for life’s special moments",
          "originLink": "https://finance.yahoo.com/news/introducing-apple-invites-app-brings-160000149.html",
          "score": 1
      },
      {
          "id": 46,
          "title": "트럼프 1차 무역전쟁 이후 변화된 세계: 보복 준비 완료",
          "summary": "China, Russia, and US allies have prepared economic countermeasures against future US trade actions. These retaliatory options pose a significant threat to the American economy and living standards. <미국의 무역 공격에 대한 중국, 러시아 및 미국의 동맹국들의 경제적 보복 조치 준비가 미국 경제와 생활 수준에 심각한 위협이 될 수 있다.> Score: 1,0,0,0,1,0,0,1,0,0",
          "time": "2025-02-04T16:00:00",
          "stocks": "MSFT",
          "originTitle": "The World Has Changed Since Trump’s First Trade War. Other Countries Are Ready to Fight Back.",
          "originLink": "https://finance.yahoo.com/m/acc74485-1acf-3375-ab0c-b4852b93aa80/the-world-has-changed-since.html",
          "score": 3
      },
      {
          "id": 1,
          "title": "엔비디아 주가 하락에도 불구하고 긍정적 전망 유지",
          "summary": "BofA 애널리스트 Vivek Arya는 엔비디아를 2025년 최고 투자 종목으로 재확인하며 목표 주가를 190달러로 제시했습니다.  <이는 경쟁사의 AI 모델 등장에도 불구하고 엔비디아의 데이터센터 매출 성장과 향후 기술 발표에 대한 기대감이 반영된 것입니다.>  그러나 중국 DeepSeek의 저렴한 AI 모델 등장과  Amazon, Google 등의 경쟁 심화는 엔비디아 주가에 위험 요소로 작용하고 있습니다.",
          "time": "2025-02-04T15:58:43",
          "stocks": "MSFT,AVGO,AAPL,GOOG,AMD",
          "originTitle": "Nvidia sell-off hasn't rocked this bull looking for a nearly 60% pop in the AI darling",
          "originLink": "https://finance.yahoo.com/news/nvidia-sell-off-hasnt-rocked-this-bull-looking-for-a-nearly-60-pop-in-the-ai-darling-155843344.html",
          "score": 4
      },
      {
          "id": 107,
          "title": "트럼프의 관세, 테슬라 주가에 타격 (5% 하락): 향후 전망은?",
          "summary": "Trump의 관세로 인해 Tesla 주가가 5% 하락하며 S&P 500에서 최악의 성과를 보였습니다.  <테슬라는 중국 생산 비중이 높아 관세 부과의 직접적인 타격을 받고 있으며, 수익성 악화 및 판매 감소 우려가 커지고 있습니다.>  단기적으로는 어려움이 예상되지만, 자율주행 기술과 에너지 사업 부문의 성장 가능성은 장기적 성장의 잠재력을 시사합니다.  하지만 현재 고평가 상태이며, 투자 결정은 신중해야 합니다.",
          "time": "2025-02-04T15:53:00",
          "stocks": "TSLA",
          "originTitle": "Trump's Tariffs Hit TSLA Hard, Shares Fall 5%: What's Next?",
          "originLink": "https://finance.yahoo.com/news/trumps-tariffs-hit-tsla-hard-155300458.html",
          "score": 7
      },
      {
          "id": 14,
          "title": "DeepSeek의 등장과 빅테크의 대응",
          "summary": "중국 AI 기업 DeepSeek의 저렴한 AI 컴퓨팅 기술 등장으로 Nvidia 등 빅테크 기업 주가가 급락했습니다.  Microsoft와 Meta는 AI 투자를 지속하고, Apple은 iPhone 판매 부진을 겪고 있습니다.  Tesla는 2025년과 2026년 큰 계획을 가지고 있으며, Starbucks는 새로운 CEO 하에 변화를 시도하고 있습니다. <DeepSeek의 저렴한 AI 기술이 시장에 큰 충격을 주며 빅테크 기업들의 주가에 영향을 미쳤습니다.> Visa와 Mastercard는 소비자 지출이 여전히 견조함을 보여주었습니다.",
          "time": "2025-02-04T15:33:00",
          "stocks": "TSLA,AAPL,MSFT,SBUX,NVDA",
          "originTitle": "DeepSeek Disrupts, Big Tech Responds",
          "originLink": "https://finance.yahoo.com/news/deepseek-disrupts-big-tech-responds-153300308.html",
          "score": 7
      },
      {
          "id": 79,
          "title": "아마존과 이베르드롤라, 재생에너지 파트너십 확대",
          "summary": "아마존과 이베르드롤라가 476MW 규모의 추가 재생에너지 PPA를 체결, 5개국으로 파트너십 확대.  <아마존의 유럽 재생에너지 전환 노력과 이베르드롤라의 글로벌 재생에너지 포트폴리오 확장이 시너지를 창출하고 있다.>  이는 아마존의 기후 목표 달성과 유럽의 지속 가능한 에너지 전환에 기여할 것으로 예상.  AWS 클라우드 서비스 활용으로 효율성 증대 및 혁신 가속화도 기대.",
          "time": "2025-02-04T15:22:44",
          "stocks": "AMZN",
          "originTitle": "Amazon and Iberdrola boost renewable energy partnership with 476MW PPAs",
          "originLink": "https://finance.yahoo.com/news/amazon-iberdrola-boost-renewable-energy-152244940.html",
          "score": 2
      },
      {
          "id": 118,
          "title": "Broadcom (AVGO) 장기 투자 전망 분석",
          "summary": "Aristotle Atlantic Partners는 4분기 투자 서한에서 Broadcom (AVGO)의 실적(매출 516억 달러, 전년 대비 44% 증가)과 헤지펀드의 높은 관심을 언급했으나,  <AI주식의 단기간 고수익 가능성이 더 높다고 평가했습니다.>  AVGO 주가는 지난 52주 동안 81.05% 상승했으나, 최근 한 달간은 -3.18% 하락했습니다.",
          "time": "2025-02-04T15:07:55",
          "stocks": "AVGO",
          "originTitle": "Should You Hold Broadcom (AVGO) for the Long-Term?",
          "originLink": "https://finance.yahoo.com/news/hold-broadcom-avgo-long-term-150755939.html",
          "score": 2
      },
      {
          "id": 109,
          "title": "머스크, 560억 달러 보상에 반대한 노르웨이 국부펀드 CEO와 갈등",
          "summary": "Tesla CEO인 Elon Musk가 그의 560억 달러 보상안에 반대한 노르웨이 국부펀드(NBIM) CEO와 갈등을 빚었습니다.  <NBIM은 보상 규모의 과다와 주주가치 희석 우려를 제기하며 반대표를 던졌고, Musk는 이에 불만을 표하며 공개적으로 비난했습니다.>  이 사건은 Tesla 주가와 Musk의 보상 체계에 대한 논쟁을 재점화시켰습니다. Benzinga는 투자 조언을 제공하지 않습니다.",
          "time": "2025-02-04T15:00:19",
          "stocks": "TSLA",
          "originTitle": "Elon Musk Clashes With CEO Of $1.7 Trillion Norway Wealth Fund And Tesla Shareholder Who Voted Against His $56 Billion Compensation Deal",
          "originLink": "https://finance.yahoo.com/news/elon-musk-clashes-ceo-1-150019724.html",
          "score": 4
      },
      {
          "id": 47,
          "title": "머스크, OpenAI의 영리 전환 저지 소송 제기",
          "summary": "일론 머스크가 OpenAI의 영리 전환을 저지하려 소송을 제기했습니다.  <머스크는 OpenAI가 공익 목표를 저버리고 이익 추구에 나섰다고 주장하며, 이는 그의 AI 스타트업 xAI에 불리하게 작용한다고 보고 있습니다.>  OpenAI는  SoftBank 주도의 400억 달러 투자 유치를 위해 영리 전환이 필수적이라고 반박하며, 머스크의 주장은 근거 없다고 주장합니다.  소송 결과는 AI 업계 경쟁 구도에 큰 영향을 미칠 전망입니다.  Bloomberg Intelligence는 머스크의 가처분 신청이 기각될 가능성이 높다고 분석했습니다.",
          "time": "2025-02-04T15:00:00",
          "stocks": "MSFT",
          "originTitle": "Musk, OpenAI Set to Clash in Court Over Startup’s Restructuring",
          "originLink": "https://finance.yahoo.com/news/musk-openai-set-clash-court-150000591.html",
          "score": 6
      },
      {
          "id": 110,
          "title": "트럼프의 성별 관련 행정명령, EEOC 내 반발 야기",
          "summary": "Trump's executive order against \"gender ideology extremism\" has sparked a revolt within the Equal Employment Opportunity Commission (EEOC).  Some EEOC staff are protesting the move by a Trump appointee to comply with the order. <트럼프의 행정명령으로 인해 EEOC 내부에서 반발이 일어나고 있으며, 이는 주식 시장에 간접적인 영향을 미칠 수 있습니다.>  This could indirectly affect market sentiment.",
          "time": "2025-02-04T15:00:00",
          "stocks": "TSLA",
          "originTitle": "Trump’s Gender Order Sparks Revolt Inside Agency Tasked With Protecting Workers",
          "originLink": "https://finance.yahoo.com/m/260b793b-0530-31fd-a891-18d00a926e99/trump%E2%80%99s-gender-order-sparks.html",
          "score": 3
      },
      {
          "id": 111,
          "title": "테슬라 주식, 지금 투자할 가치가 있을까요? 머스크의 야심찬 AI 약속",
          "summary": "Elon Musk는 Tesla가 향후 AI와 로봇 사업을 통해 세계 최고 기업이 될 것이라 주장하지만, Optimus 로봇의 10조 달러 매출 목표는 비현실적입니다.  자율주행 기술과 로봇택시 사업의 실현 가능성에 대한 의문과 주가 과대평가,  최근 주가 하락 등을 고려할 때 현재 투자는 시기상조입니다. <현재 테슬라의 AI 및 자율주행 기술에 대한 야심찬 목표는 아직 실현 가능성이 불확실하며, 주가는 과대평가되어 있어 투자를 신중하게 고려해야 합니다.>  Tesla의 2025년 실적이 중요한 분수령이 될 것입니다.",
          "time": "2025-02-04T14:54:00",
          "stocks": "TSLA",
          "originTitle": "Is TSLA Stock Worth Betting On Now on Musk's Big AI Promises?",
          "originLink": "https://finance.yahoo.com/news/tsla-stock-worth-betting-now-145400730.html",
          "score": 7
      },
      {
          "id": 93,
          "title": "Meta, AI 투명성 강화 조치 발표",
          "summary": "Meta는 자사 AI 생성 이미지 도구 사용에 대한 투명성을 높이기 위해 광고 이미지에 AI 사용 표시를 개선한다고 발표했습니다.  <>이는 특히 자사 AI 도구로 \"상당히\" 편집된 이미지에 적용되며, 향후 비 Meta AI 도구로 생성된 이미지에도 확대 적용할 계획입니다.  하지만 일반 게시물에는 아직 적용되지 않아 우려가 남습니다.",
          "time": "2025-02-04T14:46:40",
          "stocks": "META",
          "originTitle": "Meta Outlines Improving AI Transparency Disclosures",
          "originLink": "https://finance.yahoo.com/news/meta-outlines-improving-ai-transparency-144640140.html",
          "score": 3
      },
      {
          "id": 81,
          "title": "미국의 무관세 규정 폐지로 Shein과 Temu 가격 인상 예상",
          "summary": "미국이 저가 중국산 제품의 무관세 혜택을 없애면서 Shein과 Temu의 가격 인상이 예상됩니다.  <이 조치는 Shein과 Temu와 같은 기업의 가격 경쟁력을 약화시키고 Amazon에게는 기회가 될 수 있습니다.>  Amazon은 이러한 변화에 큰 영향을 받지 않을 것으로 예상되며, 오히려 경쟁력 강화의 기회로 삼을 수 있습니다.  Shein과 Temu는 중국 외 지역에서의 소싱 확대 등으로 대응하고 있습니다.",
          "time": "2025-02-04T14:44:46",
          "stocks": "AMZN",
          "originTitle": "Shein, Temu, Amazon Haul set for price hikes as US shuts trade loophole",
          "originLink": "https://finance.yahoo.com/news/shein-temu-amazon-haul-set-144446456.html",
          "score": 6
      },
      {
          "id": 82,
          "title": "아마존 4분기 실적 발표 예정: DeepSeek, AI, 관세의 영향 주목",
          "summary": "아마존 주가는 관세 우려와 DeepSeek로 인한 기술 시장의 혼란에도 불구하고 견조했습니다. 목요일에 발표될 4분기 실적이 주요 관심사입니다.  <아마존의 4분기 실적 발표가 주가에 큰 영향을 미칠 것으로 예상됩니다.> Amazon's Q4 earnings, to be released Thursday, will be a key indicator of its resilience amidst tariff concerns and the impact of DeepSeek on the tech market.",
          "time": "2025-02-04T14:40:27",
          "stocks": "AMZN",
          "originTitle": "Amazon Q4 Earnings On Deck. Spotlight On DeepSeek, AI Shake-Up, Tariffs.",
          "originLink": "https://finance.yahoo.com/m/79a2719f-ea7a-3dd1-bf84-d917daa932dd/amazon-q4-earnings-on-deck-.html",
          "score": 3
      },
      {
          "id": 116,
          "title": "중국, 미국의 관세에 대한 보복 조치 단행",
          "summary": "중국이 미국의 관세 부과에 대한 보복으로 석탄, 원유, 농업 장비 등 미국산 상품에 추가 관세를 부과했습니다.  <알파벳(구글), 인텔 등 미국 기업들에 대한 반독점 조사 착수도 예고되어 미-중 무역 전쟁이 심화될 조짐을 보이고 있습니다.>  이러한 관세 전쟁은 Google, Intel 등 미국 기업 주가에 부정적 영향을 미칠 수 있습니다.  Morning Brief 에서 전문가 분석을 확인하세요.",
          "time": "2025-02-04T14:35:28",
          "stocks": "CAT,ILMN,BZ=F,CL=F,INTC",
          "originTitle": "China retaliates against US with tariffs, antitrust probes",
          "originLink": "https://finance.yahoo.com/video/china-retaliates-against-us-tariffs-143528455.html",
          "score": 8
      },
      {
          "id": 94,
          "title": "메타 플랫폼스(META) 매수 타당성 분석: 월가 애널리스트들의 긍정적 전망",
          "summary": "월가 애널리스트들은 Meta Platforms (META)에 대해 평균 1.37 (5점 만점, 1이 강력 매수)의 매수 의견을 제시했습니다.  하지만  <애널리스트들의 긍정적 평가만으로 투자 결정을 내리는 것은 위험하며,  Zacks Rank와 같은  객관적인 지표를 활용하는 것이 중요합니다.>  Zacks Rank는 수익 추정치 수정을 기반으로 하며, META는 현재 Zacks Rank #2 (매수)를 받았습니다.",
          "time": "2025-02-04T14:30:12",
          "stocks": "META",
          "originTitle": "Is Meta Platforms (META) a Buy as Wall Street Analysts Look Optimistic?",
          "originLink": "https://finance.yahoo.com/news/meta-platforms-meta-buy-wall-143012587.html",
          "score": 3
      },
      {
          "id": 16,
          "title": "DeepSeek AI, 앱 다운로드 1위 석권 및 글로벌 우려",
          "summary": "중국 스타트업 DeepSeek의 AI 어시스턴트 앱이 미국 앱스토어 1위를 기록하며 18일 만에 1600만 다운로드를 돌파, ChatGPT를 넘어섰습니다. 하지만 대만을 비롯한 여러 국가에서 보안 및 개인정보 문제로 사용 금지 또는 검토에 들어가면서 글로벌 규제 리스크에 직면했습니다. <DeepSeek AI 앱의 급성장에도 불구하고, 각국의 보안 및 개인정보 우려가 큰 위험 요소로 작용하고 있습니다.>",
          "time": "2025-02-04T14:19:41",
          "stocks": "GOOG,AAPL",
          "originTitle": "DeepSeek AI Tops App Downloads, Surpasses ChatGPT but Faces Global Scrutiny",
          "originLink": "https://finance.yahoo.com/news/deepseek-ai-tops-app-downloads-141941732.html",
          "score": 6
      },
      {
          "id": 48,
          "title": "마이크로소프트의 800억 달러 AI 투자: 미래 기술 성장의 촉매제",
          "summary": "마이크로소프트는 800억 달러 규모의 AI 데이터센터 개발 계획을 발표하며 AI 기술에 대한 투자를 강화했습니다.  이는 Nvidia, Meta 등 다른 기업들의 AI 투자와 시너지를 일으켜 반도체 및 기술 부문에 상당한 이익을 가져올 것으로 예상됩니다. <마이크로소프트의 대규모 AI 투자는 기술 부문의 미래 성장을 촉진하는 중요한 계기가 될 것입니다.>  그러나 단기적인 시장 가치 하락 가능성도 고려해야 합니다.",
          "time": "2025-02-04T14:17:23",
          "stocks": "MSFT",
          "originTitle": "Microsoft's $80 Billion AI Surge: A Catalyst for Future Tech Growth",
          "originLink": "https://finance.yahoo.com/news/microsofts-80-billion-ai-surge-141723906.html",
          "score": 9
      },
      {
          "id": 55,
          "title": "중국 관세, 알파벳 실적, 팔란티어 급등: 3가지 주요 뉴스",
          "summary": "미중 무역 긴장 속에 중국이 미국에 대한 보복 관세를 준비 중이며, 알파벳(구글)은 반독점 조사를 받고 있습니다.  팔란티어는 어닝 서프라이즈로 주가가 급등했습니다.  <미중 무역 갈등과 알파벳에 대한 중국의 반독점 조사는 투자자들의 주의를 요구하는 주요 이슈입니다.>  Alphabet, Palantir Technologies의 실적 발표와 미중 무역 전쟁의 영향을 주목해야 합니다.",
          "time": "2025-02-04T14:11:00",
          "stocks": "ES=F,NQ=F,YM=F,GOOG,AMD",
          "originTitle": "China's tariffs, Alphabet earnings, Palantir surges: 3 Things",
          "originLink": "https://finance.yahoo.com/video/chinas-tariffs-alphabet-earnings-palantir-141100633.html",
          "score": 6
      },
      {
          "id": 112,
          "title": "아리스토텔레스 애틀랜틱, 테슬라 투자 비중 축소로 수익률 저조",
          "summary": "Aristotle Atlantic Partners의 4분기 투자 서한에 따르면, 대형주 성장 전략 펀드의 수익률 저조는 테슬라 투자 비중 축소가 영향을 미쳤습니다.  <펀드는 테슬라의 성장 가능성을 인정하지만, AI주식에 더 높은 수익률을 기대하여 투자 비중을 줄였습니다.>  S&P 500 지수 상승에도 불구하고 Russell 1000 Growth Index를 underperform했습니다.",
          "time": "2025-02-04T14:09:16",
          "stocks": "TSLA",
          "originTitle": "Underweight Tesla (TSLA) Exposure Impacted Aristotle Atlantic Large Cap Growth Strategy’s Performance",
          "originLink": "https://finance.yahoo.com/news/underweight-tesla-tsla-exposure-impacted-140916892.html",
          "score": 3
      },
      {
          "id": 83,
          "title": "Trump's 무관세 규제 강화, Shein과 Temu 타격 및 Amazon에 긍정적 영향",
          "summary": "Former President Trump's new policy targeting tariff-free imports of small goods may significantly hurt Chinese e-commerce giants Shein and Temu, potentially benefiting Amazon.  This could reshape the competitive landscape of online retail. <이 정책은 중국 전자상거래 업체인 Shein과 Temu에 큰 타격을 줄 수 있으며, Amazon에는 긍정적인 영향을 미칠 수 있습니다.>",
          "time": "2025-02-04T13:56:53",
          "stocks": "AMZN",
          "originTitle": "Trump’s crackdown on trade loophole to hit Shein and Temu — and help Amazon",
          "originLink": "https://finance.yahoo.com/news/donald-trump-crackdown-trade-loophole-135653829.html",
          "score": 6
      },
      {
          "id": 113,
          "title": "리비안 vs. 테슬라: 더 나은 전기차 주식은?",
          "summary": "테슬라와 리비안 전기차 주식 비교 분석. 테슬라는 시장 점유율 1 자리를 차지하고 있지만, 높은 주가가 부담. 리비안은 성장 잠재력이 크지만, 아직 수익성 확보는 과제. <투자자는 각 회사의 장단점을 고려하여 투자 결정을 내려야 한다.>  The Motley Fool은 두 회사 모두 투자 가치가 있다고 평가.",
          "time": "2025-02-04T13:40:00",
          "stocks": "TSLA,RIVN",
          "originTitle": "Better EV Stock: Rivian vs. Tesla",
          "originLink": "https://finance.yahoo.com/news/better-ev-stock-rivian-vs-134000272.html",
          "score": 4
      },
      {
          "id": 84,
          "title": "아마존 주식 매수 3가지 이유: 4분기 실적 발표 전 분석",
          "summary": "Amazon(AMZN)의 4분기 실적 발표를 앞두고, 견조한 성장세가 예상됩니다.  <프라임 생태계 확장, AWS의 AI 투자, 그리고 옴니채널 전략 강화가 주요 성장 동력입니다.>  매출 성장과 AWS의 꾸준한 성장세는 투자 매력을 높입니다.  다만, 높은 주가수익비율은 고려해야 할 점입니다.",
          "time": "2025-02-04T13:33:00",
          "stocks": "AMZN",
          "originTitle": "3 Reasons That Make Amazon Stock a Must-Buy Ahead of Q4 Earnings",
          "originLink": "https://finance.yahoo.com/news/3-reasons-amazon-stock-must-133300894.html",
          "score": 6
      },
      {
          "id": 114,
          "title": "포드(Ford) 실적 발표 예상 및 분석",
          "summary": "Ford는 내일 장 마감 후 실적을 발표할 예정입니다.  분석가들은 매출이 전년 대비 변동 없을 것으로 예상하며, 주당 순이익은 0.32달러로 예상합니다.  <최근 분기 Ford는 매출 예상치를 상회했지만, 조정 영업이익은 예상치에 미달했습니다.>  경쟁사인 General Motors와 Tesla의 실적 발표 이후 주가 변동을 고려할 때, 투자자들은 Ford의 실적 발표에 주목할 필요가 있습니다.",
          "time": "2025-02-04T13:08:42",
          "stocks": "F,TSLA",
          "originTitle": "Ford (F) To Report Earnings Tomorrow: Here Is What To Expect",
          "originLink": "https://finance.yahoo.com/news/ford-f-report-earnings-tomorrow-130842269.html",
          "score": 4
      },
      {
          "id": 17,
          "title": "트럼프 관세, 빅테크 ETF에 미치는 영향",
          "summary": "트럼프 행정부의 중국산 전자제품 관세 부과로 Apple, Nvidia 등 빅테크 기업과 관련 ETF (VGT, XLK, SMH, IYW, XLC)에 부정적 영향이 예상됩니다.  <생산 기지 다변화 노력에도 불구하고, 관세로 인한 가격 상승은 소비자 수요 감소로 이어질 수 있습니다.>  관세 면제 가능성도 있지만, 불확실성이 높아 주의 깊게 관찰해야 합니다. BofA는 Apple의 주당 순이익 감소를 예상했습니다.",
          "time": "2025-02-04T13:00:00",
          "stocks": "AAPL",
          "originTitle": "How Will Big Tech ETFs Be Impacted by Trump Tariffs?",
          "originLink": "https://finance.yahoo.com/news/big-tech-etfs-impacted-trump-130000026.html",
          "score": 9
      },
      {
          "id": 115,
          "title": "E-Mobility Europe, EU의 2025년 CO2 배출 규정 준수 촉구",
          "summary": "E-Mobility Europe는 EU가 자동차 제조업체의 벌금 면제 대신 2025년 CO2 배출 규정을 고수하고 전기차 구매 장려책을 시행해야 한다고 촉구했습니다.  <2025년 CO2 배출 목표 달성을 위한 전기차 판매 촉진책 마련이 시급하다고 강조했습니다.>  규정 준수 시 전기차 판매가 크게 증가할 것이라는 연구 결과를 제시하며,  Tesla, CATL 등 주요 업체들이 지지하고 있습니다.  규정 완화는 투자 감소로 이어질 수 있다는 경고도 나왔습니다.",
          "time": "2025-02-04T12:59:16",
          "stocks": "TSLA",
          "originTitle": "E-Mobility Europe urges EU to stick to 2025 CO2 emission rules",
          "originLink": "https://finance.yahoo.com/news/e-mobility-europe-urges-eu-125916985.html",
          "score": 6
      },
      {
          "id": 2,
          "title": "빌 게이츠, 엔비디아 경쟁 심화 경고",
          "summary": "빌 게이츠는 엔비디아(NVDA)의 AI칩 시장 독주가  경쟁 심화로 위협받고 있다고 경고했습니다. 아마존, 구글 등 대기업의 AI칩 진출과 중국 DeepSeek의 저렴한 AI 모델 등장으로 엔비디아의 장기적 수요에 대한 의문이 제기되고 있으며,  <엔비디아 주가는 올해 들어 15% 하락하며 경쟁 심화 우려를 반영하고 있습니다.>  이는 투자자들에게 엔비디아의 성장 전망에 대한 재평가를 요구하고 있습니다.",
          "time": "2025-02-04T12:59:14",
          "stocks": "TSM,TSMWF,QCOM,SNOW,AMD",
          "originTitle": "Microsoft's Bill Gates issues this key reminder to Nvidia bulls",
          "originLink": "https://finance.yahoo.com/news/microsofts-bill-gates-issues-this-key-reminder-to-nvidia-bulls-125913525.html",
          "score": 5
      },
      {
          "id": 49,
          "title": "알리바바 클라우드, DeepSeek AI 모델 통합",
          "summary": "알리바바 클라우드가 중국 AI 스타트업 DeepSeek의 AI 모델들을 자사 플랫폼에 통합했습니다.  <이를 통해 사용자들은 DeepSeek-V3, DeepSeek-R1 등 다양한 모델에 손쉽게 접근하여 AI 애플리케이션 개발이 가능해졌습니다.>  이는  Alibaba Cloud의 경쟁력 강화 및 AI 시장 경쟁 심화를 시사합니다.  Huawei, Tencent, NVIDIA, Microsoft 등 경쟁사들도 유사한 움직임을 보이고 있습니다.",
          "time": "2025-02-04T12:23:35",
          "stocks": "MSFT,NVDA,ASND",
          "originTitle": "Alibaba Cloud integrates DeepSeek’s AI models",
          "originLink": "https://finance.yahoo.com/news/alibaba-cloud-integrates-deepseek-ai-122335346.html",
          "score": 2
      },
      {
          "id": 50,
          "title": "마이크로소프트의 800억 달러 AI 투자와 관련주 전망",
          "summary": "마이크로소프트의 2025년 800억 달러 AI 데이터센터 투자 계획 발표로 Nvidia 등 AI 관련주가 수혜를 볼 전망이다.  <이는 AI 분야의 급격한 성장과 투자 확대를 보여주는 중요한 지표이며, 관련 기업들의 매출 증가로 이어질 가능성이 높다.>  특히 Nvidia는 AI 칩 시장을 주도하고 있으며, TSMC는 Nvidia의 칩 생산을 담당하는 주요 업체로서 장기적인 투자 가치가 있다고 분석된다.",
          "time": "2025-02-04T12:17:00",
          "stocks": "NVDA,MSFT,TSM,GOOG,AMZN",
          "originTitle": "Microsoft CEO Satya Nadella's $80 Billion Promise: What It Means for Nvidia and AI Stocks",
          "originLink": "https://finance.yahoo.com/news/microsoft-ceo-satya-nadellas-80-121700303.html",
          "score": 8
      },
      {
          "id": 95,
          "title": "2025년 시장을 장악할 인공지능(AI) 주식: Meta Platforms",
          "summary": "DeepSeek의 저렴한 AI 모델 발표에도 불구하고, Meta Platforms(META)는 견고한 실적(4분기 매출 21%, EPS 50% 증가)과 AI 투자 여력을 바탕으로 2025년 시장을 지배할 유력 후보입니다.  <Meta의 탄탄한 기반 사업과 잠재적인 AI 성장 가능성의 조합은 매력적인 투자 기회를 제공합니다.>  높은 성장률과 적정한 주가는 투자 매력도를 높입니다.",
          "time": "2025-02-04T12:15:00",
          "stocks": "META",
          "originTitle": "1 No-Brainer Artificial Intelligence (AI) Stock That Will Crush the Market in 2025",
          "originLink": "https://finance.yahoo.com/news/1-no-brainer-artificial-intelligence-121500536.html",
          "score": 4
      },
      {
          "id": 18,
          "title": "애플 주가 3년 후 전망: AI가 이끄는 성장",
          "summary": "애플(AAPL)의 2025년 1분기 실적은 예상치를 상회했으며, AI 기능인 Apple Intelligence의 확산으로 향후 3년간 주가 상승이 기대됩니다.  <AI 기능 확대와  iPhone 업그레이드 사이클에 따른 매출 증가가 주가 상승을 견인할 전망입니다.>  애널리스트들은 2027년 주당순이익 9.17달러, 주가 307달러를 예상합니다.",
          "time": "2025-02-04T12:12:00",
          "stocks": "AAPL",
          "originTitle": "Where Will Apple Stock Be in 3 Years?",
          "originLink": "https://finance.yahoo.com/news/where-apple-stock-3-years-121200222.html",
          "score": 5
      },
      {
          "id": 19,
          "title": "Check Point의 AI 기반 사이버 보안 강화 및 시장 분석",
          "summary": "Check Point Software Technologies는 AI 기반 Infinity 플랫폼을 발표했습니다.  통합 보안 관리 강화 및 위협 예방을 목표로 하며,  <>AI를 활용하여 정책 관리를 간소화하고 제로 트러스트를 개선하는 등의 기능을 제공합니다.  다른 클라우드 AI 관련 주식(Microsoft, Alphabet, Apple 등)의 시장 동향도 함께 소개합니다.",
          "time": "2025-02-04T12:06:49",
          "stocks": "GOOG,AAPL,MSFT",
          "originTitle": "This Week In Cloud AI - Revolutionizing Cybersecurity With AI-Powered Innovations",
          "originLink": "https://finance.yahoo.com/news/week-cloud-ai-revolutionizing-cybersecurity-120649446.html",
          "score": 2
      },
      {
          "id": 96,
          "title": "메타 플랫폼, 2025년 AI 혁신 예고",
          "summary": "Meta Platforms는 AI 분야에 대규모 투자를 진행 중이며, CEO 마크 저커버그가 2025년 중대한 AI 돌파구를 예상한다고 밝혔습니다.  <특히, 중간급 엔지니어 수준의 AI 에이전트 개발이 임박하여,  생산성 극대화 또는 혁신 가속화를 가져올 것으로 기대됩니다.>  4분기 매출은 전년 대비 21% 증가한 484억 달러를 기록했으며,  강력한 성장세에도 불구하고 주가는 저평가되어 투자 기회로 평가됩니다.",
          "time": "2025-02-04T11:45:00",
          "stocks": "META",
          "originTitle": "Mark Zuckerberg Says This Will Be a Huge AI Breakthrough in 2025 for Meta Platforms",
          "originLink": "https://finance.yahoo.com/news/mark-zuckerberg-says-huge-ai-114500151.html",
          "score": 6
      },
      {
          "id": 97,
          "title": "ENGIE, 2024년 4.3GW PPA 계약 확보",
          "summary": "ENGIE가 2024년 4.3GW 규모의 전력구매계약(PPA)을 체결하며 전년 대비 성장세를 기록했습니다.  이는 미국 Meta 및 Google과의 계약 확대를 포함하며, 재생에너지 수요 증가를 반영합니다.  <미국을 포함한 5개 대륙에서 85건의 계약을 체결, 재생에너지 시장의 성장 가능성을 보여줍니다.>  총 계약 규모는 14GW에 달하며, 향후 성장도 기대됩니다.  ENGIE의 성과는 재생에너지 부문 투자 전략의 성공을 시사합니다.",
          "time": "2025-02-04T11:20:27",
          "stocks": "META",
          "originTitle": "ENGIE secures 4.3GW in PPA deals for 2024",
          "originLink": "https://finance.yahoo.com/news/engie-secures-4-3gw-ppa-112027679.html",
          "score": 3
      },
      {
          "id": 51,
          "title": "중국 DeepSeek의 AI 돌파구로 수혜 예상되는 칩주: Qualcomm",
          "summary": "중국 DeepSeek의 저렴한 AI 모델 개발로 인해,  Nvidia 등 기존 AI 칩 업체 주가가 하락한 가운데, Rosenblatt Securities는 에지 AI 칩 제조사인 Qualcomm(QCOM)이 수혜를 볼 것이라 전망했습니다. <Qualcomm의 에지 AI 칩 수요 증가로 인한 성장 가능성이 주목된다.>  이는 DeepSeek의 모델이 에지 기기에서 AI 활용을 확대할 것이라는 기대 때문입니다.",
          "time": "2025-02-04T10:55:00",
          "stocks": "QCOM,MSFT",
          "originTitle": "1 Wall Street Analyst Thinks This Artificial Intelligence (AI) Chip Stock Could Benefit From DeepSeek's Breakthrough",
          "originLink": "https://finance.yahoo.com/news/1-wall-street-analyst-thinks-105500645.html",
          "score": 4
      },
      {
          "id": 20,
          "title": "버크셔 해서웨이, 애플 주식에 막대한 투자",
          "summary": "워렌 버핏의 버크셔 해서웨이가 자산의 24%를 애플 주식에 투자했으나, 최근에는 지분을 줄이고 있습니다. 애플의 높은 주가수익비율과 성장세 둔화 우려가 투자 매력을 떨어뜨리고 있기 때문입니다. <애플 주식 투자는 현재 매수하기에는 매력적이지 않을 수 있다.>  하지만 애플은 여전히 버크셔 해서웨이의 최대 투자 종목입니다.",
          "time": "2025-02-04T10:10:00",
          "stocks": "AAPL",
          "originTitle": "24% of Warren Buffett-Led Berkshire Hathaway's $303 Billion Portfolio Is Invested in Only 1 Stock",
          "originLink": "https://finance.yahoo.com/news/24-warren-buffett-led-berkshire-101000584.html",
          "score": 4
      },
      {
          "id": 98,
          "title": "메타 플랫폼 주식 매수 적기? AI 주도 성장 기대",
          "summary": "메타(META)의 4분기 실적 발표 후 주가 상승세가 이어지고 있습니다.  <Meta AI의 급성장과 AI 관련 새로운 수익원 창출 가능성으로 향후 주가 상승이 예상됩니다.>  기록적인 매출과 순이익 달성,  AI 모델 Llama의 성공적인 오픈소스 전략 등이 주목할 만합니다.  높은 성장 잠재력에도 불구하고 주가는 저평가되어 있다는 분석입니다.",
          "time": "2025-02-04T10:00:00",
          "stocks": "META,GOOG",
          "originTitle": "When You Look Back on This Moment, You'll Wish You'd Bought This Trillion-Dollar Artificial Intelligence (AI) Stock",
          "originLink": "https://finance.yahoo.com/news/look-back-moment-youll-wish-100000817.html",
          "score": 5
      },
      {
          "id": 119,
          "title": "인공지능(AI) 혁명의 가장 큰 결함을 드러낸 DeepSeek",
          "summary": "DeepSeek의 등장으로 인해 과대평가된 AI 채택률과 초기 단계 유틸리티가 드러났습니다.  Nvidia와 Broadcom 등 AI 관련 주식의 급락은 AI 투자 수익에 대한 불확실성을 반영하며,  <대부분의 기업은 AI 하드웨어/소프트웨어 최적화 및 투자 수익 창출 방안을 명확히 갖고 있지 않다는 점이 드러났습니다.>  장기적으로 AI 시장의 성장 가능성은 높지만, 단기적으로는 과도한 기대치 조정이 불가피할 수 있습니다.  The Motley Fool은 투자자들에게 신중한 접근을 권고합니다.",
          "time": "2025-02-04T09:51:00",
          "stocks": "NVDA,AVGO,COMP,MSFT",
          "originTitle": "DeepSeek Just Exposed the Biggest Flaw of the Artificial Intelligence (AI) Revolution",
          "originLink": "https://finance.yahoo.com/news/deepseek-just-exposed-biggest-flaw-095100734.html",
          "score": 5
      },
      {
          "id": 123,
          "title": "트럼프의 관세, 엔비디아 주가 폭락으로 이어져",
          "summary": "트럼프 행정부의 새로운 관세 부과로 엔비디아(Nvidia) 주가가 급락했습니다. 중국산 데이터 처리 장비 수입에 대한 관세 인상은 AI 칩 수요 감소로 이어질 수 있으며, 엔비디아의 중국 매출(17%)에도 영향을 미칠 것으로 예상됩니다.  <엔비디아 주가 하락은 트럼프 행정부의 관세 정책과 중국 AI 시장의 변화에 따른 불확실성 증가를 반영합니다.>  다른 반도체 업체들도 주가 하락을 경험했습니다.",
          "time": "2025-02-03T21:02:47",
          "stocks": "MU,QCOM,AVGO,^SOX,NVDA",
          "originTitle": "Nvidia stock falls as Trump's tariffs send shockwaves across the market",
          "originLink": "https://finance.yahoo.com/news/nvidia-stock-falls-as-trumps-tariffs-send-shockwaves-across-the-market-150548726.html",
          "score": 9
      },
      {
          "id": 120,
          "title": "Broadcom Inc.(AVGO) 투자 매력 분석",
          "summary": "Insider Monkey는 12개 최고 FAANG+ 주식 중 Broadcom Inc.(AVGO)를 분석했습니다.  AVGO는 5년간 시가총액이 1,440억 달러에서 1조 달러로 증가했고, 2024년 매출은 전년 대비 44% 증가했습니다.  <하지만 AI 관련 주식이 더 높은 수익률을 제공할 것이라는 기대감으로 8위에 그쳤습니다.>  AVGO는 데이터센터 솔루션 확장으로 성장 가능성이 높으나,  AI 주식의 잠재력이 더 크다고 평가했습니다.",
          "time": "2025-02-03T20:29:06",
          "stocks": "AVGO",
          "originTitle": "Is Broadcom Inc. (AVGO) the Best FAANG+ Stock to Invest in Right Now?",
          "originLink": "https://finance.yahoo.com/news/broadcom-inc-avgo-best-faang-202906605.html",
          "score": 5
      },
      {
          "id": 121,
          "title": "관세 영향으로 반도체 및 자동차 주식 하락",
          "summary": "Trump 행정부의 관세 정책으로 자동차 및 반도체 업종에 부정적 영향이 예상됩니다.  캐나다 관세는 자동차 산업 비용 증가 및 공급망 차질을 야기하고, 중국 수입 관세는 반도체 업계에 위험을 초래합니다. Constellation Brands (STZ)는 관세 부담으로 실적 전망치 하향 조정을 받았습니다. <관세 정책으로 인한 자동차 및 반도체 업계의 타격이 주요 지수에 영향을 미칠 것으로 예상됨>",
          "time": "2025-02-03T16:42:08",
          "stocks": "STLA,^DJI,AMAT,F,^IXIC",
          "originTitle": "Chip and auto stocks, Constellation react to tariffs: Market Minute",
          "originLink": "https://finance.yahoo.com/video/chip-auto-stocks-constellation-react-164208533.html",
          "score": 9
      },
      {
          "id": 122,
          "title": "트럼프의 반도체 관세 발언으로 칩주 폭락",
          "summary": "트럼프 대통령의 추가 관세 부과 위협으로 반도체 주식이 급락하고 있다. KeyBanc Capital Markets의 John Vinh는 관세가 자동차, PC, 스마트폰 등 최종 수요에 부정적 영향을 미쳐 반도체 업체들에까지 악영향을 줄 것이라고 분석했다.  <관세 부과 위협으로 인한 최종 수요 감소가 반도체 업체 주가 하락으로 이어질 것이라는 전망이 우세하다.>  Nvidia, Arm Holdings, On Semiconductor는 상대적으로 선방할 가능성이 있다고 언급했다.  KeyBanc Capital Markets 분석에 따르면,  미국 내 생산 전환의 유연성 부족으로 인해 타격이 클 것으로 예상된다.",
          "time": "2025-02-03T15:30:46",
          "stocks": "TXN,NVDA,MRVL,AVGO,INTC",
          "originTitle": "Chip stocks dropping as Trump hints at semiconductor tariffs",
          "originLink": "https://finance.yahoo.com/video/chip-stocks-dropping-trump-hints-153046440.html",
          "score": 8
      },
      {
          "id": 124,
          "title": "AMD 실적 발표: AI 전략, 투자자 검증대에 오르다",
          "summary": "AMD의 4분기 실적 발표를 앞두고, AI 시장에서의 경쟁력에 대한 우려가 커지고 있습니다.  대기업들의 맞춤형 칩 개발이 증가하면서  <AMD의 AI 시장 점유율 확대가 쉽지 않을 것으로 예상됩니다.>  Nvidia의 독점적 지위와 높은 전환 비용이 AMD의 성장을 제한할 수 있지만,  AI 투자 지속으로 인한 수요 증가는 긍정적 요인입니다.  4분기 매출은 22% 증가할 것으로 예상되나,  AI 칩 시장 경쟁 심화는 주의 깊게 살펴봐야 합니다.",
          "time": "2025-02-03T13:01:17",
          "stocks": "NVDA,AVGO",
          "originTitle": "AMD earnings: AI bets face investor scrutiny as Big Tech switches to custom chips",
          "originLink": "https://finance.yahoo.com/news/amds-ai-bets-face-investor-121202399.html",
          "score": 6
      },
      {
          "id": 125,
          "title": "AMD의 AI 전략, 투자자들의 면밀한 검토 필요",
          "summary": "AMD의 4분기 실적 발표를 앞두고, Big Tech의 맞춤형 칩 전환으로 인해 AMD의 AI 시장 경쟁력에 대한 우려가 제기되고 있습니다.  <Nvidia의 AI 시장 점유율 독점과 맞춤형 칩 채택 증가로 AMD의 성장 전망이 불투명해졌다.>  하지만,  AI 분야 지속적인 투자와 높은 수요로 인해  AMD의 데이터 센터 칩 부문 매출은 크게 증가할 것으로 예상됩니다.  투자자들은 AMD의 AI 전략과 시장 경쟁력에 대한 면밀한 분석이 필요합니다.",
          "time": "2025-02-03T12:12:02",
          "stocks": "NVDA,AVGO",
          "originTitle": "AMD's AI bets face investor scrutiny as Big Tech switches to custom chips",
          "originLink": "https://finance.yahoo.com/news/amds-ai-bets-face-investor-121202571.html",
          "score": 4
      },
      {
          "id": 126,
          "title": "Nvidia 급락이 드러낸 주식 시장의 위험",
          "summary": "Nvidia 주가 17% 폭락으로 시가총액 5900억 달러 증발.  이는 S&P 500 및 Nasdaq-100 지수에 큰 영향을 미쳤으며,  Nvidia와 같은 소수 대형 기술주에 대한 시장 집중 리스크를 보여줍니다. <Nvidia 주가 급락은 S&P 500과 Nasdaq-100 지수에 큰 영향을 미치며, 시장 집중 리스크를 경고하는 사례이다.> 투자자는 포트폴리오 내 개별 주식의 비중을 파악하고,  다변화 전략을 고려해야 합니다.",
          "time": "2025-02-02T23:06:00",
          "stocks": "NVDA,^GSPC,AVGO",
          "originTitle": "Nvidia's 17% Plunge Exposed One of the Greatest Risks in the Stock Market",
          "originLink": "https://finance.yahoo.com/news/nvidias-17-plunge-exposed-one-230600561.html",
          "score": 5
      },
      {
          "id": 127,
          "title": "짐 크레이머의 브로드컴(AVGO) 경고: ‘무슨 일이든 일어날 수 있다!’",
          "summary": "Jim Cramer는 AI 칩 업체의 주가 폭락을 언급하며 Broadcom (AVGO)에 대한 우려를 표명했습니다. AVGO는 AI 투자의 수혜를 입었지만, DeepSeek 급락으로 17.4% 하락했습니다.  크레이머는 AVGO의 성장 가능성을 인정하지만, 더 높은 수익률을 기대할 수 있는 다른 AI 주식에 투자하는 것을 권장합니다. <크레이머는 AVGO의 성장 잠재력에도 불구하고, 더 높은 수익률을 제공할 수 있는 다른 AI 주식에 투자할 것을 제안했습니다.>",
          "time": "2025-02-02T19:03:16",
          "stocks": "AVGO",
          "originTitle": "Jim Cramer’s Broadcom (AVGO) Warning: ‘Anything Can Happen!’",
          "originLink": "https://finance.yahoo.com/news/jim-cramer-broadcom-avgo-warning-190316577.html",
          "score": 3
      },
      {
          "id": 128,
          "title": "초보 투자자를 위한 최고의 주식, Broadcom Inc. (AVGO)?",
          "summary": "Insider Monkey는 헤지펀드 선호도를 기반으로 초보 투자자에게 적합한 주식 10선을 발표했습니다. Broadcom (AVGO)는 8위에 랭크되었으나,  <더욱 저평가된 AI 관련 주식이 더 높은 수익률을 제공할 가능성이 있다>고 언급했습니다. AVGO는 견조한 실적(2024년 매출 516억 달러)을 보였으나,  AI 분야의 중국 기업 부상 등 시장 불확실성도 존재합니다.",
          "time": "2025-02-02T12:08:57",
          "stocks": "AVGO",
          "originTitle": "Is Broadcom Inc. (AVGO) the Best Stock for Beginners with Little Money According to Hedge Funds?",
          "originLink": "https://finance.yahoo.com/news/broadcom-inc-avgo-best-stock-120857016.html",
          "score": 6
      },
      {
          "id": 129,
          "title": "Broadcom(AVGO) 주가 상승 및 주주총수익률 분석",
          "summary": "Broadcom(AVGO) 주가는 5년간 602% 상승했으나, 최근 시가총액 감소.  EPS 성장률은 연 14%이나 주가 상승률은 연 48%로 시장의 긍정적 평가 반영.  <5년간 주주총수익률(TSR)은 709%로, 배당금 재투자 고려 시 주가 상승률을 웃돌았다.>  단기간 시장 변동성 고려 필요.",
          "time": "2025-02-02T12:00:32",
          "stocks": "AVGO",
          "originTitle": "Broadcom's (NASDAQ:AVGO) five-year total shareholder returns outpace the underlying earnings growth",
          "originLink": "https://finance.yahoo.com/news/broadcoms-nasdaq-avgo-five-total-120032100.html",
          "score": 2
      },
      {
          "id": 130,
          "title": "10년 후 아마존보다 가치 있을 3가지 주식 예측",
          "summary": "The Motley Fool은 Alphabet, Tesla, Broadcom 3개의 주식이 10년 안에 아마존의 시가총액을 넘어설 것이라고 예측합니다.  <Alphabet은 AI, 양자 컴퓨팅 등 미래 성장 동력을 보유하고 있으며, Tesla는 전기차 시장 성장과 Elon Musk의 경영 복귀 가능성이 기대되고, Broadcom은 AI 관련 기술 성장으로 높은 성장세를 이어갈 전망입니다.>  각 회사의 성장 전략과 시장 전망을 분석하여 투자 전략을 제시합니다.",
          "time": "2025-02-02T11:55:00",
          "stocks": "AMZN,GOOG,AVGO,TSLA",
          "originTitle": "Prediction: 3 Stocks That'll Be Worth More Than Amazon 10 Years From Now",
          "originLink": "https://finance.yahoo.com/news/prediction-3-stocks-thatll-worth-115500945.html",
          "score": 2
      },
      {
          "id": 131,
          "title": "록히드 마틴 연금, 주식 포트폴리오 변경",
          "summary": "Lockheed Martin의 연금 기금이 Nvidia, Apple, Broadcom 주식 비중을 늘리고 Walmart 주식 비중을 줄였다는 소식입니다.  <이는 기술주에 대한 투자 선호도를 보여주는 사례로 해석될 수 있습니다.>  투자자들은 기술주 시장의 향후 전망과 Lockheed Martin의 투자 전략 변화에 주목할 필요가 있습니다.",
          "time": "2025-02-02T08:00:00",
          "stocks": "AVGO,NVDA,WMT,LMT",
          "originTitle": "Lockheed Martin’s Pension Bought Nvidia, Apple, Broadcom Stock. It Sold Walmart.",
          "originLink": "https://finance.yahoo.com/m/c159d382-b407-3411-a746-9362b8646028/lockheed-martin%E2%80%99s-pension.html",
          "score": 1
      },
      {
          "id": 137,
          "title": "장기 저위험 주식으로서의 Berkshire Hathaway Inc. (BRK-B) 분석",
          "summary": "Berkshire Hathaway Inc. (BRK-B)는 장기 저위험 투자 대상으로 꼽히는 기업이나, 더 높은 수익률을 기대할 수 있는 다른 주식도 존재한다는 분석이다.  <BRK-B는 안정적인 수익과 배당금을 제공하지만, 더 빠른 성장을 원하는 투자자에게는 다른 대안을 고려해볼 필요가 있다.>  최근 실적 개선에도 불구하고,  높은 유동성을 유지하며 신중한 투자 전략을 취하고 있다. 기술주 약세 속에서 안전자산 선호 현상이 나타나고 있으며,  S&P 500 등 주요 지수에도 영향을 미치고 있다.",
          "time": "2025-02-01T21:21:48",
          "stocks": "BRK-B",
          "originTitle": "Why Berkshire Hathaway Inc. (BRK-B) Is Among the Best Long Term Low Risk Stocks to Buy Now",
          "originLink": "https://finance.yahoo.com/news/why-berkshire-hathaway-inc-brk-212148667.html",
          "score": 5
      },
      {
          "id": 132,
          "title": "헤지펀드가 주목하는 가장 유망한 배당주, Broadcom Inc.(AVGO)",
          "summary": "Broadcom Inc.(AVGO)는 헤지펀드들이 가장 유망한 배당주로 꼽는 기업입니다.  <AI 관련 매출 급증과 14년 연속 배당금 증가로 높은 성장세를 보이고 있으며,  강력한 현금흐름을 바탕으로 배당금을 지속적으로 증가시키고 있습니다.>  높은 배당 성장률 전망과 안정적인 사업모델이 투자 매력을 높이고 있으나,  더 높은 수익률을 추구하는 투자자에게는 AI 관련 주식이 더 매력적일 수 있습니다.",
          "time": "2025-02-01T20:12:36",
          "stocks": "AVGO",
          "originTitle": "Is Broadcom Inc. (AVGO) the Most Promising Dividend Stock According to Hedge Funds?",
          "originLink": "https://finance.yahoo.com/news/broadcom-inc-avgo-most-promising-201236579.html",
          "score": 5
      },
      {
          "id": 133,
          "title": "2024년 급등한 Broadcom 주식, 2025년에도 가능할까?",
          "summary": "2024년 주가가 두 배 이상 상승한 Broadcom(AVGO)의 2025년 전망에 대한 분석입니다. AI 시장 내 강력한 위치에도 불구하고, DeepSeek의 R1 모델 출시 이후 주가가 급락했습니다. VMware 인수 후 가격 인상으로 인한 소송과 AI 투자 감소 가능성이 우려되며, 현재 투자는 신중해야 합니다. <Broadcom의 주가는 AI 시장과 VMware 사업의 불확실성으로 인해 단기적으로는 투자를 지양하는 것이 좋습니다.>",
          "time": "2025-02-01T17:29:00",
          "stocks": "AVGO",
          "originTitle": "Broadcom Stock Doubled in 2024. Can This Dominant AI Stock Double Again in 2025?",
          "originLink": "https://finance.yahoo.com/news/broadcom-stock-doubled-2024-dominant-172900054.html",
          "score": 4
      },
      {
          "id": 138,
          "title": "버크셔 해서웨이 주식, 지금 매수할 때인가?",
          "summary": "버크셔 해서웨이 주식의 매수 여부를 분석.  워렌 버핏의 후계자 문제와 고평가된 주가, 그리고 경영진의 주식 매도 등을 고려할 때 현재 매수는 신중해야 함을 시사. <버핏 본인과 주요 경영진이 주식 매수에 소극적인 상황을 감안할 때, 현재 주가 수준에서의 매수는 지양하는 것이 바람직하다.>  장기적인 성장 가능성은 있으나, 현재 고평가 우려가 존재.",
          "time": "2025-02-01T11:45:00",
          "stocks": "BRK-B",
          "originTitle": "Is Berkshire Hathaway Stock a Buy Now?",
          "originLink": "https://finance.yahoo.com/news/berkshire-hathaway-stock-buy-now-114500193.html",
          "score": 3
      },
      {
          "id": 134,
          "title": "Meta의 AI 투자 확대로 Nvidia, Broadcom, Arista Networks 수혜 예상",
          "summary": "Meta가 2025년 AI 데이터센터 구축에 600억~650억 달러를 투자할 계획이라고 발표하며, GPU 공급업체 Nvidia, AI 칩 설계업체 Broadcom, 네트워크 스위치 업체 Arista Networks의 수혜가 예상됩니다.  <이는 Meta의 AI 투자 확대가 관련 기업들의 매출 증가로 이어질 것이라는 기대감을 높였습니다.> 하지만 고평가 우려와 장기적 불확실성도 존재합니다.",
          "time": "2025-02-01T10:25:00",
          "stocks": "META,NVDA,AVGO,ANET",
          "originTitle": "Meta CEO Mark Zuckerberg Just Shared Great News for Nvidia, Broadcom, and Arista Networks Investors",
          "originLink": "https://finance.yahoo.com/news/meta-ceo-mark-zuckerberg-just-102500824.html",
          "score": 6
      }
    ]
)

  return { articles }
})
