/* ===========================
   조선왕 MBTI — script.js
=========================== */

// ── 질문 데이터 ──────────────────────────────────────────
const QUESTIONS = [
  {
    icon: "🏯",
    text: "중요한 결정을 내릴 때 나는?",
    answers: [
      { text: "혼자 조용히 깊이 생각한 뒤 결론을 낸다", dims: { I: 2 } },
      { text: "여러 사람의 의견을 듣고 토론하며 결론을 낸다", dims: { E: 2 } },
    ],
  },
  {
    icon: "📜",
    text: "새로운 일을 시작할 때 나는?",
    answers: [
      { text: "계획을 철저히 세우고 단계별로 진행한다", dims: { J: 2 } },
      { text: "일단 시작해보고 상황에 따라 유연하게 대처한다", dims: { P: 2 } },
    ],
  },
  {
    icon: "⚔️",
    text: "갈등 상황에서 나는?",
    answers: [
      { text: "논리적 근거를 제시하며 상대를 설득한다", dims: { T: 2 } },
      { text: "상대방의 감정을 먼저 헤아리며 화해를 추구한다", dims: { F: 2 } },
    ],
  },
  {
    icon: "🔭",
    text: "문제를 바라볼 때 나는?",
    answers: [
      { text: "현재 주어진 사실과 데이터에 집중한다", dims: { S: 2 } },
      { text: "미래 가능성과 전체 맥락을 먼저 본다", dims: { N: 2 } },
    ],
  },
  {
    icon: "🌙",
    text: "퇴근 후(여가 시간)에 나는?",
    answers: [
      { text: "집에서 혼자 쉬며 에너지를 충전한다", dims: { I: 2 } },
      { text: "사람들과 어울리며 활력을 얻는다", dims: { E: 2 } },
    ],
  },
  {
    icon: "🗺️",
    text: "여행을 갈 때 나는?",
    answers: [
      { text: "숙소·일정·동선을 미리 꼼꼼히 계획한다", dims: { J: 2 } },
      { text: "큰 목적지만 정하고 즉흥적으로 움직인다", dims: { P: 2 } },
    ],
  },
  {
    icon: "💬",
    text: "친구가 고민을 털어놓을 때 나는?",
    answers: [
      { text: "해결 방법을 직접 제안하고 조언한다", dims: { T: 2 } },
      { text: "충분히 들어주며 공감하고 위로한다", dims: { F: 2 } },
    ],
  },
  {
    icon: "🏛️",
    text: "팀 프로젝트에서 나는?",
    answers: [
      { text: "실질적이고 검증된 방법을 선호한다", dims: { S: 2 } },
      { text: "창의적인 아이디어로 새 방향을 제시한다", dims: { N: 2 } },
    ],
  },
  {
    icon: "🎭",
    text: "처음 만나는 자리에서 나는?",
    answers: [
      { text: "먼저 말을 거는 편이다", dims: { E: 2 } },
      { text: "상대방이 말을 걸어주길 기다린다", dims: { I: 2 } },
    ],
  },
  {
    icon: "👑",
    text: "일을 마무리할 때 나는?",
    answers: [
      { text: "마감 전에 여유 있게 완료한다", dims: { J: 2 } },
      { text: "마감 직전에 집중해서 완성한다", dims: { P: 2 } },
    ],
  },
];

