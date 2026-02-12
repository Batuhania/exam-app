export interface FlashcardData {
    id: number;
    question: string;
    answer: string;
    topic: string;
}

export const sampleFlashcards: FlashcardData[] = [
    {
        id: 1,
        question: "Türkiye Yüzyılı Maarif Modeli'nin temel amacı nedir?",
        answer: "Millî şahsiyetli, ahlaklı ve erdemli bireyler yetiştirmek.",
        topic: "Maarif Model"
    },
    {
        id: 2,
        question: "Bankacılık Kanunu'na göre 'Bankaların Kuruluşu' iznini kim verir?",
        answer: "Bankacılık Düzenleme ve Denetleme Kurulu (BDDK) - En az 5 üyenin olumlu oyuyla.",
        topic: "Bankacılık Hukuku"
    },
    {
        id: 3,
        question: "Enflasyonla mücadelede Merkez Bankası'nın kullandığı en temel araç nedir?",
        answer: "Politika Faizi (Bir hafta vadeli repo ihale faiz oranı).",
        topic: "Ekonomi"
    },
    {
        id: 4,
        question: "Müfettiş Yardımcılığı sınavında 'Etik İlkeler' neden önemlidir?",
        answer: "Mesleki bağımsızlık, tarafsızlık ve dürüstlük bankacılık denetiminin temelini oluşturduğu için.",
        topic: "Mülakat / Etik"
    },
    {
        id: 5,
        question: "SWOT Analizi'nin açılımı nedir?",
        answer: "Strengths (Güçlü Yönler), Weaknesses (Zayıf Yönler), Opportunities (Fırsatlar), Threats (Tehditler).",
        topic: "Genel Yetenek"
    }
];
