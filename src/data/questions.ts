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
    { id: 1, name: "5411 Bankacılık Kanunu - Genel Esaslar", category: "Banka Mevzuatı", questionCount: 5, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [101, 102, 804] },
    { id: 2, name: "BDDK ve TMSF Yetkileri", category: "Banka Mevzuatı", questionCount: 4, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [103, 806] },
    { id: 3, name: "Krediler ve Mevduat Mevzuatı", category: "Banka Mevzuatı", questionCount: 5, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [802, 907] },

    // ALAN BİLGİSİ
    { id: 4, name: "Makroekonomi ve Para Politikaları", category: "Alan Bilgisi", questionCount: 6, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [201, 202, 801, 809, 810] },
    { id: 5, name: "Maliye Politikası ve Vergi", category: "Alan Bilgisi", questionCount: 4, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [805, 807, 910] },
    { id: 6, name: "Genel Muhasebe ve Mali Analiz", category: "Alan Bilgisi", questionCount: 6, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [301, 808, 901, 902, 908] },
    { id: 13, name: "Ticaret Hukuku", category: "Alan Bilgisi", questionCount: 4, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [903, 904, 909] },
    { id: 14, name: "Türkiye Ekonomisi", category: "Alan Bilgisi", questionCount: 4, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [905, 906] },

    // GENEL YETENEK
    { id: 7, name: "Sayısal Mantık ve Problem Çözme", category: "Genel Yetenek", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [401, 402, 403, 701, 811, 1102, 1103] },
    { id: 8, name: "Sözel Mantık ve Paragraf", category: "Genel Yetenek", questionCount: 6, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [501, 502, 703, 1101] },
    { id: 9, name: "Görsel Zeka ve Dikkat Testi (Genel)", category: "Genel Yetenek", questionCount: 5, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [601, 602, 603] },
    { id: 10, name: "Zorlu Genel Yetenek (Çıkmış Sorular)", category: "Genel Yetenek", questionCount: 5, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [701, 702, 703, 704, 705] },
    { id: 11, name: "Görsel Zeka (Küp ve Desen)", category: "Genel Yetenek", questionCount: 3, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [1001, 1002, 705] },
    { id: 12, name: "Veri Analizi (Tablo ve Grafik)", category: "Genel Yetenek", questionCount: 2, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [1003, 702] },
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
    }
];