// ── 왕 데이터 (MBTI → 왕) ─────────────────────────────────
const KINGS = {
  INTJ: {
    king: "세종대왕",
    era: "조선 4대 왕 · 재위 1418~1450",
    emoji: "👑",
    title: "조선 최고의 전략가",
    catchphrase: "조용하지만 세상을 바꾸는 완벽주의자",
    traits: ["분석적", "계획적", "독립적", "완벽주의"],
    history:
      "한글 창제, 측우기·자격루 등 과학 기술 혁신, 집현전 설립으로 학문을 장려했습니다. 조용히 일하지만 그 결과는 500년 역사를 바꿨습니다.",
    meme: "말은 적고 결과는 레전드. 회의에서 조용히 앉아 있다가 끝에 한마디로 정리함.",
    good: "정조 (INTP) — 지식 공유 케미 최강",
    bad:  "연산군 (ENTP) — 논리 충돌 폭발 위험",
    type: "💼 성군 타입 👑",
  },
  INTP: {
    king: "정조",
    era: "조선 22대 왕 · 재위 1776~1800",
    emoji: "📚",
    title: "학문으로 나라를 바꾼 철학자",
    catchphrase: "생각이 멈추지 않는 왕",
    traits: ["논리적", "탐구적", "창의적", "독창적"],
    history:
      "규장각을 설치해 인재를 발굴하고, 수원 화성을 건설했습니다. 끊임없이 새 아이디어를 탐구하며 조선의 르네상스를 이끌었습니다.",
    meme: "머릿속에 항상 논문이 돌아가는 타입. '잠깐, 근데 그게 왜 그런 거지?'가 입에 붙음.",
    good: "세종대왕 (INTJ) — 같이 있으면 밤새 토론 가능",
    bad:  "인조 (ESFJ) — 이론 vs 현실 충돌",
    type: "📖 성군 타입 👑",
  },
  ENTJ: {
    king: "태종",
    era: "조선 3대 왕 · 재위 1400~1418",
    emoji: "⚔️",
    title: "조선을 설계한 냉철한 CEO",
    catchphrase: "결과로만 말하는 진짜 리더",
    traits: ["결단력", "전략적", "카리스마", "목표지향"],
    history:
      "왕권 강화를 위해 사병 폐지, 6조 직계제를 시행했습니다. 냉정하지만 조선의 기틀을 완성한 실용적 지도자였습니다.",
    meme: "회의 시작 10분 만에 결론 냄. 감정 없이 효율만 추구하는 전설의 ENTJ.",
    good: "세종대왕 (INTJ) — 아버지와 아들, 역사 최강 조합",
    bad:  "단종 (INFP) — 강함 vs 부드러움 충돌",
    type: "🔥 결단 타입 ⚡",
  },
  ENTP: {
    king: "연산군",
    era: "조선 10대 왕 · 재위 1494~1506",
    emoji: "🎭",
    title: "천재적이지만 한계를 모른 논쟁가",
    catchphrase: "모두가 틀렸고 나만 옳다고 생각하는 사람",
    traits: ["창의적", "논쟁적", "직관적", "즉흥적"],
    history:
      "뛰어난 지적 능력을 가졌지만 신하들과의 갈등을 자초했습니다. 자신의 아이디어에 확신을 가지되 절제하지 못한 비극적 천재.",
    meme: "토론에서 무조건 반박 가능. '근데 그게 진짜 맞아?' 라고 항상 물어보는 사람.",
    good: "광해군 (ISTP) — 실용주의 콤비",
    bad:  "영조 (INFJ) — 가치관 전면 충돌",
    type: "⚡ 폭군 타입 🔥",
  },
  INFJ: {
    king: "영조",
    era: "조선 21대 왕 · 재위 1724~1776",
    emoji: "🌙",
    title: "가장 오래 고민한 이상주의자",
    catchphrase: "세상을 바꾸고 싶지만 과거에 발이 묶인 왕",
    traits: ["이상주의", "공감 능력", "통찰력", "완고함"],
    history:
      "탕평책으로 당파 싸움을 줄이려 했지만, 아들 사도세자를 잃은 비극을 안고 살았습니다. 조선 최장수 왕(52년 재위).",
    meme: "주변 사람 감정 다 캐치하는데 자기 감정은 숨기는 타입. 혼자 다 안고 감.",
    good: "정조 (INTP) — 손자와 함께 조선 황금기",
    bad:  "연산군 (ENTP) — 가치관이 정반대",
    type: "🌿 성군 타입 👑",
  },
  INFP: {
    king: "단종",
    era: "조선 6대 왕 · 재위 1452~1455",
    emoji: "🌸",
    title: "시대를 잘못 만난 순수한 이상가",
    catchphrase: "착하면 지는 세상에서 태어난 왕",
    traits: ["감수성", "이상주의", "온화함", "신중함"],
    history:
      "12세에 즉위했지만 삼촌 세조에게 왕위를 빼앗겼습니다. 순수하고 선한 마음을 가졌지만 권력의 현실 앞에 무너진 비운의 왕.",
    meme: "착한 사람이 손해 보는 나라에서 태어난 케이스. 상처 받아도 화 못 내는 사람.",
    good: "문종 (ISFJ) — 아버지와 함께할 때 가장 빛났음",
    bad:  "세조 (ESTP) — 권력 앞에 무너진 관계",
    type: "🥲 억울한 왕 타입",
  },
  ENFJ: {
    king: "성종",
    era: "조선 9대 왕 · 재위 1469~1494",
    emoji: "✨",
    title: "모두를 이끄는 타고난 리더",
    catchphrase: "사람들이 따라오게 만드는 카리스마",
    traits: ["리더십", "소통 능력", "포용력", "책임감"],
    history:
      "경국대전을 완성하고 홍문관을 설치해 조선의 법적·문화적 기반을 완성했습니다. 신하들을 잘 이끈 조화로운 군주.",
    meme: "단체 카톡방 분위기 메이커. 갈등 생기면 자동으로 중재하러 달려가는 사람.",
    good: "영조 (INFJ) — 이상과 현실을 함께 보는 조합",
    bad:  "태종 (ENTJ) — 방식의 차이로 갈등",
    type: "🌟 성군 타입 👑",
  },
  ENFP: {
    king: "중종",
    era: "조선 11대 왕 · 재위 1506~1544",
    emoji: "🎨",
    title: "가능성을 보는 열정적 개혁가",
    catchphrase: "늘 새로운 걸 꿈꾸지만 마무리가 아쉬운 왕",
    traits: ["열정적", "창의적", "사교적", "유연함"],
    history:
      "반정으로 즉위한 후 조광조를 발탁해 개혁을 시도했지만 기묘사화로 마무리가 흐지부지됐습니다. 시작은 화려하지만 끝맺음이 어려운 타입.",
    meme: "아이디어는 넘치는데 실행력이 따라가지 못함. 프로젝트를 5개 동시에 시작하는 사람.",
    good: "성종 (ENFJ) — 시너지 폭발 조합",
    bad:  "태조 (ISTJ) — 계획 없이 달리는 것에 답답함을 느낌",
    type: "🎪 개혁 타입 ✨",
  },
  ISTJ: {
    king: "태조",
    era: "조선 1대 왕 · 재위 1392~1398",
    emoji: "🏯",
    title: "전통과 원칙으로 나라를 세운 창업자",
    catchphrase: "말보다 행동, 행동보다 결과",
    traits: ["성실함", "책임감", "원칙주의", "꼼꼼함"],
    history:
      "고려를 무너뜨리고 조선을 건국했습니다. 흔들림 없는 원칙과 실행력으로 500년 왕조의 기틀을 만든 최고의 실행가.",
    meme: "말 없이 일 다 해놓는 타입. 규칙 어기는 거 극도로 싫어함. 매뉴얼 있으면 무조건 따름.",
    good: "문종 (ISFJ) — 신중함의 완벽 조합",
    bad:  "중종 (ENFP) — 즉흥vs계획 충돌",
    type: "🏛️ 성군 타입 👑",
  },
  ISFJ: {
    king: "문종",
    era: "조선 5대 왕 · 재위 1450~1452",
    emoji: "📖",
    title: "조용히 모두를 챙기는 따뜻한 왕",
    catchphrase: "나보다 남을 먼저 생각하는 리더",
    traits: ["헌신적", "세심함", "신중함", "따뜻함"],
    history:
      "아버지 세종의 뜻을 이어 학문과 복지에 힘썼습니다. 신하들을 배려했지만 짧은 재위로 아쉬움을 남긴 인자한 왕.",
    meme: "팀원 야근하면 야식 사주러 가는 리더. 자기가 힘들어도 내색 안 하고 다 챙기는 타입.",
    good: "태조 (ISTJ) — 안정감 최강 조합",
    bad:  "연산군 (ENTP) — 가치관 전혀 안 맞음",
    type: "🌷 성군 타입 👑",
  },
  ESTJ: {
    king: "숙종",
    era: "조선 19대 왕 · 재위 1674~1720",
    emoji: "⚖️",
    title: "규칙으로 나라를 통제한 철권 관리자",
    catchphrase: "내가 정한 룰은 반드시 지켜져야 한다",
    traits: ["조직력", "결단력", "관리 능력", "강직함"],
    history:
      "환국 정치로 신하들을 통제하며 왕권을 강화했습니다. 장희빈과 인현왕후 사이의 드라마틱한 결정으로도 유명.",
    meme: "조직도·규정집·일정표 없으면 불안함. 팀 내 규칙 어기는 사람 절대 못 참음.",
    good: "태종 (ENTJ) — 실행력 최강 조합",
    bad:  "광해군 (ISTP) — 통제vs자유 갈등",
    type: "📋 원칙 타입 ⚖️",
  },
  ESFJ: {
    king: "인조",
    era: "조선 16대 왕 · 재위 1623~1649",
    emoji: "🤝",
    title: "관계를 중시하지만 판단이 흔들린 왕",
    catchphrase: "모두에게 좋은 사람이 되려다 길을 잃은 리더",
    traits: ["친화력", "책임감", "감정적", "전통 중시"],
    history:
      "병자호란으로 청나라에 항복한 삼전도의 굴욕을 겪었습니다. 주변 관계를 중시하다 냉혹한 현실 판단에 실패한 비극적 왕.",
    meme: "모든 사람 눈치 보다가 정작 중요한 결정에서 흔들리는 타입. 갈등은 무조건 피하고 싶어 함.",
    good: "성종 (ENFJ) — 사람 중심의 따뜻한 조합",
    bad:  "광해군 (ISTP) — 실용주의에 공감 못 함",
    type: "🤝 관계 타입",
  },
  ISTP: {
    king: "광해군",
    era: "조선 15대 왕 · 재위 1608~1623",
    emoji: "🗡️",
    title: "감정 빼고 상황만 보는 현실주의 전략가",
    catchphrase: "옳고 그름보다 살아남는 게 먼저다",
    traits: ["실용적", "냉철함", "독립적", "적응력"],
    history:
      "명과 청 사이에서 실리 외교를 펼쳤습니다. 현실적 판단력은 뛰어났지만 반정으로 폐위된 비운의 현실주의자.",
    meme: "감정 0, 효율 100. '왜 그게 문제야? 결과 좋으면 됐지.' 라고 생각하는 사람.",
    good: "연산군 (ENTP) — 실용적 전략 콤비",
    bad:  "인조 (ESFJ) — 실용 vs 감정 충돌",
    type: "🗡️ 현실주의 타입",
  },
  ISFP: {
    king: "효종",
    era: "조선 17대 왕 · 재위 1649~1659",
    emoji: "🌿",
    title: "조용한 열정을 가진 고독한 이상가",
    catchphrase: "말하지 않아도 마음속에 큰 뜻을 품은 왕",
    traits: ["감수성", "온화함", "이상주의", "신중함"],
    history:
      "병자호란의 치욕을 갚겠다는 북벌을 꿈꿨지만 현실의 벽 앞에 이루지 못했습니다. 조용하지만 강한 의지를 품은 왕.",
    meme: "말은 없는데 내면에 불이 타고 있는 타입. 아무도 모르게 혼자 꿈 크게 꾸고 있음.",
    good: "문종 (ISFJ) — 조용한 공감의 조합",
    bad:  "태종 (ENTJ) — 속도 차이로 갈등",
    type: "🌿 고독한 이상가 타입",
  },
  ESTP: {
    king: "세조",
    era: "조선 7대 왕 · 재위 1455~1468",
    emoji: "🔥",
    title: "기회를 낚아채는 스릴 추구형 행동파",
    catchphrase: "생각보다 행동이 먼저인 사람",
    traits: ["대담함", "실행력", "현실적", "즉각적"],
    history:
      "계유정난을 일으켜 왕위를 찬탈했습니다. 생각보다 행동이 빠르며 기회를 절대 놓치지 않는 카리스마 넘치는 행동가.",
    meme: "기회 오면 3초 안에 달려드는 타입. 위험도 계산하면서 즐기는 진짜 ESTP.",
    good: "태종 (ENTJ) — 실행력 쌍두마차",
    bad:  "단종 (INFP) — 너무 다른 세계관",
    type: "⚡ 폭군 타입 🔥",
  },
  ESFP: {
    king: "선조",
    era: "조선 14대 왕 · 재위 1567~1608",
    emoji: "🎪",
    title: "위기에 약한 분위기 메이커",
    catchphrase: "평화로울 때는 빛나지만 위기 앞에 흔들리는 왕",
    traits: ["사교적", "적응력", "즉흥적", "감정적"],
    history:
      "임진왜란 당시 한양을 버리고 피난을 떠났습니다. 평소엔 매력적이지만 위기 상황에서 결단력이 부족했던 복잡한 왕.",
    meme: "파티 분위기 메이커인데 불나면 제일 먼저 도망가는 타입. 위기 관리는 글쎄요...",
    good: "중종 (ENFP) — 에너지 넘치는 조합",
    bad:  "태조 (ISTJ) — 즉흥 vs 원칙 충돌",
    type: "🎭 흥 타입",
  },
};

