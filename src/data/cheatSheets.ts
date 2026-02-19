export interface CheatSheetSection {
    id: number;
    title: string;
    category: string;
    items: {
        title: string;
        content: string; // Markdown or simple text
        highlight?: boolean;
    }[];
}

export const cheatSheets: CheatSheetSection[] = [
    {
        id: 1,
        title: "5411 Bankacılık Kanunu - Kritik Limitler",
        category: "Mevzuat",
        items: [
            { title: "Bankaların Kuruluş Sermayesi", content: "En az **2 Milyar 500 Milyon TL** nakden ve defaten ödenmiş olmalıdır.", highlight: true },
            { title: "Kredi Sınırları (Tek Kişi)", content: "Bir gerçek veya tüzel kişiye verilebilecek kredi toplamı, banka özkaynaklarının **%25**'ini geçemez." },
            { title: "Kredi Sınırları (Büyük Kredi)", content: "Özkaynakların **%10**'unu aşan krediler 'Büyük Kredi' sayılır. Bunların toplamı özkaynakların **8 katını** aşamaz." },
            { title: "İştirak Sınırı", content: "Bankalar, ana faaliyet konuları dışındaki alanlarda, özkaynaklarının en fazla **%15**'i oranında iştirak edinebilirler." },
            { title: "Mevduat Zaman Aşımı", content: "**10 Yıl** boyunca aranmayan mevduat, katılım fonu ve alacaklar zaman aşımına uğrar ve TMSF'ye devredilir." }
        ]
    },
    {
        id: 2,
        title: "Ekonomi ve Finans Formülleri",
        category: "Alan Bilgisi",
        items: [
            { title: "Fisher Denklemi (Reel Faiz)", content: "Reel Faiz = (1 + Nominal Faiz) / (1 + Enflasyon) - 1. (Basitçe: Nominal - Enflasyon)." },
            { title: "SYR (Sermaye Yeterliliği Rasyosu)", content: "SYR = Özkaynaklar / (Kredi Riski + Piyasa Riski + Operasyonel Risk Ağırlıklı Tutarlar). Yasal sınır **%8**, hedef sınır **%12**." },
            { title: "ROE (Özkaynak Karlılığı)", content: "ROE = Net Kar / Ortalama Özkaynaklar. Bankanın karlılığını ölçen en temel rasyodur.", highlight: true },
            { title: "ROA (Aktif Karlılığı)", content: "ROA = Net Kar / Toplam Aktifler." },
            { title: "Likidite Oranı", content: "Dönen Varlıklar / Kısa Vadeli Yabancı Kaynaklar." }
        ]
    },
    {
        id: 3,
        title: "Genel Yetenek - Pratik Bilgiler",
        category: "Genel Yetenek",
        items: [
            { title: "Ardışık Sayıların Toplamı", content: "n * (n + 1) / 2. (1'den n'e kadar olan sayıların toplamı)." },
            { title: "İşçi Problemleri Formülü", content: "(1/A + 1/B) * t = 1 (İşin bitme süresi t)." },
            { title: "Hız Problemleri", content: "Yol = Hız x Zaman (x = v.t)." },
            { title: "Yüzde Problemleri", content: "A sayısının %x'i = A * (x/100)." },
            { title: "Akrep-Yelkovan Açısı", content: "Saat x:y iken açı = |30x - 5.5y|. (Basit formül)." }
        ]
    },
    {
        id: 4,
        title: "Dijital Bankacılık ve Trendler",
        category: "Dijital",
        items: [
            { title: "Blockchain", content: "Merkezi olmayan, dağıtık ve değiştirilemez kayıt defteri teknolojisi. Kripto paraların temelidir." },
            { title: "Open Banking (Açık Bankacılık)", content: "Müşterinin finansal verilerinin, kendi rızasıyla üçüncü parti sağlayıcılarla (API aracılığıyla) paylaşılması modelidir." },
            { title: "Fintech", content: "Finans (Finance) ve Teknoloji (Technology) kelimelerinin birleşimi. Finansal hizmetleri teknoloji ile geliştiren girişimlerdir." }
        ]
    },
    {
        id: 5,
        title: "Muhasebe Temel Denklikleri",
        category: "Alan Bilgisi",
        items: [
            { title: "Bilanço Dengesi", content: "**AKTİF (Varlıklar) = PASİF (Yabancı Kaynaklar + Özkaynaklar)**", highlight: true },
            { title: "Net İşletme Sermayesi", content: "Dönen Varlıklar - Kısa Vadeli Yabancı Kaynaklar." },
            { title: "Hesap İşleyişi", content: "Varlık hesapları borçtan, Kaynak hesapları alacaktan çalışır." }
        ]
    },
    {
        id: 6,
        title: "Anayasa Hukuku - Kritik Maddeler",
        category: "Hukuk",
        items: [
            { title: "Değiştirilemez Maddeler", content: "İlk **3 madde** değiştirilemez (m.4). Devlet şekli, nitelikleri, bütünlüğü.", highlight: true },
            { title: "Temel Hakların Sınırlandırılması", content: "Ancak **kanunla**, Anayasa'nın sözüne uygun, **ölçülülük ilkesi** çerçevesinde sınırlanabilir (m.13)." },
            { title: "Milletvekili Sayısı", content: "TBMM **600** milletvekilinden oluşur (m.75)." },
            { title: "Seçim Dönemi", content: "TBMM seçimleri **5 yılda** bir yapılır (m.77)." },
            { title: "Anayasa Değişikliği Teklifi", content: "TBMM üye tamsayısının en az **1/3'ü** tarafından yazıyla teklif edilir (m.175)." },
            { title: "Cumhurbaşkanlığı Kararnamesi", content: "Temel haklar, kişi hakları ve siyasi haklar CBK ile **düzenlenemez** (m.104)." }
        ]
    },
    {
        id: 7,
        title: "Borçlar Hukuku - Zamanaşımı Süreleri",
        category: "Hukuk",
        items: [
            { title: "Genel Zamanaşımı", content: "**10 yıl** (TBK m.146).", highlight: true },
            { title: "Haksız Fiil", content: "Öğrenmeden itibaren **2 yıl**, her hâlde **10 yıl** (m.72)." },
            { title: "Kira/Faiz/Ücret Alacakları", content: "**5 yıl** (m.147)." },
            { title: "Sebepsiz Zenginleşme", content: "Öğrenmeden itibaren **2 yıl**, her hâlde **10 yıl** (m.82)." },
            { title: "Sözleşme Şekli", content: "Kural: **Şekil serbestisi**. Kanun aksini öngörmedikçe herhangi şekilde yapılabilir (m.12)." },
            { title: "Kefalet Şekli", content: "Yazılı şekil + azami miktarın ve tarihin belirtilmesi **zorunlu** (m.583)." }
        ]
    },
    {
        id: 8,
        title: "İcra İflas Hukuku - Süreler",
        category: "Hukuk",
        items: [
            { title: "Ödeme Emrine İtiraz", content: "**7 gün** içinde (İİK m.62).", highlight: true },
            { title: "İcra Emrine İtiraz", content: "**7 gün** içinde (ilamlı takip)." },
            { title: "Taşınır Satış İsteme", content: "Hacizden itibaren **6 ay** (m.106)." },
            { title: "Taşınmaz Satış İsteme", content: "Hacizden itibaren **1 yıl** (m.106)." },
            { title: "İcra İnkar Tazminatı", content: "Borç miktarının **%20'sinden** az olamaz (m.67)." },
            { title: "Aciz Vesikası Zamanaşımı", content: "**20 yıl** (m.143)." }
        ]
    },
    {
        id: 9,
        title: "Basel I/II/III Karşılaştırması",
        category: "Finans",
        items: [
            { title: "Basel I (1988)", content: "Sadece kredi riski. Asgari SYR: **%8**. Basit risk ağırlıkları (%0, %20, %50, %100)." },
            { title: "Basel II (2004)", content: "3 Yapısal Blok: Asgari sermaye + Denetim incelemesi + Piyasa disiplini. Kredi + Piyasa + **Operasyonel Risk**.", highlight: true },
            { title: "Basel III (2010)", content: "CET1: **%4.5**, Tier1: **%6**, LCR/NSFR: **≥%100**, Kaldıraç: **≥%3**." },
            { title: "LCR Nedir?", content: "Yüksek kaliteli likit varlıklar / 30 günlük net nakit çıkışı. En az **%100** olmalı." },
            { title: "NSFR Nedir?", content: "Mevcut istikrarlı fonlama / gerekli istikrarlı fonlama. 1 yıllık ufukta **%100** olmalı." }
        ]
    },
    {
        id: 10,
        title: "Sermaye Piyasası Kurumları",
        category: "Finans",
        items: [
            { title: "SPK", content: "**Sermaye Piyasası Kurulu.** Düzenleyici ve denetleyici bağımsız idari otorite.", highlight: true },
            { title: "BİST", content: "**Borsa İstanbul.** 2013'te İMKB'den dönüşmüştür. BİST 100 / BİST 30 endeksleri." },
            { title: "Takasbank", content: "İstanbul Takas ve Saklama Bankası. Takas, saklama ve merkezi karşı taraf (CCP) hizmetleri." },
            { title: "MKK", content: "Merkezi Kayıt Kuruluşu. Sermaye piyasası araçlarının kaydileştirilmesi." },
            { title: "Aracı Kurum", content: "SPK lisanslı, sermaye piyasası faaliyetlerinde aracılık yapan kuruluş." }
        ]
    },
    {
        id: 11,
        title: "Atatürk İlkeleri & İnkılap Kronolojisi",
        category: "Genel Kültür",
        items: [
            { title: "6 İlke", content: "**CuMHaLaDİ:** Cumhuriyetçilik, Milliyetçilik, Halkçılık, Laiklik, Devletçilik, İnkılapçılık.", highlight: true },
            { title: "Saltanat Kaldırıldı", content: "**1 Kasım 1922**" },
            { title: "Cumhuriyet İlanı", content: "**29 Ekim 1923**" },
            { title: "Halifelik Kaldırıldı", content: "**3 Mart 1924** (aynı gün Tevhid-i Tedrisat)" },
            { title: "Latin Alfabesi", content: "**1 Kasım 1928**" },
            { title: "Kadınlara Seçme Hakkı", content: "Belediye: **1930**, Milletvekilliği: **5 Aralık 1934**" }
        ]
    },
    {
        id: 12,
        title: "Bankacılık İngilizce Terimler",
        category: "İngilizce",
        items: [
            { title: "Collateral / Teminat", content: "Kredi güvencesi olarak sunulan varlık." },
            { title: "NPL / Takipteki Kredi", content: "Non-Performing Loan: Ödemesi gecikmiş kredi.", highlight: true },
            { title: "KYC / Müşterini Tanı", content: "Know Your Customer: Müşteri kimlik doğrulama." },
            { title: "AML / Kara Para Önleme", content: "Anti-Money Laundering: Kara para aklama mücadelesi." },
            { title: "CAR / SYR", content: "Capital Adequacy Ratio: Sermaye Yeterlilik Rasyosu." },
            { title: "LCR / Likidite Oranı", content: "Liquidity Coverage Ratio: Basel III likidite standardı." }
        ]
    },
    {
        id: 13,
        title: "Muhasebe: Hesap Planı ve Temel Denklik",
        category: "Muhasebe",
        items: [
            { title: "Temel Denklik", content: "**Varlıklar = Borçlar + Özkaynaklar** (Aktif = Pasif)", highlight: true },
            { title: "Dönen Varlıklar (1xx)", content: "100 Kasa, 102 Bankalar, 120 Alıcılar, 153 Ticari Mallar" },
            { title: "Duran Varlıklar (2xx)", content: "252 Binalar, 253 Tesis Makine, 255 Demirbaşlar, 257 Birikmiş Amortisman (−)" },
            { title: "KVYK (3xx)", content: "300 Banka Kredileri, 320 Satıcılar, 360 Ödenecek Vergi" },
            { title: "Özkaynaklar (5xx)", content: "500 Sermaye, 540 Yasal Yedekler, 570 Geçmiş Yıl Karları" },
            { title: "Borç-Alacak Kuralı", content: "Aktif hesap ↑ = Borç. Pasif hesap ↑ = Alacak. Her yevmiye maddesi: Borç = Alacak", highlight: true },
            { title: "Amortisman", content: "Normal, Azalan bakiyeler, Üretim miktarı. Yararlı ömre maliyeti dağıtır." }
        ]
    },
    {
        id: 14,
        title: "Mali Analiz: Rasyolar Özet Tablosu",
        category: "Muhasebe",
        items: [
            { title: "Cari Oran", content: "DV / KVYK → İdeal: **~2**", highlight: true },
            { title: "Asit-Test (Likidite)", content: "(DV − Stoklar) / KVYK → İdeal: **~1**" },
            { title: "Nakit Oran", content: "Hazır Değerler / KVYK → İdeal: **0.2+**" },
            { title: "Kaldıraç Oranı", content: "Toplam Borç / Toplam Aktif → **<%50** iyi" },
            { title: "ROE", content: "Net Kar / Özkaynaklar × 100", highlight: true },
            { title: "ROA", content: "Net Kar / Toplam Aktif × 100" },
            { title: "Stok Devir Hızı", content: "SMM / Ortalama Stok → Yüksek = iyi" },
            { title: "Faiz Karşılama", content: "FVÖK / Faiz Giderleri → **>1** olmalı" }
        ]
    }
];
