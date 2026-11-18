// ============================================================================
// KHO DỮ LIỆU HỌC TIẾNG NHẬT TOÀN DIỆN - NIHONGO QUEST MR ĐÀM
// Bản quyền: Đàm Xuân Hòa - damxuanhoa@gmail.com
// ============================================================================

const APP_DATA = {
  // 1. BẢNG CHỮ CÁI HIRAGANA (46 chữ cơ bản + mẹo nhớ hình ảnh + từ vựng ví dụ)
  hiragana: [
    // Hàng A
    {
      char: "あ", romaji: "a", row: "Hàng A (Nguyên âm)",
      mnemonic: "Giống chữ 'A' đang mang bầu con cá vắt ngang bụng.",
      strokes: 3,
      example: { word: "あめ", reading: "ame", meaning: "Kẹo / Cơn mưa", icon: "🍬", sentence: "あめ が すき です (Tớ thích kẹo)" }
    },
    {
      char: "い", romaji: "i", row: "Hàng A (Nguyên âm)",
      mnemonic: "Hai nét đứng song song như 2 chữ 'i' đang đứng cạnh nhau.",
      strokes: 2,
      example: { word: "いぬ", reading: "inu", meaning: "Con chó (Shiba)", icon: "🐕", sentence: "かわいい いぬ です ね (Chú chó dễ thương quá)" }
    },
    {
      char: "う", romaji: "u", row: "Hàng A (Nguyên âm)",
      mnemonic: "Giống chữ 'U' bị quay nghiêng có dấu phẩy đội mũ ở trên.",
      strokes: 2,
      example: { word: "うみ", reading: "umi", meaning: "Biển cả", icon: "🌊", sentence: "なつ に うみ へ いきます (Mùa hè đi biển)" }
    },
    {
      char: "え", romaji: "e", row: "Hàng A (Nguyên âm)",
      mnemonic: "Giống hình một chú chim cánh cụt đang chạy 'e e' tập thể dục.",
      strokes: 2,
      example: { word: "えき", reading: "eki", meaning: "Nhà ga tàu", icon: "🚉", sentence: "えき は どこ ですか (Nhà ga ở đâu vậy?)" }
    },
    {
      char: "お", romaji: "o", row: "Hàng A (Nguyên âm)",
      mnemonic: "Giống gậy đánh Golf đánh quả bóng bay vào lỗ kêu 'Ô!'",
      strokes: 3,
      example: { word: "おちゃ", reading: "ocha", meaning: "Trà xanh Nhật", icon: "🍵", sentence: "おちゃ を のみます (Uống trà xanh)" }
    },

    // Hàng KA
    {
      char: "か", romaji: "ka", row: "Hàng KA",
      mnemonic: "Giống chiếc máy ảnh (Camera - Ka) hoặc người đang nhảy vũ điệu Kaka.",
      strokes: 3,
      example: { word: "かさ", reading: "kasa", meaning: "Cái ô (dù)", icon: "☂️", sentence: "あめ だから かさ を さします (Trời mưa nên che ô)" }
    },
    {
      char: "き", romaji: "ki", row: "Hàng KA",
      mnemonic: "Giống hệt chiếc chìa khóa cổ (Key = Ki) có 2 khấc ngang.",
      strokes: 4,
      example: { word: "き", reading: "ki", meaning: "Cái cây", icon: "🌳", sentence: "おおきい き です (Một cái cây lớn)" }
    },
    {
      char: "く", romaji: "ku", row: "Hàng KA",
      mnemonic: "Giống mỏ con chim Cúc cu (Ku) đang há mỏ kêu.",
      strokes: 1,
      example: { word: "くつ", reading: "kutsu", meaning: "Đôi giày", icon: "👟", sentence: "あたらしい くつ (Đôi giày mới)" }
    },
    {
      char: "け", romaji: "ke", row: "Hàng KA",
      mnemonic: "Giống cái thùng gỗ (Keg) ghép từ các thanh tre.",
      strokes: 3,
      example: { word: "けいたいでんわ", reading: "keitaidenwa", meaning: "Điện thoại di động", icon: "📱", sentence: "スマホ を つかいます (Dùng điện thoại)" }
    },
    {
      char: "こ", romaji: "ko", row: "Hàng KA",
      mnemonic: "Hai con cá Koi (Ko) đang bơi song song vòng quanh nhau.",
      strokes: 2,
      example: { word: "こども", reading: "kodomo", meaning: "Trẻ em / Học sinh nhỏ", icon: "🧒", sentence: "げんきな こども (Đứa trẻ năng động)" }
    },

    // Hàng SA
    {
      char: "さ", romaji: "sa", row: "Hàng SA",
      mnemonic: "Giống chữ き (ki) nhưng chỉ có 1 nét ngang — giống khuôn mặt đang cười Sảng khoái (Sa).",
      strokes: 3,
      example: { word: "さくら", reading: "sakura", meaning: "Hoa anh đào", icon: "🌸", sentence: "さくら が きれい です (Hoa anh đào đẹp quá)" }
    },
    {
      char: "し", romaji: "shi", row: "Hàng SA",
      mnemonic: "Giống cái móc câu cá hoặc chiếc ống hút cong (Shi).",
      strokes: 1,
      example: { word: "しろ", reading: "shiro", meaning: "Màu trắng / Lâu đài", icon: "🏯", sentence: "しろい ねこ (Con mèo trắng)" }
    },
    {
      char: "す", romaji: "su", row: "Hàng SA",
      mnemonic: "Giống sợi mì Ramen xoắn tròn đang được hút 'Sụp' (Su) lên.",
      strokes: 2,
      example: { word: "すし", reading: "sushi", meaning: "Món Sushi", icon: "🍣", sentence: "すし が だいすき です (Tớ cực thích Sushi)" }
    },
    {
      char: "せ", romaji: "se", row: "Hàng SA",
      mnemonic: "Giống cái ghế sofa êm ái để ngồi xem Thế giới (Sekai - Se).",
      strokes: 3,
      example: { word: "せんせい", reading: "sensei", meaning: "Thầy / Cô giáo", icon: "👩‍🏫", sentence: "せんせい、おはようございます (Em chào cô ạ)" }
    },
    {
      char: "そ", romaji: "so", row: "Hàng SA",
      mnemonic: "Đường kim mũi chỉ khâu zíc-zắc (Sewing = So).",
      strokes: 1,
      example: { word: "そら", reading: "sora", meaning: "Bầu trời", icon: "🌤️", sentence: "あおい そら (Bầu trời xanh)" }
    },

    // Hàng TA
    {
      char: "た", romaji: "ta", row: "Hàng TA",
      mnemonic: "Nhìn kỹ giống chữ 't' đứng cạnh chữ 'a' => ghép lại thành 'ta'!",
      strokes: 4,
      example: { word: "たまご", reading: "tamago", meaning: "Quả trứng", icon: "🥚", sentence: "たまごやき を たべます (Ăn trứng cuộn)" }
    },
    {
      char: "ち", romaji: "chi", row: "Hàng TA",
      mnemonic: "Giống số 5 bị gạch ngang đầu — nhớ tới hoạt hình Chibi (Chi).",
      strokes: 2,
      example: { word: "ちず", reading: "chizu", meaning: "Bản đồ", icon: "🗺️", sentence: "にほん の ちず (Bản đồ nước Nhật)" }
    },
    {
      char: "つ", romaji: "tsu", row: "Hàng TA",
      mnemonic: "Giống ngọn sóng thần khổng lồ (Tsunami = Tsu) cuộn tròn.",
      strokes: 1,
      example: { word: "つき", reading: "tsuki", meaning: "Mặt trăng", icon: "🌙", sentence: "つき が きれい です (Mặt trăng đẹp quá)" }
    },
    {
      char: "て", romaji: "te", row: "Hàng TA",
      mnemonic: "Giống chữ T viết liền nét uốn cong như lòng bàn tay (Te = cái tay).",
      strokes: 1,
      example: { word: "てがみ", reading: "tegami", meaning: "Bức thư", icon: "✉️", sentence: "ともだち に てがみ を かきます (Viết thư cho bạn)" }
    },
    {
      char: "と", romaji: "to", row: "Hàng TA",
      mnemonic: "Giống cái gai nhọn đâm vào ngón chân cái (Toe = To).",
      strokes: 2,
      example: { word: "とけい", reading: "tokei", meaning: "Đồng hồ", icon: "⏰", sentence: "かっこいい とけい (Chiếc đồng hồ ngầu)" }
    },

    // Hàng NA
    {
      char: "な", romaji: "na", row: "Hàng NA",
      mnemonic: "Cây thánh giá nhỏ bên cạnh người đang quỳ cầu nguyện 'Na-mô'.",
      strokes: 4,
      example: { word: "なつ", reading: "natsu", meaning: "Mùa hè", icon: "🌻", sentence: "なつやすみ が たのしみ (Hóng nghỉ hè quá)" }
    },
    {
      char: "に", romaji: "ni", row: "Hàng NA",
      mnemonic: "Giống cái đầu gối (Knee = Ni) nhìn nghiêng.",
      strokes: 3,
      example: { word: "にほん", reading: "nihon", meaning: "Nước Nhật Bản", icon: "🗾", sentence: "にほん へ いきたい です (Con muốn đi Nhật Bản)" }
    },
    {
      char: "ぬ", romaji: "nu", row: "Hàng NA",
      mnemonic: "Đôi đũa đang gắp sợi mì udon xoắn tít có đuôi tròn (Noodles = Nu).",
      strokes: 2,
      example: { word: "ぬいぐるみ", reading: "nuigurumi", meaning: "Thú nhồi bông", icon: "🧸", sentence: "かわいい ぬいぐるみ (Gấu bông đáng yêu)" }
    },
    {
      char: "ね", romaji: "ne", row: "Hàng NA",
      mnemonic: "Chú mèo (Neko = Ne) đang ngồi cuộn cái đuôi tròn ở góc phải.",
      strokes: 2,
      example: { word: "ねこ", reading: "neko", meaning: "Con mèo", icon: "🐱", sentence: "ねこ が ねて います (Con mèo đang ngủ)" }
    },
    {
      char: "の", romaji: "no", row: "Hàng NA",
      mnemonic: "Giống biển báo cấm 'NO' hình tròn có nét gạch chéo.",
      strokes: 1,
      example: { word: "のみもの", reading: "nomimono", meaning: "Đồ uống", icon: "🧃", sentence: "つめたい のみもの (Đồ uống mát lạnh)" }
    },

    // Hàng HA
    {
      char: "は", romaji: "ha", row: "Hàng HA",
      mnemonic: "Chữ H đứng cạnh chữ a nhỏ thắt nút => đọc là 'Ha ha ha'!",
      strokes: 3,
      example: { word: "はな", reading: "hana", meaning: "Bông hoa", icon: "🌷", sentence: "きれいな はな (Bông hoa xinh đẹp)" }
    },
    {
      char: "ひ", romaji: "hi", row: "Hàng HA",
      mnemonic: "Giống cái miệng đang cười mỉm 'Hi hi hi' rất tươi.",
      strokes: 1,
      example: { word: "ひこうき", reading: "hikouki", meaning: "Máy bay", icon: "✈️", sentence: "ひこうき で いきます (Đi bằng máy bay)" }
    },
    {
      char: "ふ", romaji: "fu", row: "Hàng HA",
      mnemonic: "Hình dáng đỉnh núi Phú Sĩ (Fuji = Fu) hùng vĩ.",
      strokes: 4,
      example: { word: "ふじさん", reading: "fujisan", meaning: "Núi Phú Sĩ", icon: "🗻", sentence: "ふじさん は たかい です (Núi Phú Sĩ rất cao)" }
    },
    {
      char: "へ", romaji: "he", row: "Hàng HA",
      mnemonic: "Giống cái mũ nón hoặc mũi tên chỉ lên thiên đường (Heaven = He).",
      strokes: 1,
      example: { word: "へや", reading: "heya", meaning: "Căn phòng", icon: "🛋️", sentence: "わたし の へや (Phòng của tớ)" }
    },
    {
      char: "ほ", romaji: "ho", row: "Hàng HA",
      mnemonic: "Giống chữ は (ha) nhưng đội thêm 1 cái mũ ngang ở trên đầu — ông già Noel cười 'Hô hô' (Ho).",
      strokes: 4,
      example: { word: "ほし", reading: "hoshi", meaning: "Ngôi sao", icon: "⭐", sentence: "きらきら の ほし (Ngôi sao lấp lánh)" }
    },

    // Hàng MA
    {
      char: "ま", romaji: "ma", row: "Hàng MA",
      mnemonic: "Hai cánh tay của Mẹ (Mama = Ma) dang rộng ôm con vào lòng.",
      strokes: 3,
      example: { word: "まんが", reading: "manga", meaning: "Truyện tranh Nhật Bản", icon: "📚", sentence: "まんが を よみます (Đọc truyện tranh Manga)" }
    },
    {
      char: "み", romaji: "mi", row: "Hàng MA",
      mnemonic: "Giống số 21 (Ai vừa tròn 21 tuổi? Chính là 'Me' = Mi).",
      strokes: 2,
      example: { word: "みず", reading: "mizu", meaning: "Nước lọc", icon: "💧", sentence: "みず を ください (Cho cháu xin cốc nước)" }
    },
    {
      char: "む", romaji: "mu", row: "Hàng MA",
      mnemonic: "Giống cái đầu con bò sữa có sừng đang kêu 'Muuu' (Mu).",
      strokes: 3,
      example: { word: "むし", reading: "mushi", meaning: "Côn trùng / Bọ cánh cứng", icon: "🐞", sentence: "かぶとむし (Bọ hung sừng Nhật)" }
    },
    {
      char: "め", romaji: "me", row: "Hàng MA",
      mnemonic: "Giống hình con mắt (Me trong tiếng Nhật nghĩa là Đôi mắt!).",
      strokes: 2,
      example: { word: "めがね", reading: "megane", meaning: "Kính mắt", icon: "👓", sentence: "めがね を かけます (Đeo kính)" }
    },
    {
      char: "も", romaji: "mo", row: "Hàng MA",
      mnemonic: "Lưỡi câu móc thêm 2 con giun để câu được nhiều cá hơn (More = Mo).",
      strokes: 3,
      example: { word: "もも", reading: "momo", meaning: "Quả đào", icon: "🍑", sentence: "あまい もも (Quả đào ngọt)" }
    },

    // Hàng YA
    {
      char: "や", romaji: "ya", row: "Hàng YA",
      mnemonic: "Giống đầu con bò Tây Tạng (Yak = Ya) có 2 cái sừng nhô lên.",
      strokes: 3,
      example: { word: "やま", reading: "yama", meaning: "Ngọn núi", icon: "⛰️", sentence: "やま に のぼります (Leo núi)" }
    },
    {
      char: "ゆ", romaji: "yu", row: "Hàng YA",
      mnemonic: "Giống con cá nhiệt đới độc nhất vô nhị (Unique = Yu) bơi dưới suối nước nóng.",
      strokes: 2,
      example: { word: "ゆき", reading: "yuki", meaning: "Tuyết trắng", icon: "❄️", sentence: "ゆきだるま (Người tuyết)" }
    },
    {
      char: "よ", romaji: "yo", row: "Hàng YA",
      mnemonic: "Giống cái Yo-yo đang treo trên sợi dây.",
      strokes: 2,
      example: { word: "よる", reading: "yoru", meaning: "Buổi tối / Ban đêm", icon: "🌃", sentence: "しずかな よる (Đêm yên tĩnh)" }
    },

    // Hàng RA
    {
      char: "ら", romaji: "ra", row: "Hàng RA",
      mnemonic: "Giống chú thỏ (Rabbit = Ra) đang cúi đầu lắng nghe.",
      strokes: 2,
      example: { word: "らいおん", reading: "raion", meaning: "Sư tử", icon: "🦁", sentence: "つよい らいおん (Chú sư tử mạnh mẽ)" }
    },
    {
      char: "り", romaji: "ri", row: "Hàng RA",
      mnemonic: "Hai nhánh cỏ lau đung đưa bên dòng sông (River = Ri).",
      strokes: 2,
      example: { word: "りんご", reading: "ringo", meaning: "Quả táo", icon: "🍎", sentence: "あかい りんご (Quả táo đỏ)" }
    },
    {
      char: "る", romaji: "ru", row: "Hàng RA",
      mnemonic: "Giống số 3 có thắt viên ngọc Ruby (Ru) tròn ở đuôi.",
      strokes: 1,
      example: { word: "るすばん", reading: "rusuban", meaning: "Trông nhà", icon: "🏠", sentence: "いえ で るすばん します (Ở nhà trông nhà)" }
    },
    {
      char: "れ", romaji: "re", row: "Hàng RA",
      mnemonic: "Người đang vươn vai tập thể dục chuẩn bị đua (Race = Re).",
      strokes: 2,
      example: { word: "れいぞうこ", reading: "reizouko", meaning: "Tủ lạnh", icon: "🧊", sentence: "れいぞうこ に アイス が あります (Trong tủ lạnh có kem)" }
    },
    {
      char: "ろ", romaji: "ro", row: "Hàng RA",
      mnemonic: "Giống chữ る (ru) nhưng KHÔNG có vòng tròn ở đuôi — con đường trống (Road = Ro).",
      strokes: 1,
      example: { word: "ろく", reading: "roku", meaning: "Số 6", icon: "6️⃣", sentence: "ろくじ に おきます (Dậy lúc 6 giờ)" }
    },

    // Hàng WA & N
    {
      char: "わ", romaji: "wa", row: "Hàng WA & N",
      mnemonic: "Con ong vò vẽ (Wasp = Wa) có cái bụng tròn to phía sau.",
      strokes: 2,
      example: { word: "わたし", reading: "watashi", meaning: "Tôi / Tớ / Con", icon: "🙋", sentence: "わたし は ちゅうがくせい です (Con là học sinh cấp 2)" }
    },
    {
      char: "を", romaji: "wo", row: "Hàng WA & N",
      mnemonic: "Người trượt ván bay qua bậc thềm khiến ai cũng trầm trồ 'Whoa!' (Đọc là 'O', chỉ dùng làm trợ từ).",
      strokes: 3,
      example: { word: "ほん を よむ", reading: "hon o yomu", meaning: "Đọc sách (Trợ từ を)", icon: "📖", sentence: "まいにち ほん を よみます (Đọc sách mỗi ngày)" }
    },
    {
      char: "ん", romaji: "n", row: "Hàng WA & N",
      mnemonic: "Giống hệt chữ 'n' viết thường trong tiếng Việt và tiếng Anh!",
      strokes: 1,
      example: { word: "ぱん", reading: "pan", meaning: "Bánh mì", icon: "🥐", sentence: "あさごはん に ぱん を たべます (Ăn sáng bằng bánh mì)" }
    }
  ],

  // 2. BẢNG CHỮ CÁI KATAKANA
  katakana: [
    { char: "ア", romaji: "a", row: "Hàng A", mnemonic: "Giống cái rìu (Axe = A) sắc bén.", strokes: 2, example: { word: "アニメ", reading: "anime", meaning: "Phim hoạt hình Nhật", icon: "🎬", sentence: "アニメ を みます (Xem Anime)" } },
    { char: "イ", romaji: "i", row: "Hàng A", mnemonic: "Giống cái giá vẽ tranh (Easel = I) đứng vững.", strokes: 2, example: { word: "インターネット", reading: "intaanetto", meaning: "Mạng Internet", icon: "🌐", sentence: "インターネット で べんきょう します (Học trên mạng)" } },
    { char: "ウ", romaji: "u", row: "Hàng A", mnemonic: "Giống chữ う (Hiragana) nhưng vuông vức góc cạnh hơn.", strokes: 3, example: { word: "ウサギ", reading: "usagi", meaning: "Con thỏ", icon: "🐰", sentence: "しろい ウサギ (Chú thỏ trắng)" } },
    { char: "エ", romaji: "e", row: "Hàng A", mnemonic: "Giống thanh dầm sắt chữ I trong thang máy (Elevator = E).", strokes: 3, example: { word: "エアコン", reading: "eakon", meaning: "Máy điều hòa", icon: "❄️", sentence: "エアコン を つけます (Bật điều hòa)" } },
    { char: "オ", romaji: "o", row: "Hàng A", mnemonic: "Giống ca sĩ nhạc Opera (O) đang vung tay hát.", strokes: 3, example: { word: "オレンジ", reading: "orenji", meaning: "Quả cam / Nước cam", icon: "🍊", sentence: "オレンジジュース (Nước ép cam)" } },

    { char: "カ", romaji: "ka", row: "Hàng KA", mnemonic: "Giống hệt chữ か (ka) bên Hiragana nhưng bỏ dấu phẩy đi!", strokes: 2, example: { word: "カメラ", reading: "kamera", meaning: "Máy ảnh (Camera)", icon: "📷", sentence: "カメラ で しゃしん を とります (Chụp ảnh bằng máy ảnh)" } },
    { char: "キ", romaji: "ki", row: "Hàng KA", mnemonic: "Phần trên của chữ き (ki) Hiragana — chiếc chìa khóa (Key).", strokes: 3, example: { word: "キャンディ", reading: "kyandi", meaning: "Kẹo ngọt (Candy)", icon: "🍭", sentence: "あまい キャンディ (Kẹo ngọt)" } },
    { char: "ク", romaji: "ku", row: "Hàng KA", mnemonic: "Giống cái mũ đầu bếp (Cook = Ku) nghiêng một bên.", strokes: 2, example: { word: "クラス", reading: "kurasu", meaning: "Lớp học (Class)", icon: "🏫", sentence: "わたし の クラス (Lớp học của tớ)" } },
    { char: "ケ", romaji: "ke", row: "Hàng KA", mnemonic: "Giống chữ K nghiêng hoặc miếng bánh kem (Cake = Ke).", strokes: 3, example: { word: "ケーキ", reading: "keeki", meaning: "Bánh kem sinh nhật", icon: "🎂", sentence: "チーズケーキ (Bánh phô mai)" } },
    { char: "コ", romaji: "ko", row: "Hàng KA", mnemonic: "Hai góc vuông (Corner = Ko) của khung ảnh.", strokes: 2, example: { word: "コーヒー", reading: "koohii", meaning: "Cà phê", icon: "☕", sentence: "おとうさん は コーヒー が すき です (Bố thích cà phê)" } },

    { char: "サ", romaji: "sa", row: "Hàng SA", mnemonic: "Giống hàng rào có cánh cổng hoặc 2 con cá hồi (Salmon = Sa).", strokes: 3, example: { word: "サッカー", reading: "sakkaa", meaning: "Bóng đá (Soccer)", icon: "⚽", sentence: "サッカー を します (Chơi bóng đá)" } },
    { char: "シ", romaji: "shi", row: "Hàng SA", mnemonic: "Khuôn mặt cô gái (She = Shi) đang nằm nghiêng mỉm cười nhìn lên.", strokes: 3, example: { word: "シャツ", reading: "shatsu", meaning: "Áo sơ mi", icon: "👕", sentence: "しろい シャツ (Áo sơ mi trắng)" } },
    { char: "ス", romaji: "su", row: "Hàng SA", mnemonic: "Người trượt tuyết (Ski = Su) đang lao dốc.", strokes: 2, example: { word: "スマホ", reading: "sumaho", meaning: "Điện thoại thông minh", icon: "📱", sentence: "スマホ の アプリ (Ứng dụng điện thoại)" } },
    { char: "セ", romaji: "se", row: "Hàng SA", mnemonic: "Giống chữ せ (se) Hiragana nhưng chỉ có 2 nét sắc gọn.", strokes: 2, example: { word: "セーター", reading: "seetaa", meaning: "Áo len (Sweater)", icon: "🧶", sentence: "あたたかい セーター (Áo len ấm)" } },
    { char: "ソ", romaji: "so", row: "Hàng SA", mnemonic: "Kim khâu và sợi chỉ rơi từ trên xuống (Sewing = So).", strokes: 2, example: { word: "ソフトクリーム", reading: "sofutokuriimu", meaning: "Kem ốc quế", icon: "🍦", sentence: "おいしい ソフトクリーム (Kem ốc quế ngon)" } },

    { char: "タ", romaji: "ta", row: "Hàng TA", mnemonic: "Giống tháp nước (Tower = Ta) hoặc chữ 夕 (buổi chiều).", strokes: 3, example: { word: "タクシー", reading: "takushii", meaning: "Xe Taxi", icon: "🚕", sentence: "タクシー に のります (Đi xe taxi)" } },
    { char: "チ", romaji: "chi", row: "Hàng TA", mnemonic: "Hoạt náo viên (Cheerleader = Chi) đang dang hai tay cổ vũ.", strokes: 3, example: { word: "チョコレート", reading: "chokoreeto", meaning: "Sô-cô-la", icon: "🍫", sentence: "あまい チョコレート (Sô-cô-la ngọt)" } },
    { char: "ツ", romaji: "tsu", row: "Hàng TA", mnemonic: "Hai cây kim đâm từ trên xuống kèm ngọn sóng (Tsu).", strokes: 3, example: { word: "ツアー", reading: "tsuaa", meaning: "Chuyến du lịch (Tour)", icon: "🧳", sentence: "にほん の ツアー (Tour du lịch Nhật)" } },
    { char: "テ", romaji: "te", row: "Hàng TA", mnemonic: "Cột ăng-ten điện thoại (Telephone pole = Te).", strokes: 3, example: { word: "テスト", reading: "tesuto", meaning: "Bài kiểm tra (Test)", icon: "📝", sentence: "あした テスト が あります (Ngày mai có bài kiểm tra)" } },
    { char: "ト", romaji: "to", row: "Hàng TA", mnemonic: "Cột Totem (To) hoặc củ cà rốt có nhánh lá bên phải.", strokes: 2, example: { word: "トマト", reading: "tomato", meaning: "Quả cà chua", icon: "🍅", sentence: "あかい トマト (Quả cà chua đỏ)" } },

    { char: "ナ", romaji: "na", row: "Hàng NA", mnemonic: "Phần chữ thập đầu tiên của chữ な (na) Hiragana.", strokes: 2, example: { word: "ナイフ", reading: "naifu", meaning: "Con dao ăn (Knife)", icon: "🍴", sentence: "フォーク と ナイフ (Nĩa và dao)" } },
    { char: "ニ", romaji: "ni", row: "Hàng NA", mnemonic: "Hai vạch ngang chính là số 2 trong tiếng Nhật (Số 2 đọc là Ni!).", strokes: 2, example: { word: "ニュース", reading: "nyuusu", meaning: "Bản tin thời sự (News)", icon: "📺", sentence: "テレビ の ニュース (Tin tức trên TV)" } },
    { char: "ヌ", romaji: "nu", row: "Hàng NA", mnemonic: "Đôi đũa đang gắp mì (Noodles = Nu).", strokes: 2, example: { word: "カヌー", reading: "kanuu", meaning: "Thuyền Ca-nô", icon: "🛶", sentence: "カヌー に のります (Chèo thuyền ca-nô)" } },
    { char: "ネ", romaji: "ne", row: "Hàng NA", mnemonic: "Tổ chim trên ngọn cây (Nest = Ne).", strokes: 4, example: { word: "ネクタイ", reading: "nekutai", meaning: "Cà vạt (Necktie)", icon: "👔", sentence: "あおい ネクタイ (Chiếc cà vạt xanh)" } },
    { char: "ノ", romaji: "no", row: "Hàng NA", mnemonic: "Một nét gạch chéo duy nhất như biển cấm (No).", strokes: 1, example: { word: "ノート", reading: "nooto", meaning: "Quyển vở ghi chép (Note)", icon: "📓", sentence: "ノート に かきます (Viết vào vở)" } },

    { char: "ハ", romaji: "ha", row: "Hàng HA", mnemonic: "Mái nhà tranh (House = Ha) hai bên dốc xuống.", strokes: 2, example: { word: "ハンバーガー", reading: "hanbaagaa", meaning: "Bánh Hamburger", icon: "🍔", sentence: "ハンバーガー を たべます (Ăn bánh Hamburger)" } },
    { char: "ヒ", romaji: "hi", row: "Hàng HA", mnemonic: "Người đang giơ tay chào 'Hi!'", strokes: 2, example: { word: "ヒーロー", reading: "hiiroo", meaning: "Siêu anh hùng (Hero)", icon: "🦸", sentence: "ぼく の ヒーロー (Siêu anh hùng của tớ)" } },
    { char: "フ", romaji: "fu", row: "Hàng HA", mnemonic: "Chiếc mỏ chim Cú (Hoot / Fu) hoặc sườn núi Phú Sĩ.", strokes: 1, example: { word: "フライドポテト", reading: "furaidopoteto", meaning: "Khoai tây chiên", icon: "🍟", sentence: "ポテト が すき (Thích khoai tây chiên)" } },
    { char: "ヘ", romaji: "he", row: "Hàng HA", mnemonic: "Giống hệt chữ へ (he) trong bảng Hiragana! Học 1 được 2!", strokes: 1, example: { word: "ヘルメット", reading: "herumetto", meaning: "Mũ bảo hiểm (Helmet)", icon: "⛑️", sentence: "ヘルメット を かぶります (Đội mũ bảo hiểm)" } },
    { char: "ホ", romaji: "ho", row: "Hàng HA", mnemonic: "Cây thánh giá phát sáng (Holy = Ho).", strokes: 4, example: { word: "ホテル", reading: "hoteru", meaning: "Khách sạn (Hotel)", icon: "🏨", sentence: "きれいな ホテル (Khách sạn đẹp)" } },

    { char: "マ", romaji: "ma", row: "Hàng MA", mnemonic: "Góc khăn quàng cổ của Mẹ (Mama = Ma).", strokes: 2, example: { word: "マンガ", reading: "manga", meaning: "Truyện tranh Manga", icon: "📖", sentence: "にほん の マンガ (Manga Nhật Bản)" } },
    { char: "ミ", romaji: "mi", row: "Hàng MA", mnemonic: "Ba vạch cào của mèo hoặc 3 tên lửa (Missile = Mi).", strokes: 3, example: { word: "ミルク", reading: "miruku", meaning: "Sữa tươi (Milk)", icon: "🥛", sentence: "あたたかい ミルク (Sữa ấm)" } },
    { char: "ム", romaji: "mu", row: "Hàng MA", mnemonic: "Cơ bắp cánh tay gập lại (Muscle = Mu).", strokes: 2, example: { word: "ゲーム", reading: "geemu", meaning: "Trò chơi điện tử (Game)", icon: "🎮", sentence: "ゲーム を します (Chơi game)" } },
    { char: "メ", romaji: "me", row: "Hàng MA", mnemonic: "Hai thanh kiếm giao nhau để lại vết sẹo chữ X trên mắt (Me).", strokes: 2, example: { word: "メール", reading: "meeru", meaning: "Tin nhắn / Email", icon: "📩", sentence: "メール を おくります (Gửi tin nhắn)" } },
    { char: "モ", romaji: "mo", row: "Hàng MA", mnemonic: "Giống chữ も (mo) Hiragana nhưng thẳng góc.", strokes: 3, example: { word: "モニター", reading: "monitaa", meaning: "Màn hình máy tính", icon: "🖥️", sentence: "おおきい モニター (Màn hình lớn)" } },

    { char: "ヤ", romaji: "ya", row: "Hàng YA", mnemonic: "Giống chữ や (ya) Hiragana đã bỏ dấu chấm.", strokes: 2, example: { word: "タイヤ", reading: "taiya", meaning: "Lốp xe (Tire)", icon: "🛞", sentence: "くるま の タイヤ (Lốp xe ô tô)" } },
    { char: "ユ", romaji: "yu", row: "Hàng YA", mnemonic: "Giống số 1 La Mã gắn kính tiềm vọng tàu ngầm (U-boat = Yu).", strokes: 2, example: { word: "ユニフォーム", reading: "yunifoomu", meaning: "Đồng phục (Uniform)", icon: "🎽", sentence: "がっこう の ユニフォーム (Đồng phục trường)" } },
    { char: "ヨ", romaji: "yo", row: "Hàng YA", mnemonic: "Chữ E quay ngược lại tập Yoga (Yo).", strokes: 3, example: { word: "ヨーグルト", reading: "yooguruto", meaning: "Sữa chua (Yogurt)", icon: "🥣", sentence: "いちご ヨーグルト (Sữa chua dâu)" } },

    { char: "ラ", romaji: "ra", row: "Hàng RA", mnemonic: "Chiếc đèn bàn hoặc bát mì Ramen (Ra) có nắp đậy.", strokes: 2, example: { word: "ラーメン", reading: "raamen", meaning: "Mì Ramen Nhật", icon: "🍜", sentence: "あつい ラーメン (Bát mì Ramen nóng hổi)" } },
    { char: "リ", romaji: "ri", row: "Hàng RA", mnemonic: "Giống hệt chữ り (ri) trong Hiragana!", strokes: 2, example: { word: "リモコン", reading: "rimokon", meaning: "Điều khiển từ xa", icon: "🎛️", sentence: "テレビ の リモコン (Điều khiển TV)" } },
    { char: "ル", romaji: "ru", row: "Hàng RA", mnemonic: "Hai cái rễ cây cổ thụ (Roots = Ru).", strokes: 2, example: { word: "ルール", reading: "ruuru", meaning: "Luật lệ / Quy tắc (Rule)", icon: "📋", sentence: "ゲーム の ルール (Luật chơi game)" } },
    { char: "レ", romaji: "re", row: "Hàng RA", mnemonic: "Một nửa bên phải của chữ ル (ru) — tia chớp đỏ (Red = Re).", strokes: 1, example: { word: "レモン", reading: "remon", meaning: "Quả chanh vàng", icon: "🍋", sentence: "すっぱい レモン (Quả chanh chua)" } },
    { char: "ロ", romaji: "ro", row: "Hàng RA", mnemonic: "Cái miệng vuông của con Robot (Ro).", strokes: 3, example: { word: "ロボット", reading: "robotto", meaning: "Người máy (Robot)", icon: "🤖", sentence: "ドラえもん は ロボット です (Doraemon là robot)" } },

    { char: "ワ", romaji: "wa", row: "Hàng WA & N", mnemonic: "Ly rượu vang (Wine = Wa).", strokes: 2, example: { word: "ワンピース", reading: "wanpiisu", meaning: "Váy liền / Anime One Piece", icon: "🏴‍☠️", sentence: "ワンピース が すき です (Thích xem One Piece)" } },
    { char: "ヲ", romaji: "wo", row: "Hàng WA & N", mnemonic: "Chữ ワ (wa) có thêm vạch ngang ở giữa.", strokes: 3, example: { word: "ヲタク", reading: "otaku", meaning: "Người đam mê Anime/Manga", icon: "🎌", sentence: "アニメ が くわしい (Rành về Anime)" } },
    { char: "ン", romaji: "n", row: "Hàng WA & N", mnemonic: "Mặt cười nháy 1 mắt nhìn ngang (N).", strokes: 2, example: { word: "パソコン", reading: "pasokon", meaning: "Máy tính cá nhân (PC)", icon: "💻", sentence: "パソコン で ゲーム を します (Chơi game trên PC)" } }
  ],

  // 2B. BẢNG SỐ ĐẾM TIẾNG NHẬT TOÀN DIỆN (TỪ 0 -> HÀNG CHỤC -> HÀNG TRĂM -> HÀNG NGHÌN -> HÀNG VẠN)
  numbers: {
    basic: [
      { num: "0", kanji: "零 / 〇", kana: "ゼロ / れい", speak: "ゼロ", romaji: "zero / rei", note: "Thường đọc là Zero (mượn tiếng Anh) hoặc Rei" },
      { num: "1", kanji: "一", kana: "いち", speak: "いち", romaji: "ichi", note: "1 nét gạch ngang (Nhất)" },
      { num: "2", kanji: "二", kana: "に", speak: "に", romaji: "ni", note: "2 nét gạch ngang (Nhị)" },
      { num: "3", kanji: "三", kana: "さん", speak: "さん", romaji: "san", note: "3 nét gạch ngang (Tam)" },
      { num: "4", kanji: "四", kana: "よん / し", speak: "よん", romaji: "yon / shi", note: "Ưu tiên dùng 'yon' (Ghép giờ dùng 'yo-ji')" },
      { num: "5", kanji: "五", kana: "ご", speak: "ご", romaji: "go", note: "Số 5 (Ngũ)" },
      { num: "6", kanji: "六", kana: "ろく", speak: "ろく", romaji: "roku", note: "Số 6 (Lục)" },
      { num: "7", kanji: "七", kana: "なな / しち", speak: "なな", romaji: "nana / shichi", note: "Ưu tiên dùng 'nana' (Ghép giờ/tháng dùng 'shichi')" },
      { num: "8", kanji: "八", kana: "はち", speak: "はち", romaji: "hachi", note: "Số 8 (Bát) - Lớp 8 là Hachi-nensei" },
      { num: "9", kanji: "九", kana: "きゅう / く", speak: "きゅう", romaji: "kyuu / ku", note: "Ưu tiên dùng 'kyuu' (Ghép 9 giờ dùng 'ku-ji')" },
      { num: "10", kanji: "十", kana: "じゅう", speak: "じゅう", romaji: "juu", note: "Chữ Thập (10) giống dấu cộng (+)" }
    ],
    tens: [
      { num: "11", kanji: "十一", kana: "じゅういち", speak: "じゅういち", romaji: "juu-ichi", note: " Công thức: 10 (juu) + 1 (ichi)" },
      { num: "12", kanji: "十二", kana: "じゅうに", speak: "じゅうに", romaji: "juu-ni", note: "10 (juu) + 2 (ni)" },
      { num: "14", kanji: "十四", kana: "じゅうよん", speak: "じゅうよん", romaji: "juu-yon", note: "10 (juu) + 4 (yon) — 14 tuổi: Juuyon-sai" },
      { num: "15", kanji: "十五", kana: "じゅうご", speak: "じゅうご", romaji: "juu-go", note: "10 (juu) + 5 (go)" },
      { num: "19", kanji: "十九", kana: "じゅうきゅう", speak: "じゅうきゅう", romaji: "juu-kyuu", note: "10 (juu) + 9 (kyuu)" },
      { num: "20", kanji: "二十", kana: "にじゅう", speak: "にじゅう", romaji: "ni-juu", note: "Công thức: 2 (ni) x 10 (juu)" },
      { num: "30", kanji: "三十", kana: "さんじゅう", speak: "さんじゅう", romaji: "san-juu", note: "3 (san) x 10 (juu)" },
      { num: "40", kanji: "四十", kana: "よんじゅう", speak: "よんじゅう", romaji: "yon-juu", note: "4 (yon) x 10 (juu) — luôn dùng yon" },
      { num: "50", kanji: "五十", kana: "ごじゅう", speak: "ごじゅう", romaji: "go-juu", note: "5 (go) x 10 (juu)" },
      { num: "60", kanji: "六十", kana: "ろくじゅう", speak: "ろくじゅう", romaji: "roku-juu", note: "6 (roku) x 10 (juu)" },
      { num: "70", kanji: "七十", kana: "ななじゅう", speak: "ななじゅう", romaji: "nana-juu", note: "7 (nana) x 10 (juu) — luôn dùng nana" },
      { num: "80", kanji: "八十", kana: "はちじゅう", speak: "はちじゅう", romaji: "hachi-juu", note: "8 (hachi) x 10 (juu)" },
      { num: "90", kanji: "九十", kana: "きゅうじゅう", speak: "きゅうじゅう", romaji: "kyuu-juu", note: "9 (kyuu) x 10 (juu)" },
      { num: "99", kanji: "九十九", kana: "きゅうじゅうきゅう", speak: "きゅうじゅうきゅう", romaji: "kyuu-juu-kyuu", note: "90 (kyuujuu) + 9 (kyuu)" }
    ],
    hundreds: [
      { num: "100", kanji: "百", kana: "ひゃく", speak: "ひゃく", romaji: "hyaku", note: "Đơn vị Hàng trăm gốc: Hyaku (Không nói ichi-hyaku)" },
      { num: "200", kanji: "二百", kana: "にひゃく", speak: "にひゃく", romaji: "ni-hyaku", note: "2 (ni) + 100 (hyaku)" },
      { num: "300", kanji: "三百", kana: "さんびゃく", speak: "さんびゃく", romaji: "san-byaku", note: "⚠️ Biến âm đặc biệt: hyaku -> BYAKU", special: true },
      { num: "400", kanji: "四百", kana: "よんひゃく", speak: "よんひゃく", romaji: "yon-hyaku", note: "4 (yon) + 100 (hyaku)" },
      { num: "500", kanji: "五百", kana: "ごひゃく", speak: "ごひゃく", romaji: "go-hyaku", note: "5 (go) + 100 (hyaku)" },
      { num: "600", kanji: "六百", kana: "ろっぴゃく", speak: "ろっぴゃく", romaji: "rop-pyaku", note: "⚠️ Biến âm đặc biệt: roku + hyaku -> ROPPYAKU", special: true },
      { num: "700", kanji: "七百", kana: "ななひゃく", speak: "ななひゃく", romaji: "nana-hyaku", note: "7 (nana) + 100 (hyaku)" },
      { num: "800", kanji: "八百", kana: "はっぴゃく", speak: "はっぴゃく", romaji: "hap-pyaku", note: "⚠️ Biến âm đặc biệt: hachi + hyaku -> HAPPYAKU", special: true },
      { num: "900", kanji: "九百", kana: "きゅうひゃく", speak: "きゅうひゃく", romaji: "kyuu-hyaku", note: "9 (kyuu) + 100 (hyaku)" }
    ],
    thousands: [
      { num: "1.000", kanji: "千", kana: "せん", speak: "せん", romaji: "sen", note: "Đơn vị Hàng nghìn gốc: Sen (Thiên)" },
      { num: "2.000", kanji: "二千", kana: "にせん", speak: "にせん", romaji: "ni-sen", note: "2 (ni) + 1.000 (sen)" },
      { num: "3.000", kanji: "三千", kana: "さんぜん", speak: "さんぜん", romaji: "san-zen", note: "⚠️ Biến âm đặc biệt: sen -> ZEN", special: true },
      { num: "4.000", kanji: "四千", kana: "よんせん", speak: "よんせん", romaji: "yon-sen", note: "4 (yon) + 1.000 (sen)" },
      { num: "5.000", kanji: "五千", kana: "ごせん", speak: "ごせん", romaji: "go-sen", note: "5 (go) + 1.000 (sen)" },
      { num: "6.000", kanji: "六千", kana: "ろくせん", speak: "ろくせん", romaji: "roku-sen", note: "6 (roku) + 1.000 (sen)" },
      { num: "7.000", kanji: "七千", kana: "ななせん", speak: "ななせん", romaji: "nana-sen", note: "7 (nana) + 1.000 (sen)" },
      { num: "8.000", kanji: "八千", kana: "はっせん", speak: "はっせん", romaji: "has-sen", note: "⚠️ Biến âm đặc biệt: hachi + sen -> HASSEN", special: true },
      { num: "9.000", kanji: "九千", kana: "きゅうせん", speak: "きゅうせん", romaji: "kyuu-sen", note: "9 (kyuu) + 1.000 (sen)" },
      { num: "10.000", kanji: "一万", kana: "いちまん", speak: "いちまん", romaji: "ichi-man", note: "⚠️ Tiếng Nhật tính theo đơn vị VẠN (1 Man = 10.000)", special: true },
      { num: "100.000", kanji: "十万", kana: "じゅうまん", speak: "じゅうまん", romaji: "juu-man", note: "10 Vạn = 100.000 (Juu-man)" },
      { num: "1.000.000", kanji: "百万", kana: "ひゃくまん", speak: "ひゃくまん", romaji: "hyaku-man", note: "100 Vạn = 1 Triệu (Hyaku-man)" }
    ]
  },

  // 3. LỘ TRÌNH 11 BÀI GIẢNG TỪ NHẬP MÔN -> N5 -> N4 (CÓ CHUYÊN ĐỀ ĐẾM SỐ TỪ 0 ĐẾN HÀNG VẠN)
  lessons: [
    {
      id: "lesson-1",
      level: "Nhập môn (Bài 1)",
      badgeColor: "#10b981",
      title: "Bài 1: Bí quyết thuộc nhanh Bảng chữ cái Hiragana & Katakana",
      subtitle: "Cách nhớ mặt chữ, phát âm chuẩn 5 nguyên âm gốc và quy tắc ghép âm",
      icon: "🌸",
      videoId: "gOKdtS3XVCg",
      videoTitle: "Video bài giảng: Chinh phục toàn bộ bảng chữ cái Hiragana cùng Minato",
      summaryPoints: [
        "Mọi chữ cái tiếng Nhật đều xoay quanh 5 nguyên âm gốc: あ (a), い (i), う (u), え (e), お (o).",
        "Hiragana dùng cho từ thuần Nhật và ngữ pháp; Katakana dùng cho từ mượn nước ngoài (Camera, Game, Anime, Tên người nước ngoài).",
        "Mỗi ngày con chỉ cần học 2 hàng (10 chữ) kết hợp vẽ lên bảng tập viết ở Chặng 1 là 5 ngày thuộc làu!"
      ],
      vocab: [
        { jp: "あ・い・う・え・お", kana: "あいうえお", romaji: "A - I - U - E - O", vi: "5 Nguyên âm gốc tiếng Nhật", icon: "🎵", exampleJp: "あいうえお を れんしゅう します。", exampleVi: "Luyện tập 5 nguyên âm A-I-U-E-O." },
        { jp: "ひらがな", kana: "ひらがな", romaji: "Hiragana", vi: "Bảng chữ mềm Hiragana", icon: "✍️", exampleJp: "ひらがな は やさしい です。", exampleVi: "Chữ Hiragana rất dễ học." },
        { jp: "カタカナ", kana: "かたかな", romaji: "Katakana", vi: "Bảng chữ cứng Katakana", icon: "📐", exampleJp: "カタカナ で なまえ を かきます。", exampleVi: "Viết tên mình bằng chữ Katakana." },
        { jp: "かんじ", kana: "かんじ", romaji: "Kanji", vi: "Chữ Hán (Kanji)", icon: "⛩️", exampleJp: "かんじ は おもしろい です。", exampleVi: "Chữ Kanji rất thú vị." },
        { jp: "にほんご", kana: "にほんご", romaji: "Nihongo", vi: "Tiếng Nhật", icon: "🇯🇵", exampleJp: "わたし は にほんご が すき です。", exampleVi: "Con thích học tiếng Nhật." },
        { jp: "せんせい", kana: "せんせい", romaji: "Sensei", vi: "Thầy / Cô giáo", icon: "👩‍🏫", exampleJp: "せんせい、おしえて ください。", exampleVi: "Thầy/Cô ơi, xin hãy chỉ cho em ạ." }
      ]
    },
    {
      id: "lesson-2",
      level: "Nhập môn (Bài 2)",
      badgeColor: "#10b981",
      title: "Bài 2: Chào hỏi & Lễ nghi giao tiếp hàng ngày (Aisatsu)",
      subtitle: "Các câu chào buổi sáng, trưa, tối, cảm ơn và xin lỗi chuẩn người Nhật",
      icon: "👋",
      videoId: "10om8yfIPAM",
      videoTitle: "Video bài giảng: Các câu giao tiếp và chào hỏi cơ bản trong tiếng Nhật",
      summaryPoints: [
        "Người Nhật có 3 câu chào theo buổi: Sáng (Ohayou gozaimasu), Trưa/Chiều (Konnichiwa), Tối (Konbanwa).",
        "Trước khi ăn cơm người Nhật chắp tay nói 'Itadakimasu' (Mời cả nhà ăn cơm) và sau khi ăn xong nói 'Gochisousama deshita' (Cảm ơn vì bữa ăn ngon).",
        "Khi đi học ra khỏi nhà nói 'Ittekimasu' (Con đi học đây ạ) và khi về đến nhà nói 'Tadaima' (Con đã về rồi đây)."
      ],
      vocab: [
        { jp: "おはようございます", kana: "おはようございます", romaji: "Ohayou gozaimasu", vi: "Chào buổi sáng (Lịch sự)", icon: "🌅", exampleJp: "せんせい、おはようございます！", exampleVi: "Em chào thầy/cô buổi sáng ạ!" },
        { jp: "こんにちは", kana: "こんにちは", romaji: "Konnichiwa", vi: "Xin chào (Ban ngày)", icon: "☀️", exampleJp: "みなさん、こんにちは。", exampleVi: "Xin chào tất cả các bạn." },
        { jp: "こんばんは", kana: "こんばんは", romaji: "Konbanwa", vi: "Chào buổi tối", icon: "🌙", exampleJp: "こんばんは、おげんきですか。", exampleVi: "Chào buổi tối, bạn có khỏe không?" },
        { jp: "おやすみなさい", kana: "おやすみなさい", romaji: "Oyasuminasai", vi: "Chúc ngủ ngon", icon: "🛌", exampleJp: "おとうさん、おかあさん、おやすみなさい。", exampleVi: "Bố mẹ ơi, chúc bố mẹ ngủ ngon ạ." },
        { jp: "ありがとうございます", kana: "ありがとうございます", romaji: "Arigatou gozaimasu", vi: "Cảm ơn rất nhiều", icon: "🙏", exampleJp: "プレゼント、ありがとうございます！", exampleVi: "Cảm ơn vì món quà rất nhiều ạ!" },
        { jp: "すみません", kana: "すみません", romaji: "Sumimasen", vi: "Xin lỗi / Cho cháu hỏi", icon: "🙇", exampleJp: "すみません、もういちど おねがいします。", exampleVi: "Xin lỗi, vui lòng nhắc lại một lần nữa ạ." },
        { jp: "いただきます", kana: "いただきます", romaji: "Itadakimasu", vi: "Mời cả nhà ăn cơm (Trước bữa ăn)", icon: "🍱", exampleJp: "みなさん、いただきます！", exampleVi: "Mời mọi người dùng bữa ạ!" },
        { jp: "いってきます", kana: "いってきます", romaji: "Ittekimasu", vi: "Con đi học đây ạ!", icon: "🎒", exampleJp: "おかあさん、いってきます！", exampleVi: "Mẹ ơi, con đi học đây ạ!" }
      ]
    },
    {
      id: "lesson-3",
      level: "Cơ bản N5 (Bài 3)",
      badgeColor: "#0ea5e9",
      title: "Bài 3: Đếm số từ 0 đến 10 & Cách ghép số hàng chục (11 → 99)",
      subtitle: "Thuộc làu từng con số từ 0 đến 10 và quy tắc nhân/cộng ghép số hàng chục",
      icon: "🔢",
      videoId: "NRLS6e7JVj8",
      videoTitle: "Video bài giảng: Cách đếm số tiếng Nhật từ 0 đến 10 và ghép số",
      summaryPoints: [
        "Đếm từ 0 đến 10: 0 (Zero/Rei), 1 (Ichi), 2 (Ni), 3 (San), 4 (Yon/Shi), 5 (Go), 6 (Roku), 7 (Nana/Shichi), 8 (Hachi), 9 (Kyuu/Ku), 10 (Juu).",
        "Quy tắc số từ 11 đến 19: Lấy 10 (Juu) + Số đơn vị. Ví dụ: 11 = じゅういち (Juu-ichi), 14 = じゅうよん (Juu-yon).",
        "Quy tắc số tròn chục (20, 30... 90): Lấy Số đầu x 10 (Juu). Ví dụ: 20 = にじゅう (Ni-juu), 30 = さんじゅう (San-juu), 80 = はちじゅう (Hachi-juu)."
      ],
      vocab: [
        { jp: "0 - ゼロ / れい", kana: "ゼロ", romaji: "Zero / Rei", vi: "Số 0 (Không)", icon: "0️⃣", exampleJp: "ゼロ から はじめましょう！", exampleVi: "Hãy bắt đầu từ con số 0 nhé!" },
        { jp: "1 - いち (一)", kana: "いち", romaji: "Ichi", vi: "Số 1 (Một)", icon: "1️⃣", exampleJp: "いちばん すき です。", exampleVi: "Con thích nhất (số 1)." },
        { jp: "2 - に (二)", kana: "に", romaji: "Ni", vi: "Số 2 (Hai)", icon: "2️⃣", exampleJp: "りんご が ふたつ (に) あります。", exampleVi: "Có 2 quả táo." },
        { jp: "3 - さん (三)", kana: "さん", romaji: "San", vi: "Số 3 (Ba)", icon: "3️⃣", exampleJp: "いち、に、さん！", exampleVi: "Một, hai, ba!" },
        { jp: "4 - よん / し (四)", kana: "よん", romaji: "Yon / Shi", vi: "Số 4 (Bốn)", icon: "4️⃣", exampleJp: "よん は 4 です。", exampleVi: "Yon là số 4." },
        { jp: "5 - ご (五)", kana: "ご", romaji: "Go", vi: "Số 5 (Năm)", icon: "5️⃣", exampleJp: "ごじ に かえります。", exampleVi: "Về nhà lúc 5 giờ." },
        { jp: "6 - ろく (六)", kana: "ろく", romaji: "Roku", vi: "Số 6 (Sáu)", icon: "6️⃣", exampleJp: "まいあさ ろくじ に おきます。", exampleVi: "Mỗi sáng dậy lúc 6 giờ." },
        { jp: "7 - なな / しち (七)", kana: "なな", romaji: "Nana / Shichi", vi: "Số 7 (Bảy)", icon: "7️⃣", exampleJp: "ラッキーセブン は なな です。", exampleVi: "Con số 7 may mắn đọc là Nana." },
        { jp: "8 - はち (八)", kana: "はち", romaji: "Hachi", vi: "Số 8 (Tám)", icon: "8️⃣", exampleJp: "わたし は はちねんせい です。", exampleVi: "Con là học sinh lớp 8." },
        { jp: "9 - きゅう / く (九)", kana: "きゅう", romaji: "Kyuu / Ku", vi: "Số 9 (Chín)", icon: "9️⃣", exampleJp: "きゅう たす いち は じゅう です。", exampleVi: "9 cộng 1 bằng 10." },
        { jp: "10 - じゅう (十)", kana: "じゅう", romaji: "Juu", vi: "Số 10 (Mười)", icon: "🔟", exampleJp: "いち から じゅう まで かぞえます。", exampleVi: "Đếm từ 1 đến 10." },
        { jp: "20 - にじゅう (二十)", kana: "にじゅう", romaji: "Ni-juu", vi: "Số 20 (Hai mươi) & Hàng chục", icon: "🔢", exampleJp: "さんじゅう (30), よんじゅう (40), ごじゅう (50).", exampleVi: "Ghép số đầu + Juu để tạo hàng chục!" }
      ]
    },
    {
      id: "lesson-4",
      level: "Cơ bản N5 (Bài 4)",
      badgeColor: "#3b82f6",
      title: "Bài 4: Đếm số Hàng Trăm (100), Hàng Nghìn (1.000), Hàng Vạn & Tuổi tác",
      subtitle: "Chinh phục các số lớn 100 → 1.000.000, các số biến âm đặc biệt và cách nói tuổi lớp 8",
      icon: "💯",
      videoId: "ZC-43d_zWz8",
      videoTitle: "Video bài giảng: Cách đọc số lớn, tuổi tác và từ vựng bài 1",
      summaryPoints: [
        "Hàng trăm đọc là ひゃく (Hyaku). Nhớ 3 số biến âm: 300 = さんびゃく (Sanbyaku), 600 = ろっぴゃく (Roppyaku), 800 = はっぴゃく (Happyaku).",
        "Hàng nghìn đọc là せん (Sen). Nhớ 2 số biến âm: 3.000 = さんぜん (Sanzen), 8.000 = はっせん (Hassen).",
        "Hàng chục nghìn (10.000) người Nhật gọi là 1 Vạn: いちまん (Ichiman). Để nói tuổi: Số đếm + さい (Sai)."
      ],
      vocab: [
        { jp: "100 - ひゃく (百)", kana: "ひゃく", romaji: "Hyaku", vi: "Một trăm (100)", icon: "💯", exampleJp: "テスト で ひゃくてん を とりました！", exampleVi: "Con đạt 100 điểm bài kiểm tra!" },
        { jp: "300 - さんびゃく (三百)", kana: "さんびゃく", romaji: "San-byaku", vi: "Ba trăm (300 - Biến âm Byaku)", icon: "⚠️", exampleJp: "これ は さんびゃくえん です。", exampleVi: "Cái này giá 300 Yên." },
        { jp: "600 (ろっぴゃく) & 800 (はっぴゃく)", kana: "ろっぴゃく はっぴゃく", romaji: "Roppyaku & Happyaku", vi: "600 & 800 (Biến âm Ppyaku)", icon: "🔔", exampleJp: "ろっぴゃくえん と はっぴゃくえん。", exampleVi: "600 Yên và 800 Yên." },
        { jp: "1.000 - せん (千)", kana: "せん", romaji: "Sen", vi: "Một nghìn (1.000)", icon: "🪙", exampleJp: "せんえん (1.000 Yên), にせんえん (2.000 Yên).", exampleVi: "Đơn vị hàng nghìn đọc là Sen." },
        { jp: "3.000 (さんぜん) & 8.000 (はっせん)", kana: "さんぜん はっせん", romaji: "Sanzen & Hassen", vi: "3.000 & 8.000 (Biến âm)", icon: "✨", exampleJp: "さんぜんえん の ほん。", exampleVi: "Quyển sách giá 3.000 Yên." },
        { jp: "10.000 - いちまん (一万)", kana: "いちまん", romaji: "Ichi-man", vi: "Mười nghìn (1 Vạn)", icon: "💴", exampleJp: "いちまんえん さつ。", exampleVi: "Tờ tiền 10.000 Yên (1 Man)." },
        { jp: "じゅうよんさい (14歳)", kana: "じゅうよんさい", romaji: "Juuyon-sai", vi: "14 tuổi (Tuổi học sinh lớp 8)", icon: "🎂", exampleJp: "わたし は じゅうよんさい です。", exampleVi: "Năm nay con 14 tuổi." },
        { jp: "なんさい ですか", kana: "なんさい ですか", romaji: "Nan-sai desu ka", vi: "Bạn bao nhiêu tuổi?", icon: "🙋", exampleJp: "あなた は なんさい ですか。", exampleVi: "Bạn năm nay bao nhiêu tuổi?" }
      ]
    },
    {
      id: "lesson-5",
      level: "Cơ bản N5 (Bài 5)",
      badgeColor: "#3b82f6",
      title: "Bài 5: Mẫu câu giới thiệu bản thân & Gia đình yêu thương",
      subtitle: "Cách gọi Bố, Mẹ, Anh, Chị, Em và mẫu câu khẳng định A は B です",
      icon: "👨‍👩‍👧‍👦",
      videoId: "YBI4nM5HC4c",
      videoTitle: "Video bài giảng: Ngữ pháp & Mẫu câu giới thiệu bản thân N5 - Bài 1",
      summaryPoints: [
        "Mẫu câu nền tảng: [Chủ ngữ A] は [Danh từ B] です (A là B). Ví dụ: わたし は ホア です (Tôi là Hòa).",
        "Cách gọi người thân trong gia đình một cách lễ phép: おとうさん (Bố), おかあさん (Mẹ), おにいさん (Anh trai), おねえさん (Chị gái)."
      ],
      vocab: [
        { jp: "かぞく", kana: "かぞく", romaji: "Kazoku", vi: "Gia đình", icon: "🏡", exampleJp: "わたし の かぞく は よにん です。", exampleVi: "Gia đình con có 4 người." },
        { jp: "おとうさん", kana: "おとうさん", romaji: "Otousan", vi: "Bố / Ba", icon: "👨", exampleJp: "おとうさん は かっこいい です。", exampleVi: "Bố của con rất phong độ." },
        { jp: "おかあさん", kana: "おかあさん", romaji: "Okaasan", vi: "Mẹ / Má", icon: "👩", exampleJp: "おかあさん は やさしい です。", exampleVi: "Mẹ của con rất dịu dàng." },
        { jp: "おにいさん", kana: "おにいさん", romaji: "Oniisan", vi: "Anh trai", icon: "👦", exampleJp: "おにいさん は だいがくせい です。", exampleVi: "Anh trai con là sinh viên đại học." },
        { jp: "おねえさん", kana: "おねえさん", romaji: "Oneesan", vi: "Chị gái", icon: "👧", exampleJp: "おねえさん は えいご が じょうず です。", exampleVi: "Chị gái rất giỏi tiếng Anh." },
        { jp: "ともだち", kana: "ともだち", romaji: "Tomodachi", vi: "Bạn bè", icon: "👫", exampleJp: "がっこう の ともだち と あそびます。", exampleVi: "Chơi cùng bạn bè ở trường." }
      ]
    },
    {
      id: "lesson-6",
      level: "Sơ cấp N5 (Bài 6)",
      badgeColor: "#6366f1",
      title: "Bài 6: Đồ dùng học tập & Trường lớp (Kore / Sore / Are)",
      subtitle: "Cách chỉ đồ vật quanh mình: Cái này (Kore), Cái đó (Sore), Cái kia (Are)",
      icon: "🎒",
      videoId: "8GaOeIUHvfc",
      videoTitle: "Video bài giảng: Cách chỉ đồ vật & Sở hữu trong tiếng Nhật (Minna Bài 2)",
      summaryPoints: [
        "これ (Kore = Cái này, gần người nói), それ (Sore = Cái đó, gần người nghe), あれ (Are = Cái kia, xa cả hai).",
        "Để nói đồ vật thuộc về ai, dùng trợ từ の (no): わたし の ほん (Quyển sách của con)."
      ],
      vocab: [
        { jp: "これ・それ・あれ", kana: "これ それ あれ", romaji: "Kore - Sore - Are", vi: "Cái này - Cái đó - Cái kia", icon: "👉", exampleJp: "これ は にほんご の ほん です。", exampleVi: "Đây là quyển sách tiếng Nhật." },
        { jp: "ほん", kana: "ほん", romaji: "Hon", vi: "Quyển sách", icon: "📕", exampleJp: "おもしろい ほん を よみます。", exampleVi: "Đọc một cuốn sách thú vị." },
        { jp: "ノート", kana: "のーと", romaji: "Nooto", vi: "Quyển vở ghi chép", icon: "📓", exampleJp: "ノート に かんじ を かきます。", exampleVi: "Viết chữ Kanji vào vở." },
        { jp: "えんぴつ", kana: "えんぴつ", romaji: "Enpitsu", vi: "Bút chì", icon: "✏️", exampleJp: "これ は わたし の えんぴつ です。", exampleVi: "Đây là cây bút chì của con." },
        { jp: "かばん", kana: "かばん", romaji: "Kaban", vi: "Cặp sách / Balo", icon: "🎒", exampleJp: "あたらしい かばん を かいました。", exampleVi: "Đã mua chiếc balo mới." },
        { jp: "がっこう", kana: "がっこう", romaji: "Gakkou", vi: "Trường học", icon: "🏫", exampleJp: "わたし の がっこう は おおきい です。", exampleVi: "Trường học của con rất rộng." }
      ]
    },
    {
      id: "lesson-7",
      level: "Sơ cấp N5 (Bài 7)",
      badgeColor: "#8b5cf6",
      title: "Bài 7: Hỏi địa điểm & Khám phá trường học, siêu thị",
      subtitle: "Cách hỏi 'Ở đâu?' (Doko desu ka) và chỉ vị trí Koko / Soko / Asoko",
      icon: "🗺️",
      videoId: "YIj5iQrYBrk",
      videoTitle: "Video bài giảng: Từ vựng địa điểm có hình minh họa dễ nhớ (Minna Bài 3)",
      summaryPoints: [
        "ここ (Koko = Chỗ này), そこ (Soko = Chỗ đó), あそこ (Asoko = Chỗ đằng kia).",
        "Khi muốn hỏi địa điểm nào ở đâu, dùng: [Địa điểm] は どこ ですか (Ở đâu vậy ạ?)."
      ],
      vocab: [
        { jp: "きょうしつ", kana: "きょうしつ", romaji: "Kyoushitsu", vi: "Phòng học / Lớp học", icon: "🧑‍🏫", exampleJp: "きょうしつ は にかい です。", exampleVi: "Phòng học ở tầng 2." },
        { jp: "としょかん", kana: "としょかん", romaji: "Toshokan", vi: "Thư viện", icon: "📚", exampleJp: "としょかん で ほん を かります。", exampleVi: "Mượn sách ở thư viện." },
        { jp: "トイレ", kana: "といれ", romaji: "Toire", vi: "Nhà vệ sinh", icon: "🚻", exampleJp: "すみません、トイレ は どこ ですか。", exampleVi: "Xin lỗi, nhà vệ sinh ở đâu ạ?" },
        { jp: "スーパー", kana: "すーぱー", romaji: "Suupaa", vi: "Siêu thị", icon: "🛒", exampleJp: "おかあさん と スーパー へ いきます。", exampleVi: "Đi siêu thị cùng mẹ." },
        { jp: "どこ", kana: "どこ", romaji: "Doko", vi: "Ở đâu?", icon: "❓", exampleJp: "えき は どこ ですか。", exampleVi: "Nhà ga ở đâu vậy ạ?" },
        { jp: "ここ・そこ・あそこ", kana: "ここ そこ あそこ", romaji: "Koko - Soko - Asoko", vi: "Chỗ này - Chỗ đó - Chỗ kia", icon: "📍", exampleJp: "わたし の がっこう は あそこ です。", exampleVi: "Trường của con ở đằng kia." }
      ]
    },
    {
      id: "lesson-8",
      level: "Sơ cấp N5 (Bài 8)",
      badgeColor: "#f59e0b",
      title: "Bài 8: Hỏi giá tiền, Mua sắm & Ẩm thực Nhật Bản",
      subtitle: "Cách nói 'Cho cháu món này' (Kudasai) và hỏi giá 'Bao nhiêu tiền?' (Ikura)",
      icon: "🍣",
      videoId: "6tn9uUphZx4",
      videoTitle: "Video bài giảng: Ngữ pháp chỉ vị trí & Hỏi giá tiền khi mua sắm (Minna Bài 3)",
      summaryPoints: [
        "Muốn hỏi giá tiền: これ は いくら ですか (Kore wa ikura desu ka = Cái này bao nhiêu tiền ạ?).",
        "Muốn gọi món hoặc mua đồ: [Tên món] を ください (o kudasai = Cho cháu xin món này ạ!).",
        "Đơn vị tiền tệ của Nhật Bản là Yên: えん (En)."
      ],
      vocab: [
        { jp: "いくら ですか", kana: "いくら ですか", romaji: "Ikura desu ka", vi: "Bao nhiêu tiền ạ?", icon: "💴", exampleJp: "すみません、これ は いくら ですか。", exampleVi: "Xin lỗi, cái này giá bao nhiêu tiền ạ?" },
        { jp: "～を ください", kana: "を ください", romaji: "...o kudasai", vi: "Cho cháu lấy / Gọi món...", icon: "🙋‍♂️", exampleJp: "ラーメン を ひとつ ください。", exampleVi: "Cho cháu xin 1 bát mì Ramen ạ." },
        { jp: "たべもの", kana: "たべもの", romaji: "Tabemono", vi: "Đồ ăn / Ẩm thực", icon: "🍱", exampleJp: "にほん の たべもの が だいすき です。", exampleVi: "Con cực kỳ thích đồ ăn Nhật." },
        { jp: "おちゃ・みず", kana: "おちゃ みず", romaji: "Ocha - Mizu", vi: "Trà xanh - Nước lọc", icon: "🍵", exampleJp: "つめたい みず を ください。", exampleVi: "Cho cháu xin cốc nước mát ạ." },
        { jp: "おいしい", kana: "おいしい", romaji: "Oishii", vi: "Ngon tuyệt!", icon: "😋", exampleJp: "この すし は とても おいしい です！", exampleVi: "Món Sushi này ngon tuyệt vời!" },
        { jp: "すき・だいすき", kana: "すき だいすき", romaji: "Suki - Daisuki", vi: "Thích - Rất thích", icon: "💖", exampleJp: "わたし は アニメ が だいすき です。", exampleVi: "Con rất mê phim hoạt hình Anime." }
      ]
    },
    {
      id: "lesson-9",
      level: "Trung cấp N5-N4 (Bài 9)",
      badgeColor: "#ec4899",
      title: "Bài 9: Giờ giấc, Thứ ngày & Lịch sinh hoạt hàng ngày",
      subtitle: "Cách nói giờ (Ji), phút (Pun), các thứ trong tuần và thời gian biểu của con",
      icon: "⏰",
      videoId: "vDhEfsOVuiE",
      videoTitle: "Video bài giảng: Phản xạ hội thoại Thời gian, Đi lại & Động từ hàng ngày",
      summaryPoints: [
        "Cách nói Giờ: Số đếm + じ (ji). Ví dụ: 6 giờ = ろくじ (Roku-ji), 7 giờ = しちじ (Shichi-ji), 4 giờ = よじ (Yo-ji), 9 giờ = くじ (Ku-ji).",
        "Hỏi bây giờ là mấy giờ: いま なんじ ですか (Ima nan-ji desu ka?).",
        "Làm việc gì vào lúc mấy giờ: Dùng trợ từ に (ni) đứng sau giờ. Ví dụ: ろくじ に おきます (Dậy lúc 6 giờ)."
      ],
      vocab: [
        { jp: "いま なんじ ですか", kana: "いま なんじ ですか", romaji: "Ima nan-ji desu ka", vi: "Bây giờ là mấy giờ?", icon: "⌚", exampleJp: "いま はちじ はん です。", exampleVi: "Bây giờ là 8 giờ rưỡi." },
        { jp: "まいにち・まいあさ", kana: "まいにち まいあさ", romaji: "Mainichi - Maiasa", vi: "Mỗi ngày - Mỗi buổi sáng", icon: "🌅", exampleJp: "まいあさ ろくじ に おきます。", exampleVi: "Mỗi sáng con thức dậy lúc 6 giờ." },
        { jp: "きょう・あした", kana: "きょう あした", romaji: "Kyou - Ashita", vi: "Hôm nay - Ngày mai", icon: "📅", exampleJp: "あした は にちようび です。", exampleVi: "Ngày mai là Chủ Nhật." },
        { jp: "げつようび", kana: "げつようび", romaji: "Getsuyoubi", vi: "Thứ Hai", icon: "🌙", exampleJp: "げつようび から がっこう へ いきます。", exampleVi: "Đi học từ thứ Hai." },
        { jp: "にちようび", kana: "にちようび", romaji: "Nichiyoubi", vi: "Chủ Nhật (Ngày nghỉ)", icon: "☀️", exampleJp: "にちようび は やすみ です。", exampleVi: "Chủ Nhật là ngày nghỉ." },
        { jp: "やすみ", kana: "やすみ", romaji: "Yasumi", vi: "Nghỉ ngơi / Kỳ nghỉ", icon: "🏖️", exampleJp: "なつやすみ に りょこう します。", exampleVi: "Đi du lịch vào kỳ nghỉ hè." }
      ]
    },
    {
      id: "lesson-10",
      level: "Trung cấp N4 (Bài 10)",
      badgeColor: "#e11d48",
      title: "Bài 10: Phương tiện giao thông & Du lịch Nhật Bản",
      subtitle: "Đi đến đâu (へ ikimasu) bằng phương tiện gì (で) cùng với ai (と)",
      icon: "🚅",
      videoId: "xqIuqDEU7Q4",
      videoTitle: "Video bài giảng: Luyện hội thoại thực tế tiếng Nhật chuẩn giọng bản xứ",
      summaryPoints: [
        "Đi đến địa điểm nào: [Địa điểm] へ いきます (e ikimasu).",
        "Bằng phương tiện gì: [Phương tiện] で (de). Ví dụ: じてんしゃ で (Bằng xe đạp).",
        "Đi cùng với ai: [Người] と (to). Ví dụ: かぞく と (Cùng với gia đình)."
      ],
      vocab: [
        { jp: "いきます・きます・かえります", kana: "いきます きます かえります", romaji: "Ikimasu - Kimasu - Kaerimasu", vi: "Đi - Đến - Về nhà", icon: "🚶", exampleJp: "ごじ に いえ へ かえります。", exampleVi: "Về nhà lúc 5 giờ chiều." },
        { jp: "じてんしゃ", kana: "じてんしゃ", romaji: "Jitensha", vi: "Xe đạp", icon: "🚲", exampleJp: "じてんしゃ で がっこう へ いきます。", exampleVi: "Con đi học bằng xe đạp." },
        { jp: "でんしゃ・しんかんせん", kana: "でんしゃ しんかんせん", romaji: "Densha - Shinkansen", vi: "Tàu điện - Tàu siêu tốc Nhật", icon: "🚅", exampleJp: "しんかんせん は とても はやい です。", exampleVi: "Tàu siêu tốc Shinkansen chạy rất nhanh." },
        { jp: "ひこうき", kana: "ひこうき", romaji: "Hikouki", vi: "Máy bay", icon: "✈️", exampleJp: "ひこうき で にほん へ いきます。", exampleVi: "Đi Nhật Bản bằng máy bay." },
        { jp: "りょこう", kana: "りょこう", romaji: "Ryokou", vi: "Chuyến du lịch", icon: "🧳", exampleJp: "かぞく と りょこう したい です。", exampleVi: "Con muốn đi du lịch cùng gia đình." },
        { jp: "しゃしん を とります", kana: "しゃしん を とります", romaji: "Shashin o torimasu", vi: "Chụp ảnh kỷ niệm", icon: "📸", exampleJp: "ふじさん の しゃしん を とります。", exampleVi: "Chụp ảnh núi Phú Sĩ." }
      ]
    },
    {
      id: "lesson-11",
      level: "Nâng cao N4 (Bài 11)",
      badgeColor: "#7c3aed",
      title: "Bài 11: Các hoạt động hàng ngày & Chia động từ nâng cao",
      subtitle: "Làm chủ các động từ ăn, uống, đọc, xem, nghe và câu rủ rê, mong muốn",
      icon: "🚀",
      videoId: "D30cIpTtRTg",
      videoTitle: "Video bài giảng: Chinh phục từ vựng Katakana & Hoạt động hiện đại",
      summaryPoints: [
        "Hiện tại / Tương lai: Đuôi ～ます (masu). Quá khứ (Đã làm): Đuôi ～ました (mashita).",
        "Đang làm gì đó ngay lúc này: Chia sang thể Te + います (Ví dụ: べんきょう して います = Đang học bài).",
        "Nói ước muốn của bản thân: Bỏ ます cộng たい です (Ví dụ: にほん へ いきたい です = Con muốn đi Nhật)."
      ],
      vocab: [
        { jp: "べんきょう します", kana: "べんきょう します", romaji: "Benkyou shimasu", vi: "Học bài / Nghiên cứu", icon: "✍️", exampleJp: "まいにち にほんご を べんきょう して います。", exampleVi: "Mỗi ngày con đều đang học tiếng Nhật." },
        { jp: "たべます・のみます", kana: "たべます のみます", romaji: "Tabemasu - Nomimasu", vi: "Ăn - Uống", icon: "🍜", exampleJp: "あさごはん に パン を たべました。", exampleVi: "Bữa sáng con đã ăn bánh mì." },
        { jp: "よみます・かきます", kana: "よみます かきます", romaji: "Yomimasu - Kakimasu", vi: "Đọc - Viết", icon: "📖", exampleJp: "まんが を よみます。", exampleVi: "Đọc truyện tranh Manga." },
        { jp: "みます・ききます", kana: "みます ききます", romaji: "Mimasu - Kikimasu", vi: "Xem (Phim) - Nghe (Nhạc)", icon: "🎧", exampleJp: "よる、アニメ を みます。", exampleVi: "Buổi tối con xem phim Anime." },
        { jp: "かいます", kana: "かいます", romaji: "Kaimasu", vi: "Mua sắm", icon: "🛍️", exampleJp: "あたらしい ほん を かいたい です。", exampleVi: "Con muốn mua quyển sách mới." },
        { jp: "いっしょに ～ましょう", kana: "いっしょに しましょう", romaji: "Issho ni ...mashou", vi: "Cùng nhau làm... nhé!", icon: "🤝", exampleJp: "いっしょに にほんご を はなしましょう！", exampleVi: "Hãy cùng nhau nói tiếng Nhật nhé!" }
      ]
    }
  ],

  // 4. NGỮ PHÁP CÔNG THỨC MÀU SẮC (8 MẪU CÂU TỪ CƠ BẢN ĐẾN NÂNG CAO)
  grammar: [
    {
      id: "gram-1",
      level: "Cơ bản (N5)",
      title: "1. Mẫu câu khẳng định: A là B (A は B です)",
      formula: [
        { text: "Chủ ngữ (A)", role: "Danh từ", color: "#3b82f6" },
        { text: "は (đọc là wa)", role: "Trợ từ 'Thì/Là'", color: "#f59e0b" },
        { text: "Vị ngữ (B)", role: "Tên / Nghề nghiệp", color: "#10b981" },
        { text: "です (desu)", role: "Kết câu lịch sự", color: "#8b5cf6" }
      ],
      explanation: "Chữ は bình thường đọc là 'ha', nhưng khi đóng vai trò làm trợ từ nối Chủ ngữ và Vị ngữ thì luôn đọc là 'wa'. Đây là mẫu câu đầu tiên và quan trọng nhất!",
      examples: [
        { jp: "わたし は ちゅうがくせい です。", romaji: "Watashi wa chuugakusei desu.", vi: "Con là học sinh cấp 2." },
        { jp: "これ は にほんご の ほん です。", romaji: "Kore wa nihongo no hon desu.", vi: "Đây là quyển sách tiếng Nhật." }
      ]
    },
    {
      id: "gram-2",
      level: "Cơ bản (N5)",
      title: "2. Mẫu câu hỏi nghi vấn: Có phải không? (～ですか)",
      formula: [
        { text: "Câu khẳng định", role: "A は B です", color: "#3b82f6" },
        { text: "か (ka)", role: "Dấu hỏi (?) cuối câu", color: "#ef4444" }
      ],
      explanation: "Trong tiếng Nhật, chỉ cần thêm chữ か (ka) vào cuối câu và lên giọng một chút là biến thành câu hỏi! Không cần đảo ngữ phức tạp.",
      examples: [
        { jp: "これ は あなた の かばん ですか。", romaji: "Kore wa anata no kaban desu ka.", vi: "Đây có phải là chiếc cặp của bạn không?" },
        { jp: "いま なんじ ですか。", romaji: "Ima nan-ji desu ka.", vi: "Bây giờ là mấy giờ vậy ạ?" }
      ]
    },
    {
      id: "gram-3",
      level: "Cơ bản (N5)",
      title: "3. Sở hữu & Thuộc tính: Của... (A の B)",
      formula: [
        { text: "Người sở hữu (A)", role: "Danh từ 1", color: "#3b82f6" },
        { text: "の (no)", role: "Trợ từ 'Của'", color: "#ec4899" },
        { text: "Đồ vật (B)", role: "Danh từ 2", color: "#10b981" }
      ],
      explanation: "Ngược với tiếng Việt một chút: Tiếng Việt nói 'Sách của con', còn tiếng Nhật đặt người sở hữu lên trước: 'Con の Sách' (わたし の ほん).",
      examples: [
        { jp: "わたし の かぞく", romaji: "Watashi no kazoku", vi: "Gia đình của con" },
        { jp: "おとうさん の くるま", romaji: "Otousan no kuruma", vi: "Xe ô tô của bố" }
      ]
    },
    {
      id: "gram-4",
      level: "Sơ cấp (N5)",
      title: "4. Thực hiện hành động lên vật gì: Tân ngữ + を + Động từ",
      formula: [
        { text: "Đồ vật / Đối tượng", role: "Tân ngữ", color: "#10b981" },
        { text: "を (đọc là o)", role: "Trợ từ tác động", color: "#f59e0b" },
        { text: "Động từ ～ます", role: "Hành động", color: "#ef4444" }
      ],
      explanation: "Trong tiếng Nhật, ĐỘNG TỪ LUÔN ĐỨNG CUỐI CÂU! Tiếng Việt nói 'Ăn sushi', tiếng Nhật sẽ nói 'Sushi を Ăn' (すし を たべます).",
      examples: [
        { jp: "すし を たべます。", romaji: "Sushi o tabemasu.", vi: "Ăn món Sushi." },
        { jp: "にほんご を べんきょう します。", romaji: "Nihongo o benkyou shimasu.", vi: "Học tiếng Nhật." }
      ]
    },
    {
      id: "gram-5",
      level: "Sơ cấp (N5)",
      title: "5. Đi đến đâu bằng phương tiện gì: Phương tiện で + Địa điểm へ + いきます",
      formula: [
        { text: "Phương tiện", role: "Xe đạp / Máy bay", color: "#8b5cf6" },
        { text: "で (de)", role: "Bằng...", color: "#f59e0b" },
        { text: "Địa điểm + へ (e)", role: "Hướng tới", color: "#3b82f6" },
        { text: "いきます", role: "Đi", color: "#10b981" }
      ],
      explanation: "Chữ へ bình thường đọc là 'he', nhưng khi làm trợ từ chỉ hướng đi thì đọc nhẹ là 'e'. Trợ từ で (de) đứng sau phương tiện giao thông.",
      examples: [
        { jp: "じてんしゃ で がっこう へ いきます。", romaji: "Jitensha de gakkou e ikimasu.", vi: "Con đi đến trường bằng xe đạp." },
        { jp: "ひこうき で にほん へ いきます。", romaji: "Hikouki de Nihon e ikimasu.", vi: "Đi Nhật Bản bằng máy bay." }
      ]
    },
    {
      id: "gram-6",
      level: "Sơ cấp (N5)",
      title: "6. Nói về sở thích & năng lực: Danh từ + が + すき / じょうず です",
      formula: [
        { text: "Món ăn / Môn học", role: "Đối tượng", color: "#10b981" },
        { text: "が (ga)", role: "Trợ từ nhấn mạnh", color: "#f59e0b" },
        { text: "すき (Thích) / じょうず (Giỏi)", role: "Tính từ", color: "#e11d48" },
        { text: "です", role: "Lịch sự", color: "#6366f1" }
      ],
      explanation: "Khi nói Thích (Suki), Ghét (Kirai), Giỏi (Jouzu), người Nhật luôn dùng trợ từ が (ga) chứ không dùng を!",
      examples: [
        { jp: "わたし は アニメ が だいすき です。", romaji: "Watashi wa anime ga daisuki desu.", vi: "Con cực kỳ thích phim hoạt hình Anime." },
        { jp: "おねえさん は えいご が じょうず です。", romaji: "Oneesan wa eigo ga jouzu desu.", vi: "Chị gái rất giỏi tiếng Anh." }
      ]
    },
    {
      id: "gram-7",
      level: "Nâng cao (N4)",
      title: "7. Nói về mong muốn: Muốn làm gì đó (Động từ bỏ ます + たい です)",
      formula: [
        { text: "Địa điểm / Đồ vật", role: "Mục tiêu", color: "#3b82f6" },
        { text: "へ / を", role: "Trợ từ", color: "#f59e0b" },
        { text: "Gốc Động từ + たい です", role: "Muốn làm...", color: "#ec4899" }
      ],
      explanation: "Bỏ đuôi ます (masu) của động từ, thay bằng たい です (tai desu) để biến thành câu 'Con muốn...'. Ví dụ: いきます (Đi) -> いきたい です (Muốn đi).",
      examples: [
        { jp: "にほん へ いきたい です。", romaji: "Nihon e ikitai desu.", vi: "Con muốn đi Nhật Bản." },
        { jp: "ラーメン を たべたい です。", romaji: "Raamen o tabetai desu.", vi: "Con muốn ăn mì Ramen." }
      ]
    },
    {
      id: "gram-8",
      level: "Nâng cao (N4)",
      title: "8. Hành động đang diễn ra & Yêu cầu lịch sự (Thể て + います / ください)",
      formula: [
        { text: "Động từ chia thể て (Te)", role: "Ví dụ: たべて / みて", color: "#8b5cf6" },
        { text: "います (Đang làm)", role: "Hoặc ください (Xin hãy)", color: "#10b981" }
      ],
      explanation: "Thể て (Te) là chìa khóa của trình độ N4: Ghép với います để nói việc đang làm ngay lúc này; ghép với ください để nhờ ai đó một cách lễ phép.",
      examples: [
        { jp: "いま、にほんご を べんきょう して います。", romaji: "Ima, nihongo o benkyou shite imasu.", vi: "Bây giờ con đang học tiếng Nhật." },
        { jp: "ちょっと まって ください。", romaji: "Chotto matte kudasai.", vi: "Xin vui lòng đợi một chút ạ." }
      ]
    }
  ],

  // 5. CHỮ HÁN (KANJI) CHIẾT TỰ QUA HÌNH ẢNH & CÂU CHUYỆN (16 CHỮ NỀN TẢNG)
  kanji: [
    {
      kanji: "日", hanViet: "NHẬT", meaning: "Mặt trời / Ngày / Nước Nhật",
      onyomi: "ニチ (nichi) / ジツ (jitsu)", kunyomi: "ひ (hi) / か (ka)",
      story: "Ban đầu người xưa vẽ hình tròn ông Mặt Trời có chấm ở giữa ☀️, sau đóng khung vuông lại thành chữ 日 (Nhật).",
      icon: "☀️",
      words: [
        { w: "日本 (にほん)", m: "Nhật Bản (Đất nước Mặt trời mọc)" },
        { w: "日曜日 (にちようび)", m: "Chủ Nhật" },
        { w: "毎日 (まいにち)", m: "Mỗi ngày" }
      ]
    },
    {
      kanji: "月", hanViet: "NGUYỆT", meaning: "Mặt trăng / Tháng",
      onyomi: "ゲツ (getsu) / ガツ (gatsu)", kunyomi: "つき (tsuki)",
      story: "Hình vầng trăng khuyết 🌙 có hai đám mây vắt ngang ở giữa.",
      icon: "🌙",
      words: [
        { w: "月曜日 (げつようび)", m: "Thứ Hai" },
        { w: "八月 (はちがつ)", m: "Tháng Tám" },
        { w: "月 (つき)", m: "Mặt trăng" }
      ]
    },
    {
      kanji: "山", hanViet: "SƠN", meaning: "Ngọn núi",
      onyomi: "サン (san)", kunyomi: "やま (yama)",
      story: "Hình 3 đỉnh núi cao thấp nhấp nhô cạnh nhau ⛰️ — đỉnh giữa cao nhất!",
      icon: "⛰️",
      words: [
        { w: "富士山 (ふじさん)", m: "Núi Phú Sĩ" },
        { w: "山 (やま)", m: "Ngọn núi" }
      ]
    },
    {
      kanji: "川", hanViet: "XUYÊN", meaning: "Dòng sông",
      onyomi: "セン (sen)", kunyomi: "かわ (kawa)",
      story: "Hình 3 dòng nước đang chảy uốn lượn song song tạo thành con sông 🏞️.",
      icon: "🏞️",
      words: [
        { w: "川 (かわ)", m: "Dòng sông" },
        { w: "山川 (やまかわ)", m: "Núi và sông" }
      ]
    },
    {
      kanji: "木", hanViet: "MỘC", meaning: "Cái cây / Gỗ",
      onyomi: "モク (moku) / ボク (boku)", kunyomi: "き (ki)",
      story: "Hình một cái cây 🌳 có thân thẳng đứng, cành ngang và bộ rễ tỏa xuống đất. Ghép 2 cây thành rừng nhỏ 林 (Lâm), 3 cây thành rừng rậm 森 (Sâm)!",
      icon: "🌳",
      words: [
        { w: "木 (き)", m: "Cái cây" },
        { w: "木曜日 (もくようび)", m: "Thứ Năm" }
      ]
    },
    {
      kanji: "本", hanViet: "BẢN", meaning: "Sách / Gốc rễ / Nhật Bản",
      onyomi: "ホン (hon)", kunyomi: "もと (moto)",
      story: "Là chữ Mộc 木 (Cái cây) có thêm một vạch ngang đánh dấu ngay dưới phần GỐC RỄ => Gốc của tri thức chính là SÁCH!",
      icon: "📕",
      words: [
        { w: "本 (ほん)", m: "Quyển sách" },
        { w: "日本 (にほん)", m: "Nước Nhật Bản" }
      ]
    },
    {
      kanji: "人", hanViet: "NHÂN", meaning: "Con người",
      onyomi: "ジン (jin) / ニン (nin)", kunyomi: "ひと (hito)",
      story: "Hình một người đang bước đi với hai chân dang rộng 🚶.",
      icon: "🚶",
      words: [
        { w: "日本人 (にほんじん)", m: "Người Nhật" },
        { w: "ベトナム人 (べとなむじん)", m: "Người Việt Nam" },
        { w: "四人 (よにん)", m: "4 người" }
      ]
    },
    {
      kanji: "休", hanViet: "HƯU", meaning: "Nghỉ ngơi",
      onyomi: "キュウ (kyuu)", kunyomi: "やす.む (yasumu)",
      story: "Chiết tự cực hay: Bên trái là chữ Nhân 亻 (Người), bên phải là chữ Mộc 木 (Cái cây) => Người tựa lưng vào gốc cây để NGHỈ NGƠI!",
      icon: "🏕️",
      words: [
        { w: "休み (やすみ)", m: "Ngày nghỉ / Giờ giải lao" },
        { w: "夏休み (なつやすみ)", m: "Kỳ nghỉ hè" }
      ]
    },
    {
      kanji: "火", hanViet: "HỎA", meaning: "Ngọn lửa",
      onyomi: "カ (ka)", kunyomi: "ひ (hi)",
      story: "Hình ngọn lửa đang bùng cháy với 2 tia lửa bắn ra hai bên 🔥.",
      icon: "🔥",
      words: [
        { w: "火曜日 (かようび)", m: "Thứ Ba" },
        { w: "花火 (はなび)", m: "Pháo hoa (Hoa lửa)" },
        { w: "火山 (かざん)", m: "Núi lửa" }
      ]
    },
    {
      kanji: "水", hanViet: "THỦY", meaning: "Nước",
      onyomi: "スイ (sui)", kunyomi: "みず (mizu)",
      story: "Dòng nước chảy ở giữa với những giọt nước bắn tung tóe sang hai bên 💧.",
      icon: "💧",
      words: [
        { w: "水 (みず)", m: "Nước uống" },
        { w: "水曜日 (すいようび)", m: "Thứ Tư" },
        { w: "水泳 (すいえい)", m: "Bơi lội" }
      ]
    },
    {
      kanji: "金", hanViet: "KIM", meaning: "Vàng / Tiền bạc / Kim loại",
      onyomi: "キン (kin)", kunyomi: "かね (kane)",
      story: "Dưới mái núi 𠆢 có các tầng đất Vương 王 chứa 2 thỏi vàng lấp lánh 🪙.",
      icon: "🪙",
      words: [
        { w: "お金 (おかね)", m: "Tiền bạc" },
        { w: "金曜日 (きんようび)", m: "Thứ Sáu" }
      ]
    },
    {
      kanji: "土", hanViet: "THỔ", meaning: "Đất đai",
      onyomi: "ド (do) / ト (to)", kunyomi: "つち (tsuchi)",
      story: "Một mầm cây chữ thập mọc vươn lên từ mặt đất nằm ngang 🌱.",
      icon: "🌱",
      words: [
        { w: "土曜日 (どようび)", m: "Thứ Bảy" },
        { w: "土 (つち)", m: "Đất" }
      ]
    },
    {
      kanji: "学", hanViet: "HỌC", meaning: "Học tập / Trường học",
      onyomi: "ガク (gaku)", kunyomi: "まな.ぶ (manabu)",
      story: "Bên dưới có bộ Tử 子 (Đứa trẻ), bên trên là mái nhà trường tỏa ánh sáng tri thức => Đứa trẻ ngồi dưới mái trường để HỌC!",
      icon: "🎓",
      words: [
        { w: "学生 (がくせい)", m: "Học sinh / Sinh viên" },
        { w: "中学生 (ちゅうがくせい)", m: "Học sinh cấp 2 (THCS)" },
        { w: "学校 (がっこう)", m: "Trường học" }
      ]
    },
    {
      kanji: "生", hanViet: "SINH", meaning: "Sinh sống / Học sinh / Thầy cô",
      onyomi: "セイ (sei) / ショウ (shou)", kunyomi: "い.きる (ikiru) / う.まれる (umareru)",
      story: "Hình chồi non đâm chồi nảy lộc từ mặt đất, biểu tượng cho sự sống và trưởng thành 🌿.",
      icon: "🌿",
      words: [
        { w: "先生 (せんせい)", m: "Thầy / Cô giáo (Người sinh ra trước)" },
        { w: "八年生 (はちねんせい)", m: "Học sinh lớp 8" }
      ]
    },
    {
      kanji: "先", hanViet: "TIÊN", meaning: "Trước / Tiên phong",
      onyomi: "セン (sen)", kunyomi: "さき (saki)",
      story: "Đôi chân người 儿 đang bước đi ở phía trước dẫn đường cho thế hệ sau.",
      icon: "🧭",
      words: [
        { w: "先生 (せんせい)", m: "Thầy / Cô giáo" },
        { w: "先週 (せんしゅう)", m: "Tuần trước" }
      ]
    },
    {
      kanji: "友", hanViet: "HỮU", meaning: "Bạn bè / Bằng hữu",
      onyomi: "ユウ (yuu)", kunyomi: "とも (tomo)",
      story: "Hình hai bàn tay đang nắm chặt lấy nhau 🤝 — biểu tượng của tình bạn thân thiết!",
      icon: "🤝",
      words: [
        { w: "友達 (ともだち)", m: "Bạn bè" },
        { w: "親友 (しんゆう)", m: "Bạn thân" }
      ]
    }
  ]
};
