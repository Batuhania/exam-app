export interface InterviewQuestion {
    id: number;
    category: "Kişisel" | "Teknik" | "Durumsal" | "Kurumsal";
    question: string;
    answerTip: string;
    sampleAnswer?: string;
    frequency: "Yüksek" | "Orta" | "Düşük";
}

export const interviewQuestions: InterviewQuestion[] = [
    // ─── KİŞİSEL SORULAR ───
    {
        id: 1, category: "Kişisel",
        question: "Bize kendinizden bahseder misiniz?",
        answerTip: "Kronolojik bir hayat hikayesi anlatmak yerine, eğitim ve kariyer geçmişinizi bugünkü pozisyona sizi nasıl hazırladığını vurgulayarak özetleyin.",
        sampleAnswer: "Marmara Üniversitesi İktisat bölümünden mezun oldum. Üniversite yıllarımda finans topluluğunda aktif görev aldım ve X Bankası'nda yaptığım staj ile bankacılık operasyonlarını yerinde gözlemleme şansı buldum. Analitik düşünme yapım ve insan ilişkilerindeki başarımın bu sektörde bana değer katacağına inanıyorum.",
        frequency: "Yüksek"
    },
    {
        id: 2, category: "Kişisel",
        question: "Zayıf yönleriniz nelerdir?",
        answerTip: "Gerçek bir zayıf yön seçin ancak bunu nasıl yönettiğinizi veya geliştirdiğinizi ekleyin. 'Mükemmeliyetçiyim' gibi klişelerden kaçının.",
        sampleAnswer: "Bazen detaylara fazla odaklanıp zaman yönetiminde zorlanabiliyordum. Bunun farkına vardıktan sonra Pomodoro tekniği gibi yöntemler kullanmaya başladım ve verimliliğimi artırdım.",
        frequency: "Yüksek"
    },
    {
        id: 3, category: "Kişisel",
        question: "Kendinizi 5 yıl sonra nerede görüyorsunuz?",
        answerTip: "Bankadaki kariyer basamaklarını, uzmanlık alanınızı ve kuruma katkınızı vurgulayın. Gerçekçi ama hırslı olun.",
        sampleAnswer: "5 yıl sonra bankamızda uzmanlaşmış, ekip yönetebilen ve kurumun stratejik karar süreçlerine katkı sağlayan bir profesyonel olmayı hedefliyorum.",
        frequency: "Yüksek"
    },
    {
        id: 4, category: "Kişisel",
        question: "Stresle nasıl başa çıkarsınız?",
        answerTip: "Somut bir örnek verin. Planlama, önceliklendirme ve mola verme gibi sağlıklı stratejilerinizi paylaşın.",
        frequency: "Orta"
    },
    {
        id: 5, category: "Kişisel",
        question: "Güçlü yönleriniz nelerdir?",
        answerTip: "İş tanımıyla uyumlu 2-3 güçlü yönünüzü somut örneklerle destekleyin. Analitik düşünme, iletişim, takım çalışması gibi.",
        frequency: "Yüksek"
    },

    // ─── KURUMSAL / MOTİVASYON ───
    {
        id: 6, category: "Kurumsal",
        question: "Neden bankacılık sektörünü istiyorsunuz?",
        answerTip: "Sektörün dinamik yapısı, kariyer imkanları ve finans dünyasına olan ilginizden bahsedin. 'Maaşı iyi' gibi cevaplardan kaçının.",
        frequency: "Yüksek"
    },
    {
        id: 7, category: "Kurumsal",
        question: "Neden bizim bankamızı tercih ettiniz?",
        answerTip: "Bankanın vizyonu, pazar payı, teknolojik yatırımları veya çalışanlarına verdiği değer gibi spesifik özelliklerine atıfta bulunun.",
        frequency: "Yüksek"
    },
    {
        id: 8, category: "Kurumsal",
        question: "Müfettiş/Uzman Yardımcısı olarak ne tür işler yapacağınızı biliyor musunuz?",
        answerTip: "Pozisyonun görev tanımını araştırmış olun. Müfettiş yardımcısı: banka şubelerinin denetimi, raporlama. Uzman yardımcısı: belirli alanlarda analiz ve proje çalışmaları.",
        frequency: "Yüksek"
    },
    {
        id: 9, category: "Kurumsal",
        question: "Yoğun seyahat programına uyum sağlayabilir misiniz?",
        answerTip: "Özellikle müfettiş yardımcılığı için kritik. Seyahate açık olduğunuzu, farklı şehirlerde çalışmanın sizin için bir zenginlik olacağını belirtin.",
        frequency: "Yüksek"
    },
    {
        id: 10, category: "Kurumsal",
        question: "Bankacılık sektöründe size göre en büyük risk nedir?",
        answerTip: "Güncel riskleri tartışın: siber güvenlik, NPL artışı, dijital dönüşüm riskleri, regülasyon değişiklikleri.",
        frequency: "Orta"
    },

    // ─── TEKNİK SORULAR ───
    {
        id: 11, category: "Teknik",
        question: "Bilanço ve Gelir Tablosu arasındaki fark nedir?",
        answerTip: "Bilanço belirli bir tarihteki mali durumu (fotoğraf), Gelir Tablosu belirli bir dönemdeki faaliyet sonuçlarını (video) gösterir.",
        frequency: "Yüksek"
    },
    {
        id: 12, category: "Teknik",
        question: "Merkez Bankası'nın temel görevi nedir?",
        answerTip: "Fiyat istikrarını sağlamak (enflasyonla mücadele). Finansal istikrar da ikincil hedeftir.",
        frequency: "Yüksek"
    },
    {
        id: 13, category: "Teknik",
        question: "Basel düzenlemeleri nedir? Basel III'ün getirdiği yenilikler?",
        answerTip: "Uluslararası sermaye yeterliliği standartları. Basel III: LCR, NSFR, kaldıraç oranı, karşı döngüsel tampon gibi yenilikleri getirmiştir.",
        frequency: "Orta"
    },
    {
        id: 14, category: "Teknik",
        question: "Sermaye Yeterliliği Rasyosu (SYR) nedir? Nasıl hesaplanır?",
        answerTip: "SYR = Özkaynaklar / Risk Ağırlıklı Varlıklar. Yasal alt sınır %8, hedef %12. Bankanın risklere karşı yeterli sermayeye sahip olup olmadığını gösterir.",
        frequency: "Orta"
    },
    {
        id: 15, category: "Teknik",
        question: "NPL (Takipteki Kredi) oranı nedir ve neden önemlidir?",
        answerTip: "Tahsil edilemeyen kredilerin toplam kredilere oranı. Banka aktif kalitesini gösterir. Yüksek NPL bankanın kredi riski yönetiminin zayıf olduğuna işaret eder.",
        frequency: "Orta"
    },
    {
        id: 16, category: "Teknik",
        question: "Enflasyon ve faiz oranı arasındaki ilişkiyi açıklayın.",
        answerTip: "Ters yönlü ilişki: MB faiz artırarak talebi kısıp enflasyonu düşürmeye çalışır. Fisher etkisi: Nominal faiz = Reel faiz + Beklenen enflasyon.",
        frequency: "Yüksek"
    },
    {
        id: 17, category: "Teknik",
        question: "SWOT Analizi nedir?",
        answerTip: "Strengths, Weaknesses, Opportunities, Threats. Stratejik planlama aracıdır.",
        frequency: "Düşük"
    },
    {
        id: 18, category: "Teknik",
        question: "Döviz kuru rejimlerini açıklayın.",
        answerTip: "Sabit kur: Merkez bankası belirler. Dalgalı kur: Piyasa belirler. Yönetimli dalgalı: Piyasa + MB müdahalesi. Türkiye yönetimli dalgalı kur uygulamaktadır.",
        frequency: "Orta"
    },
    {
        id: 19, category: "Teknik",
        question: "Katılım bankacılığı ile mevduat bankacılığının farkı nedir?",
        answerTip: "Katılım: Faizsiz, kâr-zarar ortaklığı. Murabaha, sukuk, leasing. Mevduat: Faiz bazlı, geleneksel bankacılık.",
        frequency: "Orta"
    },

    // ─── DURUMSAL SORULAR ───
    {
        id: 20, category: "Durumsal",
        question: "Sinirli bir müşteriyle nasıl başa çıkarsınız?",
        answerTip: "Dinleme, empati kurma ve çözüm odaklı olma adımlarını izleyin.",
        sampleAnswer: "Öncelikle müşteriyi sözünü kesmeden dinler, empati kurarım. Sakinliğimi koruyarak sorunu çözmek için hemen harekete geçerim. Çözemiyorsam yöneticime yönlendiririm.",
        frequency: "Yüksek"
    },
    {
        id: 21, category: "Durumsal",
        question: "Ekip içinde bir anlaşmazlık yaşarsanız ne yaparsınız?",
        answerTip: "Yapıcı iletişim, ortak hedeflere odaklanma ve uzlaşmacı tavır sergileme.",
        frequency: "Orta"
    },
    {
        id: 22, category: "Durumsal",
        question: "Bir meslektaşınızın etik dışı davranış yaptığını görürseniz ne yaparsınız?",
        answerTip: "Önce durumu doğrulamak, ardından uyarı ve gerekirse üst yönetime bildirmek. Bankacılıkta compliance (uyum) kritiktir.",
        frequency: "Yüksek"
    },
    {
        id: 23, category: "Durumsal",
        question: "Hedeflerinize ulaşamadığınız bir dönem oldu mu? Ne yaptınız?",
        answerTip: "Dürüst olun. Başarısızlığı kabul edin, nedenlerini analiz edin ve ne öğrendiğinizi paylaşın.",
        frequency: "Orta"
    },
    {
        id: 24, category: "Durumsal",
        question: "Bir müşteri kredi talebinde bulunuyor ama risk analizi olumsuz. Ne yaparsınız?",
        answerTip: "Kurumsal prosedürlere uyum, risk yönetimi önceliği ve müşteriye nazik ama net açıklama yapma.",
        frequency: "Yüksek"
    },
    {
        id: 25, category: "Durumsal",
        question: "Yoğun iş temposu altında birden fazla acil görevi aynı anda almanız gerekirse ne yaparsınız?",
        answerTip: "Önceliklendirme (urgency vs importance), zaman yönetimi ve gerekirse delegasyon. Eisenhower matrisi.",
        frequency: "Orta"
    },
    {
        id: 26, category: "Durumsal",
        question: "Denetim sırasında şüpheli bir işlem tespit ettiniz. Nasıl davranırsınız?",
        answerTip: "Belgelere dayanarak kaydı tutma, kanıtları koruma, yetkili birime raporlama. MASAK bildirimi gerekebilir.",
        frequency: "Yüksek"
    }
];
