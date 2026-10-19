import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  title: "Ahmed Ibrahim Mohamed Kamel | Junior Software Developer",
  skip: "Skip to content",
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    certifications: "Certificates",
    contact: "Contact",
  },
  lang: { short: "AR", aria: "Switch to Arabic" },
  header: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
  },
  hero: {
    projects: "View projects",
    cv: "Download CV",
    about: "About me",
    profile:
      "Profile summary: Bachelor of Science in Mathematics and Computer Science, Suez University, 2026. Builds with React, Flutter and Python. Models with MATLAB. Teaches LEGO WeDo and electronics. Learning networking and cybersecurity.",
  },
  about: { title: "About me" },
  skills: {
    title: "Skills",
    lede: "Each group names the project, training or course that backs it up. I don't rate myself with percentages.",
    note: "Networking and security are at a learning stage: university coursework, one 20-hour course and several short online courses. I have no professional security-operations experience.",
  },
  projects: {
    title: "Projects",
    lede: "Academic and graduation work. Each project page states what I built myself and what belongs to a team.",
    empty: "No projects in this category yet. Choose All to see every project.",
    filter: "Filter projects by type",
  },
  card: { view: "View project", viewAria: "View project: {{title}}" },
  badge: {
    team: "Team project",
    solo: "Individual work",
    Completed: "Completed",
    refining: "Being refined",
  },
  detail: {
    all: "All projects",
    overview: "Overview",
    problem: "The problem",
    math: "What the study covers",
    features: "Main features",
    demo: "Demo",
    contribution: "My contribution",
    samples: "Sample output",
    findings: "Findings",
    shots: "Screenshots",
    enlarge: "Enlarge screenshot: {{name}}",
    role: "My role",
    tech: "Technology",
    facts: "Project facts",
    noVideo: "Your browser can't play this video.",
    videoAria: "{{title}} demo video",
  },
  notFound: {
    title: "Project not found",
    body: "There is no project at “{{id}}”. The link may be mistyped or the project may have been renamed.",
  },
  exp: {
    title: "Experience",
    lede: "One teaching role and three training programs.",
  },
  edu: { title: "Education", gpa: "GPA", projects: "Graduation projects" },
  certs: {
    title: "Certificates and courses",
    lede: "Completed courses, training programs and initiatives, listed with their real length. None is a vendor professional certification.",
    filter: "Filter certificates by topic",
    search: "Search certificates",
    completed: "Completed {{date}}",
    code: "Verification code: {{code}}",
    emptyQ: "No certificates match “{{q}}”. Clear the search to see them all.",
    empty: "No certificates in this topic yet.",
  },
  contact: {
    title: "Contact",
    lede: "The quickest way to reach me is by email or LinkedIn.",
  },
  lb: {
    viewer: "Screenshot viewer",
    close: "Close viewer",
    prev: "Previous screenshot",
    next: "Next screenshot",
    failed: "This image could not be loaded.",
  },
  footer: {
    tagline: "Mathematics and Computer Science, Suez University",
    nav: "Footer",
  },
};

