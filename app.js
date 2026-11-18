// ============================================================================
// LOGIC ỨNG DỤNG HỌC TIẾNG NHẬT NIHONGO QUEST MR ĐÀM
// Bản quyền: Đàm Xuân Hòa - damxuanhoa@gmail.com
// ============================================================================

let currentKanaType = "hiragana";
let currentModalKanaItem = null;
let currentLessonIndex = 0;
let currentFlashcardIndex = 0;
let currentSlideIndex = 0;
let autoSlideTimer = null;
let speechSpeed = 0.9; // 0.9 = chuẩn, 0.65 = chậm rõ từng âm

// Trạng thái lưu trữ tiến độ học của con trong trình duyệt
let userState = {
  xp: 0,
  streak: 1,
  masteredHiragana: [],
  masteredKatakana: [],
  customVocab: {},     // { lessonId: [ ...vocabItems ] }
  customVideoIds: {},  // { lessonId: "youtubeVideoId" }
  customLessons: []    // [ ...lessonObjects ]
};

// Biến cho Quiz, Matching Game & Listening Game
let currentQuizAnswer = null;
let currentQuizSpeakText = "";
let quizStreak = 0;
let matchSelectedFirst = null;
let matchRemainingPairs = 0;

let currentListenAnswer = null;
let currentListenSpeakText = "";
let currentListenDisplay = "";

// Khởi chạy khi tải trang
window.addEventListener("DOMContentLoaded", () => {
  loadUserState();
  initCanvasDrawing();
  renderKanaGrid();
  renderNumbersSection();
  convertCustomNumber();
  renderLessonSidebar();
  renderLessonDetail(0);
  renderGrammarAndKanji();
  populateParentLessonSelect();
  initQuizQuestion();
  initMatchingGame();
  initListenQuestion();
  updateHeaderStats();
});

// ============================================================================
// 1. LƯU TRỮ TIẾN ĐỘ & HỆ THỐNG XP / CẤP ĐỘ
// ============================================================================
function loadUserState() {
  try {
    const saved = localStorage.getItem("nihongo_quest_mrdam_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      userState = { ...userState, ...parsed };
    }
  } catch (e) {
    console.warn("Không đọc được localStorage:", e);
  }

  // Nạp các bài học mới do phụ huynh tạo
  if (Array.isArray(userState.customLessons) && userState.customLessons.length > 0) {
    userState.customLessons.forEach((cl) => {
      if (!APP_DATA.lessons.some((l) => l.id === cl.id)) {
        APP_DATA.lessons.push(cl);
      }
    });
  }

  // Áp dụng các từ vựng và video do phụ huynh thêm vào APP_DATA
  APP_DATA.lessons.forEach((lesson) => {
    if (userState.customVocab[lesson.id]) {
      lesson.vocab.push(...userState.customVocab[lesson.id]);
    }
    if (userState.customVideoIds[lesson.id]) {
      lesson.videoId = userState.customVideoIds[lesson.id];
    }
  });
}

function saveUserState() {
  try {
    localStorage.setItem("nihongo_quest_mrdam_state", JSON.stringify(userState));
  } catch (e) {
    console.warn("Không lưu được localStorage:", e);
  }
  updateHeaderStats();
}

function addXP(amount) {
  userState.xp += amount;
  saveUserState();
}

function getLevelName(xp) {
  if (xp < 100) return "Cấp 1: Tân binh Kana 🌱";
  if (xp < 300) return "Cấp 2: Học giả Nhập môn 🌸";
  if (xp < 600) return "Cấp 3: Chiến binh N5 ⚔️";
  if (xp < 1000) return "Cấp 4: Cao thủ N4 🏯";
  return "Cấp 5: Đại sư Tiếng Nhật 👑";
}

function updateHeaderStats() {
  document.getElementById("xpCount").textContent = userState.xp;
  document.getElementById("streakCount").textContent = userState.streak;
  document.getElementById("userLevel").textContent = getLevelName(userState.xp);

  document.getElementById("hiraProgressText").textContent =
    `${userState.masteredHiragana.length} / ${APP_DATA.hiragana.length} chữ`;
  document.getElementById("kataProgressText").textContent =
    `${userState.masteredKatakana.length} / ${APP_DATA.katakana.length} chữ`;
  document.getElementById("lessonCountText").textContent =
    `${APP_DATA.lessons.length} Chủ đề`;
}

function resetAllProgress() {
  if (confirm("Bạn có chắc muốn đặt lại toàn bộ điểm XP và chữ cái đã thuộc về ban đầu không?")) {
    localStorage.removeItem("nihongo_quest_mrdam_state");
    location.reload();
  }
}

// ============================================================================
// 2. ÂM THANH PHÁT ÂM TIẾNG NHẬT CHUẨN (WEB SPEECH API) & DỪNG VIDEO YOUTUBE
// ============================================================================
function pauseYouTubeVideo() {
  const iframe = document.querySelector("#lessonVideoBox iframe");
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*"
      );
    } catch (e) {}
  }
}

// Tự động tạm dừng video và giọng đọc khi chuyển sang tab trình duyệt khác
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseYouTubeVideo();
    stopAutoSlideLecture();
  }
});

function speakJapanese(text, onEndCallback) {
  // Tạm dừng video YouTube nếu đang phát để không bị chồng âm thanh
  pauseYouTubeVideo();

  if (!("speechSynthesis" in window)) {
    alert("Trình duyệt của bạn không hỗ trợ đọc giọng nói tự động.");
    if (onEndCallback) onEndCallback();
    return;
  }
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  utter.rate = speechSpeed;
  utter.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const jpVoice = voices.find((v) => v.lang.includes("ja") || v.lang.includes("JP"));
  if (jpVoice) {
    utter.voice = jpVoice;
  }

  if (onEndCallback) {
    utter.onend = onEndCallback;
    utter.onerror = onEndCallback;
  }

  window.speechSynthesis.speak(utter);
}

function toggleSpeechSpeed() {
  if (speechSpeed === 0.9) {
    speechSpeed = 0.65;
    document.getElementById("speedLabel").textContent = "Chậm rõ (0.65x)";
  } else {
    speechSpeed = 0.9;
    document.getElementById("speedLabel").textContent = "Chuẩn (0.9x)";
  }
}

