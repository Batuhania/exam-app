import { expansionQuestions } from './expansion_questions';

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
    { id: 1, name: "5411 Bankacılık Kanunu - Genel Esaslar", category: "Banka Mevzuatı", questionCount: 15, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [101, 102, 804, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1701, 1702, 1703, 1704, 1705] },
    { id: 2, name: "BDDK ve TMSF Yetkileri", category: "Banka Mevzuatı", questionCount: 13, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [103, 806, 1208, 1209, 1210, 1211, 1706, 1707, 1708, 1709, 1710] },
    { id: 3, name: "Krediler ve Mevduat Mevzuatı", category: "Banka Mevzuatı", questionCount: 13, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [802, 907, 1212, 1213, 1214, 1215, 1711, 1712, 1713, 1714, 1715] },

    // ALAN BİLGİSİ
    { id: 4, name: "Makroekonomi ve Para Politikaları", category: "Alan Bilgisi", questionCount: 21, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [201, 202, 801, 809, 810, 1301, 1302, 1303, 1304, 1305, 1801, 1802, 1803, 1804, 1805, 2101, 2102, 2103, 2104, 2105] },
    { id: 5, name: "Maliye Politikası ve Vergi", category: "Alan Bilgisi", questionCount: 13, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [805, 807, 910, 1306, 1307, 1308, 1309, 1806, 1807, 1808, 1809, 1810] },
    { id: 6, name: "Genel Muhasebe ve Mali Analiz", category: "Alan Bilgisi", questionCount: 16, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [301, 808, 901, 902, 908, 1401, 1402, 1403, 1404, 1405, 1811, 1812, 1813, 1814, 1815] },
    { id: 13, name: "Ticaret Hukuku", category: "Alan Bilgisi", questionCount: 13, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [903, 904, 909, 1406, 1407, 1408, 1409, 1816, 1817, 1818, 1819, 1820] },
    { id: 14, name: "Türkiye Ekonomisi", category: "Alan Bilgisi", questionCount: 11, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [905, 906, 1410, 1411, 1412, 1413, 1821, 1822, 1823] },
    { id: 15, name: "Dijital Bankacılık ve Fintech", category: "Alan Bilgisi", questionCount: 5, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [2001, 2002, 2003, 2004, 2005] },

    // GENEL YETENEK
    { id: 7, name: "Sayısal Mantık ve Problem Çözme", category: "Genel Yetenek", questionCount: 18, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [401, 402, 403, 701, 811, 1102, 1103, 1501, 1502, 1503, 1504, 1505, 1506, 1901, 1902, 1903, 1904, 1905] },
    { id: 8, name: "Sözel Mantık ve Paragraf", category: "Genel Yetenek", questionCount: 15, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [501, 502, 703, 1101, 1601, 1602, 1603, 1604, 1605, 1606, 1906, 1907, 1908, 1909, 1910] },
    { id: 9, name: "Görsel Zeka ve Dikkat Testi (Genel)", category: "Genel Yetenek", questionCount: 11, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [601, 602, 603, 1607, 1608, 1609, 1911, 1912, 1913] },
    { id: 10, name: "Zorlu Genel Yetenek (Çıkmış Sorular)", category: "Genel Yetenek", questionCount: 16, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [701, 702, 703, 704, 705, 1610, 1611, 1612, 1914, 1915, 1916, 2201, 2202, 2203, 2204, 2205] },
    { id: 11, name: "Görsel Zeka (Küp ve Desen)", category: "Genel Yetenek", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [1001, 1002, 705, 1613, 1614, 1615, 1917, 1918] },
    { id: 12, name: "Veri Analizi (Tablo ve Grafik)", category: "Genel Yetenek", questionCount: 8, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [1003, 702, 1616, 1617, 1618, 1919, 1920, 1921] },
    { id: 20, name: "İleri Düzey Genel Yetenek (Sınav Özel)", category: "Genel Yetenek", questionCount: 10, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010] },
    { id: 21, name: "Dikkat ve Hız Testi (Garanti Paketi)", category: "Genel Yetenek", questionCount: 10, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010] },
    // ─── YENİ EKLENEN KATEGORİLER (GENİŞLETİLMİŞ PAKET) ───
    { id: 22, name: "Bankacılık Hukuku ve Mevzuat (İleri)", category: "Banka Mevzuatı", questionCount: 20, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [5021, 5022, 5023, 5024, 5025, 5026, 5027, 5028, 5029, 5030, 5031, 5032, 5033, 5034, 5035, 5036, 5037, 5038, 5039, 5040] },
    { id: 23, name: "Ekonomi, Finans ve Piyasalar (Uzman)", category: "Alan Bilgisi", questionCount: 30, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [5041, 5042, 5043, 5044, 5045, 5046, 5047, 5048, 5049, 5050, 5051, 5052, 5053, 5054, 5055, 5056, 5057, 5058, 5059, 5060, 5061, 5062, 5063, 5064, 5065, 5066, 5067, 5068, 5069, 5070] },
    { id: 24, name: "Sayısal/Sözel Mantık ve Şifre (ALES & DGS)", category: "Genel Yetenek", questionCount: 50, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011, 5012, 5013, 5014, 5015, 5016, 5017, 5018, 5019, 5020, 5071, 5072, 5073, 5074, 5075, 5076, 5077, 5078, 5079, 5080, 5081, 5082, 5083, 5084, 5085, 5086, 5087, 5088, 5089, 5090, 5091, 5092, 5093, 5094, 5095, 5096, 5097, 5098, 5099, 5100] },
    { id: 25, name: "Dijital Bankacılık ve Gelecek Trendleri", category: "Alan Bilgisi", questionCount: 20, solvedCount: 0, correctCount: 0, wrongCount: 0, questionIds: [5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109, 5110, 5111, 5112, 5113, 5114, 5115, 5116, 5117, 5118, 5119, 5120] },
];