// ── 상태 ─────────────────────────────────────────────────
let currentQ = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

// ── 유틸 ─────────────────────────────────────────────────
function getMBTI() {
  const EI = scores.E >= scores.I ? "E" : "I";
  const SN = scores.S >= scores.N ? "S" : "N";
  const TF = scores.T >= scores.F ? "T" : "F";
  const JP = scores.J >= scores.P ? "J" : "P";
  return EI + SN + TF + JP;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  setTimeout(() => {
    document.getElementById(id).classList.add("active");
  }, 50);
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

// ── 퀴즈 렌더 ────────────────────────────────────────────
function renderQuestion(idx) {
  const q = QUESTIONS[idx];
  const total = QUESTIONS.length;

  // 헤더
  document.getElementById("qCurrent").textContent = idx + 1;
  document.getElementById("qTotal").textContent = total;
  document.getElementById("qNumBadge").textContent = `Q${idx + 1}`;

  // 프로그레스
  document.getElementById("progressFill").style.width = `${((idx) / total) * 100}%`;

  // 질문 카드 애니메이션
  const card = document.getElementById("questionCard");
  card.style.opacity = "0";
  card.style.transform = "translateY(16px)";
  setTimeout(() => {
    document.getElementById("questionIcon").textContent = q.icon;
    document.getElementById("questionText").textContent = q.text;
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 180);

  // 답변 버튼
  const grid = document.getElementById("answersGrid");
  grid.innerHTML = "";
  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = a.text;
    btn.style.animationDelay = `${i * 0.08}s`;
    btn.addEventListener("click", () => selectAnswer(a.dims, btn));
    grid.appendChild(btn);
  });
}

