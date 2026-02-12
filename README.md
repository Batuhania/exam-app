<div align="center">

# 📚 ExamMaster

**Müfettiş Yardımcılığı Sınav Hazırlık Uygulaması**

Bankacılık, Ekonomi, Hukuk ve Genel Yetenek konularını kapsayan kapsamlı bir sınav hazırlık platformu.

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Canlı Demo →](https://batuhania.github.io/exam-app/)

<img src="public/assets/preview.png" alt="ExamMaster Dashboard" width="400" />

</div>

---

## ✨ Özellikler

- 🎯 **316+ Soru** — Bankacılık Mevzuatı, Ekonomi, Hukuk ve Genel Yetenek
- 📖 **21 Konu** — Detaylı konu anlatımları ve ders notları
- ⚡ **Hızlı Test** — Anında quiz çöz, anlık geri bildirim al
- 🃏 **Flashcard** — Hızlı tekrar kartları
- 🎓 **Deneme Sınavı** — 50 soruluk gerçek sınav simülasyonu
- ⏱️ **Pomodoro Timer** — Odaklanma ve mola yönetimi
- 📋 **Özet Bilgi Kartları** — Kritik formüller ve limitler
- 💬 **Mülakat Soruları** — Sözlü sınav hazırlığı
- 📦 **Toplu Soru İçe Aktarma** — JSON formatında soru ekleme
- 📱 **Responsive** — Mobil, tablet ve masaüstü uyumlu

## 🛠️ Teknolojiler

| Teknoloji | Sürüm | Açıklama |
|:---|:---:|:---|
| React | 19 | UI framework |
| TypeScript | 5.6 | Tip güvenliği |
| Tailwind CSS | 4.0 | Styling |
| Vite | 6 | Build tool |
| React Router | 7 | Yönlendirme |
| Lucide React | — | İkon seti |

## 🚀 Kurulum

```bash
# Repoyu klonla
git clone https://github.com/batuhania/exam-app.git
cd exam-app

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## 📦 Build

```bash
# Production build
npm run build
```

Build çıktısı `dist/index.html` olarak tek dosyada oluşturulur (vite-plugin-singlefile).

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── pomodoro/       # Pomodoro timer
│   └── quiz/           # Quiz ekranı
├── data/               # Soru bankaları ve veri
│   ├── questions.ts    # Ana soru bankası (316+ soru)
│   └── cheatSheets.ts  # Özet bilgi kartları
├── layouts/            # Sayfa düzeni
├── pages/              # Sayfa bileşenleri
└── utils/              # Yardımcı fonksiyonlar
```

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