const ar = {
  title: "أحمد إبراهيم محمد كامل | مطوّر برمجيات مبتدئ",
  skip: "انتقل إلى المحتوى",
  nav: {
    about: "نبذة عني",
    skills: "المهارات",
    projects: "المشاريع",
    experience: "الخبرات",
    education: "التعليم",
    certifications: "الشهادات",
    contact: "تواصل معي",
  },
  lang: { short: "EN", aria: "Switch to English" },
  header: {
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    themeLight: "التبديل إلى السمة الفاتحة",
    themeDark: "التبديل إلى السمة الداكنة",
  },
  hero: {
    projects: "عرض المشاريع",
    cv: "تحميل السيرة الذاتية",
    about: "نبذة عني",
    profile:
      "ملخص الملف الشخصي: بكالوريوس العلوم في الرياضيات وعلوم الحاسب، جامعة السويس، 2026. يبني باستخدام React وFlutter وPython، ويبني النماذج باستخدام MATLAB، ويدرّس LEGO WeDo والإلكترونيات، ويتعلم الشبكات والأمن السيبراني.",
  },
  about: { title: "نبذة عني" },
  skills: {
    title: "المهارات",
    lede: "تذكر كل مجموعة المشروع أو التدريب أو الدورة التي تدعمها. لا أقيّم نفسي بنسب مئوية.",
    note: "الشبكات والأمن في مرحلة التعلم: مقررات جامعية ودورة واحدة مدتها 20 ساعة وعدة دورات قصيرة عبر الإنترنت. ليست لدي خبرة مهنية في عمليات الأمن.",
  },
  projects: {
    title: "المشاريع",
    lede: "أعمال أكاديمية ومشاريع تخرج. توضح كل صفحة مشروع ما بنيته بنفسي وما يخص الفريق.",
    empty: "لا توجد مشاريع في هذه الفئة بعد. اختر «الكل» لعرض جميع المشاريع.",
    filter: "تصفية المشاريع حسب النوع",
  },
  card: { view: "عرض المشروع", viewAria: "عرض المشروع: {{title}}" },
  badge: {
    team: "مشروع جماعي",
    solo: "عمل فردي",
    Completed: "مكتمل",
    refining: "قيد التحسين",
  },
  detail: {
    all: "كل المشاريع",
    overview: "نظرة عامة",
    problem: "المشكلة",
    math: "ما تغطيه الدراسة",
    features: "الميزات الرئيسية",
    demo: "عرض توضيحي",
    contribution: "مساهمتي",
    samples: "نموذج للمخرجات",
    findings: "النتائج",
    shots: "لقطات الشاشة",
    enlarge: "تكبير لقطة الشاشة: {{name}}",
    role: "دوري",
    tech: "التقنيات",
    facts: "معلومات المشروع",
    noVideo: "متصفحك لا يستطيع تشغيل هذا الفيديو.",
    videoAria: "فيديو توضيحي: {{title}}",
  },
  notFound: {
    title: "المشروع غير موجود",
    body: "لا يوجد مشروع بالمعرّف «{{id}}». ربما كُتب الرابط بشكل خاطئ أو تغيّر اسم المشروع.",
  },
  exp: { title: "الخبرات", lede: "دور تدريسي واحد وثلاثة برامج تدريبية." },
  edu: { title: "التعليم", gpa: "المعدل التراكمي", projects: "مشاريع التخرج" },
  certs: {
    title: "الشهادات والدورات",
    lede: "دورات وبرامج تدريبية ومبادرات مكتملة، مع مدتها الفعلية. لا توجد بينها شهادة احترافية من شركة مصنّعة.",
    filter: "تصفية الشهادات حسب الموضوع",
    search: "ابحث في الشهادات",
    completed: "أُنجزت في {{date}}",
    code: "رمز التحقق: {{code}}",
    emptyQ: "لا توجد شهادات مطابقة لـ «{{q}}». امسح البحث لعرضها كلها.",
    empty: "لا توجد شهادات في هذا الموضوع بعد.",
  },
  contact: {
    title: "تواصل معي",
    lede: "أسرع طريقة للتواصل معي هي البريد الإلكتروني أو لينكدإن.",
  },
  lb: {
    viewer: "عارض لقطات الشاشة",
    close: "إغلاق العارض",
    prev: "لقطة الشاشة السابقة",
    next: "لقطة الشاشة التالية",
    failed: "تعذّر تحميل هذه الصورة.",
  },
  footer: { tagline: "الرياضيات وعلوم الحاسب، جامعة السويس", nav: "التذييل" },
};

let saved = "en";
try {
  saved = localStorage.getItem("lang") === "ar" ? "ar" : "en";
} catch {}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: saved,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

const apply = (lng) => {
  const el = document.documentElement;
  el.lang = lng;
  el.dir = lng === "ar" ? "rtl" : "ltr";
  document.title = i18n.t("title");
  try {
    localStorage.setItem("lang", lng);
  } catch {}
};
apply(i18n.language);
i18n.on("languageChanged", apply);

export default i18n;
