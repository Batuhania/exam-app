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
    }
];
