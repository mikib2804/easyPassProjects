"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "en" | "he";

const translations = {
  en: {
    nav: ["Home", "About Us", "Services", "Benefits", "Contact"],
    build: "Start Your Project",
    heroTag: "CUSTOM WEB APPLICATIONS",
    hero: ["We Build Web Apps", "That Make It Easy", "To Succeed"],
    heroText:
      "At EasyPassProjects, we turn ideas into powerful, scalable, and beautiful web applications that drive results and growth.",
    work: "See Our Work",
    specialTitle: "What Makes Us Special",
    specialText:
      "We don't just write code — we build digital solutions tailored to your needs.",
    special: [
      [
        "Modern & Scalable",
        "We use modern technologies to build fast, secure and scalable applications.",
      ],
      [
        "Beautiful Design",
        "We create clean, modern interfaces that users love to interact with.",
      ],
      [
        "Reliable & Secure",
        "Security and reliability are built into every application from day one.",
      ],
      [
        "Fast Delivery",
        "We respect your time and deliver high-quality results on time.",
      ],
    ],
    foundersTag: "THE PEOPLE BEHIND THE WORK",
    founders: "The Founders",
    companyInfo: [
      {
        founder: {
          name: "Michael Banker",
          role: "Co-Founder & Developer",
          description:
            "Hi, I'm a full-stack developer passionate about turning ideas into modern, high-performance web applications. I work with technologies like React, Next.js, TypeScript, Tailwind CSS, .NET, PostgreSQL, MongoDB, and SQL Server to build fast, scalable, and user-friendly digital experiences.",
          vision:
            "My vision with EasyPassProjects is simple: help people bring their dream websites and ideas to life without the huge price tag. I believe great websites should be accessible to everyone, so we focus on delivering high-quality, custom solutions at affordable prices.",
          socials: {
            github: "https://github.com/YOUR_USERNAME",
            linkedin: "https://www.linkedin.com/in/YOUR_USERNAME",
            email: "mailto:hello@easypassprojects.com",
          },
        },
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          ".NET",
          "PostgreSQL",
          "MongoDB",
          "SQL Server",
        ],
      },
    ],
    servicesTag: "WHAT WE DO",
    servicesTitle: "Our Services",
    explore: "Explore service",
    services: [
      [
        "Web Application Development",
        "Custom web apps built with modern technologies.",
      ],
      [
        "E-Commerce Solutions",
        "Complete online stores with secure payments and powerful management systems.",
      ],
      [
        "Responsive UI/UX Design",
        "Pixel-perfect, mobile-first designs that look great everywhere.",
      ],
      [
        "Performance Optimization",
        "Optimize applications for speed, SEO and user experience.",
      ],
    ],
    benefitsTag: "WHY EASYPASS",
    benefitsTitle: "Why Work With Us?",
    benefits: [
      [
        "Client-Focused",
        "We listen, understand, and build solutions that fit your goals.",
      ],
      [
        "Clear Communication",
        "We keep you updated throughout every step of the project.",
      ],
      [
        "Long-Term Support",
        "We don't disappear after delivery — we're here when you need us.",
      ],
      [
        "Passion for Quality",
        "We love what we do and it shows in the quality we deliver.",
      ],
    ],
    ctaTag: "YOUR NEXT IDEA STARTS HERE",
    ctaA: "Have an Idea?",
    ctaB: "Let's Build It.",
    ctaText:
      "Tell us what you're imagining and we'll turn it into a real web application.",
    email: "Your email",
    project: "Tell us about your project",
    placeholder: "What would you like us to build?",
    send: "Send Project Message",
    footer: "Building digital experiences made to last.",
    rights: "All rights reserved.",
  },
  he: {
    nav: ["בית", "אודות", "שירותים", "יתרונות", "יצירת קשר"],
    build: "התחלת פרויקט",
    heroTag: "אפליקציות ווב בהתאמה אישית",
    hero: ["אנחנו בונים אפליקציות", "שהופכות הכול לפשוט", "ומובילות להצלחה"],
    heroText:
      "ב־EasyPassProjects אנחנו הופכים רעיונות לאפליקציות ווב עוצמתיות, יציבות ויפות שמקדמות תוצאות וצמיחה.",
    work: "לעבודות שלנו",
    specialTitle: "מה הופך אותנו למיוחדים",
    specialText:
      "אנחנו לא רק כותבים קוד — אנחנו בונים פתרונות דיגיטליים המותאמים לצרכים שלכם.",
    special: [
      [
        "מודרני וניתן להרחבה",
        "יישומים מהירים, מאובטחים וניתנים להרחבה בטכנולוגיות מתקדמות.",
      ],
      ["עיצוב מרהיב", "ממשקים נקיים ומודרניים שמשתמשים אוהבים."],
      ["אמין ומאובטח", "אבטחה ואמינות משולבות בכל יישום מהיום הראשון."],
      ["אספקה מהירה", "תוצאות איכותיות בזמן, מתוך כבוד לזמן שלכם."],
    ],
    foundersTag: "האנשים שמאחורי העבודה",
    founders: "המייסדים",
    companyInfo: [
      {
        founder: {
          name: "מייקל בנקר",
          role: "שותף מייסד ומפתח",
          description:
            "היי, אני מפתח פול-סטאק בעל תשוקה להפיכת רעיונות לאפליקציות ווב מודרניות ובעלות ביצועים גבוהים. אני עובד עם טכנולוגיות כמו React, Next.js, TypeScript, Tailwind CSS, .NET, PostgreSQL, MongoDB, ו-SQL Server כדי לבנות חוויות דיגיטליות מהירות, סקילביליות ונוחות למשתמש.",
          vision:
            "החזון שלי עם EasyPassProjects הוא פשוט: לעזור לאנשים להחיות את אתרי החלומות והרעיונות שלהם ללא תג מחיר מופרז. אני מאמין שאתרים מעולים צריכים להיות נגישים לכולם, ולכן אנו מתמקדים באספקת פתרונות מותאמים אישית ובאיכות גבוהה במחירים נגישים.",
          socials: {
            github: "https://github.com/YOUR_USERNAME",
            linkedin: "https://www.linkedin.com/in/YOUR_USERNAME",
            email: "mailto:hello@easypassprojects.com",
          },
        },
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          ".NET",
          "PostgreSQL",
          "MongoDB",
          "SQL Server",
        ],
      },
    ],
    servicesTag: "מה אנחנו עושים",
    servicesTitle: "השירותים שלנו",
    explore: "לפרטי השירות",
    services: [
      ["פיתוח אפליקציות ווב", "אפליקציות מותאמות אישית בטכנולוגיות מודרניות."],
      [
        "פתרונות מסחר אלקטרוני",
        "חנויות אונליין עם תשלומים מאובטחים ומערכות ניהול חכמות.",
      ],
      ["עיצוב UI/UX רספונסיבי", "עיצובים מדויקים שנראים מצוין בכל מסך."],
      ["שיפור ביצועים", "אופטימיזציה למהירות, SEO וחוויית משתמש."],
    ],
    benefitsTag: "למה EASYPASS",
    benefitsTitle: "למה לעבוד איתנו?",
    benefits: [
      ["הלקוח במרכז", "אנחנו מקשיבים ובונים פתרונות שמתאימים למטרות שלכם."],
      ["תקשורת ברורה", "אנחנו מעדכנים אתכם בכל שלב בפרויקט."],
      ["תמיכה לטווח ארוך", "אנחנו כאן עבורכם גם לאחר המסירה."],
      ["תשוקה לאיכות", "האהבה שלנו לעבודה ניכרת באיכות התוצאה."],
    ],
    ctaTag: "הרעיון הבא שלכם מתחיל כאן",
    ctaA: "יש לכם רעיון?",
    ctaB: "בואו נבנה אותו.",
    ctaText:
      "ספרו לנו מה אתם מדמיינים ואנחנו נהפוך אותו לאפליקציית ווב אמיתית.",
    email: "האימייל שלכם",
    project: "ספרו לנו על הפרויקט",
    placeholder: "מה תרצו שנבנה עבורכם?",
    send: "שליחת פרטי הפרויקט",
    footer: "בונים חוויות דיגיטליות שנועדו להחזיק מעמד.",
    rights: "כל הזכויות שמורות.",
  },
} as const;

type Text = (typeof translations)[Language];

const Context = createContext<{
  language: Language;
  setLanguage: (l: Language) => void;
  text: Text;
}>({ language: "en", setLanguage: () => undefined, text: translations.en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    if (localStorage.getItem("easypass-language") === "he") setLanguage("he");
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    localStorage.setItem("easypass-language", language);
  }, [language]);

  return (
    <Context.Provider
      value={{ language, setLanguage, text: translations[language] }}
    >
      {children}
    </Context.Provider>
  );
}

export const useLanguage = () => useContext(Context);
