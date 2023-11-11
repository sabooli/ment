import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      apiUrl: "https://www.portals.mentalland.com/api/V1/homepage/faqs_english",
      eventUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/events_english",
      seminarUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/event_general_en",
      spseminarUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/event_special_en",
      speventUrl:
        "https://portals.mentalland.com/api/V1/homepage/event_special_en",
      articleUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/blogs_en_list",
      paintUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/painting_const?lang=en",
      musicUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/music_const?lang=en",
      danceUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/dance_const?lang=en",
      writeUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/writing_const?lang=en",
      actUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/acting_const?lang=en",
      artUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/art_const?lang=en",
      DEPRESSION: "DEPRESSION",
      Home: "Home",
      About: "About",
      OurServices: "Our Services",
      Psychology: "Psychology",
      PsychologyAdults: "Psychology-Adults",
      PsychologyChildren: "Psychology-Children",
      Seminars: "Seminars",
      PsychologistsAdults: "List of Psychologists-Adults",
      PsychologistsChildren: "List of Psychologists-Children",
      Art: "Art",
      ArtAdults: "Art-Adults",
      MusicAdults: "Music-Adults",
      CoachesAdults: "Coaches-Adults",
      ArtChildren: "Art-Children",
      MusicChildren: "Music-Children",
      CoachesChildren: "Coaches-Children",
      Business: "Business",
      BusinessForAdults: "Business for Adults",
      BusinessForChildren: "Business for Children",
      JobOpportunities: "Job Opportunities",
      Tourism: "Tourism",
      Contact: "Contact Us",
      Positions: "Positions",
      AboutUs: "About Us",
      AboutMe: "About me",
      Comments: "Comments",
      WeeklyPlan: "Weekly Plan",
      JoinUs: "Join Us",
      ReadMore: "Read more",
      GeneralEvents: "General Events",
      GeneralSeminars: "General Seminars",
      SpecializedEvents: "Specialized Events",
      SpecializedSeminars: "Specialized Seminars",
      StartCounseling: "Start Counseling",
      adultsArtDepartment: "adults Art Department",
      childrenArtDepartment: "children Art Department",
      TextA:
        "Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sedeget adipiscing nisl in vestibulum. Volutpat.",
      TextB:
        "Lorem ipsum dolor sit amet consectetur.orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sedeget adipiscing nisl in vestibulum. Volutpat.",
      TextC:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Lectus cursus ipsum mi feugiat nulla enim. Sedeget adipiscing nisl in vestibulum. Volutpat.",
    },
  },
  fa: {
    translation: {
      apiUrl: "https://www.portals.mentalland.com/api/V1/homepage/faqs_persian",
      eventUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/events_persian",
      seminarUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/event_general_fa",
      spseminarUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/event_special_fa",
      speventUrl:
        "https://portals.mentalland.com/api/V1/homepage/event_special_fa",
      articleUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/blogs_fa_list",
      paintUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/painting_const?lang=fa",
      musicUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/music_const?lang=fa",
      danceUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/dance_const?lang=fa",
      writeUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/writing_const?lang=fa",
      actUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/acting_const?lang=fa",
      artUrl:
        "https://www.portals.mentalland.com/api/V1/homepage/art_const?lang=fa",
      DEPRESSION: "افسردگی",
      Home: "خانه",
      About: "درباره ما",
      OurServices: "خدمات ما",
      Psychology: "روانشناسی",
      PsychologyAdults: "روانشناسی-بزرگسالان",
      PsychologyChildren: "روانشناسی-کودکان",
      Seminars: "سمینارها",
      PsychologistsAdults: "فهرست مشاورین-بزرگسالان",
      PsychologistsChildren: "فهرست مشاورین-کودکان",
      Art: "هنر",
      ArtAdults: "هنر-بزرگسالان",
      MusicAdults: "موسیقی-بزرگسالان",
      CoachesAdults: "مربیان-بزرگسالان",
      ArtChildren: "هنر-کودکان",
      MusicChildren: "موسیقی-کودکان",
      CoachesChildren: "مربیان-کودکان",
      Business: "کسب و کار",
      BusinessForAdults: "کسب و کار بزرگسالان",
      BusinessForChildren: "کسب و کار کودکان",
      JobOpportunities: "فرصتهای شغلی",
      Tourism: "گردشگری",
      Contact: "تماس با ما",
      Positions: "موقعیت شغلی",
      AboutUs: "دربارۀ ما",
      AboutMe: "دربارۀ من",
      Comments: "نظرات",
      WeeklyPlan: "برنامۀ هفتگی",
      JoinUs: "عضویت",
      ReadMore: "مطالعه بیشتر",
      GeneralEvents: "ایونتهای عمومی",
      GeneralSeminars: "سمینارهای عمومی",
      SpecializedEvents: "ایونتهای تخصصی",
      SpecializedSeminars: "سمینارهای تخصصی",
      StartCounseling: "شروع مشاوره",
      adultsArtDepartment: "دپارتمان هنر بزرگسالان",
      childrenArtDepartment: "دپارتمان هنر کودکان",
      TextA:
        " متن روانشناسی متن روانشناسی متن روانشناسی متن روانشناسی متن روانشماسی متن روانشناسی متن روانشناسی متن روانشناسی متن روانشماسیمتن روانشناسی متن روانشناسی متن روانشناسی متن روانشماسیمتن روانشناسی متن روانشناسی متن روانشناسی متن روانشماسیمتن روانشناسی متن روانشناسی متن روانشناسی متن روانشماسیمتن روانشناسی متن روانشناسی متن روانشناسی متن روانشماسیمتن روانشناسی متن روانشناسی متن روانشناسی متن روانشماسیمتن روانشناسی متن روانشناسی متن روانشناسی",
      TextB:
        "  متن کسب و کامتن کسب و کامتن کسب و کامتن کسب و کامتن کسب و کامتن کسب و کامتن کسب و کامتن کسب و کامتن کسب و کا متن کسب و کار متن کسب و کار",
      TextC:
        "  متن هنر متن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنرمتن هنر متن هنر",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