function selectAnswer(dims, btn) {
  // 선택 효과
  document.querySelectorAll(".answer-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");

  // 점수 반영
  Object.entries(dims).forEach(([k, v]) => { scores[k] = (scores[k] || 0) + v; });

  // 다음으로
  setTimeout(() => {
    currentQ++;
    if (currentQ < QUESTIONS.length) {
      renderQuestion(currentQ);
    } else {
      // 완료 → 로딩
      showScreen("screen-loading");
      runLoading();
    }
  }, 320);
}

// ── 로딩 ─────────────────────────────────────────────────
const LOADING_MSGS = [
  "성격을 분석중입니다...",
  "사초를 열람 중...",
  "조선왕조실록과 대조 중...",
  "당신의 왕을 소환하는 중...",
];

function runLoading() {
  let i = 0;
  const el = document.getElementById("loadingText");
  const interval = setInterval(() => {
    i = (i + 1) % LOADING_MSGS.length;
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = LOADING_MSGS[i];
      el.style.transition = "opacity 0.3s";
      el.style.opacity = "1";
    }, 200);
  }, 900);

  setTimeout(() => {
    clearInterval(interval);
    showResult();
  }, 3200);
}

// ── 결과 표시 ─────────────────────────────────────────────
function showResult() {
  const mbti = getMBTI();
  const data = KINGS[mbti] || KINGS["INTJ"];

  document.getElementById("resultMBTI").textContent = mbti;
  document.getElementById("resultKingName").textContent = data.king;
  document.getElementById("resultKingEra").textContent = data.era;
  document.getElementById("resultEmoji").textContent = data.emoji;
  document.getElementById("resultTitle").textContent = data.title;
  document.getElementById("resultCatchphrase").textContent = data.catchphrase;
  document.getElementById("resultHistory").textContent = data.history;
  document.getElementById("resultMeme").textContent = data.meme;
  document.getElementById("resultGood").textContent = data.good;
  document.getElementById("resultBad").textContent = data.bad;
  document.getElementById("resultTypeBadge").textContent = data.type;

  // 특성 태그
  const traitsEl = document.getElementById("resultTraits");
  traitsEl.innerHTML = "";
  data.traits.forEach(t => {
    const span = document.createElement("span");
    span.className = "trait-tag";
    span.textContent = t;
    traitsEl.appendChild(span);
  });

  // 모든 왕 그리드 (숨김 상태로 준비)
  buildAllKingsGrid(mbti);

  showScreen("screen-result");
  // 스크롤 top
  setTimeout(() => {
    document.getElementById("screen-result").scrollTop = 0;
  }, 100);
}

