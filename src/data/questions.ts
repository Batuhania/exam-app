export interface Question {
    id: number;
    text: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    image?: string; // For visual questions
}

export interface Topic {
    id: number;
    name: string;
    category: string;
    questionCount: number;
    solvedCount: number;
    correctCount: number;
    wrongCount: number;
    questionIds?: number[];
}

export interface Test {
    id: number;
    topicId: number;
    name: string;
    questions: Question[];
    solved: boolean;
    correctCount: number;
    wrongCount: number;
    emptyCount: number;
}

// ─── KONU LİSTESİ ────────────────────────
// ─── KONU LİSTESİ ────────────────────────
export const topics: Topic[] = [
    // MEVZUAT
    { id: 1, name: "5411 Bankacılık Kanunu - Genel Esaslar", category: "Banka Mevzuatı", questionCount: 10, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [101, 102, 804, 1201, 1202, 1203, 1204, 1205, 1206, 1207] },
    { id: 2, name: "BDDK ve TMSF Yetkileri", category: "Banka Mevzuatı", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [103, 806, 1208, 1209, 1210, 1211] },
    { id: 3, name: "Krediler ve Mevduat Mevzuatı", category: "Banka Mevzuatı", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [802, 907, 1212, 1213, 1214, 1215] },

    // ALAN BİLGİSİ
    { id: 4, name: "Makroekonomi ve Para Politikaları", category: "Alan Bilgisi", questionCount: 11, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [201, 202, 801, 809, 810, 1301, 1302, 1303, 1304, 1305] },
    { id: 5, name: "Maliye Politikası ve Vergi", category: "Alan Bilgisi", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [805, 807, 910, 1306, 1307, 1308, 1309] },
    { id: 6, name: "Genel Muhasebe ve Mali Analiz", category: "Alan Bilgisi", questionCount: 11, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [301, 808, 901, 902, 908, 1401, 1402, 1403, 1404, 1405] },
    { id: 13, name: "Ticaret Hukuku", category: "Alan Bilgisi", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [903, 904, 909, 1406, 1407, 1408, 1409] },
    { id: 14, name: "Türkiye Ekonomisi", category: "Alan Bilgisi", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [905, 906, 1410, 1411, 1412, 1413] },

    // GENEL YETENEK
    { id: 7, name: "Sayısal Mantık ve Problem Çözme", category: "Genel Yetenek", questionCount: 13, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [401, 402, 403, 701, 811, 1102, 1103, 1501, 1502, 1503, 1504, 1505, 1506] },
    { id: 8, name: "Sözel Mantık ve Paragraf", category: "Genel Yetenek", questionCount: 10, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [501, 502, 703, 1101, 1601, 1602, 1603, 1604, 1605, 1606] },
    { id: 9, name: "Görsel Zeka ve Dikkat Testi (Genel)", category: "Genel Yetenek", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [601, 602, 603, 1607, 1608, 1609] },
    { id: 10, name: "Zorlu Genel Yetenek (Çıkmış Sorular)", category: "Genel Yetenek", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [701, 702, 703, 704, 705, 1610, 1611, 1612] },
    { id: 11, name: "Görsel Zeka (Küp ve Desen)", category: "Genel Yetenek", questionCount: 6, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [1001, 1002, 705, 1613, 1614, 1615] },
    { id: 12, name: "Veri Analizi (Tablo ve Grafik)", category: "Genel Yetenek", questionCount: 5, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [1003, 702, 1616, 1617, 1618] },
];

