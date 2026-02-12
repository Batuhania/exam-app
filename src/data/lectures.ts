export interface Lecture {
    topicId: number;
    title: string;
    content: string;
    readTime: string;
}

export const lectures: Lecture[] = [
    // ─── BANKACILIK & MEVZUAT ───
    {
        topicId: 1,
        title: "5411 Bankacılık Kanunu - Genel Esaslar",
        readTime: "8 dk",
        content: `
# 5411 Sayılı Bankacılık Kanunu

## Kanunun Amacı
Bu Kanunun amacı, finansal piyasalarda **güven ve istikrarın** sağlanmasına, kredi sisteminin etkin bir şekilde çalışmasına, tasarruf sahiplerinin hak ve menfaatlerinin korunmasına ilişkin usûl ve esasları düzenlemektir.

## Kapsam
Türkiye'de kurulu;
- Mevduat bankaları
- Katılım bankaları
- Kalkınma ve yatırım bankaları
- Yabancı bankaların Türkiye'deki şubeleri
- Finansal holding şirketleri
- BDDK ve TMSF
bu kanun hükümlerine tabidir.

> **DİKKAT:** Merkez Bankası bu kanun kapsamında *değildir*.

## Bankaların Kuruluşu
*   Anonim ortaklık şeklinde kurulması,
*   Ödenmiş sermayesinin en az **2.5 Milyar TL** olması,
*   Kurucularının müflis olmaması,
şarttır.
    `
    },
    {
        topicId: 2,
        title: "BDDK ve TMSF Yetkileri",
        readTime: "6 dk",
        content: `
# Bankacılık Düzenleme ve Denetleme Kurumu (BDDK)
*   İlişkili veya ilgili Bakan: **Hazine ve Maliye Bakanı**.
*   **7 Üye**, Cumhurbaşkanı atar. Görev süresi **4 yıl**.
*   Görev: Düzenleme ve Denetleme.

# Tasarruf Mevduatı Sigorta Fonu (TMSF)
*   Görev: Mevduatı sigortalamak, fona devredilen bankaları yönetmek.
*   **Sigorta Limiti:** 2024 yılı için **650.000 TL**.
    `
    },
    {
        topicId: 3,
        title: "Krediler ve Mevduat Mevzuatı",
        readTime: "7 dk",
        content: `
# Kredi Sınırları
Bankalarca bir gerçek ya da tüzel kişiye veya bir risk grubuna kullandırılabilecek kredilerin toplamı, ana sermaye ve katkı sermaye toplamının **%25'ini** aşamaz.

## Mevduat Tanımı
Yazılı ya da sözlü olarak veya herhangi bir şekilde halka duyurulmak suretiyle, ivazsız veya bir ivaz karşılığında, istendiğinde ya da belli bir vadede geri ödenmek üzere kabul edilen paradır.

> **YASAK:** Bankalar dışındaki kişilerin mevduat toplaması yasaktır (İzinsiz mevduat toplama suçu).
    `
    },

    // ─── ALAN BİLGİSİ ───
    {
        topicId: 4,
        title: "Makroekonomi ve Para Politikaları",
        readTime: "10 dk",
        content: `
# Para Politikası Araçları
1.  **Açık Piyasa İşlemleri (APİ):** Tahvil alım-satımı. MB alırsa para genişler, satarsa daralır.
2.  **Zorunlu Karşılıklar:** Bankaların MB'de tuttuğu para. Artarsa kredi hacmi daralır.
3.  **Faiz (Reeskont):** Politika faizi artarsa talep düşer, enflasyon düşer.

# Enflasyon Türleri
*   **Talep Enflasyonu:** Para çok, mal az.
*   **Maliyet Enflasyonu:** Girdi maliyetleri artışı.
*   **Stagflasyon:** Durgunluk + Enflasyon.
    `
    },
    {
        topicId: 5,
        title: "Maliye Politikası ve Vergi",
        readTime: "8 dk",
        content: `
# Maliye Politikası Araçları
Devletin **Kamu Harcamaları** ve **Vergiler** yoluyla ekonomiye müdahalesidir.

## 1. Genişletici Maliye Politikası (Durgunlukta)
*   Kamu harcamalarını artırmak.
*   Vergileri düşürmek.
*   Amaç: Toplam talebi artırmak, işsizliği azaltmak.

## 2. Daraltıcı Maliye Politikası (Enflasyonda)
*   Kamu harcamalarını kısmak.
*   Vergileri artırmak.
*   Amaç: Talebi kısmak, enflasyonu düşürmek.

# Vergi Türleri
*   **Dolaysız:** Gelir üzerinden (Gelir Vergisi, Kurumlar V.).
*   **Dolaylı:** Harcama üzerinden (KDV, ÖTV).
    `
    },
    {
        topicId: 6,
        title: "Genel Muhasebe ve Mali Analiz",
        readTime: "9 dk",
        content: `
# Muhasebe Temel Denkliği
**VARLIKLAR (AKTİF) = KAYNAKLAR (PASİF)**
*(Dönen + Duran Varlıklar) = (Kısa V. YK + Uzun V. YK + Özkaynaklar)*

## Hesap Grupları
*   **100-199:** Dönen Varlıklar (Kasa, Banka, Alacaklar).
*   **200-299:** Duran Varlıklar (Demirbaş, Binalar).
*   **300-399:** K.V. Yabancı Kaynaklar (Satıcılar, Banka Kredileri).
*   **500-599:** Özkaynaklar (Sermaye, Kar/Zarar).

## Önemli Hesaplar
*   **100 Kasa:** Daima borç bakiyesi verir.
*   **103 Verilen Çekler (-):** Aktifte yer alır ama pasif karakterlidir (Aktifi düzenleyici).
    `
    },
    {
        topicId: 13,
        title: "Ticaret Hukuku: Tacir ve İşletme",
        readTime: "7 dk",
        content: `
# Tacir Kimdir?
Ticari işletmeyi kısmen de olsa kendi adına işleten kimsedir.

## Tacir Olmanın Sonuçları
1.  İflasa tabidir.
2.  Ticaret unvanı kullanmak zorundadır.
3.  Basiretli iş adamı gibi davranmalıdır.
4.  Ticari defter tutmalıdır.

# Şirket Türleri
*   **Anonim Şirket:** Sermayesi paylara bölünmüş, borçlardan sadece malvarlığıyla sorumlu.
*   **Limited Şirket:** Ortak sayısı en fazla 50 olabilir.
    `
    },
    {
        topicId: 14,
        title: "Türkiye Ekonomisi",
        readTime: "9 dk",
        content: `
# Güçlü Ekonomiye Geçiş (2001)
*   Bankacılık reformu.
*   MB bağımsızlığı.
*   Mali disiplin.

# Göstergeler
*   **GSYH:** Toplam üretim değeri.
*   **Cari Açık:** Döviz giderinin gelirinden fazla olması.
*   **OVP:** Orta Vadeli Program (3 yıllık plan).
    `
    },

    // ─── GENEL YETENEK ───
    {
        topicId: 7,
        title: "Sayısal Mantık: Problemler",
        readTime: "6 dk",
        content: `
# Yaş Problemleri
*   Yaş farkı asla değişmez.
*   Bugün x ise, 5 yıl sonra x+5.

# Kar-Zarar Problemleri
*   Maliyet daima **100x** olsun.
*   %20 Kar = 120x.
*   %10 Zarar = 90x.
*   Satış Fiyatı = Maliyet + Kar.

# Faiz Problemleri
*   Basit Faiz: (Ana Para * Faiz Oranı * Zaman) / 100
*   Zaman "Ay" ise payda 1200 olur.
    `
    },
    {
        topicId: 8,
        title: "Sözel Mantık Taktikleri",
        readTime: "5 dk",
        content: `
# Tablo Yöntemi
Sıralama sorularında mutlaka tablo çizin.
*   **Değişkenleri Belirleyin:** Kişiler, Katlar, Günler.
*   **Sabit Olanı Zemine Yazın:** Katlar (1-5) veya Günler (Pzt-Paz) sabittir.
*   **İhtimalleri Oklarla Gösterin:** "Ali, Veli'den hemen sonradır" -> [Veli -> Ali] blok.

# Paragraf Soruları
*   Önce soru kökünü okuyun.
*   Sonra paragrafı okuyun.
*   Ana fikir genellikle ilk veya son cümledir.
    `
    },
    {
        topicId: 9,
        title: "Görsel Zeka ve Dikkat (Genel)",
        readTime: "4 dk",
        content: `
# Dikkat Testleri
*   Benzer kelimeler arası farkları bulma.
*   Şekil dizilerinde kural bozanı bulma.

## İpucu
Hızlı okuma tekniklerini kullanarak kelimelerin sadece başını ve sonunu değil, bütününü görmeye çalışın.
    `
    },
    {
        topicId: 10,
        title: "Zorlu Sorular İçin İpuçları",
        readTime: "4 dk",
        content: `
# Çıkmış Soru Tarzları
*   **Soyut İşlemler:** Sayılar arası ilişkiyi (kare alma, çarpma) bulma.
*   **Grafik Yorumlama:** Daire grafiklerinde açı hesabı. Parça/Bütün * 360.
    `
    },
    {
        topicId: 11,
        title: "Görsel Zeka: Küp ve Desen",
        readTime: "6 dk",
        content: `
# Küp Açılımı
*   1 kare atlayarak karşılıklı yüzleri bulun.
*   L ve T kuralı: Temas eden yüzler karşılıklı olamaz.

# Desen Matrisleri
*   Satır ve sütunlardaki değişimi (renk, şekil, yön) ayrı ayrı inceleyin.
    `
    },
    {
        topicId: 12,
        title: "Veri Analizi: Grafik Yorumlama",
        readTime: "5 dk",
        content: `
# Grafik Okuma
*   **Sütun:** Miktarları karşılaştırır. Artış/Azalış miktarına bakın.
*   **Daire:** Oranları gösterir. Açıları yüzdeye çevirmeyi bilin (90 derece = %25).
*   **Çizgi:** Trendi (gidişatı) gösterir. Eğim artışı hızı ifade eder.
    `
    }
];
