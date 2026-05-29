import { useState } from 'react';
import './ImpactPage.css';

// Subcomponents
import ImpactHero from './ImpactHero/ImpactHero';
import ImpactStories from './ImpactStories/ImpactStories';

// Real Photograph Assets
import img5 from '../../assets/images/IMG 5.png';
import img5927 from '../../assets/images/IMG_5927.jpg';
import img6010 from '../../assets/images/IMG_6010.jpg';
import img6396 from '../../assets/images/IMG_6396.jpg';
import img6726 from '../../assets/images/IMG_6726.jpg';
import img6737 from '../../assets/images/IMG_6737.jpg';
import img6746 from '../../assets/images/IMG_6746.jpg';

// Activity Data (Consolidated into 4 Showcase Cards, one for each Focus Area Category)
const ACTIVITIES_DATA = [
  {
    id: 1,
    category: "Agriculture",
    title: "Clean Up Exercise — Community Environmental Health & Sanitation",
    paragraphs: [
      "We held our inaugural Clean Up Exercise campaign, bringing together over 150 community members and volunteers to clear waste accumulation, unblock drains, and sanitize public areas in Jirapa.",
      "Through collaborative volunteer groups, community members removed plastics and household waste from core public squares, markets, and surrounding environments, creating a cleaner and healthier setting.",
      "The clean up campaign also included environmental awareness workshops, sharing knowledge on sustainable waste disposal methods, proper hand hygiene, and community-wide sanitation protocols.",
      "Sanitation tools and high-quality bins were distributed to key collection points to support long-term waste management and ongoing voluntary clean up efforts across Jirapa."
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1ZPg3DD8XQj3OLCF40Of6XAZu6geEWjcK",
      "https://lh3.googleusercontent.com/d/1g0DLk_8l5eNmsiOv--5WhXfOcwDYN10r",
      "https://lh3.googleusercontent.com/d/1afTZO_ms5hnKNfQosW9bYfyTkhbPpzfP",
      "https://lh3.googleusercontent.com/d/1-vdHlnvo25WVcw5fN_ZPE1eCd0SyDGfl",
      "https://lh3.googleusercontent.com/d/16kKGyoIbY2g1_eX0Im1hxcu_9RNphJCw",
      "https://lh3.googleusercontent.com/d/1fpMKjyjl8immyUh9qPWqOYBYZZRJFXo_",
      "https://lh3.googleusercontent.com/d/1MiezEtOY5-6qrBYk_-I9BUESEkA3zSKP",
      "https://lh3.googleusercontent.com/d/1beI9hukYk4QRXEqTzYAtrO4sKIiM9ieP",
      "https://lh3.googleusercontent.com/d/1s9Tm7TN1cHCbmuaDKiZsWKLBPmjTKfOa",
      "https://lh3.googleusercontent.com/d/1z8pIPxlRl85J1PFkvyAi_rTnohZ36x4o",
      "https://lh3.googleusercontent.com/d/1-D1R91kDLqkVTHH2pKKyV-MAifFb6XPJ",
      "https://lh3.googleusercontent.com/d/11HHK4bTGP4INaFONzWqyHn-qSM9wQqvT",
      "https://lh3.googleusercontent.com/d/1FAVi3oHSWhHIVR2l-d-PFGfoavOa71JK",
      "https://lh3.googleusercontent.com/d/1nUMRujRIOiT7rkZwkCGAJxLwdgLF2yT4",
      "https://lh3.googleusercontent.com/d/10a836jhopLIG-V1mBjBYdmVvrGevRi11",
      "https://lh3.googleusercontent.com/d/1bQ5cxXzzCOf6LQ3IfO84Za-xSXhg6mgc"
    ]
  },
  {
    id: 2,
    category: "Leadership",
    title: "Community Leadership & Inspiration",
    paragraphs: [
      "We celebrated the extraordinary resilience and community leadership of Tiekan Joseph (popularly known as 'Hero'), a local teacher from Jirapa Nambeg, who completed an epic 525-kilometre bicycle ride from Yeji to Jirapa.",
      "Over four grueling days on the road, Joseph undertook this voluntary marathon to champion community development, raise awareness for the annual Bong-ngo Festival, and promote healthy, active lifestyles among local youth.",
      "Upon his historic arrival in Jirapa, he was welcomed with immense pride and celebration by a grand assembly of elders, local leaders, and students, proving how one individual's determination can inspire a whole municipality."
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1ewXIf-hTjzb5m29i8JPEPIHB33UB8BOe",
      "https://lh3.googleusercontent.com/d/15oKnhmURDVNJ8paTpkS0UlA-BFWU2JV_",
      "https://lh3.googleusercontent.com/d/1Y5jtMUKAhL5P_hBfFpnvQZR8pOWS2EHB",
      "https://lh3.googleusercontent.com/d/1M6Ht46DDskCc-P6xuxpTDifOSNz4xX6g",
      "https://lh3.googleusercontent.com/d/1r4KLmo5zp_hlI82mAcH8Oj8vjHi_57-6",
      "https://lh3.googleusercontent.com/d/1EjCi2BYg2wch3owY4dgdKJ6g5sxNgHnL",
      "https://lh3.googleusercontent.com/d/1MM116qp8CDgaSzIvKvWZT_R9HBph4RwZ"
    ]
  },
  {
    id: 3,
    category: "Livelihood",
    title: "Women's Economic Empowerment",
    paragraphs: [
      "We organized a comprehensive 5-day intensive business management and vocational training bootcamp, empowering 45 local women and apprentices with practical skills for self-reliance.",
      "To support their transition into independent business owners, the foundation distributed professional sewing machines and start-up toolkits, equipping them with the resources needed to launch successful tailoring enterprises in Jirapa.",
      "The bootcamp also integrated financial literacy and the establishment of local savings collectives, providing graduates with continuous business mentoring and cooperative support systems for long-term growth."
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1LhsOUs54aQWRM6dzzhCEtG8O87QNQBD3",
      "https://lh3.googleusercontent.com/d/1uG8IqW0ihk03EUCzzQEaiaTZv1fHzEUd",
      "https://lh3.googleusercontent.com/d/13WsHuaxSFZOvmKmExKJFB9a8XF0cd5pA",
      "https://lh3.googleusercontent.com/d/1mdeFyEWLmmsItrmjkefKd1r0LawDfyGj",
      "https://lh3.googleusercontent.com/d/1RJpwVZgJCX9aeelLDM-Kv3vWAvw755p1",
      "https://lh3.googleusercontent.com/d/1_FymZDa4cBv4peK5B9GrdBCFgBN0aK4h",
      "https://lh3.googleusercontent.com/d/1RJpwVZgJCX9aeelLDM-Kv3vWAvw755p1",
      "https://lh3.googleusercontent.com/d/1KA-qmld59EcxhP3tXIkpvzuczubE_OV0",
      "https://lh3.googleusercontent.com/d/1gtxt7ybiIq1AP8kR8ixo1lb-ytvgvB8o"
    ]
  },
  {
    id: 4,
    category: "Empowerment",
    title: "Grand Durbar Recognition",
    paragraphs: [
      "During a grand durbar at the Bong-ngo Festival celebrations, the Anwelle Foundation officially honored Tiekan Joseph for his inspiring 525km bicycle ride by presenting him with a brand-new Apsonic AP125-30 motorbike.",
      "Presented by our CEO, Frank Anwelle, alongside the Paramount Chief of Jirapa, Naa Dinaa Donglabong Ganaa, and key local leaders, this award stands as a testament to the foundation's commitment to recognizing individual dedication.",
      "With additional fuel support from Muskila Motors, this gesture not only rewards a remarkable local teacher but also encourages everyone to take active initiatives that uplift and promote our rich cultural heritage."
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1cgQEMx_DrXxauJV51jrHlIi1956Pr9x2",
      "https://lh3.googleusercontent.com/d/1lXHLX76MR2shg2dIDXpWVqij9n2PLS2E",
      "https://lh3.googleusercontent.com/d/1JE9z8B28F-jN3Cr_iM0WsxqtZkx9Zg_S",
      "https://lh3.googleusercontent.com/d/1JE9z8B28F-jN3Cr_iM0WsxqtZkx9Zg_S",
      "https://lh3.googleusercontent.com/d/1k5TUSJmNjOJLHcGTIXV65EVvKQKxrD4S",
      "https://lh3.googleusercontent.com/d/1qUHJLZ_7lcO-5yAkY_rMRyWs0KGM3gDK",
      "https://lh3.googleusercontent.com/d/1W9BVSKVdciN0bYrWSD8bBtlmP2i4yHhx",
      "https://lh3.googleusercontent.com/d/1Ps36uccEj2NQJkqt_-zKYg1LeM9TE_Nx",
      "https://lh3.googleusercontent.com/d/1fcGBcEUL4BWqrPAGGurMr1ucj_Hs6VQW",
      "https://lh3.googleusercontent.com/d/1v4Eeqzo9aarcorIMgkl9iJaVLY3P-jlU"
    ]
  }
];

function ImpactPage() {
  const [activeStory, setActiveStory] = useState(null); // Story in detail modal

  return (
    <div className="impact-page-wrapper">
      <ImpactHero />

      {/* Main Layout Grid */}
      <div className="main-content-layout container">
        <ImpactStories
          activities={ACTIVITIES_DATA}
          activeStory={activeStory}
          setActiveStory={setActiveStory}
        />
      </div>
    </div>
  );
}

export default ImpactPage;