function playSoundEffect(type) {
  try {
    const ctxAudio = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctxAudio.createOscillator();
    const gain = ctxAudio.createGain();
    osc.connect(gain);
    gain.connect(ctxAudio.destination);

    if (type === "correct") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, ctxAudio.currentTime);
      osc.frequency.setValueAtTime(659.25, ctxAudio.currentTime + 0.08);
      osc.frequency.setValueAtTime(783.99, ctxAudio.currentTime + 0.16);
      gain.gain.setValueAtTime(0.18, ctxAudio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctxAudio.currentTime + 0.35);
      osc.start();
      osc.stop(ctxAudio.currentTime + 0.35);
    } else {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, ctxAudio.currentTime);
      osc.frequency.setValueAtTime(160, ctxAudio.currentTime + 0.12);
      gain.gain.setValueAtTime(0.18, ctxAudio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctxAudio.currentTime + 0.3);
      osc.start();
      osc.stop(ctxAudio.currentTime + 0.3);
    }
  } catch (e) {}
}

// ============================================================================
// 3. CHUYỂN TAB VÀ GIAO DIỆN SÁNG / TỐI
// ============================================================================
function switchTab(tabId, btnEl) {
  pauseYouTubeVideo();
  stopAutoSlideLecture();
  document.querySelectorAll(".tab-panel").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".nav-tab, .mob-nav-btn").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-target") === tabId);
  });

  const targetPanel = document.getElementById(tabId);
  if (targetPanel) targetPanel.classList.add("active");
  if (btnEl) btnEl.classList.add("active");

  if (window.innerWidth <= 768) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  document.getElementById("themeBtn").textContent =
    next === "dark" ? "☀️ Giao diện sáng" : "🌙 Giao diện tối";
}

// ============================================================================
// 4. CHẶNG 1: BẢNG CHỮ CÁI HIRAGANA, KATAKANA & CHUYÊN ĐỀ SỐ ĐẾM
// ============================================================================
function switchKanaType(type) {
  document.getElementById("btnShowHira").classList.toggle("active", type === "hiragana");
  document.getElementById("btnShowKata").classList.toggle("active", type === "katakana");
  const btnNum = document.getElementById("btnShowNumbers");
  if (btnNum) btnNum.classList.toggle("active", type === "numbers");

  const kanaGrid = document.getElementById("kanaGridContainer");
  const numSection = document.getElementById("numbersSectionContainer");
  const hintEl = document.getElementById("kanaToolbarHint");

  if (type === "numbers") {
    kanaGrid.style.display = "none";
    if (numSection) numSection.style.display = "block";
    if (hintEl) {
      hintEl.innerHTML = "💡 <strong>Bấm vào từng ô số</strong> để nghe phát âm tiếng Nhật chuẩn bản xứ!";
    }
  } else {
    currentKanaType = type;
    kanaGrid.style.display = "grid";
    if (numSection) numSection.style.display = "none";
    if (hintEl) {
      hintEl.innerHTML = "💡 <strong>Bấm vào từng ô chữ</strong> để nghe phát âm, xem mẹo nhớ hình ảnh & tập viết nét!";
    }
    renderKanaGrid();
  }
}