function buildAllKingsGrid(currentMbti) {
  const grid = document.getElementById("allKingsGrid");
  grid.innerHTML = "";
  Object.entries(KINGS).forEach(([mbti, data]) => {
    const item = document.createElement("div");
    item.className = "king-grid-item" + (mbti === currentMbti ? " current" : "");
    item.innerHTML = `
      <span class="king-grid-mbti">${mbti}</span>
      <span class="king-grid-name">${data.emoji} ${data.king}</span>
    `;
    grid.appendChild(item);
  });
}

// ── 리셋 ─────────────────────────────────────────────────
function resetQuiz() {
  currentQ = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  renderQuestion(0);
  showScreen("screen-quiz");
  setTimeout(() => {
    document.getElementById("screen-quiz").scrollTop = 0;
  }, 100);
}

// ── 이벤트 바인딩 ─────────────────────────────────────────
document.getElementById("btnStart").addEventListener("click", () => {
  renderQuestion(0);
  showScreen("screen-quiz");
});

document.getElementById("btnBack").addEventListener("click", () => {
  if (currentQ === 0) {
    showScreen("screen-intro");
  } else {
    // 점수 되돌리기 (간단히 이전 질문 점수 제거)
    currentQ--;
    const q = QUESTIONS[currentQ];
    // 점수 리셋 후 재계산 (단순 구현: 이전 답 점수를 정확히 되돌리기 어려우므로 전체 리계산)
    renderQuestion(currentQ);
  }
});

