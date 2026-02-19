export interface FlashcardData {
    id: number;
    question: string;
    answer: string;
    topic: string;
}

export const sampleFlashcards: FlashcardData[] = [
    // ─── BANKACILIK TERİMLERİ ───
    { id: 1, question: "BDDK'nın görevi nedir?", answer: "Bankaları düzenleme, denetleme ve bankacılık sektörünün sağlıklı işlemesini sağlama.", topic: "Bankacılık" },
    { id: 2, question: "TMSF ne yapar?", answer: "Tasarruf Mevduatı Sigorta Fonu — mevduat sahiplerini korur, sorunlu bankaları devralır.", topic: "Bankacılık" },
    { id: 3, question: "Mevduat sigortası limiti nedir?", answer: "Kişi başına, banka başına 400.000 TL'ye kadar sigorta kapsamındadır.", topic: "Bankacılık" },
    { id: 4, question: "Politika faizi nedir?", answer: "TCMB'nin 1 hafta vadeli repo ihale faiz oranı. Piyasa faizlerinin referansıdır.", topic: "Bankacılık" },
    { id: 5, question: "SYR (Sermaye Yeterlilik Rasyosu) nedir?", answer: "Özkaynaklar / Risk Ağırlıklı Varlıklar. En az %8 olmalıdır.", topic: "Bankacılık" },
    { id: 6, question: "NPL (Takipteki Kredi) oranı nedir?", answer: "Tahsili gecikmiş kredilerin toplam kredilere oranı. Banka aktif kalitesinin göstergesidir.", topic: "Bankacılık" },
    { id: 7, question: "Swap nedir?", answer: "İki tarafın belirli koşullarda nakit akışlarını değiştirdiği türev sözleşme (faiz/döviz swap).", topic: "Bankacılık" },
    { id: 8, question: "KYC (Müşterini Tanı) nedir?", answer: "Bankaların müşteri kimlik doğrulaması ve risk değerlendirmesi sürecidir.", topic: "Bankacılık" },
    { id: 9, question: "AML nedir?", answer: "Anti-Money Laundering — Kara para aklamayı önleme düzenlemeleri.", topic: "Bankacılık" },
    { id: 10, question: "Açık piyasa işlemleri nedir?", answer: "Merkez bankasının piyasadaki para miktarını düzenlemek için devlet tahvili alıp satması.", topic: "Bankacılık" },
    { id: 11, question: "Mevduat munzam karşılığı nedir?", answer: "Bankaların TCMB'de tutmak zorunda olduğu zorunlu karşılık oranı.", topic: "Bankacılık" },
    { id: 12, question: "Letter of Credit (Akreditif) nedir?", answer: "Uluslararası ticarette bankanın ithalatçı adına ihracatçıya ödeme taahhüdü belgesidir.", topic: "Bankacılık" },
    { id: 13, question: "Forfaiting nedir?", answer: "İhracatçının vadeli alacağını iskontolu olarak bankaya satarak nakde çevirmesidir.", topic: "Bankacılık" },
    { id: 14, question: "Faktoring nedir?", answer: "Firmaların kısa vadeli ticari alacaklarını bir faktoring şirketine devretmesidir.", topic: "Bankacılık" },
    { id: 15, question: "SWIFT kodu nedir?", answer: "Society for Worldwide Interbank Financial Telecommunication — bankaları tanımlayan uluslararası kod.", topic: "Bankacılık" },
    { id: 16, question: "IBAN nedir?", answer: "International Bank Account Number — uluslararası standardı sağlayan 26 haneli hesap numarası.", topic: "Bankacılık" },
    { id: 17, question: "EFT ve Havale farkı nedir?", answer: "Havale: aynı banka içi transfer. EFT: farklı bankalar arası transfer.", topic: "Bankacılık" },
    { id: 18, question: "Katılım bankacılığı nedir?", answer: "Faizsiz bankacılık prensibiyle çalışan, kâr-zarar ortaklığına dayalı bankacılık sistemidir.", topic: "Bankacılık" },
    { id: 19, question: "Murabaha nedir?", answer: "Katılım bankasının müşteri adına mal alıp kâr marjı ekleyerek vadeli satışıdır.", topic: "Bankacılık" },
    { id: 20, question: "Repo nedir?", answer: "Menkul kıymetin geri alım taahhüdüyle satılması. Kısa vadeli fonlama aracıdır.", topic: "Bankacılık" },

    // ─── EKONOMİ KAVRAMLARI ───
    { id: 21, question: "GSYH (GDP) nedir?", answer: "Gayri Safi Yurtiçi Hasıla — bir ülkede belirli bir dönemde üretilen tüm mal ve hizmetlerin toplam değeri.", topic: "Ekonomi" },
    { id: 22, question: "Enflasyon nedir?", answer: "Fiyatlar genel düzeyinin sürekli artması ve paranın satın alma gücünün düşmesidir.", topic: "Ekonomi" },
    { id: 23, question: "Deflasyon nedir?", answer: "Fiyatlar genel düzeyinin sürekli düşmesidir. Durgunluk riski taşır.", topic: "Ekonomi" },
    { id: 24, question: "Stagflasyon nedir?", answer: "Ekonomik durgunluk + yüksek enflasyonun aynı anda yaşanmasıdır.", topic: "Ekonomi" },
    { id: 25, question: "Phillips Eğrisi neyi gösterir?", answer: "Enflasyon ile işsizlik arasındaki ters yönlü ilişkiyi gösterir.", topic: "Ekonomi" },
    { id: 26, question: "Cari açık nedir?", answer: "Bir ülkenin ithalatının ihracatından fazla olması durumudur.", topic: "Ekonomi" },
    { id: 27, question: "Gini Katsayısı neyi ölçer?", answer: "Gelir dağılımı eşitsizliğini ölçer. 0=tam eşitlik, 1=tam eşitsizlik.", topic: "Ekonomi" },
    { id: 28, question: "Lorenz Eğrisi nedir?", answer: "Gelir dağılımının eşitlikten sapmasını grafiksel olarak gösterir.", topic: "Ekonomi" },
    { id: 29, question: "Crowding Out (Dışlama) etkisi nedir?", answer: "Devlet harcamalarının artmasıyla özel sektör yatırımlarının daralmasıdır.", topic: "Ekonomi" },
    { id: 30, question: "Maliye politikası araçları nelerdir?", answer: "Vergi oranları, kamu harcamaları ve bütçe politikalarıdır.", topic: "Ekonomi" },
    { id: 31, question: "Para arzı nedir?", answer: "Ekonomideki toplam para miktarı (M1: vadesiz + nakit, M2: M1 + vadeli mevduat).", topic: "Ekonomi" },
    { id: 32, question: "Fisher Denklemi nedir?", answer: "MV = PY (Para arzı × Dolaşım hızı = Fiyatlar × Reel Üretim).", topic: "Ekonomi" },
    { id: 33, question: "Ricardo'nun Karşılaştırmalı Üstünlükler Teorisi?", answer: "Ülkeler fırsat maliyeti düşük olan ürünlerde uzmanlaşmalı ve ticaret yapmalıdır.", topic: "Ekonomi" },
    { id: 34, question: "Keynesyen ekonomide çarpan etkisi nedir?", answer: "Toplam harcamalardaki artışın milli geliri katları kadar artırmasıdır.", topic: "Ekonomi" },
    { id: 35, question: "Likidite tuzağı nedir?", answer: "Faiz oranlarının sıfıra yakın olduğu durumda para politikasının etkisiz kalmasıdır.", topic: "Ekonomi" },

    // ─── HUKUK TERİMLERİ ───
    { id: 36, question: "Anayasa'nın değiştirilemez maddeleri?", answer: "İlk 3 madde: Devlet şekli, Cumhuriyetin nitelikleri ve bütünlüğü.", topic: "Hukuk" },
    { id: 37, question: "Hukuk devleti ilkesi nedir?", answer: "Devletin tüm işlemlerinin hukuka bağlı olması ve yargısal denetim.", topic: "Hukuk" },
    { id: 38, question: "Zamanaşımı nedir?", answer: "Belirli bir sürenin geçmesiyle hakkın dava edilebilirliğinin sona ermesidir.", topic: "Hukuk" },
    { id: 39, question: "Müteselsil borç nedir?", answer: "Birden fazla borçlunun borcun tamamından ayrı ayrı sorumlu olmasıdır.", topic: "Hukuk" },
    { id: 40, question: "Sebepsiz zenginleşme nedir?", answer: "Hukuki sebep olmaksızın başkası aleyhine zenginleşme. İade yükümlülüğü doğar.", topic: "Hukuk" },
    { id: 41, question: "İcra iflas hukukunda aciz vesikası?", answer: "Borçlunun malvarlığının borcu karşılayamadığını gösteren resmi belge.", topic: "Hukuk" },
    { id: 42, question: "Konkordato nedir?", answer: "Borçlunun alacaklılarıyla borçlarını yeniden yapılandırma anlaşmasıdır.", topic: "Hukuk" },
    { id: 43, question: "Tapu sicili ne sağlar?", answer: "Taşınmaz mülkiyetinin ve ayni hakların kamuya açık kaydını tutar. Aleniyet ilkesi.", topic: "Hukuk" },
    { id: 44, question: "Haksız fiil şartları nelerdir?", answer: "Hukuka aykırı fiil, kusur, zarar ve illiyet bağı.", topic: "Hukuk" },
    { id: 45, question: "Kefalet türleri nelerdir?", answer: "Adi kefalet (önce asıl borçluya başvurulur) ve müteselsil kefalet (doğrudan kefile).", topic: "Hukuk" },
    { id: 46, question: "Vekaletname nedir?", answer: "Bir kişiye başka biri adına hukuki işlem yapma yetkisi veren belgedir.", topic: "Hukuk" },
    { id: 47, question: "İyiniyet karinesi nedir?", answer: "Herkes iyiniyetli kabul edilir, aksini iddia eden ispatla yükümlüdür (TMK m.3).", topic: "Hukuk" },
    { id: 48, question: "SPK nedir?", answer: "Sermaye Piyasası Kurulu — sermaye piyasasını düzenleyen ve denetleyen bağımsız kurul.", topic: "Hukuk" },
    { id: 49, question: "MASAK nedir?", answer: "Mali Suçları Araştırma Kurulu — kara para aklama ve terörün finansmanıyla mücadele.", topic: "Hukuk" },
    { id: 50, question: "5411 Bankacılık Kanunu ne düzenler?", answer: "Bankaların kuruluş, yönetim, çalışma esasları, denetimi ve tasfiyesini düzenler.", topic: "Hukuk" },

    // ─── MUHASEBE TERİMLERİ ───
    { id: 51, question: "Bilanço denklemi nedir?", answer: "Varlıklar = Kaynaklar (Borçlar + Özkaynaklar).", topic: "Muhasebe" },
    { id: 52, question: "Amortisman nedir?", answer: "Duran varlıkların kullanım ömrü boyunca gider olarak kaydedilen yıpranma payıdır.", topic: "Muhasebe" },
    { id: 53, question: "Muhasebenin temel kavramları (5 tanesi)?", answer: "Sosyal sorumluluk, kişilik, işletmenin sürekliliği, dönemsellik, tutarlılık.", topic: "Muhasebe" },
    { id: 54, question: "Aktif hesaplar nelerdir?", answer: "Kasa, banka, alacaklar, stoklar, duran varlıklar gibi varlık hesaplarıdır.", topic: "Muhasebe" },
    { id: 55, question: "Pasif hesaplar nelerdir?", answer: "Borçlar, sermaye, karşılıklar gibi kaynak hesaplarıdır.", topic: "Muhasebe" },
    { id: 56, question: "Gelir tablosu neyi gösterir?", answer: "İşletmenin belirli dönemdeki gelir, gider ve kâr/zarar durumunu.", topic: "Muhasebe" },
    { id: 57, question: "Nakit akış tablosu nedir?", answer: "İşletmenin nakit giriş ve çıkışlarını gösteren tablodur: işletme, yatırım, finansman.", topic: "Muhasebe" },
    { id: 58, question: "UFRS nedir?", answer: "Uluslararası Finansal Raporlama Standartları — küresel muhasebe standartları.", topic: "Muhasebe" },
    { id: 59, question: "Karşılık nedir?", answer: "Gelecekte gerçekleşme olasılığı yüksek yükümlülükler için ayrılan tutardır.", topic: "Muhasebe" },
    { id: 60, question: "Dönen varlık ve duran varlık farkı?", answer: "Dönen: 1 yıldan kısa (kasa, alacak). Duran: 1 yıldan uzun (bina, makine).", topic: "Muhasebe" },

    // ─── FİNANS FORMÜLLERİ ───
    { id: 61, question: "Basit faiz formülü?", answer: "Faiz = Anapara × Faiz Oranı × Süre", topic: "Finans" },
    { id: 62, question: "Bileşik faiz formülü?", answer: "A = P × (1 + r/n)^(n×t) — P: anapara, r: faiz, n: dönem, t: yıl", topic: "Finans" },
    { id: 63, question: "Net Bugünkü Değer (NBD) nedir?", answer: "Gelecekteki nakit akışlarının bugünkü değerinden yatırım maliyetinin çıkarılması.", topic: "Finans" },
    { id: 64, question: "İç Verim Oranı (IRR) nedir?", answer: "Yatırımın net bugünkü değerini sıfıra eşitleyen iskonto oranıdır.", topic: "Finans" },
    { id: 65, question: "ROE (Özkaynak Karlılığı) formülü?", answer: "Net Kâr / Özkaynaklar × 100. Ortakların yatırımlarının verimliliğini ölçer.", topic: "Finans" },
    { id: 66, question: "ROA (Aktif Karlılığı) formülü?", answer: "Net Kâr / Toplam Varlıklar × 100. Varlıkların ne kadar verimli kullanıldığını gösterir.", topic: "Finans" },
    { id: 67, question: "P/E oranı nedir?", answer: "Fiyat/Kazanç = Hisse Fiyatı / Hisse Başına Kâr. Değerleme göstergesidir.", topic: "Finans" },
    { id: 68, question: "Beta katsayısı nedir?", answer: "Bir hissenin piyasaya göre duyarlılığını ölçer. Beta>1: agresif, Beta<1: defansif.", topic: "Finans" },
    { id: 69, question: "CAPM formülü nedir?", answer: "E(R) = Rf + β(Rm - Rf) — Rf: risksiz oran, β: beta, Rm: piyasa getirisi", topic: "Finans" },
    { id: 70, question: "Kaldıraç etkisi nedir?", answer: "Borçlanma ile özkaynak karlılığını artırma. Yüksek kaldıraç = yüksek risk + yüksek getiri.", topic: "Finans" },

    // ─── GENEL KÜLTÜR ───
    { id: 71, question: "Cumhuriyet ne zaman ilan edildi?", answer: "29 Ekim 1923", topic: "Genel Kültür" },
    { id: 72, question: "Atatürk'ün 6 ilkesi nelerdir?", answer: "Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık.", topic: "Genel Kültür" },
    { id: 73, question: "Lozan Antlaşması ne zaman imzalandı?", answer: "24 Temmuz 1923", topic: "Genel Kültür" },
    { id: 74, question: "Türkiye NATO'ya ne zaman katıldı?", answer: "1952", topic: "Genel Kültür" },
    { id: 75, question: "Latin alfabesine ne zaman geçildi?", answer: "1 Kasım 1928", topic: "Genel Kültür" },
    { id: 76, question: "Türkiye'nin en uzun nehri?", answer: "Kızılırmak (1355 km)", topic: "Genel Kültür" },
    { id: 77, question: "Türkiye'nin en büyük gölü?", answer: "Van Gölü (3713 km²)", topic: "Genel Kültür" },
    { id: 78, question: "Türkiye'nin yüzölçümü en büyük ili?", answer: "Konya (40.838 km²)", topic: "Genel Kültür" },
    { id: 79, question: "Basel Komitesi nerede faaliyet gösterir?", answer: "BIS (Uluslararası Ödemeler Bankası) bünyesinde — İsviçre, Basel şehri.", topic: "Genel Kültür" },
    { id: 80, question: "G20 nedir?", answer: "Dünyanın en büyük 20 ekonomisinin liderlerinin buluştuğu uluslararası forum.", topic: "Genel Kültür" },
];
