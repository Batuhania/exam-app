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
        id: 1,
        category: "Kişisel",
        question: "Bize kendinizden bahseder misiniz?",
        answerTip: "Kronolojik bir hayat hikayesi anlatmak yerine, eğitim ve kariyer geçmişinizi bugünkü pozisyona sizi nasıl hazırladığını vurgulayarak özetleyin. 'Şu okuldan mezun oldum, şu stajları yaptım ve bu deneyimler beni bankacılık kariyerine yönlendirdi' gibi bir akış izleyin.",
        sampleAnswer: "Marmara Üniversitesi İktisat bölümünden mezun oldum. Üniversite yıllarımda finans topluluğunda aktif görev aldım ve X Bankası'nda yaptığım staj ile bankacılık operasyonlarını yerinde gözlemleme şansı buldum. Analitik düşünme yapım ve insan ilişkilerindeki başarımın bu sektörde bana değer katacağına inanıyorum.",
        frequency: "Yüksek"
    },
    {
        id: 2,
        category: "Kişisel",
        question: "Zayıf yönleriniz nelerdir?",
        answerTip: "Gerçek bir zayıf yön seçin ancak bunu nasıl yönettiğinizi veya geliştirdiğinizi ekleyin. 'Mükemmeliyetçiyim' gibi klişelerden kaçının.",
        sampleAnswer: "Bazen detaylara fazla odaklanıp zaman yönetiminde zorlanabiliyordum. Bunun farkına vardıktan sonra, işlerimi önem sırasına koymak için Pomodoro tekniği gibi yöntemler kullanmaya başladım ve bu sayede verimliliğimi artırdım.",
        frequency: "Yüksek"
    },

    // ─── KURUMSAL / MOTİVASYON ───
    {
        id: 3,
        category: "Kurumsal",
        question: "Neden bankacılık sektörünü istiyorsunuz?",
        answerTip: "Sektörün dinamik yapısı, kariyer imkanları ve finans dünyasına olan ilginizden bahsedin. Sadece 'maaşı iyi' veya 'garanti meslek' gibi cevaplardan kaçının.",
        frequency: "Yüksek"
    },
    {
        id: 4,
        category: "Kurumsal",
        question: "Neden bizim bankamızı tercih ettiniz?",
        answerTip: "Bankanın vizyonu, pazar payı, teknolojik yatırımları veya çalışanlarına verdiği değer gibi spesifik özelliklerine atıfta bulunun. Web sitesini ve yıllık raporlarını incelediğinizi gösterin.",
        frequency: "Yüksek"
    },

    // ─── TEKNİK SORULAR ───
    {
        id: 5,
        category: "Teknik",
        question: "Bilanço ve Gelir Tablosu arasındaki fark nedir?",
        answerTip: "Bilançonun bir işletmenin belirli bir tarihteki mali durumunu (varlık ve kaynaklarını) gösterdiğini, Gelir Tablosunun ise belirli bir dönemdeki faaliyet sonuçlarını (kar/zarar) gösterdiğini belirtin. Bilanço 'fotoğraf', Gelir Tablosu 'video' gibidir benzetmesi yapılabilir.",
        frequency: "Orta"
    },
    {
        id: 6,
        category: "Teknik",
        question: "Merkez Bankası'nın temel görevi nedir?",
        answerTip: "Fiyat istikrarını sağlamak (enflasyonla mücadele) olduğunu net bir şekilde ifade edin. Finansal istikrar da ikincil hedef olarak belirtilebilir.",
        frequency: "Orta"
    },
    {
        id: 7,
        category: "Teknik",
        question: "SWOT Analizi nedir?",
        answerTip: "Bir projenin veya kurumun Güçlü (Strengths), Zayıf (Weaknesses), Fırsat (Opportunities) ve Tehdit (Threats) yönlerinin analiz edildiği stratejik bir planlama tekniği olduğunu açıklayın.",
        frequency: "Düşük"
    },

    // ─── DURUMSAL SORULAR ───
    {
        id: 8,
        category: "Durumsal",
        question: "Sinirli bir müşteriyle nasıl başa çıkarsınız?",
        answerTip: "Dinleme, empati kurma ve çözüm odaklı olma adımlarını izleyeceğinizi belirtin. Kişisel algılamadan, profesyonelce sorunu anlamaya ve çözmeye çalışacağınızı vurgulayın.",
        sampleAnswer: "Öncelikle müşteriyi sözünü kesmeden dinler ve sorunun ne olduğunu tam olarak anlamaya çalışırım. Sakinliğimi koruyarak, yaşadığı olumsuz deneyim için üzgün olduğumu belirtir (empati) ve yetkim dahilinde sorunu çözmek için hemen harekete geçerim. Çözemiyorsam yöneticime yönlendiririm.",
        frequency: "Yüksek"
    },
    {
        id: 9,
        category: "Durumsal",
        question: "Ekip içinde bir anlaşmazlık yaşarsanız ne yaparsınız?",
        answerTip: "Yapıcı iletişim, ortak hedeflere odaklanma ve uzlaşmacı tavır sergileme becerilerinizi öne çıkarın.",
        frequency: "Orta"
    }
];