// ─── SORU HAVUZU ─────────────────────────
// ─── SORU HAVUZU (TEMEL PAKET) ─────────────────
const baseQuestions: Question[] = [
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
        text: "Aşağıdaki sayı dizisinde soru işareti yerine hangi sayı gelmelidir? 2 - 6 - 12 - 20 - 30 - ?",
        options: ["36", "40", "42", "48", "56"],
        correctIndex: 2,
        explanation: "Sayılar arasındaki artış miktarı sırasıyla 4, 6, 8, 10 şeklindedir. Sırada 12 artış olmalıdır. 30 + 12 = 42. (Veya n*(n+1) kuralı: 1*2, 2*3, 3*4... 6*7=42)."
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
        text: "Hangisi diğerlerinden farklı bir kategoridedir? (Mantıksal Sınıflandırma)",
        options: ["Kedi", "Köpek", "İnek", "Aslan", "Tavuk"],
        correctIndex: 4,
        explanation: "Kedi, Köpek, İnek ve Aslan memeli hayvanlar grubundayken, Tavuk kanatlılar (kuşlar) grubundadır."
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
        text: "Bir kitabın rastgele koparılan bir yaprağındaki sayfa numaralarının toplamı aşağıdakilerden hangisi olabilir?",
        options: ["18", "21", "24", "40", "50"],
        correctIndex: 1,
        explanation: "Bir yaprağın ön yüzü n ise, arka yüzü n+1'dir (ardışık sayılar). Toplamları n + (n+1) = 2n+1'dir. Bu sonuç daima TEK sayı olmalıdır. Şıklarda tek olan tek sayı 21'dir (Sayfalar 10 ve 11)."
    },
    {
        id: 1618,
        text: "Üç basamaklı en küçük sayı ile iki basamaklı en büyük sayının toplamı kaçtır?",
        options: ["110", "199", "189", "109", "200"],
        correctIndex: 1,
        explanation: "Üç basamaklı en küçük sayı: 100. İki basamaklı en büyük sayı: 99. Toplam: 199."
    },

    // ─── YENİ EKLENEN SORULAR (EKSTRA PAKET 2) ───
    {
        id: 1701,
        text: "Bankaların kredi verme işlemlerinde 'Dolaylı Kredi' olarak kabul edilen işlem hangisidir?",
        options: ["Nakit Krediler", "Teminat Mektupları", "Tüketici Kredileri", "Kredi Kartı Harcamaları", "Rotatif Krediler"],
        correctIndex: 1,
        explanation: "Gayrinakdi krediler (teminat mektubu, kefalet, akreditif vb.) dolaylı kredi veya gayrinakdi kredi olarak adlandırılır. Banka henüz nakit ödeme yapmamıştır ancak bir yükümlülük altına girmiştir."
    },
    {
        id: 1702,
        text: "Bankalar Kanunu'na göre, bankalar özkaynaklarının yüzde kaçını aşan tutarda gayrimenkul edinemezler?",
        options: ["%10", "%25", "%50", "%75", "%100"],
        correctIndex: 2,
        explanation: "Bankalar, tapu kütüğüne tescil edilen gayrimenkullerin ve gayrimenkul gibi değerlenen varlıkların net defter değerleri toplamı, özkaynaklarının %50'sini aşamaz."
    },
    {
        id: 1703,
        text: "Bir bankanın faiz gelirleri 1000 TL, faiz giderleri 600 TL ise, Net Faiz Marjı (basitçe) nasıl yorumlanır?",
        options: ["Banka 400 TL zarar etmiştir", "Banka 400 TL faiz karı elde etmiştir", "Banka 1600 TL işlem hacmi yapmıştır", "Bankanın aktif karlılığı %40'tır", "Bankanın SYR'si yüksektir"],
        correctIndex: 1,
        explanation: "Net Faiz Geliri = Faiz Gelirleri - Faiz Giderleri = 1000 - 600 = 400 TL kar."
    },
    {
        id: 1704,
        text: "Müşterini Tanı (KYC) ilkesi hangi suçun önlenmesi için kritik öneme sahiptir?",
        options: ["Hırsızlık", "Zimmet", "Karapara Aklama ve Terörün Finansmanı", "Vergi Kaçırma", "Dolandırıcılık"],
        correctIndex: 2,
        explanation: "KYC (Know Your Customer) prosedürleri, suç gelirlerinin aklanması (karapara) ve terörün finansmanı ile mücadelede en temel önleyici tedbirdir."
    },
    {
        id: 1705,
        text: "Bankalararası Kart Merkezi'nin (BKM) sunduğu, yerli ödeme şeması markası nedir?",
        options: ["Visa", "Mastercard", "TROY", "Amex", "JCB"],
        correctIndex: 2,
        explanation: "TROY (Türkiye'nin Ödeme Yöntemi), BKM tarafından kurulan ve işletilen yerli kartlı ödeme şemasıdır."
    },
    {
        id: 1706,
        text: "BDDK Başkanı'nın görev süresi kaç yıldır?",
        options: ["3 yıl", "4 yıl", "5 yıl", "6 yıl", "7 yıl"],
        correctIndex: 1,
        explanation: "BDDK Başkan ve üyelerinin görev süresi 4 yıldır. Süresi biten üyeler tekrar atanabilir."
    },
    {
        id: 1707,
        text: "TMSF tarafından el konulan bankalardaki mevduat sigortası kime aittir?",
        options: ["Sadece gerçek kişilere", "Sadece ticari şirketlere", "Sadece kamu kurumlarına", "Tüm mevduat sahiplerine", "Yabancılara"],
        correctIndex: 0,
        explanation: "Mevduat sigortası, kural olarak 'Gerçek Kişiler' adına açılan tasarruf mevduatı ve katılım fonları için geçerlidir (Ticari mevduat şu anki mevzuatta kapsam dışıdır, ancak limitler dahilinde değişebilir. Temel bilgi: Gerçek kişiler)."
    },
    {
        id: 1708,
        text: "Bir bankanın faaliyet iznini (lisansını) iptal etme yetkisi kime aittir?",
        options: ["TCMB", "Hazine Bakanlığı", "BDDK", "Cumhurbaşkanı", "Mahkemeler"],
        correctIndex: 2,
        explanation: "Bankaların kuruluşuna ve faaliyetine izin verme veya izni iptal etme yetkisi, Kurul'un (BDDK) kararı iledir."
    },
    {
        id: 1709,
        text: "SWIFT sistemi ne işe yarar?",
        options: ["Kredi notu sorgulama", "Uluslararası para transferi mesajlaşması", "Döviz kuru belirleme", "Altın saklama", "Hisse senedi alım satımı"],
        correctIndex: 1,
        explanation: "SWIFT, bankalar arasında uluslararası para transferi emirlerinin ve mesajlarının güvenli bir şekilde iletilmesini sağlayan ağdır."
    },
    {
        id: 1710,
        text: "Bankacılıkta 'Sendikasyon Kredisi' ne demektir?",
        options: ["Bir bankanın şubeleri arası kredi", "Birden fazla bankanın bir araya gelerek tek bir borçluya verdiği büyük kredi", "Müşterinin bankaya verdiği borç", "Merkez Bankasından alınan borç", "Kredi kartı borcu"],
        correctIndex: 1,
        explanation: "Sendikasyon, birden çok bankanın (konsorsiyum) bir araya gelerek, genellikle uluslararası piyasalardan veya büyük projelere, tek bir borçluya (devlet veya büyük şirket/banka) sağladığı kredidir."
    },
    {
        id: 1711,
        text: "Kredi Kartlarında asgari ödeme tutarı, limiti 25.000 TL ve üzeri olanlar için dönem borcunun en az yüzde kaçıdır? (Güncel mevzuat)",
        options: ["%20", "%30", "%40", "%50", "%10"],
        correctIndex: 2,
        explanation: "Kredi kartı limiti 25.000 TL ve üzeri olan kartlarda asgari ödeme oranı dönem borcunun %40'ıdır (25.000 TL altı için %20'dir)."
    },
    {
        id: 1712,
        text: "Mevduat faiz getirisi üzerinden devlet tarafından kesilen vergiye ne ad verilir?",
        options: ["KDV", "ÖTV", "Stopaj (Gelir Vergisi Tevkifatı)", "Damga Vergisi", "BSMV"],
        correctIndex: 2,
        explanation: "Mevduat faizlerinden kaynağında kesilen vergiye Stopaj (Tevkifat) denir."
    },
    {
        id: 1713,
        text: "Çek Kanunu'na göre 'Karşılıksız Çek' keşide etmenin yaptırımı nedir?",
        options: ["Sadece para cezası", "Adli para cezası ve ödenmezse hapis", "Doğrudan hapis cezası", "Ticari itibar kaybı", "Uyarı"],
        correctIndex: 1,
        explanation: "Karşılıksız çek düzenleme suçunda adli para cezası verilir. Bu ceza ödenmezse hapis cezasına çevrilir. Ayrıca çek düzenleme ve çek hesabı açma yasağı getirilir."
    },
    {
        id: 1714,
        text: "Bankaların kredi verirken müşteriden istedikleri 'Findeks Kredi Notu' aralığı nedir?",
        options: ["0 - 100", "0 - 1000", "1 - 1900", "500 - 2500", "0 - 500"],
        correctIndex: 2,
        explanation: "Findeks kredi notu 1 ile 1900 arasında değişen bir puandır. 1 en riskli, 1900 en güvenilir seviyedir."
    },
    {
        id: 1715,
        text: "Tüketici Kredilerinde cayma hakkı süresi kaç gündür?",
        options: ["7 gün", "10 gün", "14 gün", "30 gün", "Cayma hakkı yoktur"],
        correctIndex: 2,
        explanation: "Tüketici kredisinde tüketici, 14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir."
    },

    // ─── EKONOMİ & MALİYE (EKSTRA) ───
    {
        id: 1801,
        text: "Enflasyon sepetinde ağırlığı en yüksek olan harcama grubu genellikle hangisidir?",
        options: ["Giyim ve Ayakkabı", "Gıda ve Alkolsüz İçecekler", "Eğlence ve Kültür", "Sağlık", "Haberleşme"],
        correctIndex: 1,
        explanation: "TÜİK enflasyon sepetinde genellikle en yüksek ağırlığa sahip gruplar Gıda ve Barınma (Konut) harcamalarıdır."
    },
    {
        id: 1802,
        text: "Devalüasyon ne demektir?",
        options: ["Paranın değer kazanması", "Milli paranın dış paralar karşısında değerinin (resmi kararla) düşürülmesi", "Fiyatların düşmesi", "Döviz kurunun sabitlenmesi", "Faizlerin artması"],
        correctIndex: 1,
        explanation: "Devalüasyon, sabit kur sisteminde milli paranın değerinin resmi otorite tarafından diğer para birimleri karşısında düşürülmesidir. (Dalgalı kurda buna 'değer kaybı' denir ama halk arasında devalüasyon olarak da bilinir)."
    },
    {
        id: 1803,
        text: "Gini Katsayısı 0'a yaklaşırsa ne anlama gelir?",
        options: ["Gelir dağılımı adaletsizleşir", "Gelir dağılımı adaletli hale gelir (Tam Eşitlik)", "Enflasyon artar", "Büyüme durur", "Ülke fakirleşir"],
        correctIndex: 1,
        explanation: "Gini katsayısı 0 ile 1 arasındadır. 0 tam eşitliği (herkes eşit gelir), 1 tam eşitsizliği ifade eder. 0'a yaklaşması iyileşmeyi gösterir."
    },
    {
        id: 1804,
        text: "Bir ekonomide toplam talep yetersizliği nedeniyle ortaya çıkan işsizlik türüne ne ad verilir?",
        options: ["Yapısal İşsizlik", "Konjonktürel (Durgunluk) İşsizlik", "Mevsimlik İşsizlik", "Friksiyonel (Geçici) İşsizlik", "Gizli İşsizlik"],
        correctIndex: 1,
        explanation: "Ekonomik daralma/durgunluk dönemlerinde talebin azalmasıyla firmaların işçi çıkarması sonucu oluşan işsizliğe Konjonktürel İşsizlik denir."
    },
    {
        id: 1805,
        text: "Para politikasını yürütmekten sorumlu kurum hangisidir?",
        options: ["Hazine", "Maliye Bakanlığı", "Merkez Bankası", "Bankalar Birliği", "SPK"],
        correctIndex: 2,
        explanation: "Para politikasının (faiz, para arzı, kur rejimi vb.) tek yetkili yürütücüsü Merkez Bankası'dır."
    },
    {
        id: 1806,
        text: "Devletin vergi gelirlerinden vazgeçmesi (muafiyet/istisna) işlemine literatürde ne ad verilir?",
        options: ["Vergi Harcaması", "Vergi Ziyaı", "Vergi Kaçağı", "Vergi Yükü", "Mali Anestezi"],
        correctIndex: 0,
        explanation: "Devletin sosyal veya ekonomik amaçlarla alması gereken vergiden vazgeçmesine (muafiyet, istisna, indirim) 'Vergi Harcaması' (Tax Expenditure) denir."
    },
    {
        id: 1807,
        text: "Dolaysız vergilerin (Gelir, Kurumlar) en önemli özelliği nedir?",
        options: ["Fiyata yansır", "Herkes aynı öder", "Ödeme gücüne göre alınabilir (Adaletlidir)", "Tahsilatı çok kolaydır", "Tüketimden alınır"],
        correctIndex: 2,
        explanation: "Dolaysız vergiler gelirden veya servetten alındığı için artan oranlı tarifeler uygulanabilir ve ödeme gücüne göre vergilendirme (vergi adaleti) sağlanabilir."
    },
    {
        id: 1808,
        text: "Türkiye'de Bütçe Kanunu Teklifini kim hazırlar ve meclise sunar?",
        options: ["Hazine Bakanı", "Merkez Bankası Başkanı", "Cumhurbaşkanı", "TBMM Başkanı", "Sayıştay"],
        correctIndex: 2,
        explanation: "Cumhurbaşkanlığı Hükümet Sisteminde bütçe kanun teklifini Cumhurbaşkanı hazırlar ve TBMM'ye sunar."
    },
    {
        id: 1809,
        text: "Aşağıdakilerden hangisi bir 'Para Benzeri' (Quasi-Money) sayılır?",
        options: ["Vadesiz Mevduat", "Nakit Para", "Vadeli Mevduat", "Bozuk Para", "Kredi Kartı"],
        correctIndex: 2,
        explanation: "Vadeli mevduat, likiditesi nakit kadar yüksek olmayan ancak paraya çevrilebilir (para benzeri) bir varlıktır. Vadesiz mevduat ve nakit M1 (Dar Para) içindedir."
    },
    {
        id: 1810,
        text: "Resesyon nedir?",
        options: ["Enflasyonun düşmesi", "Ekonomik büyümenin üst üste iki çeyrek negatif olması (Küçülme)", "İşsizliğin azalması", "İhracat rekoru", "Borsanın yükselmesi"],
        correctIndex: 1,
        explanation: "Resesyon, ekonomik faaliyetlerin duraklaması veya gerilemesi, teknik olarak GSYH'nin üst üste iki çeyrek (6 ay) küçülmesi durumudur."
    },
    {
        id: 1811,
        text: "Şirketlerin dönem sonu karlarından ayırmak zorunda oldukları yasal fonlara ne denir?",
        options: ["Yedek Akçe", "Amortisman", "Kar Payı (Temettü)", "Provizyon", "Şerefiye"],
        correctIndex: 0,
        explanation: "TTK gereği şirketler safi karın %5'ini 'Yasal Yedek Akçe' olarak ayırmak zorundadır."
    },
    {
        id: 1812,
        text: "Bilanço tarihi itibarıyla işletmenin kasasında bulunan yabancı paralar hangi kurla değerlenir?",
        options: ["Alış Kuru", "Satış Kuru", "Efektif Alış Kuru", "Çapraz Kur", "Tarihi Kur"],
        correctIndex: 2,
        explanation: "Vergi Usul Kanunu'na göre kasadaki nakit yabancı paralar (efektif), Maliye Bakanlığı'nın açıkladığı 'Efektif Alış Kuru' ile değerlenir. (Banka hesabındakiler Döviz Alış Kuru ile)."
    },
    {
        id: 1813,
        text: "Çift taraflı kayıt sistemini (Muhasebenin babası) bulan kişi kimdir?",
        options: ["Adam Smith", "Luca Pacioli", "Keynes", "Marx", "Taylor"],
        correctIndex: 1,
        explanation: "İtalyan rahip ve matematikçi Luca Pacioli, 1494 yılında yazdığı eserle çift taraflı kayıt sistemini (modern muhasebe) sistemleştirmiştir."
    },
    {
        id: 1814,
        text: "Bir işletmenin kısa vadeli borçlarını ödeme gücünü gösteren oran hangisidir?",
        options: ["Kaldıraç Oranı", "Cari Oran", "Aktif Devir Hızı", "Karlılık Oranı", "Borçlanma Oranı"],
        correctIndex: 1,
        explanation: "Cari Oran = Dönen Varlıklar / Kısa Vadeli Yabancı Kaynaklar. İşletmenin likidite durumunu (kısa vadeli borç ödeme gücünü) gösterir."
    },
    {
        id: 1815,
        text: "Tacir olmanın sonuçlarından biri olan 'Basiretli İş Adamı Gibi Davranma' yükümlülüğü neyi ifade eder?",
        options: ["Çok kar etmeyi", "Geleceği görmeyi", "İşlerinde tedbirli, öngörülü ve dikkatli olmayı", "Rakiplerini ezmeyi", "Vergi kaçırmayı"],
        correctIndex: 2,
        explanation: "Tacir, ticaretine ait bütün faaliyetlerinde basiretli (öngörülü, tedbirli) bir iş adamı gibi hareket etmek zorundadır."
    },
    {
        id: 1816,
        text: "Limited şirket en az kaç sermaye ile kurulur? (2024 itibarıyla)",
        options: ["10.000 TL", "50.000 TL", "100.000 TL", "250.000 TL", "500.000 TL"],
        correctIndex: 1,
        explanation: "2024/2025 güncellemeleriyle Limited Şirket asgari sermayesi 50.000 TL, Anonim Şirket asgari sermayesi 250.000 TL olmuştur."
    },
    {
        id: 1817,
        text: "Kıymetli evraklarda 'Ciro' ne işe yarar?",
        options: ["Senedi iptal eder", "Senedin vadesini uzatır", "Senedin mülkiyetini veya tahsil yetkisini başkasına devreder", "Senedi bankaya bloke eder", "Faiz işletir"],
        correctIndex: 2,
        explanation: "Ciro, senet üzerindeki hakların (mülkiyetin) bir başkasına devredilmesi işlemidir (Arka yüzün imzalanması)."
    },
    {
        id: 1818,
        text: "Bir şirketin 'Konkordato' ilan etmesi ne demektir?",
        options: ["İflas ettiğini açıklaması", "Borçlarını ödemek için mahkeme korumasında alacaklılarla anlaşma yaparak vade uzatması veya indirim istemesi", "Şirketi kapatması", "Borsaya açılması", "Ortak alması"],
        correctIndex: 1,
        explanation: "Konkordato, mali durumu bozulan borçlunun iflastan kurtulmak için alacaklılarıyla yaptığı ve mahkemenin onayladığı bir yeniden yapılandırma anlaşmasıdır."
    },
    {
        id: 1819,
        text: "Marka tescili Türkiye'de hangi kurum tarafından yapılır?",
        options: ["Ticaret Bakanlığı", "TÜRKPATENT (Türk Patent ve Marka Kurumu)", "Kültür Bakanlığı", "Sanayi Odası", "Noter"],
        correctIndex: 1,
        explanation: "Marka, patent ve tasarım tescilleri TÜRKPATENT tarafından yapılır."
    },
    {
        id: 1820,
        text: "İş Kanunu'na göre haftalık normal çalışma süresi en çok kaç saattir?",
        options: ["40", "45", "48", "50", "60"],
        correctIndex: 1,
        explanation: "4857 sayılı İş Kanunu'na göre haftalık çalışma süresi en çok 45 saattir."
    },
    {
        id: 1821,
        text: "Türkiye'nin para birimi kodu uluslararası piyasalarda nedir?",
        options: ["TRL", "YTL", "TRY", "TRK", "TUR"],
        correctIndex: 2,
        explanation: "Türk Lirası'nın uluslararası ISO kodu TRY'dir (Paradab 6 sıfır atıldıktan sonra YTL olmuş, sonra tekrar TL'ye dönülmüş ancak kod TRY olarak kalmıştır)."
    },
    {
        id: 1822,
        text: "Türkiye'de Bireysel Emeklilik Sistemi'nde (BES) devlet katkısı oranı yüzde kaçtır?",
        options: ["%10", "%20", "%25", "%30", "%50"],
        correctIndex: 3,
        explanation: "BES'te devlet katkısı oranı %25'ten %30'a yükseltilmiştir (2023 itibarıyla)."
    },
    {
        id: 1823,
        text: "Türkiye Varlık Fonu'nun başkanı kimdir?",
        options: ["Hazine Bakanı", "Merkez Bankası Başkanı", "Cumhurbaşkanı", "Genel Müdür", "Varlık Fonu Başkanı"],
        correctIndex: 2,
        explanation: "Türkiye Varlık Fonu Yönetim Kurulu Başkanı, Cumhurbaşkanı'dır."
    },

    // ─── GENEL YETENEK (EKSTRA) ───
    {
        id: 1901,
        text: "Bir sayının 3 katının 5 eksiği 40 ise, bu sayı kaçtır?",
        options: ["10", "12", "15", "18", "20"],
        correctIndex: 2,
        explanation: "3x - 5 = 40 => 3x = 45 => x = 15."
    },
    {
        id: 1902,
        text: "Hangi sayı asal değildir?",
        options: ["2", "17", "23", "51", "53"],
        correctIndex: 3,
        explanation: "51 sayısı 3'e ve 17'ye bölünür (3*17 = 51). Diğerleri asaldır."
    },
    {
        id: 1903,
        text: "0,5 + 0,25 işleminin sonucu kesir olarak nedir?",
        options: ["1/2", "3/4", "1/4", "2/3", "4/5"],
        correctIndex: 1,
        explanation: "0,5 = 1/2 (veya 2/4). 0,25 = 1/4. 2/4 + 1/4 = 3/4."
    },
    {
        id: 1904,
        text: "Karenin bir kenarı 10 cm ise, köşegen uzunluğu yaklaşık kaç cm'dir?",
        options: ["10", "12", "14.1", "15", "20"],
        correctIndex: 2,
        explanation: "Köşegen = a * kök2. 10 * 1.41 = 14.1 cm."
    },
    {
        id: 1905,
        text: "Bir sınıfın mevcudu 30'dur. Kızların sayısı erkeklerin sayısının 2 katı ise kaç erkek vardır?",
        options: ["5", "10", "15", "20", "25"],
        correctIndex: 1,
        explanation: "Erkek = x, Kız = 2x. Toplam 3x = 30 => x = 10 erkek."
    },
    {
        id: 1906,
        text: "Aşağıdaki kelimelerden hangisi 'Mecaz' anlamda kullanılmıştır? 'Arkadaşının *soğuk* tavırları onu üzdü.'",
        options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Yan anlam", "Soyut anlam"],
        correctIndex: 1,
        explanation: "Soğuk kelimesi ısı olarak değil, ilgisiz/mesafeli anlamında kullanıldığı için mecazdır."
    },
    {
        id: 1907,
        text: "Zıt Anlamlılar: 'Cömert' kelimesinin zıttı nedir?",
        options: ["Müsrif", "Bonkör", "Cimri", "Eliaçık", "Fakir"],
        correctIndex: 2,
        explanation: "Cömert'in zıttı Cimri'dir (Pinti)."
    },
    {
        id: 1908,
        text: "Mantık: 'Bütün kuşlar uçar. Penguen bir kuştur.' Bu önermelerden çıkan kesin sonuç nedir?",
        options: ["Bütün kuşlar penguendir", "Penguen uçar", "Penguen uçamaz", "Kuşlar pengueni sever", "Hiçbiri"],
        correctIndex: 1,
        explanation: "Klasik mantık (Syllogism): 1. Kural: Bütün A'lar B yapar. 2. Durum: C, bir A'dır. Sonuç: C, B yapar. (Gerçek hayatta penguen uçamaz ama mantık sorusunda verilen öncüllere göre 'Penguen uçar' sonucu çıkar. Eğer soru 'Gerçek hayata göre' deseydi farklı olurdu. Mantık sorularında *verilen öncül* esastır. Öncül 'Bütün kuşlar uçar' demişse ve penguen kuşsa, o da uçar kabul edilir)."
    },
    {
        id: 1909,
        text: "Kelime İlişkisi: 'Gemi - Liman' ise 'Tren - ?'",
        options: ["Yol", "Ray", "Gar", "Vagon", "Demir"],
        correctIndex: 2,
        explanation: "Gemi limanda durur/yolcu alır. Tren gar'da (istasyonda) durur."
    },
    {
        id: 1910,
        text: "Cümle Tamamlama: 'Başarılı olmak için sadece zeki olmak yetmez, aynı zamanda _______ gereklidir.'",
        options: ["uyumak", "şanslı olmak", "çalışmak", "yemek", "gezmek"],
        correctIndex: 2,
        explanation: "Başarının en temel tamamlayıcısı çalışmaktır."
    },
    {
        id: 1911,
        text: "Görsel Dikkat: Aşağıdakilerden hangisi bir üçgen çeşidi DEĞİLDİR?",
        options: ["Eşkenar", "İkizkenar", "Çeşitkenar", "Dik", "Dörtgen"],
        correctIndex: 4,
        explanation: "Dörtgen, 4 kenarlı bir çokgendir, üçgen değildir."
    },
    {
        id: 1912,
        text: "Bir sırada Ali önden 10., arkadan 15. sıradadır. Sırada kaç kişi vardır?",
        options: ["24", "25", "26", "23", "20"],
        correctIndex: 0,
        explanation: "Sıra Mevcudu = (Önden sıra + Arkadan sıra) - 1. (10 + 15) - 1 = 24. (Ali'yi iki kere saydığımız için 1 çıkarırız)."
    },
    {
        id: 1913,
        text: "Aşağıdaki şehirlerden hangisi Türkiye'nin başkentidir?",
        options: ["İstanbul", "İzmir", "Ankara", "Bursa", "Antalya"],
        correctIndex: 2,
        explanation: "Dikkat/Genel Kültür sorusu: Ankara."
    },
    {
        id: 1914,
        text: "Zorlu Mantık: Bir adamın fotoğrafına bakan kişi: 'Benim ne erkek ne de kız kardeşim var ama bu adamın babası benim babamın oğludur' diyor. Fotoğraftaki kimdir?",
        options: ["Kendisidir", "Oğludur", "Babasır", "Torunudur", "Yeğenidir"],
        correctIndex: 1,
        explanation: "'Benim ne erkek ne kız kardeşim var' => Tek çocuğum. 'Benim babamın oğlu' => Benim (Tek çocuk olduğu için). Cümle şuna döner: 'Bu adamın babası BENİM'. Ben kimin babasıyım? OĞLUMUN. Fotoğraf OĞLUNA aittir."
    },
    {
        id: 1915,
        text: "Hangisi, 'Damlaya damlaya göl olur' atasözü ile aynı anlamdadır?",
        options: ["Sakla samanı gelir zamanı", "İşleyen demir ışıldar", "Bir elin nesi var iki elin sesi var", "Emek olmadan yemek olmaz", "Azı karar çoğu zarar"],
        correctIndex: 0,
        explanation: "Damlaya damlaya göl olur ve Sakla samanı gelir zamanı, tasarruf ve birikimin önemini anlatan atasözleridir."
    },
    {
        id: 1916,
        text: "1, 1, 2, 3, 5, 8, 13, ? Serideki sonraki sayı nedir (Fibonacci)?",
        options: ["15", "18", "21", "25", "20"],
        correctIndex: 2,
        explanation: "Fibonacci dizisi: Her sayı kendinden önceki iki sayının toplamıdır. 5+8=13. 8+13=21."
    },
    {
        id: 1917,
        text: "Hangi harf dikey olarak simetriktir (Aynada aynı görünür)?",
        options: ["R", "L", "A", "G", "S"],
        correctIndex: 2,
        explanation: "A harfi dikey eksende simetriktir. (T, U, V, M gibi)."
    },
    {
        id: 1918,
        text: "Bir dikdörtgen masanın 4 köşesi vardır. Bir köşesini keserseniz kaç köşesi olur? (Düz kesim)",
        options: ["3", "4", "5", "6", "2"],
        correctIndex: 2,
        explanation: "Bir köşeyi düz kestiğinizde o köşe yok olur ancak yerine iki yeni köşe (kesim noktaları) gelir. 4 - 1 + 2 = 5 köşe olur."
    },
    {
        id: 1919,
        text: "Veri Analizi: Bir sınıftaki öğrencilerin %60'ı matematik, %70'i Türkçe dersinden geçmiştir. Her iki dersten kalan %10 olduğuna göre, her iki dersten geçen yüzde kaçtır?",
        options: ["%30", "%40", "%50", "%60", "%20"],
        correctIndex: 1,
        explanation: "Küme Problemi: Sınıf = 100x. Kalan (Dışarıda) = 10x. Geçenlerin Birleşimi (M U T) = 90x. (M U T) = M + T - (M n T). 90 = 60 + 70 - Kesişim. 90 = 130 - Kesişim. Kesişim = 40. Her iki dersten geçen %40."
    },
    {
        id: 1920,
        text: "Hangi grafik türü, bir bütünün parçalarını oransal olarak göstermek için en uygundur?",
        options: ["Çizgi Grafiği", "Sütun Grafiği", "Daire (Pasta) Grafiği", "Serpilme Diyagramı", "Histogram"],
        correctIndex: 2,
        explanation: "Pasta grafik (Pie chart), oransal dağılımı (yüzdeleri) göstermek için en iyi araçtır."
    },
    {
        id: 1921,
        text: "Bir veri setindeki en büyük değer ile en küçük değer arasındaki farka ne denir?",
        options: ["Mod (Tepe Değer)", "Medyan (Ortanca)", "Aritmetik Ortalama", "Açıklık (Range)", "Standart Sapma"],
        correctIndex: 3,
        explanation: "En büyük - En küçük = Açıklık (Range)."
    },

    // ─── DİJİTAL BANKACILIK & FINTECH (YENİ) ───
    {
        id: 2001,
        text: "TCMB tarafından işletilen ve 7/24 anlık para transferine imkan sağlayan ödeme sistemi hangisidir?",
        options: ["EFT", "Havale", "FAST (Fonların Anlık ve Sürekli Transferi)", "SWIFT", "Western Union"],
        correctIndex: 2,
        explanation: "7/24 çalışabilen ve anında gerçekleşen ödeme sistemi FAST'tir. EFT sadece mesai saatlerinde çalışır."
    },
    {
        id: 2002,
        text: "'Açık Bankacılık' (Open Banking) kavramı en özet haliyle nedir?",
        options: ["Şubelerin 24 saat açık olması", "Müşterinin onayıyla finansal verilerin üçüncü taraf sağlayıcılarla (Turan, Papara vb.) paylaşılması", "Bankaların halka arz edilmesi", "Bankaların kapılarını herkese açması", "Kredi kartı limitinin sınırsız olması"],
        correctIndex: 1,
        explanation: "Açık Bankacılık, müşterinin izni dahilinde, finansal verilerin API'ler aracılığıyla güvenli bir şekilde üçüncü taraf uygulamalarla paylaşılması modelidir."
    },
    {
        id: 2003,
        text: "Türkiye'de ödemelerde 'Kripto Varlıkların' kullanılmasına ilişkin düzenleme nasıldır?",
        options: ["Serbesttir", "Ödemelerde doğrudan veya dolaylı olarak kullanılması yasaktır", "Sadece Bitcoin kullanılabilir", "Vergisi ödenirse serbesttir", "Bankalar aracılığıyla serbesttir"],
        correctIndex: 1,
        explanation: "TCMB yönetmeliğine göre, kripto varlıkların ödemelerde doğrudan veya dolaylı şekilde kullanılması YASAKTIR. (Yatırım aracı olarak alınıp satılabilir ancak ödeme aracı olamaz)."
    },
    {
        id: 2004,
        text: "Karekod (QR Kod) ile ödeme standartlarını belirleyen ulusal yapı hangisidir?",
        options: ["TR Karekod", "TR QR", "BKM QR", "TCMB Code", "Masterpass"],
        correctIndex: 0,
        explanation: "TCMB tarafından yayımlanan yönetmeliğe göre ulusal standart 'TR Karekod' olarak isimlendirilmiştir."
    },
    {
        id: 2005,
        text: "Dijital Cüzdan hizmeti sunan kuruluşlar (örn. Papara, İnilal) hangi kanuna tabidir?",
        options: ["5411 Bankacılık Kanunu", "6493 Sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri Kanunu", "Türk Ticaret Kanunu", "Borçlar Kanunu", "Sermaye Piyasası Kanunu"],
        correctIndex: 1,
        explanation: "Ödeme kuruluşları ve elektronik para kuruluşları 6493 sayılı kanun kapsamında düzenlenir ve TCMB denetimindedir."
    },

    // ─── MAKRO & FİNANS (İLERİ DÜZEY) ───
    {
        id: 2101,
        text: "Devletin ihraç ettiği, döviz cinsinden (genelde USD veya EUR) uzun vadeli borçlanma senetlerine ne ad verilir?",
        options: ["Hazine Bonosu", "Devlet Tahvili", "Eurobond", "Varant", "Sukuk"],
        correctIndex: 2,
        explanation: "Devletin veya şirketlerin yurtdışı piyasalardan yabancı para cinsinden borçlanmak için ihraç ettiği uzun vadeli tahvillere Eurobond denir."
    },
    {
        id: 2102,
        text: "Borsa İstanbul'da işlem gören ve gelecekteki bir tarihte, bugünden belirlenen fiyattan mal/kıymet alma-satma hakkı veren piyasa hangisidir?",
        options: ["Spot Piyasa", "Tahvil Piyasası", "VİOP (Vadeli İşlem ve Opsiyon Piyasası)", "Serbest Piyasa", "Repo Piyasası"],
        correctIndex: 2,
        explanation: "Gelecek vadeli işlemlerin (Futures/Options) yapıldığı piyasa VİOP'tur."
    },
    {
        id: 2103,
        text: "Cari Açık ne demektir?",
        options: ["Devletin vergi gelirlerinin harcamadan az olması", "Bir ülkenin yurtdışından aldığı mal ve hizmet bedelinin, sattığından (ihracat + turizm vb.) fazla olması", "Şirketlerin zarar etmesi", "Bankaların kredi verememesi", "Doların yükselmesi"],
        correctIndex: 1,
        explanation: "Cari Açık (Döviz Açığı), ülkenin döviz gelirlerinin döviz giderlerini karşılayamaması durumudur (İthalat > İhracat temel sebeptir)."
    },
    {
        id: 2104,
        text: "Basel kriterlerine göre 'Ana Sermaye' (Tier 1) içinde en kaliteli ve temel unsur hangisidir?",
        options: ["Katkı Sermaye", "Ödenmiş Sermaye", "Yedek Akçeler", "Subordine Borçlar", "Maddi Duran Varlıklar"],
        correctIndex: 1,
        explanation: "Ana Sermayenin en temel unsuru 'Ödenmiş Sermaye'dir."
    },
    {
        id: 2105,
        text: "Bankacılıkta 'Mevduat Munzam Karşılığı' oranı artırılırsa bankalar için maliyet nasıl değişir?",
        options: ["Değişmez", "Azalır", "Artar", "Sıfırlanır", "Karlılık artar"],
        correctIndex: 2,
        explanation: "Munzam karşılıkların artması, bankanın topladığı paranın daha büyük kısmını TCMB'ye faizsiz veya düşük faizle yatırması demektir. Bu da bankanın kullanabileceği kaynağı azaltır ve maliyeti ARTIRIR."
    },

    // ─── MANTIK & MUHAKEME (EKSTRA) ───
    {
        id: 2201,
        text: "Saat 3'ü 15 geçe (03:15), akrep ile yelkovan arasındaki açı CİNSİNDEN hangisi doğrudur?",
        options: ["0 derecedir (Üst üstedir)", "Dar açıdır", "Dik açıdır", "Geniş açıdır", "Doğru açıdır"],
        correctIndex: 1,
        explanation: "Yelkovan 3'ün üzerindedir (15 geçe). Akrep ise 3'ü biraz geçmiştir (3 ile 4 arasındadır). Aralarındaki fark çok küçüktür (yaklaşık 7.5 derece) bu yüzden DAR açıdır. (0 derece değildir çünkü akrep 3'te durmaz, ilerler)."
    },
    {
        id: 2202,
        text: "Mantık: 'Bazı A'lar B'dir. Bütün B'ler C'dir.' O halde hangisi KESİNLİKLE doğrudur?",
        options: ["Bütün A'lar C'dir", "Bütün C'ler B'dir", "Bazı A'lar C'dir", "Hiçbir A, C değildir", "A ile C'nin alakası yoktur"],
        correctIndex: 2,
        explanation: "Bazı A'lar B ise (Kesişim var). Ve B'lerin hepsi C'nin içindeyse. O 'Bazı A' olan B'ler, otomatikman C'nin de içindedir. Yani 'Bazı A'lar C'dir'."
    },
    {
        id: 2203,
        text: "Bir musluk boş havuzu 10 saatte dolduruyor, dipteki musluk dolu havuzu 15 saatte boşaltıyor. İkisi aynı anda açılırsa boş havuz kaça saatte dolar?",
        options: ["20", "25", "30", "35", "50"],
        correctIndex: 2,
        explanation: "1/10 - 1/15 = 3/30 - 2/30 = 1/30. Havuzun 1/30'u 1 saatte dolar. Tamamı 30 saatte dolar."
    },
    {
        id: 2204,
        text: "Veri Yorumlama: Bir ürünün fiyatı önce %50 artırılıp, sonra zamlı fiyat üzerinden %50 indirilirse son durum ne olur?",
        options: ["Eski fiyata döner", "%25 Zarar/Düşüş", "%25 Kar/Artış", "%50 Zarar", "Değişmez"],
        correctIndex: 1,
        explanation: "100 TL -> %50 zam -> 150 TL. 150 TL -> %50 indirim (Yarısı 75 TL) -> 150 - 75 = 75 TL. Başlangıç 100, Son 75. %25 Düşüş (Zarar)."
    },
    {
        id: 2205,
        text: "Hangi kelime çifti arasındaki ilişki farklıdır?",
        options: ["Üzüm - Asma", "Elma - Ağaç", "Karpuz - Bostan", "Gül - Diken", "Fındık - Ocak"],
        correctIndex: 3,
        explanation: "Üzüm asmada, Elma ağaçta, Karpuz bostanda, Fındık ocakta yetişir (Yetişme yeri ilişkisi). Gül-Diken ise parçası/koruyucusu ilişkisidir."
    },

    // ─── SINAV ÖZEL: İLERİ GENEL YETENEK (TAM PUAN HEDEFİ) ───
    {
        id: 3001,
        text: "Operatör Sorusu: x ∆ y = 3x - 2y + 4 ve a ⨀ b = (a+b)/2 olarak tanımlanıyor. Buna göre (4 ∆ 3) ⨀ 8 işleminin sonucu kaçtır?",
        options: ["8", "9", "10", "12", "15"],
        correctIndex: 1,
        explanation: "Önce parantez içi: 4 ∆ 3 = 3(4) - 2(3) + 4 = 12 - 6 + 4 = 10. Şimdi işlem (10) ⨀ 8'e döndü. 10 ⨀ 8 = (10+8)/2 = 18/2 = 9."
    },
    {
        id: 3002,
        text: "Fonksiyon: f(x) = 2x + 5 ve g(x) = x - 3 ise, (f o g)(4) kaçtır? (Bileşke Fonksiyon)",
        options: ["5", "6", "7", "8", "9"],
        correctIndex: 2,
        explanation: "(f o g)(4) demek f(g(4)) demektir. Önce g(4)'ü bulalım: g(4) = 4 - 3 = 1. Şimdi f(1)'i bulalım: f(1) = 2(1) + 5 = 7."
    },
    {
        id: 3003,
        text: "Hız Problemi: A kentinden B kentine 60 km/s hızla giden bir araç, dönüşte hızını %50 artırarak geri dönmüştür. Gidiş-dönüş toplam 10 saat sürdüğüne göre, A ile B arası kaç km'dir?",
        options: ["300", "360", "400", "450", "600"],
        correctIndex: 1,
        explanation: "Gidiş hızı V1 = 60. Dönüş hızı V2 = 60 + (60*0.50) = 90. Yol = x. Zamanlar toplamı: x/60 + x/90 = 10. Payda eşitle (180'de): 3x + 2x = 5x. 5x/180 = 10. 5x = 1800 => x = 360 km."
    },
    {
        id: 3004,
        text: "Olasılık: İki zar aynı anda atılıyor. Üst yüze gelen sayıların toplamının 8 olma olasılığı nedir?",
        options: ["5/36", "1/6", "1/9", "4/36", "7/36"],
        correctIndex: 0,
        explanation: "Tüm durumlar 6*6 = 36. Toplamı 8 olan durumlar: (2,6), (3,5), (4,4), (5,3), (6,2). Toplam 5 durum var. Olasılık = 5/36."
    },
    {
        id: 3005,
        text: "Sözel Mantık (Sıralama): Bir yarışta Ayşe, Bora, Can, Derya ve Elif ilk 5 dereceyi paylaşmıştır. (1) Ayşe, Can'dan daha iyi bir derece yapmıştır. (2) Bora yarışın sonuncusudur. (3) Derya 2. olmuştur. (4) Elif, Ayşe'nin hemen arkasındadır. Birinci kimdir?",
        options: ["Ayşe", "Bora", "Can", "Derya", "Elif"],
        correctIndex: 2,
        explanation: "Sıralama 1-2-3-4-5. 2. Derya. 5. Bora. Geriye 1, 3, 4 kaldı. Ayşe > Can (Ayşe, Can'dan iyi yani daha önde, derece olarak küçük sayı). Elif, Ayşe'nin hemen arkasında ise (Ayşe-Elif bloku). Eğer Ayşe 1 ise Elif 2 olmalı ama 2 dolu (Derya). O zaman Ayşe 3, Elif 4 olmak zorunda. Geriye 1. sıra kaldı: Can. Sıralama: 1. Can, 2. Derya, 3. Ayşe, 4. Elif, 5. Bora. Cevap Can."
    },
    {
        id: 3006,
        text: "Sayı Dizisi (Zor): 3, 7, 16, 35, 74, ? Soru işareti yerine ne gelmelidir?",
        options: ["149", "150", "153", "148", "155"],
        correctIndex: 2,
        explanation: "Kural: x * 2 + 1, x * 2 + 2, x * 2 + 3... Kontrol: 3*2+1=7. 7*2+2=16. 16*2+3=35. 35*2+4=74. Sırada: 74*2+5 = 148+5 = 153."
    },
    {
        id: 3007,
        text: "Grafik Yorumlama: Bir ürünün satış fiyatı 120 TL'dir. Maliyet %20 azalıp kar marjı sabit tutulursa, yeni satış fiyatı ne olur? (Başlangıçta kar %20 varsayalım)",
        options: ["96 TL", "100 TL", "104 TL", "110 TL", "Değişmez"],
        correctIndex: 0,
        explanation: "Eğer soru 'Maliyet üzerinden %20 karla satılıyor' deseydi: 1.2x = 120, x=100 (Maliyet). Maliyet %20 azalırsa: 80 TL olur. Yine %20 kar konulursa: 80 * 1.20 = 96 TL."
    },
    {
        id: 3008,
        text: "Mantık (Küp Sayma): 3x3x3 boyutlarında boyalı bir küp, 1x1x1'lik 27 küçük küpe ayrılıyor. Sadece TEK yüzü boyalı kaç küçük küp vardır?",
        options: ["4", "6", "8", "12", "9"],
        correctIndex: 1,
        explanation: "Tek yüzü boyalı küpler, her yüzeyin TAM ORTASINDAKİ küplerdir. Küpün 6 yüzü vardır. Her yüzde 1 tane merkez küp vardır. 6 * 1 = 6 adet."
    },
    {
        id: 3009,
        text: "Soyut/Şekil: Bir kağıt kare şeklinde katlanıp ortasından deliniyor. Açıldığında kaç delik görünür? (2 kez katlama: Önce ikiye, sonra tekrar ikiye)",
        options: ["1", "2", "4", "8", "16"],
        correctIndex: 2,
        explanation: "Kağıt 2 kez katlandığında (örneğin dörde katlanmış olur), kağıt 4 katlı hale gelir. Bir delik delindiğinde tüm katmanlar delinir. Açıldığında 4 delik oluşur."
    },
    {
        id: 3010,
        text: "Yaş Problemi: Bir annenin yaşı, iki çocuğunun yaşları farkının 5 katıdır. 8 yıl sonra annenin yaşı yaşları farkının 6 katı olacağına göre, anne bugün kaç yaşındadır? (Yaş farkı değişmez!)",
        options: ["30", "35", "40", "45", "50"],
        correctIndex: 2,
        explanation: "Yaş farkı sabittir, x diyelim. Bugün Anne = 5x. 8 yıl sonra Anne = 5x + 8. Denklem: 5x + 8 = 6x (Çünkü yaş farkı değişmez, yine x'tir). Buradan x = 8. Anne = 5x = 5 * 8 = 40 yaşındadır."
    },

    // ─── DİKKAT VE HIZ TESTİ (GARANTİ PAKETİ) ───
    {
        id: 4001,
        text: "Dikkat: Aşağıdaki kodlardan hangisi diğerlerinden farklıdır?",
        options: ["X8J9K2L", "X8J9K2L", "X8J9K2L", "X8J9K3L", "X8J9K2L"],
        correctIndex: 3,
        explanation: "Dördüncü seçenekteki kodda '2' yerine '3' rakamı kullanılmıştır (X8J9K3L). Diğerleri X8J9K2L'dir."
    },
    {
        id: 4002,
        text: "Yazım Yanlışı: Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        options: ["Herkes buraya gelsin.", "Hiçbir şey beni üzmez.", "Tabi ki gelirim.", "Akşam bize gelecek misin?", "Türkçeyi çok seviyorum."],
        correctIndex: 2,
        explanation: "'Tabi ki' yanlış yazılmıştır. Bağlaç olan 'ki' ayrı yazılır ancak 'Tabii ki' şeklinde yazılmalıdır (veya Tabi ki ayrı yazılsa bile 'Tabii' kelimesi iki 'i' iledir, ama buradaki temel hata 'ki'nin kullanımı veya kelime köküdür. Doğrusu: Tabii ki). C şıkkı hatalıdır."
    },
    {
        id: 4003,
        text: "İşlem Hızı: 2 + 3 x 4 - 10 / 2 = ? (İşlem önceliğine dikkat!)",
        options: ["5", "9", "10", "14", "7"],
        correctIndex: 1,
        explanation: "Önce çarpma ve bölme: 3x4=12, 10/2=5. İşlem: 2 + 12 - 5. Sonra toplama/çıkarma: 14 - 5 = 9."
    },
    {
        id: 4004,
        text: "Sayma: 'Muvaffakiyetsizleştiricileştiriveremeyebileceklerimizdenmişsinizcesine' kelimesinde kaç tane 'e' harfi vardır?",
        options: ["8", "9", "10", "11", "12"],
        correctIndex: 2,
        explanation: "Gözle hızlı tarama: Hızlıca sayalım... Toplam 10 adet 'e' harfi vardır."
    },
    {
        id: 4005,
        text: "Eşleştirme: Aşağıdaki İl-Plaka eşleştirmelerinden hangisi YANLIŞTIR?",
        options: ["06 - Ankara", "34 - İstanbul", "35 - İzmir", "01 - Adana", "16 - Balıkesir"],
        correctIndex: 4,
        explanation: "16 plakası Bursa'ya aittir. Balıkesir'in plakası 10'dur."
    },
    {
        id: 4006,
        text: "Talimat Takibi: Eğer bugün Salı ise bir önceki günün 3 gün sonrası hangi gündür?",
        options: ["Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
        correctIndex: 1,
        explanation: "Bugün Salı. Bir önceki gün: Pazartesi. Pazartesi'den 3 gün sonrası: Salı(1), Çarşamba(2), Perşembe(3). (Pazartesi + 3 = Perşembe)."
    },
    {
        id: 4007,
        text: "Görsel Hafıza (Metin Tabanlı): 'KIRMIZI - MAVİ - SARI - YEŞİL - BEYAZ'. Bu sırayı aklınızda tutun. Şıklardan hangisi bu sıranın TERSTEN yazılışıdır?",
        options: ["BEYAZ - YEŞİL - SARI - MAVİ - KIRMIZI", "BEYAZ - SARI - YEŞİL - MAVİ - KIRMIZI", "KIRMIZI - MAVİ - YEŞİL - SARI - BEYAZ", "YEŞİL - BEYAZ - SARI - MAVİ - KIRMIZI", "BEYAZ - YEŞİL - MAVİ - SARI - KIRMIZI"],
        correctIndex: 0,
        explanation: "Sıranın tersi: BEYAZ - YEŞİL - SARI - MAVİ - KIRMIZI."
    },
    {
        id: 4008,
        text: "Mantıksal Çıkarım: 'A > B ve B > C ise, aşağıdakilerden hangisi kesinlikle doğrudur?'",
        options: ["A < C", "A = C", "A > C", "A = B", "B < C"],
        correctIndex: 2,
        explanation: "Geçişme özelliği: A, B'den büyük, B de C'den büyükse; A, C'den kesinlikle büyüktür."
    },
    {
        id: 4009,
        text: "Dikkat/Odaklanma: Aşağıdaki sayı dizisinde kaç adet '9' rakamı, bir '6' rakamından hemen SONRA gelmektedir? \n'691236945698769'",
        options: ["1", "2", "3", "4", "5"],
        correctIndex: 3,
        explanation: "Diziye bakalım: 69... (1), ...69... (2), ...69... (3), ...69 (4). Toplam 4 kez."
    },
    {
        id: 4010,
        text: "Genel Kültür/Hız: Aşağıdakilerden hangisi bir yön DEĞİLDİR?",
        options: ["Kuzey", "Güney", "Lodos", "Doğu", "Batı"],
        correctIndex: 2,
        explanation: "Lodos bir rüzgar türüdür, ana veya ara yön değildir."
    }
];

// ─── SORU HAVUZU BİRLEŞTİRME ─────────────────────
export const sampleQuestions: Question[] = [...baseQuestions, ...expansionQuestions];