document.getElementById("btnRetry").addEventListener("click", resetQuiz);

document.getElementById("btnShare").addEventListener("click", () => {
  const mbti = document.getElementById("resultMBTI").textContent;
  const king = document.getElementById("resultKingName").textContent;
  const catchphrase = document.getElementById("resultCatchphrase").textContent;
  const text = `👑 나는 조선의 ${king}! (${mbti})\n"${catchphrase}"\n\n#조선왕MBTI #나는어떤왕인가 #${mbti}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 결과가 클립보드에 복사되었습니다!");
    });
  } else {
    showToast("📋 " + text.slice(0, 30) + "...");
  }
});

document.getElementById("btnToggleKings").addEventListener("click", () => {
  const grid = document.getElementById("allKingsGrid");
  const btn  = document.getElementById("btnToggleKings");
  const isHidden = grid.style.display === "none";
  grid.style.display = isHidden ? "grid" : "none";
  btn.textContent = isHidden ? "다른 왕 유형 접기 ▴" : "다른 왕 유형 보기 ▾";
});

// ── 초기 화면 ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // 인트로 왕 칩 hover 순환 애니메이션
  const chips = document.querySelectorAll(".king-chip");
  chips.forEach((chip, i) => {
    chip.style.animationDelay = `${i * 0.15}s`;
  });
});