function renderNumbersSection() {
  const container = document.getElementById("numbersTablesContent");
  if (!container || !APP_DATA.numbers) return;

  const sections = [
    {
      title: "1️⃣ Đếm số cơ bản từ 0 đến 10 (Nền tảng bắt buộc phải thuộc làu)",
      desc: "Bấm vào từng con số để nghe giọng đọc tiếng Nhật. Chú ý số 4 (Yon), số 7 (Nana) và số 9 (Kyuu) có 2 cách đọc nhưng khi đếm số thông thường luôn ưu tiên đọc Yon, Nana, Kyuu.",
      list: APP_DATA.numbers.basic
    },
    {
      title: "🔟 Số ghép từ 11 đến 19 & Các số tròn chục (20 → 99)",
      desc: "Quy tắc cực dễ: Từ 11–19 lấy 10 (Juu) + Số đơn vị (Ví dụ 14 = Juu + Yon = Juuyon). Số tròn chục (20–90) lấy Số đầu + 10 (Juu) (Ví dụ 20 = Ni + Juu = Nijuu).",
      list: APP_DATA.numbers.tens
    },
    {
      title: "💯 Đếm số Hàng Trăm (100 → 900) & 3 Số Biến Âm Đặc Biệt",
      desc: "Đơn vị Hàng trăm là ひゃく (Hyaku). Hãy chú ý 3 ô màu vàng có biến âm đặc biệt: 300 (San-byaku), 600 (Rop-pyaku) và 800 (Hap-pyaku)!",
      list: APP_DATA.numbers.hundreds
    },
    {
      title: "🪙 Đếm số Hàng Nghìn (1.000 → 9.000) & Hàng Vạn (10.000 → 1 Triệu)",
      desc: "Đơn vị Hàng nghìn là せん (Sen) — chú ý 3.000 (San-zen) và 8.000 (Has-sen). Từ 10.000 trở lên người Nhật tính theo đơn vị VẠN: 10.000 = 1 Vạn (Ichi-man).",
      list: APP_DATA.numbers.thousands
    }
  ];

  container.innerHTML = sections
    .map(
      (sec) => `
      <div class="num-group-card">
        <h3 style="font-size: 1.22rem; color: var(--text-main);">${sec.title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 4px;">${sec.desc}</p>
        <div class="num-grid">
          ${sec.list
            .map(
              (item) => `
              <div class="num-card ${item.special ? "special" : ""}" onclick="speakJapanese('${item.speak}')">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span class="num-digit">${item.num}</span>
                  <span class="num-kanji">${item.kanji} 🔊</span>
                </div>
                <div class="num-kana">${item.kana}</div>
                <div class="num-romaji">${item.romaji}</div>
                <div class="num-note">${item.note}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

// BỘ CHUYỂN ĐỔI SỐ BẤT KỲ (0 -> 99.999.999) SANG CHỮ HÁN, HIRAGANA & ROMAJI CHUẨN
function japaneseNumberConverter(n) {
  n = parseInt(n, 10);
  if (isNaN(n) || n < 0) n = 0;
  if (n > 99999999) n = 99999999;

  if (n === 0) {
    return { kanji: "零 (0)", kana: "ゼロ (れい)", romaji: "zero (rei)", speak: "ゼロ" };
  }

  const kanjiDigits = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const kanaOnes = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];
  const romaOnes = ["", "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];

  function convertUnder10000(val) {
    let kj = "";
    let kn = "";
    let rm = [];

    const th = Math.floor(val / 1000);
    const hu = Math.floor((val % 1000) / 100);
    const te = Math.floor((val % 100) / 10);
    const on = val % 10;

    if (th > 0) {
      kj += (th === 1 ? "" : kanjiDigits[th]) + "千";
      if (th === 1) { kn += "せん"; rm.push("sen"); }
      else if (th === 3) { kn += "さんぜん"; rm.push("sanzen"); }
      else if (th === 8) { kn += "はっせん"; rm.push("hassen"); }
      else { kn += kanaOnes[th] + "せん"; rm.push(romaOnes[th] + "sen"); }
    }

    if (hu > 0) {
      kj += (hu === 1 ? "" : kanjiDigits[hu]) + "百";
      if (hu === 1) { kn += "ひゃく"; rm.push("hyaku"); }
      else if (hu === 3) { kn += "さんびゃく"; rm.push("sanbyaku"); }
      else if (hu === 6) { kn += "ろっぴゃく"; rm.push("roppyaku"); }
      else if (hu === 8) { kn += "はっぴゃく"; rm.push("happyaku"); }
      else { kn += kanaOnes[hu] + "ひゃく"; rm.push(romaOnes[hu] + "hyaku"); }
    }

    if (te > 0) {
      kj += (te === 1 ? "" : kanjiDigits[te]) + "十";
      if (te === 1) { kn += "じゅう"; rm.push("juu"); }
      else { kn += kanaOnes[te] + "じゅう"; rm.push(romaOnes[te] + "juu"); }
    }

    if (on > 0) {
      kj += kanjiDigits[on];
      kn += kanaOnes[on];
      rm.push(romaOnes[on]);
    }

    return { kj, kn, rm: rm.join(" ") };
  }

  let kanjiOut = "";
  let kanaOut = "";
  let romaOut = [];

  const manPart = Math.floor(n / 10000);
  const restPart = n % 10000;

  if (manPart > 0) {
    const m = convertUnder10000(manPart);
    kanjiOut += m.kj + "万";
    kanaOut += m.kn + "まん ";
    romaOut.push(m.rm + "-man");
  }

  if (restPart > 0) {
    const r = convertUnder10000(restPart);
    kanjiOut += r.kj;
    kanaOut += r.kn;
    romaOut.push(r.rm);
  }

  return {
    kanji: kanjiOut,
    kana: kanaOut.trim(),
    romaji: romaOut.join(" "),
    speak: kanaOut.replace(/\s+/g, "")
  };
}

function convertCustomNumber() {
  const inputEl = document.getElementById("customNumberInput");
  if (!inputEl) return;
  const res = japaneseNumberConverter(inputEl.value);
  document.getElementById("numResultKanji").textContent = res.kanji;
  document.getElementById("numResultKana").textContent = res.kana;
  document.getElementById("numResultRomaji").textContent = res.romaji;
}

function speakCustomNumber() {
  const inputEl = document.getElementById("customNumberInput");
  if (!inputEl) return;
  const res = japaneseNumberConverter(inputEl.value);
  speakJapanese(res.speak);
}

function renderKanaGrid() {
  const container = document.getElementById("kanaGridContainer");
  const list = APP_DATA[currentKanaType];
  const masteredList =
    currentKanaType === "hiragana" ? userState.masteredHiragana : userState.masteredKatakana;

  container.innerHTML = list
    .map((item, idx) => {
      const isMastered = masteredList.includes(item.char);
      return `
        <div class="kana-card ${isMastered ? "mastered" : ""}" onclick="openKanaModal(${idx})">
          <span class="kana-speaker">🔊</span>
          <span class="kana-check">${isMastered ? "✅" : ""}</span>
          <div class="kana-char">${item.char}</div>
          <div class="kana-romaji">${item.romaji}</div>
          <div class="kana-word-preview">${item.example.icon} ${item.example.word} (${item.example.meaning})</div>
        </div>
      `;
    })
    .join("");
}

function openKanaModal(index) {
  const item = APP_DATA[currentKanaType][index];
  currentModalKanaItem = item;

  document.getElementById("modalCharBig").textContent = item.char;
  document.getElementById("modalRowBadge").textContent =
    `${currentKanaType === "hiragana" ? "Bảng Hiragana" : "Bảng Katakana"} • ${item.row}`;
  document.getElementById("modalRomajiTitle").textContent = `Cách đọc: "${item.romaji}"`;
  document.getElementById("modalMnemonicText").textContent = item.mnemonic;

  document.getElementById("modalVisualArt").innerHTML = `
    <div style="display: inline-flex; align-items: center; gap: 18px; background: var(--bg-card); padding: 12px 24px; border-radius: 14px; border: 1px solid var(--border);">
      <span style="font-size: 2.8rem; font-weight: 900; color: var(--primary);">${item.char}</span>
      <span style="font-size: 1.5rem;">↔️</span>
      <span style="font-size: 2.6rem;">${item.example.icon}</span>
      <span style="font-weight: 800; color: var(--secondary); font-size: 1.2rem;">"${item.romaji.toUpperCase()}"</span>
    </div>
  `;

  document.getElementById("modalExIcon").textContent = item.example.icon;
  document.getElementById("modalExWord").textContent = `${item.example.word} (${item.example.reading})`;
  document.getElementById("modalExMeaning").textContent = item.example.meaning;
  document.getElementById("modalExSentence").textContent = `💬 Ví dụ: ${item.example.sentence}`;

  document.getElementById("modalStrokesCount").textContent = item.strokes || 2;
  document.getElementById("canvasGuideChar").textContent = item.char;

  updateModalMasterButton();
  clearCanvas();

  document.getElementById("kanaModalBackdrop").classList.add("open");
  speakJapanese(item.char);
}

function closeKanaModal(event) {
  if (event && event.target !== document.getElementById("kanaModalBackdrop")) return;
  document.getElementById("kanaModalBackdrop").classList.remove("open");
}

function speakModalChar() {
  if (currentModalKanaItem) speakJapanese(currentModalKanaItem.char);
}

function speakModalExample() {
  if (currentModalKanaItem) {
    const cleanSentence = currentModalKanaItem.example.sentence.split("(")[0].trim();
    speakJapanese(`${currentModalKanaItem.example.word}。 ${cleanSentence}`);
  }
}

function updateModalMasterButton() {
  if (!currentModalKanaItem) return;
  const list =
    currentKanaType === "hiragana" ? userState.masteredHiragana : userState.masteredKatakana;
  const isMastered = list.includes(currentModalKanaItem.char);
  const btn = document.getElementById("modalMasterBtn");
  if (isMastered) {
    btn.textContent = "🎉 Đã thuộc chữ này (Bấm để bỏ chọn)";
    btn.style.background = "rgba(16, 185, 129, 0.18)";
    btn.style.color = "#059669";
  } else {
    btn.textContent = "✅ Đánh dấu Đã thuộc (+10 XP)";
    btn.style.background = "";
    btn.style.color = "";
  }
}

function toggleMasterCurrentKana() {
  if (!currentModalKanaItem) return;
  const list =
    currentKanaType === "hiragana" ? userState.masteredHiragana : userState.masteredKatakana;
  const idx = list.indexOf(currentModalKanaItem.char);

  if (idx === -1) {
    list.push(currentModalKanaItem.char);
    addXP(10);
    playSoundEffect("correct");
  } else {
    list.splice(idx, 1);
  }

  saveUserState();
  updateModalMasterButton();
  renderKanaGrid();
}

// ============================================================================
// 5. BẢNG TẬP VIẾT CHỮ CANVAS (CHUỘT & CẢM ỨNG IPAD/ĐIỆN THOẠI)
// ============================================================================
let canvasEl, ctx;
let isDrawing = false;

function initCanvasDrawing() {
  canvasEl = document.getElementById("drawCanvas");
  if (!canvasEl) return;
  ctx = canvasEl.getContext("2d");
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#e11d48";

  const getPos = (e) => {
    const rect = canvasEl.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const scaleX = canvasEl.width / rect.width;
    const scaleY = canvasEl.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDraw = (e) => {
    e.preventDefault();
    isDrawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const moveDraw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const endDraw = () => {
    isDrawing = false;
  };

  canvasEl.addEventListener("mousedown", startDraw);
  canvasEl.addEventListener("mousemove", moveDraw);
  window.addEventListener("mouseup", endDraw);

  canvasEl.addEventListener("touchstart", startDraw, { passive: false });
  canvasEl.addEventListener("touchmove", moveDraw, { passive: false });
  window.addEventListener("touchend", endDraw);
}

function clearCanvas() {
  if (!ctx || !canvasEl) return;
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}

function rewardPracticeWriting() {
  addXP(5);
  playSoundEffect("correct");
  if (currentModalKanaItem) speakJapanese(currentModalKanaItem.char);
  clearCanvas();
}

// ============================================================================
// 6. CHẶNG 2: BÀI GIẢNG VIDEO YOUTUBE + BÀI GIẢNG SLIDE TƯƠNG TÁC + FLASHCARD
// ============================================================================
function renderLessonSidebar() {
  const sidebar = document.getElementById("lessonSidebar");
  sidebar.innerHTML = APP_DATA.lessons
    .map(
      (lesson, idx) => `
      <button class="lesson-item-btn ${idx === currentLessonIndex ? "active" : ""}" onclick="renderLessonDetail(${idx})">
        <span class="lesson-badge" style="background: ${lesson.badgeColor}">${lesson.level}</span>
        <div style="font-weight: 800; font-size: 0.96rem; color: var(--text-main);">
          ${lesson.icon} ${lesson.title}
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
          ${lesson.vocab.length} từ vựng & mẫu câu • Có Video & Slide
        </div>
      </button>
    `
    )
    .join("");
}

function renderLessonDetail(index) {
  stopAutoSlideLecture();
  currentLessonIndex = index;
  currentFlashcardIndex = 0;
  currentSlideIndex = 0;
  renderLessonSidebar();

  const lesson = APP_DATA.lessons[index];

  document.getElementById("lessonHeaderArea").innerHTML = `
    <span class="lesson-badge" style="background: ${lesson.badgeColor}">${lesson.level}</span>
    <h2 style="font-size: 1.5rem; margin-top: 4px;">${lesson.icon} ${lesson.title}</h2>
    <p style="color: var(--text-muted); font-size: 0.92rem;">${lesson.subtitle}</p>
  `;

  // Nhúng Video YouTube đã xác thực oEmbed (kèm enablejsapi=1 để tự động pause khi chuyển tab)
  document.getElementById("lessonVideoBox").innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${lesson.videoId}?rel=0&enablejsapi=1"
      title="${lesson.videoTitle}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;

  document.getElementById("lessonSummaryBox").innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
      <h4>📌 Kiến thức trọng tâm cần nhớ trong bài:</h4>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="audio-btn" onclick="setLessonViewMode('slide'); startAutoSlideLecture();">
          🎞️ Bật Bài Giảng Tương Tác Tự Động Đọc
        </button>
        <a href="https://www.youtube.com/watch?v=${lesson.videoId}" target="_blank" rel="noopener" style="font-size: 0.84rem; font-weight: 700; color: var(--primary); display: inline-flex; align-items: center;">
          ▶️ Mở trên YouTube ↗
        </a>
      </div>
    </div>
    <ul>
      ${lesson.summaryPoints.map((pt) => `<li>${pt}</li>`).join("")}
    </ul>
  `;

  // Render lưới Từ vựng
  document.getElementById("lessonVocabGrid").innerHTML = lesson.vocab
    .map(
      (v) => `
      <div class="vocab-card">
        <div class="vocab-header">
          <span class="vocab-icon">${v.icon}</span>
          <button class="audio-btn" onclick="speakJapanese('${v.kana || v.jp}')">
            🔊 Phát âm từ
          </button>
        </div>
        <div class="vocab-jp">${v.jp}</div>
        <div class="vocab-romaji">${v.romaji}</div>
        <div class="vocab-vi">${v.vi}</div>
        <div class="vocab-example">
          <div style="font-weight: 700; color: var(--text-main); display: flex; justify-content: space-between; align-items: center; gap: 6px;">
            <span>💬 ${v.exampleJp}</span>
            <button onclick="speakJapanese('${v.exampleJp}')" style="border:none; background:transparent; cursor:pointer; font-size:1rem;" title="Nghe câu ví dụ">🔊</button>
          </div>
          <div style="color: var(--text-muted); margin-top: 2px;">→ ${v.exampleVi}</div>
        </div>
      </div>
    `
    )
    .join("");

  renderInteractiveSlide();
  renderFlashcard();
}

function setLessonViewMode(mode) {
  if (mode !== "study") {
    pauseYouTubeVideo();
  }
  stopAutoSlideLecture();
  document.getElementById("btnLessonStudyMode").classList.toggle("active", mode === "study");
  document.getElementById("btnLessonSlideMode").classList.toggle("active", mode === "slide");
  document.getElementById("btnLessonFlashcardMode").classList.toggle("active", mode === "flashcard");

  document.getElementById("lessonStudyView").style.display = mode === "study" ? "block" : "none";
  document.getElementById("lessonSlideView").style.display = mode === "slide" ? "block" : "none";
  document.getElementById("lessonFlashcardView").style.display = mode === "flashcard" ? "block" : "none";

  if (mode === "slide") {
    renderInteractiveSlide();
  }
}

// TRÌNH PHÁT BÀI GIẢNG TƯƠNG TÁC CÓ GIỌNG ĐỌC (LUÔN HOẠT ĐỘNG 100% KỂ CẢ KHI KHÔNG CÓ YOUTUBE)
function renderInteractiveSlide() {
  const lesson = APP_DATA.lessons[currentLessonIndex];
  const item = lesson.vocab[currentSlideIndex];
  const box = document.getElementById("interactiveSlideBox");
  if (!box || !item) return;

  const isPlaying = autoSlideTimer !== null;

  box.innerHTML = `
    <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #881337 100%); color: white; border-radius: 20px; padding: 28px 24px; text-align: center; box-shadow: var(--shadow);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;">
        <span class="hero-badge" style="margin:0;">🎞️ SLIDE BÀI GIẢNG ${currentSlideIndex + 1} / ${lesson.vocab.length}</span>
        <div style="display: flex; gap: 8px;">
          <button class="btn-primary" onclick="${isPlaying ? "stopAutoSlideLecture()" : "startAutoSlideLecture()"}" style="background: ${isPlaying ? "#f59e0b" : "#10b981"};">
            ${isPlaying ? "⏸️ Tạm dừng giảng tự động" : "▶️ Tự động giảng từng câu"}
          </button>
          <button class="btn-secondary" onclick="speakSlideCurrent()" style="background: rgba(255,255,255,0.16); color: white; border-color: rgba(255,255,255,0.3);">
            🔊 Đọc lại slide này
          </button>
        </div>
      </div>

      <div style="font-size: 4.2rem; margin: 10px 0;">${item.icon}</div>
      <div style="font-size: 2.5rem; font-weight: 900; letter-spacing: 0.02em;">${item.jp}</div>
      <div style="font-size: 1.15rem; color: #fda4af; font-weight: 800; margin-top: 4px;">Phiên âm: ${item.romaji}</div>
      <div style="font-size: 1.45rem; font-weight: 800; color: #fde047; margin: 8px 0 18px;">Nghĩa: ${item.vi}</div>

      <div style="background: rgba(255,255,255,0.13); backdrop-filter: blur(8px); border-radius: 14px; padding: 14px 18px; max-width: 600px; margin: 0 auto;">
        <div style="font-size: 1.2rem; font-weight: 800;">💬 ${item.exampleJp}</div>
        <div style="font-size: 0.95rem; opacity: 0.9; margin-top: 4px;">→ ${item.exampleVi}</div>
      </div>

      <div style="display: flex; justify-content: center; gap: 12px; margin-top: 22px; flex-wrap: wrap;">
        <button class="btn-secondary" onclick="prevSlideLecture()" style="background: rgba(255,255,255,0.15); color: white; border: none;">⬅️ Slide trước</button>
        <button class="btn-secondary" onclick="nextSlideLecture()" style="background: rgba(255,255,255,0.15); color: white; border: none;">Slide tiếp theo ➡️</button>
      </div>
    </div>
  `;
}

function speakSlideCurrent(onDone) {
  const lesson = APP_DATA.lessons[currentLessonIndex];
  const item = lesson.vocab[currentSlideIndex];
  if (!item) return;
  speakJapanese(`${item.kana || item.jp}。 ${item.exampleJp}`, onDone);
}

function prevSlideLecture() {
  stopAutoSlideLecture();
  const lesson = APP_DATA.lessons[currentLessonIndex];
  currentSlideIndex = (currentSlideIndex - 1 + lesson.vocab.length) % lesson.vocab.length;
  renderInteractiveSlide();
  speakSlideCurrent();
}

function nextSlideLecture() {
  stopAutoSlideLecture();
  const lesson = APP_DATA.lessons[currentLessonIndex];
  currentSlideIndex = (currentSlideIndex + 1) % lesson.vocab.length;
  renderInteractiveSlide();
  speakSlideCurrent();
}

function startAutoSlideLecture() {
  if (autoSlideTimer) clearTimeout(autoSlideTimer);
  autoSlideTimer = true;
  renderInteractiveSlide();

  const playStep = () => {
    if (!autoSlideTimer) return;
    renderInteractiveSlide();
    speakSlideCurrent(() => {
      if (!autoSlideTimer) return;
      autoSlideTimer = setTimeout(() => {
        const lesson = APP_DATA.lessons[currentLessonIndex];
        if (currentSlideIndex < lesson.vocab.length - 1) {
          currentSlideIndex++;
          playStep();
        } else {
          stopAutoSlideLecture();
          addXP(20);
          playSoundEffect("correct");
        }
      }, 1500);
    });
  };

  playStep();
}

function stopAutoSlideLecture() {
  if (autoSlideTimer && typeof autoSlideTimer === "number") {
    clearTimeout(autoSlideTimer);
  }
  autoSlideTimer = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const box = document.getElementById("interactiveSlideBox");
  if (box && document.getElementById("lessonSlideView").style.display === "block") {
    renderInteractiveSlide();
  }
}

function renderFlashcard() {
  const lesson = APP_DATA.lessons[currentLessonIndex];
  const item = lesson.vocab[currentFlashcardIndex];
  const cardEl = document.getElementById("flashcard3D");
  cardEl.classList.remove("flipped");

  document.getElementById("fcFront").innerHTML = `
    <div style="font-size: 3.4rem; margin-bottom: 10px;">${item.icon}</div>
    <div style="font-size: 2.2rem; font-weight: 900;">${item.jp}</div>
    <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">${item.romaji}</div>
    <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 18px;">(Bấm vào thẻ để lật xem nghĩa)</div>
  `;

  document.getElementById("fcBack").innerHTML = `
    <div style="font-size: 1.6rem; font-weight: 900; margin-bottom: 12px;">${item.vi}</div>
    <div style="background: rgba(255,255,255,0.16); padding: 12px 16px; border-radius: 12px; font-size: 0.95rem;">
      <div><strong>Ví dụ:</strong> ${item.exampleJp}</div>
      <div style="margin-top: 4px; opacity: 0.9;">→ ${item.exampleVi}</div>
    </div>
  `;

  document.getElementById("fcCounterText").textContent =
    `${currentFlashcardIndex + 1} / ${lesson.vocab.length}`;
}

function flipFlashcard() {
  document.getElementById("flashcard3D").classList.toggle("flipped");
}

function prevFlashcard() {
  const lesson = APP_DATA.lessons[currentLessonIndex];
  currentFlashcardIndex =
    (currentFlashcardIndex - 1 + lesson.vocab.length) % lesson.vocab.length;
  renderFlashcard();
}

function nextFlashcard() {
  const lesson = APP_DATA.lessons[currentLessonIndex];
  currentFlashcardIndex = (currentFlashcardIndex + 1) % lesson.vocab.length;
  renderFlashcard();
}

function speakCurrentFlashcard() {
  const lesson = APP_DATA.lessons[currentLessonIndex];
  const item = lesson.vocab[currentFlashcardIndex];
  speakJapanese(`${item.kana || item.jp}。 ${item.exampleJp}`);
}

function extractYouTubeId(input) {
  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function openChangeVideoModal() {
  const lesson = APP_DATA.lessons[currentLessonIndex];
  const url = prompt(
    `Nhập đường link YouTube mới cho "${lesson.title}" (Ví dụ: https://www.youtube.com/watch?v=...):`,
    `https://www.youtube.com/watch?v=${lesson.videoId}`
  );
  if (!url) return;
  const newId = extractYouTubeId(url);
  if (!newId) {
    alert("Link YouTube không hợp lệ. Vui lòng dán link dạng https://www.youtube.com/watch?v=...");
    return;
  }
  lesson.videoId = newId;
  userState.customVideoIds[lesson.id] = newId;
  saveUserState();
  renderLessonDetail(currentLessonIndex);
}

// ============================================================================
// 7. CHẶNG 3: NGỮ PHÁP KHỐI MÀU & CHỮ HÁN (KANJI) CHIẾT TỰ
// ============================================================================
function switchGrammarSubTab(sub) {
  document.getElementById("btnShowGrammar").classList.toggle("active", sub === "grammar");
  document.getElementById("btnShowKanji").classList.toggle("active", sub === "kanji");

  document.getElementById("grammarListContainer").style.display =
    sub === "grammar" ? "block" : "none";
  document.getElementById("kanjiListContainer").style.display =
    sub === "kanji" ? "grid" : "none";
}

function renderGrammarAndKanji() {
  const gramContainer = document.getElementById("grammarListContainer");
  gramContainer.innerHTML = APP_DATA.grammar
    .map(
      (g) => `
      <div class="grammar-card">
        <span class="lesson-badge" style="background: var(--secondary)">${g.level}</span>
        <h3 style="font-size: 1.25rem; margin-top: 4px;">${g.title}</h3>
        <div class="formula-blocks">
          ${g.formula
            .map(
              (f, i) => `
              <div class="f-block" style="background: ${f.color}">
                ${f.text}
                <small>${f.role}</small>
              </div>
              ${i < g.formula.length - 1 ? `<span style="font-weight:900; font-size:1.2rem;">➕</span>` : ""}
            `
            )
            .join("")}
        </div>
        <p style="color: var(--text-muted); margin-bottom: 12px;">💡 <strong>Giải thích dễ hiểu:</strong> ${g.explanation}</p>
        <div style="display: grid; gap: 8px;">
          ${g.examples
            .map(
              (ex) => `
              <div class="vocab-example" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div>
                  <strong style="font-size: 1.05rem;">${ex.jp}</strong>
                  <span style="color: var(--primary); font-size: 0.85rem; margin-left: 8px;">(${ex.romaji})</span>
                  <div style="color: var(--text-muted);">→ ${ex.vi}</div>
                </div>
                <button class="audio-btn" onclick="speakJapanese('${ex.jp}')">🔊 Nghe câu</button>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");

  const kanjiContainer = document.getElementById("kanjiListContainer");
  kanjiContainer.innerHTML = APP_DATA.kanji
    .map(
      (k) => `
      <div class="kanji-card">
        <div class="kanji-top">
          <div class="kanji-big" onclick="speakJapanese('${k.kanji}')" title="Bấm để nghe phát âm">${k.kanji}</div>
          <div>
            <span class="lesson-badge" style="background: var(--primary)">Âm Hán Việt: ${k.hanViet}</span>
            <h3 style="font-size: 1.2rem;">${k.icon} ${k.meaning}</h3>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
              <strong>Onyomi:</strong> ${k.onyomi}<br/>
              <strong>Kunyomi:</strong> ${k.kunyomi}
            </div>
          </div>
        </div>
        <div class="mnemonic-box" style="margin: 10px 0; font-size: 0.88rem;">
          🎨 <strong>Câu chuyện tượng hình:</strong> ${k.story}
        </div>
        <div style="font-size: 0.86rem;">
          <strong>Từ ghép thông dụng:</strong>
          ${k.words
            .map(
              (w) => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding: 5px 0; border-bottom: 1px dashed var(--border);">
                <span><strong>${w.w}</strong>: ${w.m}</span>
                <button onclick="speakJapanese('${w.w.split(" ")[0]}')" style="border:none; background:transparent; cursor:pointer;">🔊</button>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

// ============================================================================
// 8. CHẶNG 4: 3 TRÒ CHƠI (QUIZ TRẮC NGHIỆM + GHÉP THẺ + NGHE PHẢN XẠ)
// ============================================================================
function switchGameMode(mode) {
  document.getElementById("btnGameQuiz").classList.toggle("active", mode === "quiz");
  document.getElementById("btnGameMatch").classList.toggle("active", mode === "match");
  document.getElementById("btnGameListen").classList.toggle("active", mode === "listen");

  document.getElementById("gameQuizArea").style.display = mode === "quiz" ? "block" : "none";
  document.getElementById("gameMatchArea").style.display = mode === "match" ? "block" : "none";
  document.getElementById("gameListenArea").style.display = mode === "listen" ? "block" : "none";

  if (mode === "listen") {
    speakListenCurrent();
  }
}

function getPoolByTopic(topic) {
  if (topic === "hiragana") {
    return APP_DATA.hiragana.map((h) => ({
      q: h.char,
      a: `${h.romaji} (${h.example.meaning})`,
      speak: h.char,
      label: "Bảng Hiragana"
    }));
  }
  if (topic === "katakana") {
    return APP_DATA.katakana.map((k) => ({
      q: k.char,
      a: `${k.romaji} (${k.example.meaning})`,
      speak: k.char,
      label: "Bảng Katakana"
    }));
  }
  if (topic === "numbers" && APP_DATA.numbers) {
    const allNums = [
      ...APP_DATA.numbers.basic,
      ...APP_DATA.numbers.tens,
      ...APP_DATA.numbers.hundreds,
      ...APP_DATA.numbers.thousands
    ];
    return allNums.map((n) => ({
      q: `🔢 Số ${n.num} (${n.kanji})`,
      a: `${n.kana} (${n.romaji})`,
      speak: n.speak,
      label: "Số đếm tiếng Nhật"
    }));
  }
  if (topic === "kanji") {
    return APP_DATA.kanji.map((k) => ({
      q: k.kanji,
      a: `${k.hanViet} - ${k.meaning}`,
      speak: k.kanji,
      label: "Chữ Hán (Kanji)"
    }));
  }
  const allVocab = [];
  APP_DATA.lessons.forEach((l) => {
    l.vocab.forEach((v) => {
      allVocab.push({
        q: `${v.icon} ${v.jp}`,
        a: `${v.vi} (${v.romaji})`,
        speak: v.kana || v.jp,
        label: "Từ vựng các bài"
      });
    });
  });
  return allVocab;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function initQuizQuestion() {
  const topic = document.getElementById("quizTopicSelect").value;
  const pool = getPoolByTopic(topic);
  const shuffled = shuffleArray(pool);
  const correctItem = shuffled[0];
  const options = shuffleArray(shuffled.slice(0, 4));

  currentQuizAnswer = correctItem.a;
  currentQuizSpeakText = correctItem.speak;

  document.getElementById("quizCategoryLabel").textContent = `Chủ đề: ${correctItem.label}`;
  document.getElementById("quizQuestionMain").textContent = correctItem.q;
  document.getElementById("quizFeedbackBox").textContent = "";

  const grid = document.getElementById("quizOptionsGrid");
  grid.innerHTML = options
    .map(
      (opt) => `
      <button class="quiz-opt-btn" onclick="checkQuizOption(this, '${opt.a.replace(/'/g, "\\'")}')">
        ${opt.a}
      </button>
    `
    )
    .join("");
}

function speakQuizCurrent() {
  if (currentQuizSpeakText) speakJapanese(currentQuizSpeakText);
}

function checkQuizOption(btnEl, selectedAnswer) {
  const allBtns = document.querySelectorAll("#quizOptionsGrid .quiz-opt-btn");
  allBtns.forEach((b) => (b.disabled = true));

  const feedback = document.getElementById("quizFeedbackBox");

  if (selectedAnswer === currentQuizAnswer) {
    btnEl.classList.add("correct");
    quizStreak++;
    addXP(15);
    playSoundEffect("correct");
    speakJapanese(currentQuizSpeakText);
    feedback.style.color = "var(--success)";
    feedback.textContent = "🎉 Chính xác! Con nhận được +15 XP!";
  } else {
    btnEl.classList.add("wrong");
    allBtns.forEach((b) => {
      if (b.textContent.trim() === currentQuizAnswer) b.classList.add("correct");
    });
    quizStreak = 0;
    playSoundEffect("wrong");
    feedback.style.color = "#ef4444";
    feedback.textContent = `💡 Chưa đúng rồi! Đáp án đúng là: ${currentQuizAnswer}`;
  }

  document.getElementById("quizScoreLabel").textContent = `Đúng liên tiếp: ${quizStreak} 🔥`;
}

// GAME 2: GHÉP CẶP SIÊU TỐC
function initMatchingGame() {
  const topic = document.getElementById("quizTopicSelect").value;
  const pool = shuffleArray(getPoolByTopic(topic)).slice(0, 6);
  matchSelectedFirst = null;
  matchRemainingPairs = pool.length;

  const cards = [];
  pool.forEach((item, idx) => {
    cards.push({ pairId: idx, text: item.q, speak: item.speak, type: "jp" });
    cards.push({ pairId: idx, text: item.a, speak: item.speak, type: "vi" });
  });

  const shuffledCards = shuffleArray(cards);
  const grid = document.getElementById("matchGridContainer");
  document.getElementById("matchStatusText").textContent = `Còn lại: ${matchRemainingPairs} cặp thẻ`;

  grid.innerHTML = shuffledCards
    .map(
      (c, i) => `
      <div class="match-card" id="mcard-${i}" data-pair="${c.pairId}" data-speak="${c.speak}" onclick="handleMatchCardClick(this)">
        ${c.text}
      </div>
    `
    )
    .join("");
}

function handleMatchCardClick(cardEl) {
  if (cardEl.classList.contains("matched") || cardEl === matchSelectedFirst) return;

  const speakText = cardEl.getAttribute("data-speak");
  if (speakText) speakJapanese(speakText);

  cardEl.classList.add("selected");

  if (!matchSelectedFirst) {
    matchSelectedFirst = cardEl;
    return;
  }

  const pair1 = matchSelectedFirst.getAttribute("data-pair");
  const pair2 = cardEl.getAttribute("data-pair");

  if (pair1 === pair2) {
    matchSelectedFirst.classList.remove("selected");
    cardEl.classList.remove("selected");
    matchSelectedFirst.classList.add("matched");
    cardEl.classList.add("matched");
    matchSelectedFirst = null;
    matchRemainingPairs--;
    playSoundEffect("correct");

    if (matchRemainingPairs === 0) {
      addXP(50);
      document.getElementById("matchStatusText").textContent =
        "🏆 Tuyệt vời! Con đã ghép đúng toàn bộ thẻ và nhận +50 XP!";
    } else {
      document.getElementById("matchStatusText").textContent =
        `Còn lại: ${matchRemainingPairs} cặp thẻ`;
    }
  } else {
    playSoundEffect("wrong");
    const firstRef = matchSelectedFirst;
    matchSelectedFirst = null;
    setTimeout(() => {
      firstRef.classList.remove("selected");
      cardEl.classList.remove("selected");
    }, 550);
  }
}

// GAME 3: THỬ THÁCH NGHE PHẢN XẠ
function initListenQuestion() {
  const topic = document.getElementById("quizTopicSelect").value;
  const pool = getPoolByTopic(topic);
  const shuffled = shuffleArray(pool);
  const correctItem = shuffled[0];
  const options = shuffleArray(shuffled.slice(0, 4));

  currentListenAnswer = correctItem.a;
  currentListenSpeakText = correctItem.speak;
  currentListenDisplay = `${correctItem.q} → ${correctItem.a}`;

  const revealEl = document.getElementById("listenRevealText");
  if (revealEl) revealEl.textContent = "❓ ❓ ❓ (Hãy nghe và chọn đáp án)";

  const fbEl = document.getElementById("listenFeedbackBox");
  if (fbEl) fbEl.textContent = "";

  const grid = document.getElementById("listenOptionsGrid");
  if (!grid) return;
  grid.innerHTML = options
    .map(
      (opt) => `
      <button class="quiz-opt-btn" onclick="checkListenOption(this, '${opt.a.replace(/'/g, "\\'")}')">
        ${opt.a}
      </button>
    `
    )
    .join("");
}

function speakListenCurrent() {
  if (currentListenSpeakText) speakJapanese(currentListenSpeakText);
}

function checkListenOption(btnEl, selectedAnswer) {
  const allBtns = document.querySelectorAll("#listenOptionsGrid .quiz-opt-btn");
  allBtns.forEach((b) => (b.disabled = true));

  document.getElementById("listenRevealText").textContent = currentListenDisplay;
  const feedback = document.getElementById("listenFeedbackBox");

  if (selectedAnswer === currentListenAnswer) {
    btnEl.classList.add("correct");
    addXP(20);
    playSoundEffect("correct");
    speakJapanese(currentListenSpeakText);
    feedback.style.color = "var(--success)";
    feedback.textContent = "🎧 Tai nghe siêu đỉnh! Con nhận được +20 XP!";
  } else {
    btnEl.classList.add("wrong");
    allBtns.forEach((b) => {
      if (b.textContent.trim() === currentListenAnswer) b.classList.add("correct");
    });
    playSoundEffect("wrong");
    feedback.style.color = "#ef4444";
    feedback.textContent = `💡 Đáp án đúng là: ${currentListenAnswer}`;
  }
}

// ============================================================================
// 9. GÓC PHỤ HUYNH: THÊM TỪ VỰNG, TẠO BÀI HỌC MỚI & XUẤT FILE DATA.JS
// ============================================================================
function populateParentLessonSelect() {
  const select = document.getElementById("addVocabLessonId");
  if (!select) return;
  select.innerHTML = APP_DATA.lessons
    .map((l) => `<option value="${l.id}">${l.title}</option>`)
    .join("");
}

function handleAddCustomVocab(e) {
  e.preventDefault();
  const lessonId = document.getElementById("addVocabLessonId").value;
  const newItem = {
    jp: document.getElementById("addVocabJp").value.trim(),
    kana: document.getElementById("addVocabJp").value.trim(),
    romaji: document.getElementById("addVocabRomaji").value.trim(),
    vi: document.getElementById("addVocabVi").value.trim(),
    icon: document.getElementById("addVocabIcon").value.trim() || "🌟",
    exampleJp: document.getElementById("addVocabExJp").value.trim() || "いい です ね！",
    exampleVi: document.getElementById("addVocabExVi").value.trim() || "Hay quá nhỉ!"
  };

  const targetIndex = APP_DATA.lessons.findIndex((l) => l.id === lessonId);
  if (targetIndex === -1) return;

  APP_DATA.lessons[targetIndex].vocab.push(newItem);
  if (!userState.customVocab[lessonId]) {
    userState.customVocab[lessonId] = [];
  }
  userState.customVocab[lessonId].push(newItem);
  saveUserState();

  renderLessonDetail(targetIndex);
  e.target.reset();
  alert(`Đã thêm từ "${newItem.jp} (${newItem.vi})" vào ${APP_DATA.lessons[targetIndex].title}!`);
}

function handleCreateNewLesson(e) {
  e.preventDefault();
  const videoInput = document.getElementById("newLessonVideo").value.trim();
  const videoId = extractYouTubeId(videoInput) || "gOKdtS3XVCg";
  const newId = "lesson-" + (APP_DATA.lessons.length + 1) + "-" + Date.now();

  const newLesson = {
    id: newId,
    level: document.getElementById("newLessonLevel").value.trim(),
    badgeColor: "#0ea5e9",
    title: document.getElementById("newLessonTitle").value.trim(),
    subtitle: document.getElementById("newLessonSubtitle").value.trim(),
    icon: document.getElementById("newLessonIcon").value.trim() || "📚",
    videoId: videoId,
    videoTitle: document.getElementById("newLessonTitle").value.trim(),
    summaryPoints: [document.getElementById("newLessonNote").value.trim()],
    vocab: [
      {
        jp: "がんばります",
        kana: "がんばります",
        romaji: "Ganbarimasu",
        vi: "Cố gắng hết sức!",
        icon: "💪",
        exampleJp: "きょう も にほんご を がんばります！",
        exampleVi: "Hôm nay con cũng cố gắng học tiếng Nhật!"
      }
    ]
  };

  APP_DATA.lessons.push(newLesson);
  userState.customLessons.push(newLesson);
  saveUserState();

  populateParentLessonSelect();
  renderLessonDetail(APP_DATA.lessons.length - 1);
  e.target.reset();
  alert(`Đã tạo thành công "${newLesson.title}"! Bạn có thể thêm tiếp các từ vựng vào bài học mới này ở biểu mẫu phía trên.`);
}

function exportUpdatedDataJs() {
  const fileContent =
    "// ============================================================================\n" +
    "// KHO DỮ LIỆU HỌC TIẾNG NHẬT TOÀN DIỆN - NIHONGO QUEST MR ĐÀM\n" +
    "// Bản quyền: Đàm Xuân Hòa - damxuanhoa@gmail.com\n" +
    "// ============================================================================\n\n" +
    "const APP_DATA = " +
    JSON.stringify(APP_DATA, null, 2) +
    ";\n";

  const blob = new Blob([fileContent], { type: "application/javascript;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.js";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