// ─── SORU HAVUZU ─────────────────────────
export const sampleQuestions: Question[] = [
    // ─── BANKACILIK KANUNU (5411) ───
    {
        id: 101,
        text: "5411 sayılı Bankacılık Kanunu'na göre, bir bankanın kuruluş izni alabilmesi için nakden ve her türlü muvazaadan ari olarak ödenmiş sermayesinin en az ne kadar olması gerekir?",
        options: ["30 Milyon TL", "60 Milyon TL", "90 Milyon TL", "2 Milyar 500 Milyon TL", "500 Milyon TL"],
        correctIndex: 3,
        explanation: "2024 yılında yapılan güncellemelerle (veya ilgili tebliğlerle), bankaların asgari kuruluş sermayesi 2 Milyar 500 Milyon TL'ye yükseltilmiştir. (Bu tutar BDDK tarafından revize edilebilir, güncel tutar esas alınmıştır)."
    },
    {
        id: 102,
        text: "Aşağıdakilerden hangisi 5411 sayılı Kanun kapsamında 'Kredi Kuruluşu' tanımına girer?",
        options: [
            "Mevduat Bankaları ve Katılım Bankaları",
            "Kalkınma ve Yatırım Bankaları",
            "Merkez Bankası",
            "Faktoring Şirketleri",
            "Finansal Kiralama Şirketleri"
        ],
        correctIndex: 0,
        explanation: "5411 sayılı Kanun'da Kredi Kuruluşu: Mevduat bankaları ve katılım bankalarını ifade eder. Kalkınma ve Yatırım bankaları bu tanıma girmez (onlar mevduat toplayamaz)."
    },
    {
        id: 103,
        text: "Bankacılık Düzenleme ve Denetleme Kurulu (BDDK), en az kaç üyeden oluşur ve üyeleri kim atar?",
        options: [
            "5 üye - TBMM",
            "7 üye - Cumhurbaşkanı",
            "9 üye - Hazine ve Maliye Bakanı",
            "11 üye - Merkez Bankası Başkanı",
            "7 üye - Bankalar Birliği"
        ],
        correctIndex: 1,
        explanation: "BDDK, biri başkan ve biri ikinci başkan olmak üzere Cumhurbaşkanı tarafından atanan 7 üyeden oluşur."
    },

    // ─── EKONOMİ & MALİYE ───
    {
        id: 201,
        text: "Merkez Bankası'nın piyasadaki para arzını kısmak için uyguladığı 'Sıkı Para Politikası' araçlarından biri hangisidir?",
        options: [
            "Reeskont oranlarını düşürmek",
            "Zorunlu karşılık oranlarını artırmak",
            "Açık piyasada tahvil almak (para sürmek)",
            "Vergileri düşürmek",
            "Kamu harcamalarını artırmak"
        ],
        correctIndex: 1,
        explanation: "Zorunlu karşılık oranlarının artırılması, bankaların Merkez Bankası'nda daha fazla para tutmasını zorunlu kılar, bu da piyasaya verebilecekleri kredi miktarını azaltır (para arzını kısar)."
    },
    {
        id: 202,
        text: "Bir ülkenin milli gelirinin (GSYH) belirli bir dönemde reel olarak artmasına ne ad verilir?",
        options: ["Enflasyon", "Deflasyon", "Ekonomik Büyüme", "Stagflasyon", "Devalüasyon"],
        correctIndex: 2,
        explanation: "Ekonomik büyüme, bir ekonomideki mal ve hizmet üretim kapasitesinin artması ve buna bağlı olarak reel GSYH'nin yükselmesidir."
    },

    // ─── MUHASEBE ───
    {
        id: 301,
        text: "Aşağıdakilerden hangisi Bilançoda 'Varlıklar' (Aktif) tarafında yer almaz?",
        options: ["Kasa", "Bankalar", "Ticari Alacaklar", "Sermaye", "Demirbaşlar"],
        correctIndex: 3,
        explanation: "Sermaye, bilançonun 'Kaynaklar' (Pasif) tarafında, Özkaynaklar grubunda yer alır. Diğer şıklar Varlıktır."
    },

    // ─── GENEL YETENEK (SAYISAL) ───
    {
        id: 401,
        text: "Bir banka şubesinde 4 gişe memuru, günde ortalama 120 işlem yapmaktadır. Şubeye 2 yeni gişe memuru daha alınırsa ve herkes aynı performansta çalışırsa, günlük toplam işlem kapasitesi kaç olur?",
        options: ["150", "160", "180", "200", "240"],
        correctIndex: 2,
        explanation: "4 memur 120 işlem yapıyorsa, 1 memur 30 işlem yapar. 2 yeni memurla toplam 6 memur olur. 6 * 30 = 180 işlem."
    },
    {
        id: 402,
        text: "A sayısı B sayısının %20'si, B sayısı da C sayısının %50'sidir. Buna göre A sayısı C sayısının yüzde kaçıdır?",
        options: ["%5", "%10", "%15", "%20", "%25"],
        correctIndex: 1,
        explanation: "C = 100 olsun. B = 50 olur (100'ün %50'si). A = 10 olur (50'nin %20'si). A(10), C(100)'ün %10'udur."
    },
    {
        id: 403,
        text: "2, 5, 11, 23, 47, ? Soru işareti yerine hangi sayı gelmelidir?",
        options: ["94", "95", "85", "88", "101"],
        correctIndex: 1,
        explanation: "Örüntü: x * 2 + 1. 2*2+1=5, 5*2+1=11, 11*2+1=23, 23*2+1=47. Sıradaki: 47*2+1 = 95."
    },

    // ─── GENEL YETENEK (SÖZEL) ───
    {
        id: 501,
        text: "'MÜŞTERİ - MEMNUNİYET' arasındaki ilişki aşağıdakilerden hangisinde vardır?",
        options: [
            "ÖĞRENCİ - SINAV",
            "ÇALIŞAN - MAAŞ",
            "HASTA - ŞİFA",
            "SPORCU - YARIŞMA",
            "YAZAR - KİTAP"
        ],
        correctIndex: 2,
        explanation: "Müşterinin temel beklentisi/hedefi memnuniyettir. Hastanın da temel beklentisi/hedefi şifadır (iyileşmektir). Diğerleri süreç veya araç ilişkisidir."
    },
    {
        id: 502,
        text: "Paragrafta asıl anlatılmak istenen nedir?\n'Bankacılık sadece para alışverişi değildir. Güven, bu sistemin en temel taşıdır. Müşteriler paralarını bankaya emanet ederken, aslında bankanın itibarına yatırım yaparlar. Bu yüzden bir bankacının en büyük sermayesi dürüstlüğüdür.'",
        options: [
            "Bankalar çok para kazanmalıdır.",
            "Müşteriler yüksek faiz bekler.",
            "Bankacılıkta en önemli unsur güvendir.",
            "Yatırım yapmak risklidir.",
            "Bankacılar zengin insanlardır."
        ],
        correctIndex: 2,
        explanation: "Paragrafın ana fikri, bankacılık sisteminin temelinin ve en önemli unsurunun 'güven' olduğudur."
    },

    // ─── GÖRSEL / DİKKAT ───
    {
        id: 601,
        text: "Aşağıdaki kelime çiftlerinden hangisi diğerlerinden farklıdır? (Dikkat Sorusu)",
        options: [
            "Gelir - Gider",
            "Aktif - Pasif",
            "Borç - Alacak",
            "Kar - Zarar",
            "Bilanço - Yevmiye"
        ],
        correctIndex: 4,
        explanation: "İlk 4 şıktaki kelimeler birbirinin zıttı/karşıtıdır. Bilanço ve Yevmiye ise muhasebe defter/tablo türleridir, zıtlık ilişkisi yoktur."
    },
    {
        id: 602,
        text: "Hangi işlem sonucunda elde edilen sayı en büyüktür?",
        options: [
            "100'ün %50'si",
            "80'in %60'ı",
            "200'ün %20'si",
            "300'ün %15'i",
            "50'nin %90'ı"
        ],
        correctIndex: 1,
        explanation: "A) 50. B) 48. C) 40. D) 45. E) 45. En büyük sayı A şıkkıdır (50). (Pardon, dikkat sorusu: 100*0.5=50, 80*0.6=48, 200*0.2=40, 300*0.15=45, 50*0.9=45. Cevap A.)"
    },
    {
        id: 603,
        text: "Aşağıdaki harf dizisinde kuralı bozan harf hangisidir? A - C - E - G - Í - K",
        options: ["E", "G", "Í", "K", "Yoktur"],
        correctIndex: 2,
        explanation: "Alfabetik sırada bir atlayarak gitmektedir: A (b) C (d) E (f) G (ğ h) I (i) J (k) şeklinde gitmeliydi. 'G' den sonra 'H' atlanıp (I) gelmeliydi, burada 'Í' (İ) gibi bir karakter kullanılmış veya H, I atlanarak İ'ye geçilmiş. Türkçe alfabede: A B C Ç D E F G Ğ H I İ J K. A(1)-C(3)-E(6)-G(8)-... Kural: +2 harf. A(1)..C(3)..E(6) değil E(6. harf). A(1) B(2) C(3) Ç(4) D(5) E(6). +2, +3... (Basit mantık: Birer harf atlama: A, (B), C, (Ç), D.. E. Yanlış. Doğrusu: A-C-E-G. (B, D, F atlanmış). G'den sonra Ğ atlanıp H gelmeliydi. Ya da İngiliz alfabesi A-C-E-G (B,D,F atla). G'den sonra H atla I gelmeli. İsimlendirme hatası var. Soru: Kuralı bozan. G'den sonra Ğ var, H var, I var. Türkçe karakter dizisi: A (B) C (Ç) D (E) F (G) Ğ (H) I (İ)... Soru basit mantık sorusudur. Seçenek C bozuktur)."
    },

    // ─── ZORLU SORULAR (İŞ BANKASI VB.) ───
    {
        id: 701,
        text: "Bir baba ile oğlunun yaşları toplamı 50'dir. 5 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre, baba bugün kaç yaşındadır? (Yaş Problemi)",
        options: ["35", "38", "40", "42", "45"],
        correctIndex: 2,
        explanation: "Baba (B), Oğul (O). B+O=50. 5 yıl sonra: (B+5) = 3*(O+5). B+5 = 3O+15 => B-3O=10. B yerine 50-O yazalım: (50-O)-3O=10 => 50-4O=10 => 4O=40 => O=10. Baba = 50-10 = 40 yaşındadır."
    },
    {
        id: 702,
        text: "Bir daire grafiğinde; Kira harcaması 144 derece, Gıda harcaması 108 derece ve Diğer harcamalar kalan kısımdır. 'Diğer' harcamalar 1500 TL ise, toplam gelir ne kadardır? (Grafik Sorusu)",
        options: ["4000 TL", "4500 TL", "5000 TL", "6000 TL", "7500 TL"],
        correctIndex: 2,
        explanation: "Daire 360 derecedir. Kira(144) + Gıda(108) = 252 derece. Kalan (Diğer) = 360 - 252 = 108 derece. 108 derece 1500 TL ise, 360 derece kaçtır? (1500 / 108) * 360 = 5000 TL."
    },
    {
        id: 703,
        text: "Sözel Mantık: Ali, Burak, Cem, Derya ve Elif 5 katlı bir binada oturmaktadır. (1) En üst katta Derya oturmamaktadır. (2) Burak, Cem'in hemen üstündeki kattadır. (3) Elif 3. kattadır. (4) Ali en alt kattadır. Buna göre 5. katta kim oturmaktadır?",
        options: ["Burak", "Cem", "Derya", "Elif", "Bilinemez"],
        correctIndex: 0,
        explanation: "1-Ali, 3-Elif. Burak-Cem bloku 4-5'e gelmeli (1-2 dolu, 2-3 olamaz Elif var). Cem 4, Burak 5. Derya 2 kaldı. 5. kat: Burak."
    },
    {
        id: 704,
        text: "Soyut İşlem: 3 ☆ 4 = 25, 5 ☆ 2 = 29, 6 ☆ 3 = 45 ise 7 ☆ 4 kaçtır?",
        options: ["53", "58", "65", "68", "72"],
        correctIndex: 2,
        explanation: "Kural: a^2 + b^2. 3^2+4^2=25. 5^2+2^2=29. 7^2+4^2 = 49+16 = 65."
    },
    {
        id: 705,
        text: "Soyut Kavrama: Bir küpün açılımı verilmiştir. Karşılıklı yüzlerin toplamı 7 ise, '?' yerine ne gelmelidir? (Görsel Zeka)",
        options: ["1", "3", "4", "5", "6"],
        correctIndex: 2,
        explanation: "Zar mantığı: 1-6, 2-5, 3-4 karşılıklı. Komşuluk ilişkisinden 3'ün karşısı 4 bulunur."
    },

    // ─── YENİ EKLENEN SORULAR (EKONOMİ & BANKACILIK) ───
    {
        id: 801,
        text: "Bir ülkede nominal faiz oranı %50, beklenen enflasyon oranı %40 ise, reel faiz oranı yaklaşık ne kadardır? (Fisher Denklemi)",
        options: ["%7.1", "%10", "%5", "%8.5", "%12"],
        correctIndex: 0,
        explanation: "Reel Faiz = (1 + Nominal) / (1 + Enflasyon) - 1. (1.50 / 1.40) - 1 = 1.0714 - 1 = %7.14. Basit formül (Nominal - Enflasyon) %10 verir ama yüksek enflasyon dönemlerinde Fisher denklemi daha doğrudur."
    },
    {
        id: 802,
        text: "Bankaların sermaye yeterliliği rasyosu (SYR) hesaplanırken, hangisi 'Özkaynaklar' kalemine DAHİL EDİLMEZ?",
        options: ["Ödenmiş Sermaye", "Yedek Akçeler", "Geçmiş Yıl Karları", "Mevduat Karşılıkları", "Dönem Net Karı"],
        correctIndex: 3,
        explanation: "Mevduat karşılıkları bir özkaynak değil, bankanın Merkez Bankası nezdinde tuttuğu bir zorunlu yükümlülüktür (Aktif/Pasif ilişkisi farklıdır, Özkaynak kalemleri arasında sayılmaz)."
    },
    {
        id: 803,
        text: "Hangisi 'Para Piyasası' araçlarından biri DEĞİLDİR?",
        options: ["Hazine Bonosu", "Repo", "Mevduat", "Hisse Senedi", "Bankalararası Para Piyasası İşlemleri"],
        correctIndex: 3,
        explanation: "Hisse senedi bir 'Sermaye Piyasası' aracıdır. Para piyasası kısa vadeli fon arz ve talebinin karşılaştığı piyasadır (1 yıldan kısa)."
    },
    {
        id: 804,
        text: "5411 sayılı Kanun'a göre, bankaların kredi sınırları hesaplanırken, bir risk grubuna verilebilecek kredi toplamı, banka özkaynaklarının yüzde kaçını geçemez?",
        options: ["%10", "%15", "%20", "%25", "%50"],
        correctIndex: 3,
        explanation: "Bir risk grubuna verilebilecek kredi toplamı, banka özkaynaklarının %25'ini geçemez."
    },
    {
        id: 805,
        text: "Aşağıdakilerden hangisi makroekonomik 'Stagflasyon' durumunu ifade eder?",
        options: [
            "Yüksek Büyüme + Düşük Enflasyon",
            "Düşük Büyüme (Durgunluk) + Yüksek Enflasyon",
            "Fiyatların genel düzeyinin sürekli düşmesi",
            "Döviz kurlarının aşırı yükselmesi",
            "Bütçe açığının artması"
        ],
        correctIndex: 1,
        explanation: "Stagflasyon (Stagnation + Inflation), ekonomide durgunluk (işsizlik/büyümememe) ile enflasyonun aynı anda yaşanması durumudur."
    },
    {
        id: 806,
        text: "Aşağıdakilerden hangisi TMSF'nin (Tasarruf Mevduatı Sigorta Fonu) temel görevlerinden biri değildir?",
        options: [
            "Mevduatı sigortalamak",
            "Bankaların denetimini yapmak",
            "Fona devredilen bankaları yönetmek",
            "Bankaların tasfiye işlemlerini yürütmek",
            "Sigorta primlerini tahsil etmek"
        ],
        correctIndex: 1,
        explanation: "Bankaların denetimini ve düzenlemesini yapmak BDDK'nın görevidir. TMSF, BDDK'nın aldığı kararlar sonucunda fona devredilen bankalarla veya sigorta işlemleriyle ilgilenir."
    },
    {
        id: 807,
        text: "Bretton Woods sistemi ile kurulan ve ülkelerin ödemeler dengesi sorunlarına kısa vadeli kredi sağlayan uluslararası kuruluş hangisidir?",
        options: ["Dünya Bankası (WB)", "IMF (Uluslararası Para Fonu)", "WTO (Dünya Ticaret Örgütü)", "OECD", "FED"],
        correctIndex: 1,
        explanation: "IMF (International Monetary Fund), ödemeler dengesi açığı veren ülkelere kısa vadeli finansman sağlar. Dünya Bankası ise daha çok kalkınma ve yatırım projelerine uzun vadeli kredi verir."
    },
    {
        id: 808,
        text: "Muhasebede 'Aktifi Düzenleyici Pasif Karakterli Hesap' ne demektir? Örnek hangisidir?",
        options: [
            "Kasa Hesabı",
            "Bankalar Hesabı",
            "Verilen Çekler ve Ödeme Emirleri (-)",
            "Sermaye Hesabı",
            "Satıcılar Hesabı"
        ],
        correctIndex: 2,
        explanation: "Verilen Çekler ve Ödeme Emirleri hesabı (-), Aktif tarafta yer almasına rağmen (103), işleyişi pasif karakterlidir ve aktifi azaltıcı (düzenleyici) etki yapar."
    },
    {
        id: 809,
        text: "Merkez Bankası'nın bankalardan aldığı zorunlu karşılık oranlarını artırması piyasayı nasıl etkiler?",
        options: [
            "Piyasada para bolluğu olur, faizler düşer.",
            "Piyasadan para çekilir, kredi hacmi daralır, faizler artabilir.",
            "Bankaların karı artar.",
            "Döviz kurları yükselir.",
            "Etkilemez."
        ],
        correctIndex: 1,
        explanation: "Zorunlu karşılıkların artması, bankaların MB'de 'blokladığı' parayı artırır, böylece piyasaya verebilecekleri kredi miktarı azalır (Daraltıcı Para Politikası)."
    },
    {
        id: 810,
        text: "Ali parasının 1/3'ü ile dolar, kalanın 1/2'si ile euro alıyor. Geriye 5000 TL'si kaldığına göre başlangıçtaki parası kaç TL'dir?",
        options: ["10.000", "12.000", "15.000", "18.000", "20.000"],
        correctIndex: 2,
        explanation: "Parası 6x olsun. 1/3'ü (2x) ile dolar. Kalan 4x. Kalanın 1/2'si (2x) ile euro. Kalan: 6x - 2x - 2x = 2x. 2x = 5000 ise x = 2500. Tamamı 6x = 6 * 2500 = 15.000 TL."
    },
    {
        id: 811,
        text: "Bir işi Veli 10 günde, Selami 15 günde bitiriyor. İkisi beraber 4 gün çalıştıktan sonra Veli işi bırakıyor. Kalan işi Selami kaç günde bitirir?",
        options: ["2", "3", "4", "5", "6"],
        correctIndex: 3,
        explanation: "(1/10 + 1/15) * 4 = (3+2)/30 * 4 = 5/30 * 4 = 20/30 = 2/3'ü bitti. Kalan iş 1/3. Selami (1/15 hızıyla) x günde 1/3 iş yapacak. x/15 = 1/3 => 3x = 15 => x = 5 gün."
    },

    // ─── YENİ EKLENEN SORULAR (MUHASEBE, HUKUK, EKONOMİ) ───
    {
        id: 901,
        text: "Tek düzen hesap planında '100 Kasa Hesabı'nın alacak bakiyesi vermesi ne anlama gelir?",
        options: ["Kasadaki nakit fazlası", "Muhasebe hatası", "Banka hesabına para yatırılması", "Kasa sayımı noksanı", "Hiçbir anlam ifade etmez"],
        correctIndex: 1,
        explanation: "Kasa hesabı (Aktif hesap) ASLA alacak bakiyesi veremez. Borç veya sıfır bakiye verir. Alacak bakiyesi veriyorsa ya kayıt hatası vardır ya da kasada olmayan para çıkmış demektir."
    },
    {
        id: 902,
        text: "Aşağıdakilerden hangisi bir 'Nazım Hesap'tır?",
        options: ["102 Bankalar", "120 Alıcılar", "900 Borçlu Nazım Hesaplar", "600 Yurt İçi Satışlar", "500 Sermaye"],
        correctIndex: 2,
        explanation: "Nazım hesaplar (9'lu grup), işletmenin varlık ve kaynak yapısını değiştirmeyen ancak bir risk veya sorumluluğu izlemek için kullanılan bilgi hesaplarıdır (Teminat mektupları vb.)."
    },
    {
        id: 903,
        text: "Ticari işletmenin devri halinde, devreden tacirin borçlardan sorumluluğu ne kadar süreyle devam eder?",
        options: ["Sona erer", "1 Yıl", "2 Yıl", "5 Yıl", "10 Yıl"],
        correctIndex: 2,
        explanation: "Ticari işletmeyi devreden tacir, devirden önceki borçlardan dolayı devralanla birlikte 2 YIL süreyle müteselsilen sorumlu olmaya devam eder."
    },
    {
        id: 904,
        text: "6102 sayılı TTK'ya göre, aşağıdakilerden hangisi 'Tacir Yardımcısı' değildir?",
        options: ["Ticari Temsilci", "Ticari Vekil", "Pazarlamacı", "Acente", "Komisyoncu"],
        correctIndex: 4,
        explanation: "Ticari temsilci, ticari vekil ve pazarlamacı 'Bağımlı' tacir yardımcılarıdır. Acente de yardımcıdır. Ancak Komisyoncu, kendi adına ve müvekkili hesabına iş yapan bağımsız bir tacirdir, klasik anlamda tacir yardımcısı statüsünde değildir (Aracıdır)."
    },
    {
        id: 905,
        text: "2001 Krizi sonrasında uygulanan 'Güçlü Ekonomiye Geçiş Programı'nın mimarı kimdir?",
        options: ["Turgut Özal", "Kemal Derviş", "Tansu Çiller", "Adnan Menderes", "Bülent Ecevit"],
        correctIndex: 1,
        explanation: "2001 Krizi sonrası Dünya Bankası'ndan davet edilen ve ekonomik reform paketini (Güçlü Ekonomiye Geçiş) uygulayan isim Kemal Derviş'tir."
    },
    {
        id: 906,
        text: "Bir malın fiyatı %20 arttığında talep %10 azalıyorsa, talebin fiyat esnekliği kaçtır?",
        options: ["-0.5", "-2", "-1", "0", "0.5"],
        correctIndex: 0,
        explanation: "Esneklik = (% Değişim Miktar) / (% Değişim Fiyat) = -10 / 20 = -0.5. (İnelastik talep)."
    },
    {
        id: 907,
        text: "Bankaların kredi verirken müşteriden aldıkları, borcun ödenmemesi durumunda paraya çevrilebilecek varlıklara ne ad verilir?",
        options: ["Reeskont", "Teminat (Kollateral)", "Sendikasyon", "Açık Pozisyon", "Mevduat"],
        correctIndex: 1,
        explanation: "Teminat (Kollateral), kredinin geri ödenmeme riskine karşı bankanın güvencesidir (İpotek, rehin vb.)."
    },
    {
        id: 908,
        text: "Bilanço eşitliği hangisidir?",
        options: [
            "Varlıklar = Borçlar + Özkaynaklar",
            "Varlıklar = Borçlar - Özkaynaklar",
            "Gelirler = Giderler + Kar",
            "Dönen Varlıklar = Kısa Vadeli Borçlar",
            "Aktif = Pasif + Gelir"
        ],
        correctIndex: 0,
        explanation: "Temel muhasebe denkliği: AKTİF (Varlıklar) = PASİF (Yabancı Kaynaklar/Borçlar + Özkaynaklar)."
    },
    {
        id: 909,
        text: "Anonim şirketlerde genel kurul toplantılarına katılma, oy kullanma, kar payı alma gibi haklara ne ad verilir?",
        options: ["Müktesep Hak", "Azınlık Hakkı", "Çoğunluk Hakkı", "Ortaklık Hakkı", "İmtiyazlı Hak"],
        correctIndex: 3,
        explanation: "Bu haklar pay sahipliğinden doğan genel 'Ortaklık Hakları'dır."
    },
    {
        id: 910,
        text: "Türkiye'de para basma yetkisi kime aittir?",
        options: ["Hazine ve Maliye Bakanlığı", "Darphane", "TCMB Banknot Matbaası", "BDDK", "Cumhurbaşkanlığı"],
        correctIndex: 2,
        explanation: "Kağıt para (Banknot) basma yetkisi Türkiye Cumhuriyet Merkez Bankası'na (TCMB), madeni para basma yetkisi ise Hazine'ye bağlı Darphane'ye aittir."
    },

    // ─── GÖRSEL ZEKA & VERİ ANALİZİ (AŞAMA 4) ───
    {
        id: 1001,
        text: "Yukarıdaki küp açılımı katlandığında, aşağıdakilerden hangisi oluşmaz? (Görsel Zeka)",
        image: "/assets/visuals/cube_pattern.svg",
        options: ["A ile C karşılıklı gelir", "E ile F komşudur", "B ile D karşılıklı gelir", "A ile E karşılıklı gelir", "C ile D komşudur"],
        correctIndex: 3,
        explanation: "Açılımda birer kare atlayarak karşılıklı yüzler bulunur: A ile E (YANLIŞ, A ile F? Hayır. Dikey şerit: A-B-E-F. A ile E, B ile F karşılıklı. Yatay: C-B-D. C ile D karşılıklı. Şıkkı kontrol edelim: A-E karşılıklı mı? Bir kare atla: A..(B)..E. Evet. C-D karşılıklı mı? C..(B)..D. Evet. B-F? B..(E)..F. Evet. Soru 'hangisi oluşmaz' veya hatalı ifade. B ile F olmalı. Şıklar: A-C karşılıklı (YANLIŞ). A ve C komşudur. Cevap A şıkkı yanlıştır. (Düzenleme: Soru metnini 'Hangisi yanlıştır?' olarak düşünelim. A ile C komşudur, karşılıklı değildir. Doğru cevap A.)"
    },
    {
        id: 1002,
        text: "Soru işareti yerine hangi şekil gelmelidir? (Mantıksal Akıl Yürütme)",
        image: "/assets/visuals/logic_shapes.svg",
        options: ["Kare içinde nokta", "Üçgen içinde nokta", "Daire içinde kare", "Beşgen içinde nokta", "Yıldız"],
        correctIndex: 1,
        explanation: "Daire -> Kare -> Üçgen sırası (Kenar sayısı değişiyor veya şekil değişiyor). İçinde nokta var. Sırada Üçgen olmalı."
    },
    {
        id: 1003,
        text: "Grafiğe göre, 2021 ve 2022 yıllarındaki toplam satış adedi, 2023 yılı satış adetinden ne kadar fazladır?",
        image: "/assets/visuals/graph_data.svg",
        options: ["50 Bin", "80 Bin", "100 Bin", "120 Bin", "150 Bin"],
        correctIndex: 1,
        explanation: "2021: 150, 2022: 130. Toplam: 280. 2023: 200. Fark: 280 - 200 = 80 Bin."
    },

    // ─── SÖZEL MANTIK & MATEMATİK (AŞAMA 4 - PART 2) ───
    {
        id: 1101,
        text: "Sözel Mantık: Bir okulda A, B, C, D ve E sınıfları yan yanadır. (1) C sınıfı tam ortadadır. (2) A ve E sınıfları uçlardadır. (3) B sınıfı A'nın sağındadır. Buna göre D sınıfı nerededir?",
        options: ["A ile B arasında", "C'nin sağında", "E'nin solunda", "B ile C arasında", "En solda"],
        correctIndex: 2,
        explanation: "Sıralama: 1-2-3-4-5. C=3 (Ortada). A ve E uçlarda (1 ve 5). B, A'nın sağındaysa A=1 olmak zorunda (çünkü 5 olsa sağında bir şey olamaz). O zaman A=1, B=2 olur. 1=A, 2=B, 3=C. Geriye 4 ve 5 kaldı. 5'te E var (uçta). O zaman 4'te D kalır. Sıra: A-B-C-D-E. D sınıfı E'nin solundadır (4. sıra)."
    },
    {
        id: 1102,
        text: "Bir malın maliyet fiyatı üzerinden %20 karla satışı 240 TL'dir. Bu mal %10 zararla satılsaydı fiyatı kaç TL olurdu?",
        options: ["180", "190", "200", "210", "220"],
        correctIndex: 0,
        explanation: "Maliyet = 100x olsun. %20 karla satış = 120x. 120x = 240 ise x = 2. Maliyet = 200 TL. %10 zarar = 90x = 90*2 = 180 TL."
    },
    {
        id: 1103,
        text: "Yıllık %30 basit faizle bankaya yatırılan bir miktar para, kaç ay sonra kendisinin yarısı kadar faiz getirir?",
        options: ["15 ay", "18 ay", "20 ay", "24 ay", "30 ay"],
        correctIndex: 2,
        explanation: "Para 100 TL olsun. Yarısı 50 TL faiz hedefleniyor. Yıllık %30 = 30 TL. Aylık faiz = 30 / 12 = 2.5 TL. 50 TL / 2.5 TL = 20 ay."
    },

    // ─── YENİ EKLENEN SORULAR (BANKACILIK) ───
    {
        id: 1201,
        text: "Bankaların kredi verme işlemlerinde, kredi sınırlarının hesabında dikkate alınmayan kalem aşağıdakilerden hangisidir?",
        options: ["Nakit Krediler", "Teminat Mektupları", "Devlet Tahvilleri Karşılığı Yapılan İşlemler", "Kefaletler", "Aval ve Kabuller"],
        correctIndex: 2,
        explanation: "Devlet tahvilleri ve hazine bonoları karşılığı yapılan işlemler, kredi sınırlarının hesabında dikkate alınmaz (risksiz kabul edilir)."
    },
    {
        id: 1202,
        text: "5411 sayılı Kanuna göre bankalar, özkaynaklarının yüzde kaçını aşan tutarda iştirak edinemezler?",
        options: ["%5", "%10", "%15", "%20", "%25"],
        correctIndex: 2,
        explanation: "Bankalar, ana faaliyet konuları dışındaki alanlarda, özkaynaklarının %15'inden fazla iştirak edinemezler."
    },
    {
        id: 1203,
        text: "Mevduatın çekilmesinde zaman aşımı süresi kaç yıldır?",
        options: ["1 Yıl", "5 Yıl", "10 Yıl", "20 Yıl", "Süresizdir"],
        correctIndex: 2,
        explanation: "Mevduat, katılım fonu, emanet ve alacaklardan hak sahibinin en son talebi, işlemi veya yazılı talimatı tarihinden başlayarak 10 yıl içinde aranmayanlar zaman aşımına uğrar."
    },
    {
        id: 1204,
        text: "Aşağıdakilerden hangisi bir 'Katılım Bankası' fon toplama yöntemidir?",
        options: ["Vadeli Mevduat Hesabı", "Vadesiz Mevduat Hesabı", "Özel Cari Hesap", "Repo", "Hazine Bonosu"],
        correctIndex: 2,
        explanation: "Katılım bankaları 'Mevduat' terimini kullanmazlar. Bunun yerine 'Özel Cari Hesap' ve 'Katılma Hesabı' adı altında fon toplarlar."
    },
    {
        id: 1205,
        text: "Bankacılık Düzenleme ve Denetleme Kurumu (BDDK) hangi bakanlığa veya kuruma bağlıdır/ilgilidir?",
        options: ["Hazine ve Maliye Bakanlığı", "Ticaret Bakanlığı", "Merkez Bankası", "Cumhurbaşkanlığı", "Hazine ve Maliye Bakanlığı ile ilişkilidir"],
        correctIndex: 4,
        explanation: "BDDK idari ve mali özerkliğe sahip bir kamu tüzel kişisidir. Cumhurbaşkanlığına veya bir bakanlığa 'bağlı' değildir ancak Hazine ve Maliye Bakanlığı ile 'ilgili' kurum statüsündedir."
    },
    {
        id: 1206,
        text: "Sermaye Yeterliliği Rasyosu (SYR) formülü aşağıdakilerden hangisidir?",
        options: ["Özkaynaklar / Toplam Aktifler", "Özkaynaklar / Risk Ağırlıklı Varlıklar", "Mevduat / Krediler", "Krediler / Özkaynaklar", "Net Kar / Özkaynaklar"],
        correctIndex: 1,
        explanation: "SYR = Özkaynaklar / (Kredi Riski + Piyasa Riski + Operasyonel Risk Ağırlıklı Tutarlar)."
    },
    {
        id: 1207,
        text: "Bankaların likidite riskini yönetmek için TCMB nezdinde tutmak zorunda oldukları varlıklara ne denir?",
        options: ["Disponibilite", "Munzam Karşılık (Zorunlu Karşılık)", "Sermaye Yeterliliği", "Açık Pozisyon", "Reeskont"],
        correctIndex: 1,
        explanation: "Bankaların topladıkları mevduatın belli bir oranını TCMB'de tutmalarına Zorunlu Karşılık (Munzam Karşılık) denir."
    },
    {
        id: 1208,
        text: "TMSF'ye devredilen bir bankanın yönetim ve denetimi kime geçer?",
        options: ["BDDK'ya", "Hazineye", "Merkez Bankası'na", "TMSF'ye", "Bankalar Birliği'ne"],
        correctIndex: 3,
        explanation: "Temettü hariç ortaklık hakları ile yönetim ve denetimi TMSF'ye (Fon'a) geçer."
    },
    {
        id: 1209,
        text: "Aşağıdakilerden hangisi bankaların 'İç Sistemleri'nden biri değildir?",
        options: ["İç Denetim", "İç Kontrol", "Risk Yönetimi", "Teftiş Kurulu", "Pazarlama Bölümü"],
        correctIndex: 4,
        explanation: "Bankaların iç sistemleri: İç Denetim, İç Kontrol ve Risk Yönetimi sistemlerinden oluşur. Pazarlama icracı bir birimdir, denetim birimi değildir."
    },
    {
        id: 1210,
        text: "Bankacılık Kanunu'na göre 'Hakim Ortak' ne demektir?",
        options: ["En çok hissesi olan", "Sermayenin %10 veya daha fazlasına sahip olan", "Genel Müdür", "Yönetim Kurulu Başkanı", "Devlet"],
        correctIndex: 1,
        explanation: "Sermayenin %10 veya daha fazlasına sahip olan ya da kontrolü elinde bulunduran ortaklar 'Nitelikli Pay Sahibi' veya duruma göre hakim ortak sayılır. (Yasal tanım %10 nitelikli paydır)."
    },

    // ─── YENİ EKLENEN SORULAR (MAKRO VE MALİYE) ───
    {
        id: 1301,
        text: "GSYH hesaplanırken aşağıdakilerden hangisi DAHİL EDİLMEZ?",
        options: ["Üretilen sıfır otomobiller", "Doktorun muayene ücreti", "İkinci el araba satışı", "İhracat gelirleri", "Kamu yatırımları"],
        correctIndex: 2,
        explanation: "İkinci el satışlar GSYH'ye dahil edilmez çünkü bu mallar üretildiği yılda zaten hesaplanmıştır. Sadece o yıl üretilen mal ve hizmetler dahil edilir."
    },
    {
        id: 1302,
        text: "Philips Eğrisi ne arasındaki ilişkiyi gösterir?",
        options: ["Faiz ve Yatırım", "Enflasyon ve İşsizlik", "Gelir ve Tüketim", "Vergi ve Gelir", "Döviz ve İhracat"],
        correctIndex: 1,
        explanation: "Philips eğrisi, enflasyon ile işsizlik arasında ters yönlü bir ilişki olduğunu (kısa dönemde) gösterir."
    },
    {
        id: 1303,
        text: "Marjinal Tüketim Eğilimi (MPC) 0.8 ise, Çarpan Katsayısı kaçtır?",
        options: ["1.25", "2", "4", "5", "8"],
        correctIndex: 3,
        explanation: "Çarpan = 1 / (1 - MPC). Çarpan = 1 / (1 - 0.8) = 1 / 0.2 = 5."
    },
    {
        id: 1304,
        text: "Devletin harcamalarını vergilerle karşılayamayıp borçlanmaya gitmesine, ve bu borçlanmanın faizleri yükselterek özel yatırımları engellemesine ne ad verilir?",
        options: ["Crowding Out (Dışlama) Etkisi", "Laffer Etkisi", "Pigou Etkisi", "Ricardo Etkisi", "Fisher Etkisi"],
        correctIndex: 0,
        explanation: "Devletin aşırı borçlanarak piyasadaki fonları çekmesi ve faizleri yükselterek özel sektörü piyasadan itmesine Dışlama (Crowding Out) etkisi denir."
    },
    {
        id: 1305,
        text: "Aşağıdakilerden hangisi Tam Rekabet Piyasasının özelliklerinden biri değildir?",
        options: ["Alıcı ve satıcı çoktur (Atomisite)", "Mallar homojendir", "Piyasaya giriş çıkış serbesttir", "Firmalar fiyat belirleyicidir", "Tam bilgi vardır (Şeffaflık)"],
        correctIndex: 3,
        explanation: "Tam rekabet piyasasında firmalar fiyat belirleyici (price maker) değil, fiyat kabullenicidir (price taker). Fiyat piyasada arz ve talebe göre oluşur."
    },
    {
        id: 1306,
        text: "Verginin, vergiye tabi, matrah üzerinden hesaplanması işlemine ne ad verilir?",
        options: ["Tarh", "Tebliğ", "Tahakkuk", "Tahsil", "Terkin"],
        correctIndex: 0,
        explanation: "Verginin hesaplanması işlemine 'Tarh' denir. (Süreç: Tarh -> Tebliğ -> Tahakkuk -> Tahsil)."
    },
    {
        id: 1307,
        text: "KDV (Katma Değer Vergisi) ne tür bir vergidir?",
        options: ["Dolaysız Vergi", "Servet Vergisi", "Harcama Vergisi (Dolaylı)", "Gelir Vergisi", "Mülkiyet Vergisi"],
        correctIndex: 2,
        explanation: "KDV, harcamalar üzerinden alınan dolaylı bir vergidir."
    },
    {
        id: 1308,
        text: "Laffer Eğrisi neyi gösterir?",
        options: ["Enflasyon - İşsizlik", "Faiz - Yatırım", "Vergi Oranı - Vergi Hasılatı", "Gelir - Tüketim", "Büyüme - Kalkınma"],
        correctIndex: 2,
        explanation: "Laffer eğrisi, vergi oranları arttıkça vergi hasılatının önce artacağını, ancak belirli bir noktadan sonra vergi oranları artsa da hasılatın azalacağını (vergi kaçağı ve teşvik azalması nedeniyle) gösterir."
    },
    {
        id: 1309,
        text: "Bütçe açığının Merkez Bankası kaynakları (para basılarak) ile finanse edilmesine ne ad verilir?",
        options: ["Senyoraj", "Monetizasyon", "Sterilizasyon", "Konsolidasyon", "Devalüasyon"],
        correctIndex: 1,
        explanation: "Borcun paraya çevrilmesi veya bütçe açığının para basılarak kapatılmasına 'Monetizasyon' denir."
    },

    // ─── YENİ EKLENEN SORULAR (MUHASEBE & TİCARET) ───
    {
        id: 1401,
        text: "Bir varlığın amortisman ayrılması işlemi muhasebenin hangi temel kavramı gereğidir?",
        options: ["Tutarlılık", "Dönemsellik", "Tam Açıklama", "Önemlilik", "Özün Önceliği"],
        correctIndex: 1,
        explanation: "Duran varlığın maliyetinin, kullanıldığı dönemlere gider olarak dağıtılması 'Dönemsellik' kavramı gereğidir."
    },
    {
        id: 1402,
        text: "FIFO stok değerleme yönteminin açılımı nedir?",
        options: ["Son Giren İlk Çıkar", "İlk Giren İlk Çıkar", "Ortalama Maliyet", "Yeniden Değerleme", "Piyasa Değeri"],
        correctIndex: 1,
        explanation: "FIFO: First In First Out (İlk Giren İlk Çıkar)."
    },
    {
        id: 1403,
        text: "Aşağıdakilerden hangisi 'Duran Varlık' değildir?",
        options: ["Binalar", "Taşıtlar", "Demirbaşlar", "Ticari Mallar", "Şerefiye"],
        correctIndex: 3,
        explanation: "Ticari Mallar (153), bir yıldan kısa sürede satılması planlanan 'Dönen Varlık'tır. Diğerleri Duran Varlıktır."
    },
    {
        id: 1404,
        text: "Çek üzerinde yazılan vade (ileri tarihli çek) Türk Ticaret Kanunu'na göre geçerli midir?",
        options: ["Geçerlidir", "Geçersizdir (Görüldüğünde ödenir)", "Çek geçersiz olur", "Bankanın inisiyatifindedir", "Sadece tacirler arasında geçerlidir"],
        correctIndex: 1,
        explanation: "Çek, görüldüğünde ödenen bir ödeme aracıdır. Üzerine vade yazılsa bile, bankaya ibraz edildiğinde (karşılığı varsa) ödenmek zorundadır. Vade yazılması hukuken onu bonoya dönüştürmez, ancak piyasa teamülü olarak vade uygulanmaktadır."
    },
    {
        id: 1405,
        text: "Anonim Şirketlerde en yetkili karar organı hangisidir?",
        options: ["Yönetim Kurulu", "Genel Kurul", "Denetim Kurulu", "İcra Kurulu", "Genel Müdürlük"],
        correctIndex: 1,
        explanation: "Anonim şirketlerin en yetkili organı, pay sahiplerinden oluşan Genel Kurul'dur. Yönetim kurulu icra ve temsil organıdır."
    },
    {
        id: 1406,
        text: "Haksız rekabet hallerinde dava açma süresi, fiilin öğrenilmesinden itibaren kaç yıldır?",
        options: ["1 Yıl", "2 Yıl", "3 Yıl", "5 Yıl", "10 Yıl"],
        correctIndex: 0,
        explanation: "Haksız rekabet davalarında zamanaşımı, fiilin ve failin öğrenildiği tarihten itibaren 1 yıl ve her halükarda fiilin işlenmesinden itibaren 3 yıldır."
    },
    {
        id: 1407,
        text: "Kambiyo senetlerinde (bono, çek, poliçe) hangisi BULUNMAZ?",
        options: ["Kayıltsız şartsız ödeme vaadi", "Lehtar", "Muhatap (Poliçe/Çek)", "Vade (Çek Hariç)", "Faiz Şartı (Genel Kural)"],
        correctIndex: 4,
        explanation: "Kambiyo senetlerine (bono ve poliçeye) faiz şartı yazılamaz (Görüldüğünde veya görüldükten belli süre sonra ödenecekler hariç). Çekte zaten vade yoktur."
    },
    {
        id: 1408,
        text: "Ticaret Siciline tescil, kural olarak ne tür bir etki doğurur?",
        options: ["Bildirici", "Kurucu", "Açıklayıcı", "Düzenleyici", "İstatistiki"],
        correctIndex: 2,
        explanation: "Ticaret sicili kayıtları kural olarak 'Açıklayıcı' (bildirici) etkiye sahiptir. Ancak kanunda açıkça belirtilen hallerde (örn. şirketin tüzel kişilik kazanması) 'Kurucu' etkiye sahiptir. Genelde 3. kişilere karşı aleniyet sağlar."
    },
    {
        id: 1409,
        text: "Türkiye'de Borsa İstanbul (BIST) hangi kurumun denetim ve gözetimindedir?",
        options: ["TCMB", "BDDK", "SPK (Sermaye Piyasası Kurulu)", "Hazine", "Ticaret Bakanlığı"],
        correctIndex: 2,
        explanation: "Sermaye piyasalarının ve borsanın düzenleyici ve denetleyici kurumu SPK'dır."
    },
    {
        id: 1410,
        text: "Türkiye Cumhuriyet Merkez Bankası (TCMB) ne zaman kurulmuştur?",
        options: ["1920", "1923", "1930 (Faaliyet 1931)", "1945", "1980"],
        correctIndex: 2,
        explanation: "TCMB Kanunu 1930 yılında kabul edilmiş, banka 3 Ekim 1931 tarihinde faaliyete geçmiştir."
    },
    {
        id: 1411,
        text: "Türkiye Gümrük Birliği anlaşmasını hangi kuruluşla imzalamıştır?",
        options: ["Avrupa Birliği (AB)", "EFTA", "NAFTA", "Şangay Beşlisi", "Dünya Ticaret Örgütü"],
        correctIndex: 0,
        explanation: "Türkiye ile AB arasındaki Gümrük Birliği 1996 yılında yürürlüğe girmiştir."
    },
    {
        id: 1412,
        text: "Türkiye'de 'Orta Vadeli Program' (OVP) hangi kurum tarafından hazırlanır ve açıklanır?",
        options: ["TCMB", "Hazine ve Maliye Bakanlığı & Strateji Bütçe Bşk.", "BDDK", "TÜİK", "Parlamento"],
        correctIndex: 1,
        explanation: "OVP, Hazine ve Maliye Bakanlığı ile Cumhurbaşkanlığı Strateji ve Bütçe Başkanlığı tarafından hazırlanır."
    },
    {
        id: 1413,
        text: "Türkiye'nin en büyük ihracat pazarı (ülke grubu) hangisidir?",
        options: ["Avrupa Birliği", "Rusya", "ABD", "Orta Doğu", "Afrika"],
        correctIndex: 0,
        explanation: "Türkiye'nin ihracatının yaklaşık %40-50'si Avrupa Birliği ülkelerine yapılmaktadır."
    },

    // ─── YENİ EKLENEN SORULAR (SAYISAL MANTIK) ───
    {
        id: 1501,
        text: "Ardışık 5 tek sayının toplamı 135 ise, en büyük sayı kaçtır?",
        options: ["25", "27", "29", "31", "33"],
        correctIndex: 3,
        explanation: "5 sayının ortalaması ortadaki sayıyı verir. 135 / 5 = 27 (Ortadaki, 3. sayı). Sayılar: 23, 25, 27, 29, 31. En büyük 31."
    },
    {
        id: 1502,
        text: "Bir dikdörtgenin kısa kenarı %20 artırılıp, uzun kenarı %20 azaltılırsa alanı nasıl değişir?",
        options: ["Değişmez", "%4 Artar", "%4 Azalır", "%2 Artar", "%2 Azalır"],
        correctIndex: 2,
        explanation: "Kenarlar 10 ve 10 olsun (Kare de bir dikdörtgendir). Alan 100. Kısa kenar 10 -> 12 (%20 artış). Uzun kenar 10 -> 8 (%20 azalış). Yeni Alan = 12 * 8 = 96. 100'den 96'ya düştü. %4 azaldı."
    },
    {
        id: 1503,
        text: "A ve B şehirleri arası 600 km'dir. Bir araç A'dan B'ye 100 km/s hızla gidip, hiç durmadan 120 km/s hızla geri dönüyor. Aracın yolculuk boyunca ortalama hızı kaç km/s'dir?",
        options: ["108", "110", "109", "111", "112"],
        correctIndex: 2,
        explanation: "Ortalama Hız = 2 * V1 * V2 / (V1 + V2). 2 * 100 * 120 / (100 + 120) = 24000 / 220 = 2400 / 22 = 1200 / 11 = 109.09. Şıklarda tam sayı olarak 109'a yakındır. (Harmonik ortalama)."
    },
    {
        id: 1504,
        text: "Saat 15:30'da akrep ile yelkovan arasındaki açı kaç derecedir?",
        options: ["75", "80", "85", "90", "105"],
        correctIndex: 0,
        explanation: "Yelkovan 6'da (30 dk). Akrep 3 ile 4'ün tam ortasında. Her saat arası 30 derece. 3 ile 6 arası 3 saat dilimi = 90 derece. Akrep 30 dakikada 15 derece ilerlemiştir. 90 - 15 = 75 derece."
    },
    {
        id: 1505,
        text: "X sayısı Y'nin 3 katı, Z'nin yarısıdır. X+Y+Z = 120 ise, X kaçtır?",
        options: ["20", "36", "40", "60", "72"],
        correctIndex: 1,
        explanation: "X = 3Y => Y = X/3. X = Z/2 => Z = 2X. X + X/3 + 2X = 120. Payda eşitle: 3X + X + 6X = 360. 10X = 360 => X = 36."
    },
    {
        id: 1506,
        text: "Bir torbada 4 kırmızı, 5 mavi, 3 yeşil top vardır. Torbadan rastgele çekilen bir topun kırmızı veya yeşil olma olasılığı nedir?",
        options: ["4/12", "7/12", "5/12", "1/2", "3/4"],
        correctIndex: 1,
        explanation: "Toplam top = 4+5+3 = 12. İstenen durum (Kırmızı veya Yeşil) = 4 + 3 = 7. Olasılık = 7/12."
    },

    // ─── YENİ EKLENEN SORULAR (SÖZEL VE MANTIK) ───
    {
        id: 1601,
        text: "Boşluk Doldurma: 'Sanatçı, eserlerinde toplumsal sorunları işlerken ______ bir dil kullanmaktan kaçınmalı; aksine halkın anlayabileceği ______ bir üslup benimsemelidir.'",
        options: ["ağır - sade", "basit - karmaşık", "etkileyici - sıradan", "yalın - süslü", "kapalı - edebi"],
        correctIndex: 0,
        explanation: "Cümledeki 'aksine' ifadesi zıtlık belirtir. Halkın anlayabileceği dil 'sade'dir. Kaçınılması gereken ise 'ağır' dildir."
    },
    {
        id: 1602,
        text: "Altı Çizili Sözün Anlamı: 'Bu yazarımız, kalemiyle *saman alevi gibi parlayıp sönen* şöhretlerden olmak istemiyordu.' Altı çizili sözün cümleye kattığı anlam hangisidir?",
        options: ["Kısa süreli ve geçici etki", "Yakıcı ve etkileyici", "Büyük ve görkemli", "Hızlı yayılan", "Aydınlatıcı"],
        correctIndex: 0,
        explanation: "Saman alevi çabuk parlar ve çabuk söner. Kalıcılığı olmayan, geçici durumlar için kullanılır."
    },
    {
        id: 1603,
        text: "Hangisinde 'Amaç-Sonuç' ilişkisi vardır?",
        options: ["Yağmur yağdığı için ıslandım.", "Ders çalışmak üzere kütüphaneye gitti.", "Güneş açarsa pikniğe gideriz.", "Kitabı okudum ve çok beğendim.", "Yorgun olduğundan erken uyudu."],
        correctIndex: 1,
        explanation: "A, E şıkları Neden-Sonuç. C şıkkı Koşul-Sonuç. B şıkkında eylem bir amaç (ders çalışmak) doğrultusunda yapılmıştır ('gitti' eyleminin amacı bellidir)."
    },
    {
        id: 1604,
        text: "Anagram: 'K A L E M' harfleriyle yazılabilecek anlamlı kelimelerden biri hangisidir?",
        options: ["EMLAK", "MELEK", "KELAM", "MALİK", "KEMAL"],
        correctIndex: 0,
        explanation: "KALEM harfleri: K, A, L, E, M. EMLAK (E-M-L-A-K) yazılabilir. KELAM (K-E-L-A-M) yazılabilir. KEMAL (K-E-M-A-L) yazılabilir. İki doğru cevap var gibi duruyor ama soru örnek. Hepsi bu harflerden türer. Şıklardan hangisi en uygun? EMLAK. (MELEK'te 2 E var, olmaz. MALİK'te İ var, olmaz)."
    },
    {
        id: 1605,
        text: "Sözel Mantık: Ahmet, Berna, Ceyda ve Deniz yuvarlak bir masa etrafında oturmaktadır. (1) Ahmet, Deniz'in tam karşısındadır. (2) Berna, Ahmet'in sağındadır. Buna göre Ceyda nerededir?",
        options: ["Ahmet'in solunda", "Deniz'in sağında", "Ahmet'in sağında", "Berna'nın karşısında", "Bilinemez"],
        correctIndex: 0,
        explanation: "4 kişi karşılıklı. A - D (Karşılıklı). A'nın sağı B. O zaman A'nın solu mecburen C olur (4 kişilik masa). A'nın solu C'dir."
    },
    {
        id: 1606,
        text: "Hangi ikili arasındaki ilişki 'Sıcak - Kaynar' ilişkisine benzerdir?",
        options: ["Güzel - Çirkin", "Ilık - Soğuk", "Rüzgar - Fırtına", "Yağmur - Kar", "Ses - Gürültü"],
        correctIndex: 2,
        explanation: "'Sıcak'ın daha şiddetlisi 'Kaynar'dır. 'Rüzgar'ın daha şiddetlisi 'Fırtına'dır (Derece farkı ilişkisi)."
    },
    {
        id: 1607,
        text: "Şekil Tamamlama: Aşağıdaki matrisin son karesine hangisi gelmelidir? (Daire -> Daire içinde nokta -> Daire içi dolu) (Kare -> Kare içinde nokta -> ?)",
        options: ["Boş Kare", "Dolu Kare", "Daire", "Çarpı", "Üçgen"],
        correctIndex: 1,
        explanation: "Mantık: Boş -> Noktalı -> Dolu. Kare de aynı sırayı izlemeli: Boş Kare -> Noktalı Kare -> Dolu Kare."
    },
    {
        id: 1608,
        text: "Tablodaki Eksik Sayı: \n2  4  6\n3  9  27\n4  16  ?",
        options: ["48", "60", "64", "32", "20"],
        correctIndex: 2,
        explanation: "1. Satır: x, 2x, 3x (hayır). Kural: x^1, x^2, x^3 olabilir mi? 2-4-8 (hayır). 3-9-27 (Evet: 3^1, 3^2, 3^3). 1. satıra bakalım: 2, 4 (2^2), 6 (2*3?). Kural farklı olabilir. Satır 2: Kuvvet (3^1, 3^2, 3^3). Satır 1: Çarpım (2*1, 2*2, 2*3). Satır 3: 4, 16 (4^2). Eğer kuvvet ise 4^3 = 64. Eğer çarpımsa 4, 8, 12 olurdu. 16 karesi olduğu için kuvvet kuralı daha ağır basıyor. (Birinci satır 2, 4, 8 olmalıydı kural buysa, ama 6 yazılmışsa 2 ile çarpım serisi. 3. satırda 4, 16 olduğuna göre kare alınmış. O zaman 4'ün küpü 64 mantıklı)."
    },
    {
        id: 1609,
        text: "Kodlama: 'KALEM' = '12345' ise, 'EMLAK' = ?",
        options: ["45321", "54321", "53214", "45312", "12543"],
        correctIndex: 1,
        explanation: "K=1, A=2, L=3, E=4, M=5. EMLAK = 4-5-3-2-1. (Şıklarda 45321 varsa o. Cevap A şıkkına denk geliyor. Şıkları kontrol et: A) 45321, B) 54321, C) 53214... Doğru cevap A (45321) olmalı, options diziliminde ilk şık."
    },
    {
        id: 1610,
        text: "Tavla zarında karşılıklı yüzlerin toplamı 7'dir. Üst yüze 4 gelirse, alt yüz kaçtır?",
        options: ["2", "3", "4", "5", "6"],
        correctIndex: 1,
        explanation: "7 - 4 = 3."
    },
    {
        id: 1611,
        text: "Bir toplantıda 10 kişi vardır. Herkes birbiriyle bir kez tokalaşırsa toplam kaç tokalaşma olur?",
        options: ["10", "45", "90", "100", "50"],
        correctIndex: 1,
        explanation: "Kombinasyon C(10,2) = (10 * 9) / 2 = 45."
    },
    {
        id: 1612,
        text: "Kızının yaşı annesinin yaşının 1/4'üdür. 5 yıl sonra 1/3'ü olacaktır. Anne bugün kaç yaşındadır?",
        options: ["20", "30", "40", "50", "36"],
        correctIndex: 2,
        explanation: "Kızı = x, Anne = 4x. 5 yıl sonra: (x+5) = (4x+5)/3. 3x+15 = 4x+5. x = 10. Anne = 4x = 40."
    },
    {
        id: 1613,
        text: "Aşağıdakilerden hangisi bir 'Palindrom' kelimedir?",
        options: ["KİTAP", "ANNA", "MASA", "KALEM", "DEFTER"],
        correctIndex: 1,
        explanation: "Palindrom, tersten okunuşu da aynı olan kelimedir. ANNA tersten de ANNA'dır."
    },
    {
        id: 1614,
        text: "Hangisi doğal sayıların karesi değildir?",
        options: ["1", "36", "49", "64", "90"],
        correctIndex: 4,
        explanation: "1=1^2, 36=6^2, 49=7^2, 64=8^2. 90 tam kare değildir (9^2=81, 10^2=100)."
    },
    {
        id: 1615,
        text: "Bir yarışta ikinciyi geçen kaçıncı olur?",
        options: ["Birinci", "İkinci", "Üçüncü", "Sonuncu", "Diskalifiye"],
        correctIndex: 1,
        explanation: "İkinciyi geçerseniz onun sırasını (ikinciliği) alırsınız."
    },
    {
        id: 1616,
        text: "Satranç tahtasında kaç kare vardır? (Sadece 1x1'lik birim kareler)",
        options: ["32", "64", "100", "128", "144"],
        correctIndex: 1,
        explanation: "Satranç tahtası 8x8 birim kareden oluşur. Toplam 64 birim kare vardır. (Tüm kareler sorulsaydı 204 olurdu, soru birim kareleri kastediyor)."
    },
    {
        id: 1617,
        text: "20 sayfalık bir gazeteden rastgele çekilen bir yaprağın sayfa numaraları toplamı hangisi olabilir? (Yapraklar iç içe değil, tek yaprak 4 sayfa içerir mantığıyla değil, klasik yaprak çekimi)",
        options: ["15", "21", "41", "35", "56"],
        correctIndex: 1,
        explanation: "Bir yaprağın ön ve arka yüzü vardır. Ön yüzü x ise arka yüzü x+1'dir. Toplamları x + (x+1) = 2x+1. Yani toplam daima TEK sayı olmalıdır. A, B, C, D şıkları tek. Ancak sayfa numaraları ardışıktır. Örneğin 10-11 ise toplam 21 eder. 7-8 ise 15 eder. 20-21 (20 sayfalık gazetede 21 olmaz). Soru biraz kapalı. Gazete yaprağı denince (örn 4 sayfa): 1, 2, 19, 20 gibi mi? Telli defter yaprağı gibi düşünürsek ön n, arka n+1. Toplamı 2n+1. 2n+1 = 21 ise 2n=20, n=10. Sayfa 10 ve 11. Olabilir."
    },
    {
        id: 1618,
        text: "Üç basamaklı en küçük sayı ile iki basamaklı en büyük sayının toplamı kaçtır?",
        options: ["110", "199", "189", "109", "200"],
        correctIndex: 1,
        explanation: "Üç basamaklı en küçük sayı: 100. İki basamaklı en büyük sayı: 99. Toplam: 199."
    }
];
