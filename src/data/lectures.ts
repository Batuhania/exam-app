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
    readTime: "12 dk",
    content: `
# 5411 Sayılı Bankacılık Kanunu — Kapsamlı Rehber

## Neden Bu Kanun Önemli?
5411 sayılı kanun, Türkiye'deki tüm bankacılık faaliyetlerinin çerçevesini çizen **ana mevzuattır**. Sınavlarda en çok soru gelen konulardan biridir. Bu kanunu bilmeden bankacılık sınavını geçmeniz çok zordur.

## Kanunun Amacı (m.1)
Finansal piyasalarda **güven ve istikrarın** sağlanması, kredi sisteminin etkin çalışması ve **tasarruf sahiplerinin korunmasıdır**.

> 💡 **Sınav İpucu:** "Güven, istikrar, tasarruf sahiplerinin korunması" — bu üç kavram sınavda sıkça sorulur.

## Kanunun Kapsamı (m.2)
Türkiye'de kurulu şu kuruluşlar bu kanuna tabidir:

| Kuruluş | Açıklama |
|---------|----------|
| **Mevduat Bankaları** | Halktan mevduat toplayan bankalar (Ziraat, İş, Garanti vb.) |
| **Katılım Bankaları** | Faizsiz bankacılık yapan bankalar (Kuveyt Türk, Albaraka vb.) |
| **Kalkınma ve Yatırım Bankaları** | Mevduat toplamayan, proje finanse eden bankalar (Türk Eximbank vb.) |
| **Yabancı Banka Şubeleri** | Yurt dışında kurulu bankaların TR şubeleri |
| **Finansal Holding Şirketleri** | Banka grubunun ana şirketi |
| **BDDK ve TMSF** | Düzenleyici ve denetleyici kurumlar |

> ⚠️ **KRİTİK:** Merkez Bankası (TCMB) bu kanun kapsamında **DEĞİLDİR!** TCMB kendi özel kanunuyla (1211 sayılı) yönetilir. Bu sınavda kesinlikle sorulur!

## Banka Türleri — Net Ayrım

**Kredi Kuruluşları** = Mevduat Bankaları + Katılım Bankaları

Kalkınma ve Yatırım Bankaları kredi kuruluşu **değildir**. Onlar "banka" tanımının geniş kapsamındadır ama mevduat/katılım fonu toplamaz.

## Bankaların Kuruluş Şartları (m.6-10)
Bir banka kurmak için şu şartlar aranır:

1. **Hukuki Yapı:** Anonim şirket olarak kurulmalıdır
2. **Asgari Sermaye:** Nakden ve her türlü muvazaadan ari olarak ödenmiş sermaye en az **2 Milyar 500 Milyon TL** (BDDK bu tutarı güncelleyebilir)
3. **Kurucu Şartları:**
   - Müflis olmamak
   - Taksirli suçlar hariç hapis cezası almamış olmak
   - Bankacılık işlemleri yapmaktan yasaklanmamış olmak
4. **Yönetim:** Profesyonel, deneyimli yönetim kadrosu
5. **İzin:** BDDK'dan faaliyet izni alınması şarttır

> 💡 **Hatırlatma:** Kuruluş izni ≠ Faaliyet izni. Önce kuruluş izni, sonra faaliyet izni alınır. Faaliyet izni 1 yıl içinde alınmazsa kuruluş izni geçersiz olur!

## Kredi Sınırları (m.54-55)
Bu kısım sınavda çok sık sorulur, mutlaka ezberleyin:

- **Tek kişi/risk grubu limiti:** Banka özkaynaklarının **%25**'ini aşamaz
- **Büyük kredi tanımı:** Özkaynakların **%10**'unu aşan krediler
- **Büyük krediler toplamı:** Özkaynakların **8 katını** aşamaz

## Faaliyet İzni İptali
BDDK, şu durumlarda faaliyet iznini iptal edebilir:
- Sistemik risk oluşturması
- Yükümlülüklerini yerine getirememesi
- Mali yapısının ciddi şekilde bozulması
- Faaliyet iznine esas şartların kaybedilmesi

## Sınav Stratejisi
Bu konudan genellikle 2-3 soru gelir. Özellikle şunlara odaklanın:
- Kanunun kapsamı (TCMB dahil değil!)
- Kredi sınırları (%25, %10, 8 kat)
- Kuruluş sermayesi
- Banka türleri ayrımı
    `
  },
  {
    topicId: 2,
    title: "BDDK ve TMSF — Düzenleyici Kurumlar",
    readTime: "14 dk",
    content: `
# BDDK ve TMSF — Bankacılık Düzenleyici Kurumları

## Neden Bu Konu Önemli?
Bankacılık sınavlarında BDDK ve TMSF'nin görevleri, yapıları ve yetkileri mutlaka sorulur. Bu iki kurumu birbirine karıştırmamak çok önemlidir.

---

# 1. BDDK (Bankacılık Düzenleme ve Denetleme Kurumu)

## Kuruluş Hikayesi
BDDK, **2001 bankacılık krizinden** sonra kurulmuştur. Kriz öncesinde bankacılık denetimi yetersizdi ve batık bankalar ekonomiyi çökertmişti. BDDK bu nedenle bağımsız bir otorite olarak yapılandırıldı.

## Temel Bilgiler

| Özellik | Detay |
|---------|-------|
| **İlişkili Bakan** | Hazine ve Maliye Bakanı |
| **Üye Sayısı** | 7 üye (Başkan + 6 üye) |
| **Atayan** | Cumhurbaşkanı |
| **Görev Süresi** | 5 yıl |
| **Karar Yeter Sayısı** | En az 5 üyeyle toplanır, en az 4 oyla karar alır |
| **Merkez** | İstanbul |

## BDDK'nın Temel Görevleri
1. **Düzenleme:** Bankacılık sektörü için kural ve standart belirleme
2. **Denetleme:** Bankaların mali yapısını ve faaliyetlerini denetleme
3. **Lisanslama:** Banka kuruluş ve faaliyet izinlerini verme/iptal etme
4. **Yaptırım:** Kurallara uymayan bankalara müdahale ve ceza

## BDDK'nın Yetkileri
- Bankaların sermaye yeterliliğini takip eder
- Risk yönetimi standartlarını belirler
- Bankalara idari para cezası verebilir
- Gerektiğinde banka yönetimini görevden alabilir
- Bankayı TMSF'ye devredebilir

> 💡 **Sınav İpucu:** BDDK düzenler ve denetler, ama **mevduat sigortası yapmaz**. O TMSF'nin işidir!

---

# 2. TMSF (Tasarruf Mevduatı Sigorta Fonu)

## Ne İş Yapar?
TMSF'nin iki temel görevi vardır:
1. **Mevduat Sigortası:** Bankaların batması durumunda mudilerin parasını korumak
2. **Banka Çözümleme:** Sorunlu bankaları yönetmek, tasfiye etmek veya satmak

## Mevduat Sigortası Detayları

| Özellik | Detay |
|---------|-------|
| **Sigorta Limiti** | Kişi başı, banka başına **400.000 TL** (2024 güncel tutar — TMSF bu tutarı güncelleyebilir) |
| **Kapsam** | Gerçek kişilerin tasarruf mevduatı ve katılım fonu |
| **Kapsam Dışı** | Ticari/tüzel kişi hesapları, yurtdışı şube mevduatları |
| **Finansman** | Bankalardan alınan sigorta primleriyle |

> ⚠️ **KRİTİK:** Sigorta **kişi başı** ve **banka başınadır**. Yani A bankasında 400.000 TL ve B bankasında 400.000 TL ayrı ayrı sigortalıdır.

## TMSF'nin Yetkileri
- Fona devredilen bankalarda ortaklık haklarını kullanır
- Bu bankaları üçüncü kişilere satabilir
- Bankayı tasfiye edebilir
- Zarar sorumlularına rücu davası açabilir

## Zamanaşımına Uğrayan Mevduat
**10 yıl** boyunca aranmayan mevduat zamanaşımına uğrar ve TMSF'ye devredilir. Bu sınavda klasik bir sorudur!

## BDDK vs TMSF — Karşılaştırma

| Özellik | BDDK | TMSF |
|---------|------|------|
| **Ana Görevi** | Düzenleme & Denetleme | Mevduat Sigortası & Çözümleme |
| **Odağı** | Sistemin bütünü | Tasarruf sahipleri |
| **Yaptırımı** | Ceza, müdahale | Banka devralma, satma, tasfiye |
| **Bağımsızlık** | İdari ve mali bağımsız | İdari ve mali bağımsız |
    `
  },
  {
    topicId: 3,
    title: "Krediler ve Mevduat — Bankacılığın Kalbi",
    readTime: "14 dk",
    content: `
# Krediler ve Mevduat Mevzuatı

## Bu Konuyu Neden Öğrenmelisiniz?
Bankacılığın özü, bir taraftan mevduat toplayıp diğer taraftan kredi vermektir. Bu iki kavram bankacılık sınavının DNA'sıdır.

---

# 1. Mevduat (5411 m.60-65)

## Tanım
Yazılı, sözlü veya herhangi bir şekilde halka duyurularak, istendiğinde ya da belli bir vadede geri ödenmek üzere kabul edilen paradır.

## Mevduat Türleri

| Tür | Açıklama | Örnek |
|-----|----------|-------|
| **Vadesiz** | İstendiğinde çekilebilir | Maaş hesabı |
| **Vadeli** | Belirli bir vade sonunda çekilir | 3 aylık mevduat |
| **İhbarlı** | Çekim için önceden bildirim gerekir | 7 gün ihbarlı |
| **Birikimli** | Düzenli yatırım yapılan hesap | Aylık birikim |

## Kimler Mevduat Toplayabilir?
**Sadece bankalar!** Bankalar dışındaki kişi ve kuruluşların mevduat toplaması **yasaktır** ve suçtur.

> ⚠️ Katılım bankaları "mevduat" değil, **"katılım fonu"** toplar. Terminoloji farkına dikkat!

## Mevduat Faizi Hesaplama
- **Basit Faiz:** Anapara × Faiz Oranı × Gün / 36500
- **Bileşik Faiz:** Dönem sonlarında faiz anaparaya eklenir
- Stopaj oranı uygulanır (güncel oran değişebilir)

---

# 2. Krediler (5411 m.48-58)

## Tanım
Bankaların, topladıkları kaynakları müşterilerine belirli bir vade, faiz ve koşullarla kullandırmasıdır.

## Kredi Türleri

### Vadesine Göre
| Tür | Vade |
|-----|------|
| Kısa vadeli | 1 yıla kadar |
| Orta vadeli | 1-5 yıl arası |
| Uzun vadeli | 5 yıldan fazla |

### Niteliğine Göre
- **Bireysel Krediler:** İhtiyaç, konut, taşıt
- **Ticari Krediler:** İşletme, yatırım, dış ticaret
- **Kurumsal Krediler:** Büyük firmalar, proje finansmanı

### Teminatına Göre
- **Teminatsız (Açık):** Kişinin itibarına dayalı
- **Teminatlı:** İpotek, rehin, kefalet, garanti mektubu

## Kredi Sınırları — SINAV KLASİĞİ

| Sınır | Tutar |
|-------|-------|
| **Tek kişi/risk grubu** | Banka özkaynaklarının **%25**'i |
| **Büyük kredi eşiği** | Özkaynakların **%10**'unu aşan her kredi |
| **Büyük krediler toplamı** | Özkaynakların **8 katı** |

## Kredi Kalitesi Sınıflandırması

| Grup | Adı | Gecikme |
|------|-----|---------|
| 1. Grup | Standart | Düzenli ödemeler |
| 2. Grup | Yakın İzleme | 30-89 gün gecikme |
| 3. Grup | Tahsil İmkanı Sınırlı | 90-179 gün |
| 4. Grup | Tahsili Şüpheli | 180-365 gün |
| 5. Grup | Zarar (NPL) | 365+ gün |

> 💡 **Sınav İpucu:** 90 günü geçen krediler "takipteki kredi" (NPL) sayılır. Bu rakam bankacılık sınavlarında sürekli sorulur!

## Kredi Verilmesinde Yasaklar
Şu kişilere kredi verilmesi **yasaktır**:
- Banka yönetim kurulu üyelerine (yöneticiler sınırlama altında)
- Bankanın bağlı ortaklıklarına (sınırlama altında)
- Denetim kurulu üyelerine
    `
  },

  // ─── ALAN BİLGİSİ ───
  {
    topicId: 4,
    title: "Makroekonomi ve Para Politikaları",
    readTime: "15 dk",
    content: `
# Makroekonomi ve Para Politikaları — Derinlemesine

## Bu Konuyu Neden Bilmelisiniz?
Merkez bankası kararları, faiz oranları, enflasyon — bunlar bankacılığın günlük hayatıdır. Sınavda en az 3-4 soru bu konudan gelir.

---

# 1. Para Politikası

## Merkez Bankası'nın (TCMB) Temel Amacı
**Fiyat istikrarını sağlamak** — yani enflasyonu kontrol altına almak. Finansal istikrar ise ikincil hedefdir.

> 💡 Pek çok aday "büyümeyi sağlamak" veya "istihdamı artırmak" der — bu yanlıştır! TCMB'nin **birincil amacı fiyat istikrarıdır**.

## Para Politikası Araçları

### 1. Politika Faizi (Haftalık Repo)
TCMB'nin bankacılık sistemine uyguladığı temel faiz oranıdır. Bu oranı artırmak veya düşürmek ekonominin yönünü belirler.

| Eylem | Sonuç | Ne Zaman? |
|-------|-------|-----------|
| Faiz **artırma** | Tasarruf artar, talep düşer, TL değer kazanır | Enflasyon yüksekken |
| Faiz **düşürme** | Kredi ucuzlar, harcama artar, yatırım artar | Durgunluk dönemlerinde |

### 2. Açık Piyasa İşlemleri (APİ)
TCMB'nin piyasada tahvil/bono alıp satarak para arzını ayarlamasıdır.

- **Tahvil ALIRSA** → Piyasaya para girer → Para arzı ARTAR → Genişletici
- **Tahvil SATARSA** → Piyasadan para çekilir → Para arzı AZALIR → Daraltıcı

> 💡 **Düşünme Tekniği:** MB alırsa "para verir" (genişleme), satarsa "para çeker" (daralma).

### 3. Zorunlu Karşılıklar
Bankaların topladıkları mevduatın belirli bir kısmını TCMB'de tutma zorunluluğu.

- Oran **artarsa** → Bankalar daha az kredi verebilir → Daraltıcı
- Oran **azalırsa** → Bankalar daha çok kredi verebilir → Genişletici

### 4. Reeskont (Iskonto) Penceresi
TCMB'nin bankalara doğrudan borç verme oranıdır.

### 5. Döviz Müdahaleleri
TCMB döviz alım/satımıyla TL'nin değerini koruyabilir.

---

# 2. Enflasyon — Detaylı Analiz

## Tanım
Fiyatlar genel düzeyinin sürekli ve belirgin artışıdır. Tek bir ürünün pahalanması enflasyon değildir!

## Enflasyon Türleri

| Tür | Neden | Örnek |
|-----|-------|-------|
| **Talep Enflasyonu** | Çok para, az mal (talep > arz) | Pandemi sonrası harcama patlaması |
| **Maliyet Enflasyonu** | Üretim maliyetleri artar | Petrol fiyat artışı, döviz kuru artışı |
| **Yapısal Enflasyon** | Ekonominin yapısal sorunları | Tekelci piyasalar, verimsizlik |

## Önemli Enflasyon Kavramları
- **Stagflasyon:** Durgunluk + Enflasyon birlikte yaşanır. En kötü senaryo!
- **Deflasyon:** Fiyatlar genel düzeyinin düşmesi. Japonya örneği.
- **Hiperenflasyon:** Aylık %50+ artış. Zimbabwe, Venezuela örnekleri.
- **Dezenflasyon:** Enflasyonun yavaşlaması (düşmesi değil, artış hızının azalması).

> ⚠️ **Dikkat:** Dezenflasyon ≠ Deflasyon. Dezenflasyonda fiyatlar hâlâ artıyor, ama artış hızı yavaşlıyor.

## Fisher Denklemi
**Nominal Faiz = Reel Faiz + Beklenen Enflasyon**

Reel faiz negatifse, tasarruf sahipleri reel anlamda para kaybeder.

---

# 3. Önemli Makro Kavramlar

- **GSYH:** Bir ülkede 1 yıl içinde üretilen tüm nihai mal/hizmetlerin piyasa değeri
- **Büyüme:** GSYH'nin reel artışı
- **Cari Açık:** Ülkenin dış dünyaya ödediğinin, aldığından fazla olması
- **Bütçe Açığı:** Kamu harcamalarının gelirlerinden fazla olması
- **Para Arzı (M2):** Nakit + vadesiz mevduat + vadeli mevduat

## Sınav Stratejisi
- MB araçlarının genişletici/daraltıcı etkilerini karıştırmayın
- Fisher denklemini bilin
- Enflasyon türlerini ayırt edin
- Stagflasyon tanımını kesin bilin
    `
  },
  {
    topicId: 5,
    title: "Maliye Politikası ve Vergi Sistemi",
    readTime: "12 dk",
    content: `
# Maliye Politikası ve Türk Vergi Sistemi

## Bu Konuyu Neden Bilmelisiniz?
Para politikası TCMB'nin işiyse, maliye politikası **hükümetin** işidir. Sınavda ikisinin farkını soran sorular gelir.

---

# 1. Maliye Politikası Nedir?

Devletin **kamu harcamaları** ve **vergiler** aracılığıyla ekonomiyi yönlendirmesidir.

## Genişletici Maliye Politikası (Durgunlukta Uygulanır)
Ekonomi yavaşladığında, devlet:
- Kamu harcamalarını **artırır** (yol, köprü, altyapı projeleri)
- Vergileri **düşürür** (insanların cebinde daha çok para kalır)
- **Sonuç:** Toplam talep artar → Üretim artar → İstihdam artar

## Daraltıcı Maliye Politikası (Enflasyonda Uygulanır)
Ekonomi aşırı ısındığında, devlet:
- Kamu harcamalarını **kısar**
- Vergileri **artırır**
- **Sonuç:** Toplam talep azalır → Fiyat artışları yavaşlar

## Para Politikası vs Maliye Politikası

| Özellik | Para Politikası | Maliye Politikası |
|---------|----------------|-------------------|
| **Kim yapar?** | TCMB | Hükümet (Hazine ve Maliye Bakanlığı) |
| **Araçları** | Faiz, APİ, zorunlu karşılık | Harcama, vergi, bütçe |
| **Hızı** | Hızlı etki | Yavaş etki (yasama süreci) |
| **Bağımsızlık** | Bağımsız kurum | Siyasi karar |

---

# 2. Türk Vergi Sistemi

## Vergi Sınıflandırması

### Dolaysız Vergiler (Gelir Üzerinden)
Kişinin gelirine veya kazancına doğrudan uygulanan vergiler:
- **Gelir Vergisi:** Gerçek kişilerin geliri (maaş, kira, faiz vb.)
- **Kurumlar Vergisi:** Şirketlerin kazancı (%25 — güncel oran)

### Dolaylı Vergiler (Harcama Üzerinden)
Mal/hizmet tüketimi üzerinden alınan vergiler:
- **KDV (Katma Değer Vergisi):** %1, %10, %20 oranlarında (güncel oranlar)
- **ÖTV (Özel Tüketim Vergisi):** Benzin, sigara, alkol, araç vb.
- **BSMV (Banka ve Sigorta Muameleleri Vergisi):** Bankacılık işlemlerinde KDV yerine alınır (%5)

> 💡 **Sınav İpucu:** Banka işlemlerinde KDV uygulanmaz, **BSMV** uygulanır! Bu çok sık sorulan bir ayrıntıdır.

## Bütçe Kavramları
- **Bütçe Açığı:** Harcamalar > Gelirler
- **Bütçe Fazlası:** Gelirler > Harcamalar
- **OVP (Orta Vadeli Program):** 3 yıllık ekonomik hedefler
- **Faiz Dışı Denge:** Faiz giderleri hariç bütçe dengesi

## Laffer Eğrisi
Vergi oranlarının belirli bir noktadan sonra artırılması vergi gelirlerini artırmaz, aksine azaltır. Çünkü insanlar kayıt dışına kayar.
    `
  },
  {
    topicId: 6,
    title: "Genel Muhasebe ve Mali Tablolar",
    readTime: "14 dk",
    content: `
# Genel Muhasebe — Temelden İleri Düzeye

## Bu Konuyu Neden Bilmelisiniz?
Muhasebe, iş dünyasının dilidir. Bankacılık sınavlarında bilanço okuma, hesap planı ve rasyo soruları mutlaka çıkar.

---

# 1. Temel Muhasebe Denkliği

**VARLIKLAR = BORÇLAR + ÖZKAYNAKLAR**

Bu denklik her zaman eşitliğini korur. Her işlem bu denklikteki en az iki kalemi etkiler.

### Varlıklar (Aktif) — İşletmenin Sahip Olduğu
- **Dönen Varlıklar:** 1 yıl içinde nakde çevrilebilen kalemler
  - 100 Kasa | 102 Bankalar | 120 Alıcılar | 153 Ticari Mallar
- **Duran Varlıklar:** 1 yıldan uzun süre kullanılacak kalemler
  - 252 Binalar | 253 Tesis, Makine | 255 Demirbaşlar

### Kaynaklar (Pasif) — İşletmenin Borçları ve Sermayesi
- **Kısa Vadeli Yab. Kaynaklar (KVYK):** 1 yıl içinde ödenmesi gereken borçlar
  - 300 Banka Kredileri | 320 Satıcılar | 360 Ödenecek Vergiler
- **Uzun Vadeli Yab. Kaynaklar (UVYK):** 1 yıldan uzun borçlar
  - 400 Banka Kredileri | 420 Satıcılar
- **Özkaynaklar:** İşletme sahiplerinin payı
  - 500 Sermaye | 540 Yasal Yedekler | 590 Dönem Net Karı

---

# 2. Çift Taraflı Kayıt (Çok Önemli!)

Her işlemde bir hesap **borçlanır**, bir hesap **alacaklanır**:

| Hesap Türü | Artınca | Azalınca |
|-----------|---------|----------|
| **Aktif Hesaplar** | BORÇ tarafı | ALACAK tarafı |
| **Pasif Hesaplar** | ALACAK tarafı | BORÇ tarafı |
| **Gelir Hesapları** | ALACAK tarafı | BORÇ tarafı |
| **Gider Hesapları** | BORÇ tarafı | ALACAK tarafı |

> 💡 **Altın Kural:** "Aktif artar borçlanır, pasif artar alacaklanır."

---

# 3. Mali Tablolar

## Bilanço (Finansal Durum Tablosu)
- Belirli bir **tarihteki** mali durumu gösterir (fotoğraf gibi)
- Soldaki: Varlıklar | Sağdaki: Kaynaklar
- Her zaman: Sol toplam = Sağ toplam

## Gelir Tablosu
- Belirli bir **dönemdeki** faaliyet sonuçlarını gösterir (video gibi)
- Yapısı: Satışlar → SMM → Brüt Kar → Faaliyet Giderleri → Net Kar/Zarar

## Nakit Akış Tablosu
- Nakit giriş ve çıkışlarını gösterir
- 3 bölüm: İşletme + Yatırım + Finansman faaliyetleri

---

# 4. Muhasebe İlkeleri

- **Dönemsellik:** Gelir/gider, nakit akışına değil ait olduğu döneme kaydedilir
- **İhtiyatlılık:** Muhtemel giderler kaydedilir, muhtemel gelirler kaydedilmez
- **Tutarlılık:** Seçilen muhasebe politikaları değiştirilmez
- **Tam Açıklama:** İlgili tüm bilgiler finansal tablolarda gösterilir
- **İşletmenin Sürekliliği:** İşletmenin sonsuz ömürlü varsayılması
    `
  },
  {
    topicId: 13,
    title: "Ticaret Hukuku — Tacir, Şirket, Kıymetli Evrak",
    readTime: "14 dk",
    content: `
# Ticaret Hukuku

## Bu Konuyu Neden Bilmelisiniz?
Bankalar ticari hayatın merkezindedir — çek, senet, şirket kuruluşu, dış ticaret. Ticaret hukuku bankacılık sınavının vazgeçilmez konusudur.

---

# 1. Tacir ve Sonuçları

## Tacir Tanımı (TTK m.12)
Bir ticari işletmeyi, kısmen de olsa kendi adına işleten kişiye **tacir** denir.

## Tacir Olmanın Hukuki Sonuçları
1. **İflasa tabidir** (adi vatandaş iflas edemez, sadece icra takibi yapılır)
2. **Ticaret unvanı** kullanmak zorundadır
3. **Ticari defter** tutmak zorundadır
4. **Basiretli iş adamı** gibi davranma yükümlülüğü
5. Ticaret siciline tescil zorunluluğu
6. Ticari örf ve adetlere tabidir
7. Fatura verme ve itiraz süreleri geçerlidir

> 💡 **Sınav Notu:** Esnaf tacir **değildir**. Esnaf ve tacir ayrımı önemlidir. Esnaf iflasa tabi değildir!

---

# 2. Şirket Türleri

## Şahıs Şirketleri
- **Kolektif Şirket:** Ortaklar sınırsız sorumlu
- **Komandit Şirket:** Komandite (sınırsız) + Komanditer (sınırlı) ortaklar

## Sermaye Şirketleri
| Tür | Özellik | Ortak Sayısı | Min. Sermaye |
|-----|---------|-------------|-------------|
| **Anonim (A.Ş.)** | Pay senedine bölünmüş sermaye | Min 1 | 50.000 TL (kayıtlı 100.000 TL) |
| **Limited (Ltd.Şti.)** | Pay senedi çıkaramaz | Min 1, Maks 50 | 10.000 TL |

> ⚠️ **Bankalar** sadece **Anonim Şirket** olarak kurulabilir!

---

# 3. Kıymetli Evrak (ÇOK ÖNEMLİ!)

## Tanım
Hakkın senede bağlandığı, hak olmadan senedin, senet olmadan da hakkın ileri sürülemediği belgelerdir.

## Türleri

| Tür | Özellik | Taraflar |
|-----|---------|----------|
| **Poliçe** | Ödeme emri niteliğinde | Keşideci → Muhatap → Lehtar |
| **Bono (Emre Yazılı Senet)** | Ödeme vaadi | Keşideci → Lehtar |
| **Çek** | Görüldüğünde ödenir | Keşideci → Muhatap (Banka) → Lehtar |

## Çek Bilgileri
- Çek **görüldüğünde** ödenir (vadeli çek hukuken geçersiz, ama uygulamada var)
- Muhatap **sadece banka** olabilir
- İbraz süreleri:
  - Aynı il: **10 gün**
  - Farklı il: **1 ay**
  - Farklı ülke: **3 ay**
- Karşılıksız çek **suçtur** (adli para cezası veya hapis)

## Bono (Senet) Bilgileri
- "senet" veya "emre yazılı senet" denir
- Keşideci bizzat ödeme vaadinde bulunur
- Protesto çekilmezse cirantalara başvurulamaz

> 💡 **Çek vs Bono:** Çekte 3 taraf, bonoda 2 taraf var. Çek görüldüğünde ödenir, bono vadeli olabilir.
    `
  },
  {
    topicId: 14,
    title: "Türkiye Ekonomisi — Güncel Yapı ve Kurumlar",
    readTime: "14 dk",
    content: `
# Türkiye Ekonomisi — Kapsamlı Rehber

## Bu Konuyu Neden Bilmelisiniz?
Bankacılık sınavlarında Türkiye ekonomisinin genel yapısı, önemli kurumlar ve güncel ekonomik gelişmeler sıkça sorulur.

---

# 1. Ekonomi Yönetim Yapısı

| Kurum | Temel Görev |
|-------|-------------|
| **TCMB** | Fiyat istikrarı, para politikası |
| **Hazine ve Maliye Bakanlığı** | Maliye politikası, bütçe, borçlanma |
| **BDDK** | Bankacılık düzenleme ve denetleme |
| **SPK** | Sermaye piyasası düzenleme |
| **TMSF** | Mevduat sigortası, banka çözümleme |
| **Rekabet Kurumu** | Rekabet düzenlemesi, tekel önleme |
| **TÜİK** | İstatistik, enflasyon, büyüme verileri |

---

# 2. Temel Ekonomik Göstergeler

| Gösterge | Ne Ölçer? | Kim Yayınlar? |
|----------|----------|--------------|
| **GSYH** | Toplam üretim | TÜİK |
| **TÜFE** | Tüketici enflasyonu | TÜİK (aylık) |
| **ÜFE** | Üretici enflasyonu | TÜİK |
| **İşsizlik** | İşsiz nüfus oranı | TÜİK |
| **Cari Denge** | Dış ticaret dengesi | TCMB |
| **Bütçe Dengesi** | Kamu gelir-gider dengesi | Hazine |

---

# 3. Bankacılık Sektörü Yapısı

Türkiye'de bankalar 3 ana gruba ayrılır:
- **Kamu Bankaları:** Ziraat Bankası, Halkbank, Vakıfbank
- **Özel Bankalar:** İş Bankası, Garanti BBVA, Akbank, Yapı Kredi
- **Yabancı Bankalar:** HSBC, ING, QNB Finansbank

**Katılım Bankaları:** Kuveyt Türk, Albaraka, Türkiye Finans, Ziraat Katılım, Vakıf Katılım, Emlak Katılım

> 💡 Sektörün toplam aktif büyüklüğü, şube sayıları ve çalışan sayıları BDDK tarafından düzenli olarak raporlanır.

---

# 4. Dış Ticaret

- Türkiye'nin en büyük ticaret ortağı: **AB ülkeleri** (özellikle Almanya)
- **Başlıca İhracat Kalemleri:** Otomotiv, makine, tekstil, tarım ürünleri, demir-çelik
- **Başlıca İthalat Kalemleri:** Enerji (petrol, doğalgaz), hammadde, ara mallar
- **Cari Açık Sorunu:** Türkiye enerjide dışa bağımlı olduğu için yapısal cari açık verir

---

# 5. Önemli Ekonomik Dönüm Noktaları

| Yıl | Olay | Sonuç |
|-----|------|-------|
| **1994** | Ekonomik kriz | Devalüasyon, bankacılık sorunları |
| **2001** | Bankacılık krizi | BDDK kurulması, MB bağımsızlığı, dalgalı kur |
| **2008** | Küresel mali kriz | Türkiye nispeten sınırlı etkilendi |
| **2018** | Kur şoku | TL'de sert değer kaybı |
| **2023-25** | Ortodoks politikaya dönüş | Faiz artışları, sıkı para politikası |

---

# 6. Güncel Ekonomi Politikası

## OVP (Orta Vadeli Program)
3 yıllık ekonomik hedefleri içerir: GSYH büyüme, enflasyon, bütçe açığı tahminleri.

## Enflasyonla Mücadele
TCMB sıkı para politikası uygulamaktadır. Politika faizi ekonomik koşullara göre belirlenir.

## Dijital Dönüşüm
- E-devlet, dijital bankacılık
- QR kod ödemeleri, FAST sistemi (anlık transfer)
- Dijital TL çalışmaları

> ⚠️ **Sınavda** ekonomik göstergeler ve kurumların görevleri sıkça sorulur.
    `
  },

  // ─── GENEL YETENEK ───
  {
    topicId: 7,
    title: "Sayısal Mantık — Problem Çözme Teknikleri",
    readTime: "14 dk",
    content: `
# Sayısal Mantık ve Problem Çözme

## Bu Bölümü Neden Ciddiye Almalısınız?
Sayısal sorular bankacılık sınavlarının en eleme yapan bölümüdür. Doğru teknikle yaklaşırsanız en çok puan toplayacağınız alan olur.

---

# 1. Yaş Problemleri

## Altın Kural
**Yaş farkı hiçbir zaman değişmez!** Bu kuralı aklınızdan çıkarmayın.

### Çözüm Yöntemi
- Bilinmeyeni **x** olarak belirleyin (genelde küçük yaş)
- Problemdeki ilişkileri denklem haline getirin
- "y yıl önce" veya "y yıl sonra" dendiğinde herkesten y çıkarın veya ekleyin

**Örnek:** Ali bugün Ayşe'den 8 yaş büyüktür. 5 yıl sonra yaşları toplamı 46 olacaktır. Ali bugün kaç yaşındadır?

Çözüm: Ayşe = x, Ali = x+8. Beş yıl sonra: (x+5) + (x+13) = 46 → 2x+18 = 46 → x = 14 → Ali = 22

---

# 2. Kar-Zarar Problemleri

## Temel Formüller
- **Maliyet + Kar = Satış Fiyatı**
- **%20 kar** demek → Maliyet × 1.20 = Satış fiyatı
- **%10 zarar** demek → Maliyet × 0.90 = Satış fiyatı

> 💡 **Pratik İpucu:** Maliyeti hep **100** kabul edin. %30 kar → 130, %15 zarar → 85.

---

# 3. Faiz Problemleri

## Basit Faiz Formülü
**Faiz = (Anapara × Oran × Süre) / 100**

| Süre Birimi | Payda |
|------------|-------|
| Yıl | 100 |
| Ay | 1200 |
| Gün | 36500 |

## Bileşik Faiz
A = P × (1 + r/n)^(n×t) — ama sınavda genellikle basit faiz sorulur.

---

# 4. Hız - Zaman - Yol

**Yol = Hız × Zaman**

- Karşı yönden gelen iki araç: **Hızlar toplanır**
- Aynı yönde giden iki araç: **Hızlardan büyüğünden küçüğü çıkarılır**
- Ortalama hız = Toplam yol / Toplam süre (hızların ortalaması DEĞİL!)

---

# 5. Sayı Dizileri

Her soruyu çözerken kontrol edin:
1. **Sabit ekleme:** +3, +3, +3 (aritmetik dizi)
2. **Sabit çarpma:** ×2, ×2 (geometrik dizi)
3. **Artan ekleme:** +1, +2, +3, +4 (ikinci fark sabit)
4. **Fibonacci:** Her sayı önceki ikisinin toplamı
5. **İkili grup:** Tek ve çift sıradakiler ayrı dizi oluşturur

> 💡 **Zaman yönetimi:** Bir soruya 90 saniyeden fazla harcamayın. Bulamıyorsanız işaretleyip geçin.
    `
  },
  {
    topicId: 8,
    title: "Sözel Mantık — Paragraf ve Sıralama",
    readTime: "12 dk",
    content: `
# Sözel Mantık Teknikleri

## Sınav Stratejisi
Sözel bölüm pek çok adayın hız kaybettiği yerdir. Doğru teknikle burada ciddi puan kazanabilirsiniz.

---

# 1. Paragraf Soruları

## Adım Adım Çözüm
1. **Önce soruyu okuyun** (ne isteniyor?)
2. Sonra paragrafı okuyun (aradığınızı bildiğiniz için daha hızlı bulursunuz)
3. Cevabınız paragrafta yazana dayansın, kendi bilginize değil

## Soru Tipleri ve Yaklaşımlar

| Soru Tipi | Nereden Bulunur? |
|-----------|-----------------|
| Ana fikir | Genellikle ilk veya son cümle |
| Başlık | Paragrafın genel konusu |
| Destekleyen düşünce | Paragrafın ortası, örnekler |
| Çıkarım | Paragrafta ima edilen ama yazılmayan |
| Yazar tutumu | Kullanılan sıfatlar ve ton |

> 💡 "Aşağıdakilerden hangisi paragraftan çıkarılamaz?" sorularında **4 şık çıkarılabilir, 1 tanesi çıkarılamaz**. Eleme yöntemi kullanın.

---

# 2. Sıralama Problemleri (Tablo Yöntemi)

Bu soru tipi sınavlarda çok sevilir. Tablo çizmeden çözmeye çalışmayın!

## Adım Adım
1. **Boş tablo çizin** (kişi × konum/sıra)
2. Kesin bilgileri yerleştirin
3. "hemen önünde/sonunda" = Blok yapın [A-B]
4. "arasında 2 kişi var" = araya 2 boşluk bırakın
5. İhtimalleri deneyin

---

# 3. Neden-Sonuç ve Analoji

## Neden-Sonuç
"Bu nedenle", "dolayısıyla", "sonuç olarak" gibi bağlaçlara dikkat edin.

## Analoji (Benzetme)
A:B ilişkisi = C:? ilişkisi. İlişki türünü belirleyin:
- Eş anlamlı, zıt anlamlı
- Parça-bütün
- Alet-meslek
- Üst kavram
    `
  },
  {
    topicId: 9,
    title: "Görsel Zeka ve Dikkat Testleri",
    readTime: "10 dk",
    content: `
# Görsel Zeka ve Dikkat

## Bu Bölümün Önemi
Dikkat testleri özellikle müfettiş yardımcılığı sınavlarında öne çıkar. Hız ve doğruluğu birlikte ölçer.

---

# 1. Şekil Dizileri

## Kontrol Edilmesi Gereken Değişkenler
Her adımda şunlardan biri veya birkaçı değişir:
- **Konum:** Saat yönünde 90° dönme
- **Renk:** Siyah ↔ Beyaz
- **Büyüklük:** Büyüyor veya küçülüyor
- **Sayı:** Her adımda +1 veya -1
- **Şekil:** Daire → Kare → Üçgen
- **Yön:** Ok yönü değişimi

> 💡 **Teknik:** Her değişkeni ayrı ayrı takip edin. Birden fazla kural aynı anda işliyor olabilir.

---

# 2. Farklılık Bulma

- Kelime listelerinde: Harf hatalarını arayın
- Sayı listelerinde: Rakam yer değiştirmelerini kontrol edin
- Şekil gruplarında: Simetri bozukluğunu arayın

---

# 3. Sayı/Harf Saydırma

"Aşağıdaki dizide kaç tane X var?" tarzı sorularda:
- Acele etmeyin, satır satır ilerleyin
- Parmağınızla veya kalem ucuyla takip edin
- Her 5'te bir kontrol noktası koyun

---

# 4. Küp Açılımı

## Temel Kurallar
- 1 kare atlayarak karşılıklı yüzler bulunur
- T ve L şeklindeki açılımlarda temas eden yüzler karşılıklı **olamaz**
- Küp katlandığında hangi yüzün nereye geleceğini hayal edin
    `
  },
  {
    topicId: 12,
    title: "Veri Analizi — Tablo ve Grafik Yorumlama",
    readTime: "10 dk",
    content: `
# Veri Analizi ve Grafik Okuma

## Neden Önemli?
Bankacılar sürekli grafik ve tablo okur. Bu bölüm hem sınavda hem iş hayatında size yardımcı olur.

---

# Grafik Türleri ve Okuma Teknikleri

## 1. Sütun (Bar) Grafik
- **Miktarları karşılaştırır**
- Yükseklik = Miktar
- Artış/azalış farkını görsel olarak hesaplayın
- Gruplu sütunlarda renk kodlarına dikkat edin

## 2. Daire (Pasta) Grafik
- **Oranları gösterir** (toplamı %100)
- Açı hesabı: %25 = 90°, %50 = 180°
- Formül: **Oran = (Dilim / Toplam) × 100**
- Birden fazla daire grafiğini karşılaştırmak için mutlaka toplam değerlere bakın

## 3. Çizgi Grafik
- **Trendi (gidişatı) gösterir**
- Eğim: Dik = Hızlı değişim, Yatay = Durağan
- Kırılma noktaları önemli: Trend nerede değişiyor?

## 4. Tablo Okuma
- **Satır ve sütun başlıklarını önce okuyun**
- Birimlere dikkat edin (milyon TL mi, bin kişi mi?)
- "Değişim oranı" soruluyorsa: (Yeni - Eski) / Eski × 100

> 💡 **Sınav İpucu:** Grafik sorularında hesap makinesi yok! Yuvarlama ve yaklaşık hesap yapın. Şıklardaki farklar genellikle büyüktür.
    `
  },

  // ─── HUKUK ───
  {
    topicId: 26,
    title: "Anayasa Hukuku — Devlet Yapısı ve Temel Haklar",
    readTime: "16 dk",
    content: `
# Anayasa Hukuku — Kapsamlı Rehber

## Bu Konuyu Neden Bilmelisiniz?
Anayasa hukuku hem müfettiş yardımcılığı hem de uzman yardımcılığı sınavlarında ağırlıklı olarak sorulur. Devletin temel yapısını bilmeden diğer hukuk dallarını anlamanız mümkün değildir.

---

# 1. Cumhuriyetin Temel Nitelikleri

## Değiştirilemez Maddeler (m.1-3-4)

| Madde | İçerik |
|-------|--------|
| **m.1** | Türkiye Devleti bir **Cumhuriyettir** |
| **m.2** | Cumhuriyetin nitelikleri: Demokratik, laik, sosyal **hukuk devleti** |
| **m.3** | Devletin bütünlüğü, resmi dil Türkçe, başkent Ankara, bayrak, marş |
| **m.4** | İlk üç madde **değiştirilemez**, değiştirilmesi **teklif dahi edilemez** |

> ⚠️ **Sınav Klasiği:** "Hangi madde değiştirilemez?" sorusuna cevap: İlk ÜÇ madde (m.4 bunu garanti altına alır).

---

# 2. Temel Hak ve Özgürlükler

## Sınıflandırma
| Kategori | Örnekler |
|---------|----------|
| **Kişi Hakları** | Yaşam hakkı, kişi dokunulmazlığı, özel hayat, konut dokunulmazlığı, haberleşme gizliliği |
| **Sosyal ve Ekonomik Haklar** | Eğitim, çalışma, sosyal güvenlik, sağlık, konut |
| **Siyasi Haklar** | Seçme-seçilme, parti kurma, dilekçe, kamu hizmetine girme |

## Sınırlandırma Şartları (m.13)
Temel haklar ancak:
1. **Kanunla** sınırlandırılabilir (CBK ile değil!)
2. Anayasa'nın **ilgili maddesindeki sebebe** dayanılarak
3. **Demokratik toplum düzenine** aykırı olmamak kaydıyla
4. **Ölçülülük** ilkesine uygun olarak
5. Hakkın **özüne** dokunmamak şartıyla

---

# 3. Yasama — TBMM

| Bilgi | Detay |
|-------|-------|
| **Milletvekili sayısı** | 600 |
| **Seçim dönemi** | 5 yıl |
| **Seçilme yaşı** | 18 |
| **Toplantı yeter sayısı** | Üye tamsayısının 1/3'ü (200) |
| **Karar yeter sayısı** | Toplantıya katılanların salt çoğunluğu (en az 151) |
| **Anayasa değişikliği teklifi** | Üye tamsayısının 1/3'ü (200 MV) |
| **Anayasa değişikliği kabulü** | 3/5 çoğunluk (360) veya 2/3 (400) |

## Milletvekili Dokunulmazlığı (m.83)
- Yasama dokunulmazlığı TBMM kararıyla kaldırılabilir
- Ağır cezayı gerektiren suçüstü hali istisnadır

---

# 4. Yürütme — Cumhurbaşkanlığı Sistemi

2017 referandumuyla Cumhurbaşkanlığı Hükümet Sistemine geçildi:
- Cumhurbaşkanı hem devlet başkanı hem hükümet başkanıdır
- Bakanları atar ve görevden alır
- **Cumhurbaşkanlığı Kararnamesi (CBK)** çıkarabilir
- Ancak: Temel haklar ve kanunla düzenlenmesi öngörülen konularda CBK çıkaramaz

> ⚠️ **Dikkat:** Gensoru kaldırılmıştır! Bu sınavda sık sorulan bir detaydır.

---

# 5. Yargı Organları

| Mahkeme | Görevi |
|---------|--------|
| **Anayasa Mahkemesi** | Kanunların anayasaya uygunluğu + bireysel başvuru |
| **Yargıtay** | Adli yargı temyiz (son) mercii |
| **Danıştay** | İdari yargı temyiz mercii + bazı davalarda ilk derece |
| **Sayıştay** | Kamu harcamalarının denetimi (TBMM adına) |
| **Uyuşmazlık Mahkemesi** | Adli/idari yargı görev uyuşmazlıkları |

## Bireysel Başvuru (m.148)
- Anayasa Mahkemesine yapılır
- İç hukuk yolları tüketildikten sonra 30 gün içinde
    `
  },
  {
    topicId: 27,
    title: "Borçlar Hukuku — Sözleşme ve Sorumluluk",
    readTime: "14 dk",
    content: `
# Borçlar Hukuku (6098 Sayılı TBK)

## Bu Konuyu Neden Bilmelisiniz?
Her bankacılık işlemi bir borç ilişkisidir — kredi sözleşmesi, mevduat sözleşmesi, kefalet... Bu nedenle borçlar hukuku bankacının temel bilgisidir.

---

# 1. Borç İlişkisinin Kaynakları

| Kaynak | Açıklama | Örnek |
|--------|---------|-------|
| **Sözleşme** | İki tarafın iradeyle kurduğu ilişki | Kredi sözleşmesi |
| **Haksız Fiil** | Hukuka aykırı fiille zarar verme | Trafik kazası |
| **Sebepsiz Zenginleşme** | Haklı sebep olmadan başkası aleyhine zenginleşme | Yanlış hesaba para gönderme |

---

# 2. Sözleşme Hukuku

## Geçerlilik Şartları
1. **Ehliyet:** Taraflar ayırt etme gücüne sahip ve ergin olmalı
2. **İrade beyanı:** Taraflar serbest iradeleriyle karar vermeli
3. **Hukuka ve ahlaka uygunluk**
4. **Konunun imkânsız olmaması**

## Şekil Kuralı
**Kural: Şekil serbestisi!** Kanun aksini öngörmedikçe sözleşme sözlü bile yapılabilir.

### İstisna: Yazılı Şekil Gereken Sözleşmeler
- Kefalet sözleşmesi
- Alacağın temliki (devri)
- Rekabet yasağı

### Resmi Şekil Gereken Sözleşmeler
- Taşınmaz satış vaadi
- Taşınmaz satışı (tapuda)

---

# 3. İrade Fesadı Halleri (Sözleşmeyi Bozma Nedenleri)

| Tür | Açıklama |
|-----|---------|
| **Hata (Yanılma)** | Tarafın iradesini yanlış açıklaması |
| **Hile** | Karşı tarafın aldatması |
| **İkrah (Korkutma)** | Tehdit altında sözleşme yapma |
| **Gabin (Aşırı Yararlanma)** | Zor durumdan, deneyimsizlikten faydalanma |

> 💡 **Sınav İpucu:** İrade fesadında sözleşme kendiliğinden geçersiz olmaz! Mağdur taraf **1 yıl** içinde iptal etmelidir.

---

# 4. Zamanaşımı Süreleri (Çok Sorulan!)

| Durum | Süre |
|-------|------|
| **Genel zamanaşımı** | 10 yıl (m.146) |
| **Haksız fiil** | 2 yıl (öğrenmeden itibaren), 10 yıl mutlak |
| **Kira, faiz, ücret** | 5 yıl |

---

# 5. Sorumluluk Türleri

## Kusur Sorumluluğu (Kural)
Zarar verenin **kusurlu** olması aranır.

## Kusursuz Sorumluluk (İstisna)
Kusur aranmaz:
- **Adam çalıştıranın sorumluluğu** (işveren, çalışanın verdiği zarardan sorumlu)
- **Hayvan bulunduranın sorumluluğu**
- **Yapı malikinin sorumluluğu** (yıkılan bina)

## Kefalet (Bankacılık için Çok Önemli!)
- Yazılı şekil şarttır
- Azami miktar ve tarih belirtilmeli
- Eşin rızası gereklidir (aile konutu)
- Adi kefil: Önce asıl borçluya başvurulmalı
- Müteselsil kefil: Doğrudan kefile başvurulabilir
    `
  },
  {
    topicId: 28,
    title: "İcra ve İflas Hukuku — Alacak Takibi",
    readTime: "14 dk",
    content: `
# İcra ve İflas Hukuku

## Bu Konuyu Neden Bilmelisiniz?
Banka alacaklarının tahsili, icra takipleri, iflas süreçleri — bunlar bankacılığın günlük işleridir. Özellikle hukuk bölümlerinde çalışacak adaylar için kritiktir.

---

# 1. İcra Takip Yolları

| Yol | Koşul | Gönderilen | Süre |
|-----|-------|-----------|------|
| **İlamsız İcra** | Mahkeme kararı yok | Ödeme emri | 7 gün itiraz |
| **İlamlı İcra** | Mahkeme kararı var | İcra emri | 7 gün |
| **Kambiyo İcra** | Çek/senet var | Ödeme emri | 5 gün itiraz |
| **İflas Yolu** | Tacirler için | İflas ödeme emri | 7 gün |
| **Rehnin Paraya Çevrilmesi** | Rehinli alacak | İcra emri | — |

---

# 2. İlamsız İcra Süreci (Adım Adım)

1. Alacaklı icra dairesine **takip talebi** yapar
2. İcra dairesi borçluya **ödeme emri** gönderir
3. Borçlu 7 gün içinde:
   - Ödeme yapar veya
   - **İtiraz eder** (takip durur) veya
   - Sessiz kalır (takip kesinleşir)
4. İtiraz varsa alacaklı:
   - **İtirazın iptali davası** (1 yıl) veya
   - **İtirazın kaldırılması** (6 ay) yoluna gider
5. Takip kesinleşince **haciz** yapılır
6. Haczedilen mallar **satılır** ve alacak ödenir

---

# 3. Kritik Süreler (Ezberleyin!)

| İşlem | Süre |
|-------|------|
| Ödeme emrine itiraz | **7 gün** |
| Kambiyo itiraz | **5 gün** |
| Taşınır satış isteme | Hacizden itibaren **6 ay** |
| Taşınmaz satış isteme | Hacizden itibaren **1 yıl** |
| İtirazın iptali davası | **1 yıl** |
| İcra inkar tazminatı | **%20** (asgari) |

---

# 4. Haczedilemez Mallar (m.82)

Borçlunun hayatını sürdürmesi için gerekli olan mallar haczedilemez:
- Yatak, yatak takımları, yemek masası
- Yemek pişirme kapları
- Lüzumlu giysi ve eşyaları
- Meslek ve sanatı için gerekli aletler
- Engelli aracı
- Madalya ve nişanları
- Öğrenci bursları

> ⚠️ **Lüks otomobil, ikinci ev** gibi mallar **haczedilebilir!** Sadece temel ihtiyaç malları korunur.

---

# 5. İflas Hukuku

- Sadece **tacirler** iflas edebilir (esnaf veya serbest meslek erbabı iflas edemez)
- İflas kararını **Asliye Ticaret Mahkemesi** verir
- İflas masası: Borçlunun haczedilebilir tüm mal varlığı
- **Sıra cetveli:** Alacaklıların öncelik sıralaması

---

# 6. Konkordato

Borçlunun alacaklılarıyla mahkeme gözetiminde borç yapılandırma anlaşmasıdır:
- **Geçici mühlet:** 3 ay (2 ay uzatılabilir)
- **Kesin mühlet:** 1 yıl (6 ay uzatılabilir)
- Mühlet süresince icra takibi yapılamaz
    `
  },

  // ─── FİNANS ───
  {
    topicId: 34,
    title: "Risk Yönetimi ve Basel Düzenlemeleri",
    readTime: "16 dk",
    content: `
# Basel Düzenlemeleri ve Risk Yönetimi

## Bu Konuyu Neden Bilmelisiniz?
Basel düzenlemeleri bankacılığın uluslararası sermaye standardıdır. Müfettiş ve uzman sınavlarında çok detaylı sorulur.

---

# 1. Risk Türleri

| Risk | Tanım | Örnek |
|------|-------|-------|
| **Kredi Riski** | Borçlunun ödeyememe riski | Kredi temerrüdü |
| **Piyasa Riski** | Fiyat değişim riski | Döviz kuru, faiz oranı |
| **Operasyonel Risk** | İnsan hatası, sistem arızası | IT kesintisi, dolandırıcılık |
| **Likidite Riski** | Ödeme gücünün yetersizliği | Mevduat kaçışı |
| **Ülke Riski** | Politik/ekonomik istikrarsızlık | Savaş, devrim |

---

# 2. Basel I (1988)

- Sadece **kredi riskini** dikkate aldı
- SYR = Özkaynaklar / Risk Ağırlıklı Aktifler ≥ **%8**
- Risk ağırlıkları sabit: Devlet %0, Banka %20, İpotek %50, Kurumsal %100

**Eksiklikleri:** Piyasa ve operasyonel riski yok saydı, tüm kurumsal kredilere aynı riski uyguladı.

---

# 3. Basel II (2004)

**3 Yapısal Blok:**

| Blok | İçerik |
|------|--------|
| **1. Blok** | Asgari Sermaye Yeterliliği (Kredi + Piyasa + Operasyonel Risk) |
| **2. Blok** | Denetim Otoritesi İncelemesi (BDDK'nın değerlendirmesi) |
| **3. Blok** | Piyasa Disiplini (Kamuya açıklama) |

Kredi riski ölçüm yöntemleri:
- Standart Yaklaşım (dış derecelendirme kuruluşları)
- İçsel Derecelendirme (bankanın kendi modeli)

---

# 4. Basel III (2010 — 2008 Krizi Sonrası)

## Getirdiği Yenilikler

### Sermaye Yeterliliği
| Rasyo | Oran |
|-------|------|
| CET1 (Çekirdek Sermaye) | **%4.5** |
| Tier 1 Sermaye | **%6** |
| Toplam Sermaye | **%8** |
| + Sermaye Koruma Tamponu | **%2.5** |
| + Karşı Döngüsel Tampon | **%0-2.5** |
| **Fiili Minimum** | **%10.5** |

### Likidite Standartları
- **LCR (Liquidity Coverage Ratio):** Kısa vadeli likidite ≥ %100
- **NSFR (Net Stable Funding Ratio):** Uzun vadeli fonlama istikrarı ≥ %100

### Kaldıraç Oranı
Tier 1 Sermaye / Toplam Bilanço ≥ **%3**

> 💡 **Sınav İpucu:** Basel III, **2008 küresel finans krizi** sonrası hazırlandı. Krezinin nedeni: düşük sermaye, aşırı kaldıraç, yetersiz likidite.

---

# 5. SYR (Sermaye Yeterliliği Rasyosu)

**SYR = Özkaynaklar / Risk Ağırlıklı Varlıklar × 100**

- Yasal asgari: **%8**
- BDDK hedefi: **%12**
- Türk bankacılık sektörü ortalaması genellikle %15+ civarındadır
    `
  },
  {
    topicId: 35,
    title: "Sermaye Piyasaları, SPK ve BİST",
    readTime: "14 dk",
    content: `
# Sermaye Piyasaları — SPK ve BİST

## Bu Konuyu Neden Bilmelisiniz?
Bankalar aynı zamanda yatırım tavsiyesi verir, hisse alım-satımı yapar, fon yönetir. Sermaye piyasası bilgisi bankacının temel yetkinliğidir.

---

# 1. SPK (Sermaye Piyasası Kurulu)

## Görevleri
- Sermaye piyasasının **şeffaf, güvenilir ve istikrarlı** çalışmasını sağlamak
- **Yatırımcıları korumak**
- Piyasa manipülasyonu ve **içeriden öğrenenlerin ticaretini** önlemek
- Halka arza izin vermek

## Temel İlkeleri
- **Kamuyu aydınlatma:** Önemli bilgilerin zamanında paylaşılması
- **Eşit muamele:** Tüm yatırımcılara eşit bilgi ve fırsat

---

# 2. Sermaye Piyasası Araçları

| Araç | Türü | Getiri | Risk |
|------|------|--------|------|
| **Hisse Senedi (Pay)** | Ortaklık | Değişken (temettü + değer artış) | Yüksek |
| **Tahvil** | Borçlanma | Sabit (kupon faizi) | Düşük-Orta |
| **Hazine Bonosu** | Borçlanma | Sabit/kısa vade | Düşük |
| **Yatırım Fonu** | Portföy | Fon türüne göre | Çeşitli |
| **Türev Ürünler** | Riskten korunma | Dayanak varlığa bağlı | Çok yüksek |

## Türev Ürünler
| Ürün | Açıklama |
|------|---------|
| **Forward** | İki taraf arası anlaşma, borsada işlem görmez |
| **Futures** | Standart sözleşme, borsada işlem görür |
| **Opsiyon** | Alma/satma hakkı (zorunluluk yok) |
| **Swap** | Nakit akış değişimi (faiz veya döviz) |

---

# 3. BİST (Borsa İstanbul)

2013'te İMKB'den dönüşen BİST, Türkiye'nin tek menkul kıymet borsasıdır.

## Endeksler
| Endeks | İçerik |
|--------|--------|
| **BİST 100** | En büyük 100 şirket |
| **BİST 30** | En likit 30 şirket |
| **BİST Banka** | Bankacılık sektörü |

## Önemli Kavramlar
- **Halka Arz (IPO):** Şirketin ilk kez hisse satışı
- **Açığa Satış:** Ödünç hisse satıp sonra ucuzdan alarak kâr etme
- **Repo:** Menkul kıymetin geri alım taahhüdüyle satışı
- **P/E Oranı:** Fiyat / Kazanç — düşükse ucuz, yüksekse pahalı kabul edilir

> 💡 **Repo vs Ters Repo:** Repo = Satıp geri alma (borç alma). Ters repo = Alıp geri verme (borç verme). MB ters repo yaparsa piyasadan para çeker.
    `
  },

  // ─── GENEL KÜLTÜR ───
  {
    topicId: 30,
    title: "Atatürk İlkeleri ve İnkılap Tarihi",
    readTime: "14 dk",
    content: `
# Atatürk İlkeleri ve İnkılap Tarihi

## Bu Konuyu Neden Bilmelisiniz?
Genel kültür bölümünde Atatürk ilkeleri ve inkılaplar mutlaka sorulur. Kronolojik sıralama ve ilke-inkılap eşleştirmesi klasik soru tipleridir.

---

# 1. Altı Temel İlke (Altı Ok — 1931)

| İlke | Açıklama | İlgili İnkılap Örnekleri |
|------|---------|-------------------------|
| **Cumhuriyetçilik** | Egemenlik millete ait | Saltanatın kaldırılması, Cumhuriyetin ilanı |
| **Milliyetçilik** | Ulusal birlik, vatandaşlık bağı | Türk Tarih ve Dil Kurumları |
| **Halkçılık** | Kanun önünde eşitlik, sınıf ayrımı reddi | Soyadı Kanunu, kadın hakları |
| **Devletçilik** | Devletin ekonomiye müdahalesi | Sümerbank, Etibank kurulması |
| **Laiklik** | Din ve devlet işlerinin ayrılması | Halifeliğin kaldırılması, medreselerin kapatılması |
| **İnkılapçılık** | Sürekli çağdaşlaşma | Harf inkılabı, takvim değişikliği |

---

# 2. Kronolojik İnkılap Listesi

| Tarih | İnkılap | İlgili İlke |
|-------|---------|-------------|
| **23 Nisan 1920** | TBMM'nin açılması | Cumhuriyetçilik |
| **1 Kasım 1922** | Saltanatın kaldırılması | Cumhuriyetçilik |
| **29 Ekim 1923** | Cumhuriyetin ilanı | Cumhuriyetçilik |
| **3 Mart 1924** | Halifeliğin kaldırılması | Laiklik |
| **3 Mart 1924** | Tevhid-i Tedrisat (Öğretim Birliği) | Laiklik |
| **25 Kasım 1925** | Şapka Kanunu | İnkılapçılık |
| **30 Kasım 1925** | Tekke ve zaviye kapatma | Laiklik |
| **17 Şubat 1926** | Medeni Kanun kabulü | Laiklik, Halkçılık |
| **1 Kasım 1928** | Yeni Türk Harfleri kabulü | İnkılapçılık |
| **1930** | Kadınlara belediye seçim hakkı | Halkçılık |
| **1933** | Üniversite reformu | İnkılapçılık |
| **1934** | Soyadı Kanunu | Halkçılık |
| **5 Aralık 1934** | Kadınlara seçme-seçilme hakkı | Halkçılık |
| **1937** | 6 ilkenin anayasaya girmesi | Hepsi |

> 💡 **Sınav İpucu:** 3 Mart 1924 çok önemli! Aynı gün 3 önemli kanun çıktı: Halifelik kaldırıldı, Tevhid-i Tedrisat, Şer'iye ve Evkaf Vekaleti kaldırıldı.

---

# 3. Bütünleştirici İlkeler
- Milli egemenlik
- Milli bağımsızlık
- Yurtta barış, dünyada barış
- Akılcılık ve bilimsellik
- Çağdaşlaşma
    `
  },

  // ─── İNGİLİZCE ───
  {
    topicId: 32,
    title: "Banking & Finance English — Essential Guide",
    readTime: "12 dk",
    content: `
# Banking & Finance English

## Why Study This?
English is the international language of banking. Many Turkish banking exams include English vocabulary sections, especially for Inspector and Specialist positions.

---

# 1. Core Banking Terms

| English | Turkish | Example |
|---------|---------|---------|
| **Collateral** | Teminat | "The bank requires collateral for the loan." |
| **Liquidity** | Likidite | "The bank must maintain adequate liquidity." |
| **Maturity** | Vade | "The bond has a 5-year maturity." |
| **Default** | Temerrüt | "The borrower defaulted on payments." |
| **Yield** | Getiri | "Government bonds offer lower yields." |
| **Leverage** | Kaldıraç | "High leverage increases risk." |
| **Spread** | Marj/Fark | "The interest rate spread is 2%." |
| **Equity** | Özkaynak | "Shareholders' equity increased." |
| **Amortization** | Amortisman/İtfa | "Loan amortization schedule." |
| **Hedge** | Riskten korunma | "We hedge against currency risk." |
| **Depreciation** | Değer kaybı | "Currency depreciation affects imports." |
| **Dividend** | Temettü | "The company paid dividends to shareholders." |

---

# 2. Banking Operations

| Term | Meaning |
|------|---------|
| **Wire Transfer (EFT)** | Elektronik fon transferi |
| **Letter of Credit (L/C)** | Akreditif — uluslararası ticarette ödeme güvencesi |
| **Overdraft** | Kredili mevduat — hesaptakinden fazla çekme |
| **Due Diligence** | Özen yükümlülüğü, detaylı inceleme |
| **Compliance** | Uyum — mevzuata uygunluk |
| **Underwriting** | Yüklenicilik — menkul kıymet ihracı |
| **Settlement** | Takas ve mahsup — işlemin sonuçlandırılması |
| **Credit Rating** | Kredi derecelendirme (S&P, Moody's, Fitch) |

---

# 3. Important Abbreviations

| Abbreviation | Full Form | Turkish |
|-------------|-----------|---------|
| **NPL** | Non-Performing Loan | Takipteki Kredi |
| **KYC** | Know Your Customer | Müşterini Tanı |
| **AML** | Anti-Money Laundering | Kara Para Aklama Önleme |
| **CAR** | Capital Adequacy Ratio | Sermaye Yeterliliği Rasyosu |
| **ROE** | Return on Equity | Özkaynak Karlılığı |
| **ROA** | Return on Assets | Aktif Karlılığı |
| **LCR** | Liquidity Coverage Ratio | Likidite Karşılama Oranı |
| **NSFR** | Net Stable Funding Ratio | Net İstikrarlı Fonlama Oranı |
| **IPO** | Initial Public Offering | Halka Arz |
| **P/E** | Price-to-Earnings | Fiyat/Kazanç Oranı |

---

# 4. Financial Statements in English

| Statement | Turkish | Purpose |
|-----------|---------|---------|
| **Balance Sheet** | Bilanço | Financial position at a date |
| **Income Statement** | Gelir Tablosu | Profit/loss over a period |
| **Cash Flow Statement** | Nakit Akış Tablosu | Cash movements |

> 💡 **Study Tip:** Read financial news in English (Bloomberg, Reuters) to naturally learn these terms in context.
    `
  },

  // ─── MUHASEBE ───
  {
    topicId: 36,
    title: "Genel Muhasebe — Hesap Planı ve Kayıt Sistemi",
    readTime: "14 dk",
    content: `
# Genel Muhasebe — Derinlemesine Rehber

## Bu Konuyu Neden Bilmelisiniz?
Muhasebe bankacılığın dilidir. Bir bankanın bilançosunu okuyamıyorsanız, kredi analizi yapamazsınız. Müfettiş adayları için muhasebe soruları ağırlıklıdır.

---

# 1. Muhasebe Nedir?
İşletmenin mali işlemlerini **kaydeden**, **sınıflandıran**, **özetleyen** ve ilgililere **raporlayan** bir bilgi sistemidir.

---

# 2. Temel Denklik

**VARLIKLAR = BORÇLAR + ÖZKAYNAKLAR**

Bu denklik **her zaman** sağlanır. Her yevmiye kaydında borç toplamı = alacak toplamıdır.

---

# 3. Hesap Planı (Tekdüzen — TMS)

| Kod | Grup | Örnekler |
|-----|------|----------|
| **100-199** | Dönen Varlıklar | 100 Kasa, 102 Bankalar, 120 Alıcılar, 153 Ticari Mallar |
| **200-299** | Duran Varlıklar | 252 Binalar, 253 Tesis Makine, 255 Demirbaşlar, 257 Birik. Amort. (−) |
| **300-399** | KVYK | 300 Banka Kredileri, 320 Satıcılar, 360 Ödenecek Vergiler |
| **400-499** | UVYK | 400 Banka Kredileri, 420 Satıcılar |
| **500-599** | Özkaynaklar | 500 Sermaye, 540 Yasal Yedekler, 570 GYK, 590 Dönem Net Karı |
| **600-699** | Gelir Tablosu | 600 Satışlar, 621 SMM, 654 Karşılık Giderleri |
| **700-799** | Maliyet Hesapları | 710 DİMM, 720 DİG, 730 GÜG |

---

# 4. Borç-Alacak Kuralı (SINAV KLASİĞİ!)

| Hesap Türü | Artarken | Azalırken |
|-----------|----------|-----------|
| **Aktif (Varlık)** | BORÇ | ALACAK |
| **Pasif (Kaynak)** | ALACAK | BORÇ |
| **Gelir** | ALACAK | BORÇ |
| **Gider** | BORÇ | ALACAK |

> 💡 **Hatırlatma:** Aktif artar borçlanır. Pasif artar alacaklanır. Bu kadar basit!

---

# 5. Düzenleyici Hesaplar

Bilançodaki bazı hesaplar **(-) işaretlidir** — bunlar düzenleyici hesaplardır:
- **103 Verilen Çekler (-):** Aktifi düzenler (dönen varlıktan düşülür)
- **122 Alacak Senetleri Reeskontu (-):** Alacaktan düşülür
- **257 Birikmiş Amortismanlar (-):** Duran varlıktan düşülür
- **129 Şüpheli Tic. Alacaklar Karşılığı (-):** Alacaktan düşülür

---

# 6. Amortisman

Duran varlıkların maliyetini yararlı ömürlerine sistematik olarak dağıtma işlemidir.

### Yöntemler
- **Normal (Doğrusal):** Her yıl eşit tutar ayrılır
- **Azalan Bakiyeler:** İlk yıllarda daha fazla, sonra azalan amortisman
- **Üretim Miktarı:** Kullanım oranına göre

---

# 7. Temel Muhasebe İlkeleri
- **Dönemsellik:** Gelir/gider ilgili döneme kaydedilir
- **İhtiyatlılık:** Muhtemel zararlar kaydedilir, muhtemel karlar kaydedilmez
- **Tam Açıklama:** Tüm bilgiler raporlanır
- **Tutarlılık:** Seçilen yöntemler sürdürülür
- **Özün Önceliği:** Ekonomik gerçeklik hukuki biçimden önce gelir
- **İşletmenin Sürekliliği:** Sonsuz ömür varsayımı
    `
  },
  {
    topicId: 37,
    title: "Mali Analiz ve Finansal Rasyolar",
    readTime: "14 dk",
    content: `
# Mali Analiz — Rasyolarla Şirketi Okumak

## Bu Konuyu Neden Bilmelisiniz?
Bankacılar kredi vermeden önce şirketin mali tablolarını analiz eder. Rasyoları bilmek, iyi bir bankacı olmanın temel şartıdır.

---

# 1. Analiz Türleri

| Tür | Açıklama | Amaç |
|-----|---------|------|
| **Dikey Analiz** | Her kalemin toplam içindeki yüzdesi | Yapıyı anlamak |
| **Yatay Analiz** | Yıllar arası karşılaştırma | Trendi görmek |
| **Oran (Rasyo) Analizi** | Kalemler arası ilişki | Performansı ölçmek |
| **Karşılaştırmalı** | Sektör vs şirket | Konumu belirlemek |

---

# 2. Likidite Oranları — "Borçlarını Ödeyebilir mi?"

| Oran | Formül | İdeal | Yorum |
|------|--------|-------|-------|
| **Cari Oran** | Dönen Varlıklar / KVYK | ~2 | Genel ödeme gücü |
| **Asit-Test** | (DV − Stoklar) / KVYK | ~1 | Stoksuz ödeme gücü |
| **Nakit Oran** | Hazır Değerler / KVYK | 0.2+ | Anlık ödeme gücü |

> 💡 Cari oranı yüksek olan şirket güvenli gibi görünür ama **çok yüksekse** (>3) kaynakları verimsiz kullanıyor demektir!

---

# 3. Karlılık Oranları — "Ne Kadar Kazanıyor?"

| Oran | Formül | Yorum |
|------|--------|-------|
| **Brüt Kar Marjı** | (Net Satışlar − SMM) / Net Satışlar | Üretim verimliliği |
| **Net Kar Marjı** | Net Kar / Net Satışlar | Genel karlılık |
| **ROA (Aktif Karlılığı)** | Net Kar / Toplam Aktif | Varlık verimliliği |
| **ROE (Özkaynak Karlılığı)** | Net Kar / Özkaynaklar | Ortağın getirisi |

---

# 4. Faaliyet (Verimlilik) Oranları — "Ne Kadar Verimli?"

| Oran | Formül | Yorum |
|------|--------|-------|
| **Stok Devir Hızı** | SMM / Ort. Stok | Yüksek = hızlı eritme |
| **Alacak Devir Hızı** | Net Satışlar / Ort. Tic. Alacak | Yüksek = hızlı tahsilat |
| **Aktif Devir Hızı** | Net Satışlar / Toplam Aktif | Varlık kullanım etkinliği |

---

# 5. Mali Yapı Oranları — "Ne Kadar Borçlu?"

| Oran | Formül | İdeal | Yorum |
|------|--------|-------|-------|
| **Kaldıraç** | Top. Borç / Top. Aktif | <%50 | Borçlanma düzeyi |
| **Borç/Özkaynak** | Top. Borç / Özkaynaklar | <1 | Borç-sermaye dengesi |
| **Faiz Karşılama** | FVÖK / Faiz Giderleri | >1 | Faiz ödeme kapasitesi |

> ⚠️ **Bankacılıkta En Çok Sorulan Rasyolar:** SYR (sermaye yeterliliği), ROE, ROA, NPL oranı, cari oran ve kaldıraç oranı.
    `
  }
];

