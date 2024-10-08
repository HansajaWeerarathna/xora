import { Android, Ios, Web, Windows } from "../components/Logos.jsx";
import feature1 from "/public/images/feature-1.png";
import feature2 from "/public/images/feature-2.png";
import magictouch from "/public/images/magictouch.svg";
import docs from "/public/images/docs.svg";
import detail1 from "/public/images/detail-1.png";
import detail2 from "/public/images/detail-2.png";
import detail3 from "/public/images/detail-3.png";
import detail4 from "/public/images/detail-4.png";
import circle from "/public/images/circle.svg";
import triangle from "/public/images/triangle.svg";
import hexagon from "/public/images/hexagon.svg";
import plan1 from "/public/images/plan-1.png";
import plan2 from "/public/images/plan-2.png";
import plan3 from "/public/images/plan-3.png";
import jessica from "/public/images/testimonials/jessica-saunders.png";
import mark from "/public/images/testimonials/mark-erixon.png";
import alicia from "/public/images/testimonials/alicia-barker.png";
import becky from "/public/images/testimonials/becky-snider.png";
import jim from "/public/images/testimonials/jim-bradley.png";
import melanie from "/public/images/testimonials/melanie-hurst.png";
import afterpay from "../../public/images/logos/afterpay.svg";
import amplitude from "../../public/images/logos/amplitude.svg";
import drips from "../../public/images/logos/drips.svg";
import maze from "../../public/images/logos/maze.svg";
import sonos from "../../public/images/logos/sonos.svg";

export const features = [
  {
    id: "0",
    icon: feature1,
    caption: "Easy integration",
    title: "Work smarter not harder",
    text: "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
    button: {
      icon: magictouch,
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    icon: feature2,
    caption: "Secure & trustworthy",
    title: "Sleep easy, we got your back",
    text: "Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.",
    button: {
      icon: docs,
      title: "Read the docs",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: detail1,
    title: "AI automated video editing",
  },
  {
    id: "1",
    icon: detail2,
    title: "Collaborate with your team",
  },
  {
    id: "2",
    icon: detail3,
    title: "Ultra fast cloud-engine",
  },
  {
    id: "3",
    icon: detail4,
    title: "24 / 7 Customer support",
  },
];

export const faq = [
  {
    id: "1",
    question: "How easy is it to setup Xora?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "2",
    question: "Can I integrate Xora with other platforms?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "3",
    question: "How often do you add new content?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "4",
    question: "What your refund policy?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "5",
    question: "Do you have corporate plans?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "6",
    question: "What happens when I’m out of storage?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "7",
    question: "Can I upgrade my plan?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "8",
    question: "How do I invite my team?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "9",
    question: "Do you offer training for individuals and teams?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "10",
    question: "I’m locked out of my account what do I do?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: circle,
    logo: plan1,
  },
  {
    id: "1",
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: triangle,
    logo: plan2,
  },
  {
    id: "2",
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: hexagon,
    logo: plan3,
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: jessica,
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: mark,
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: melanie,
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: alicia,
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Floclips",
    avatarUrl: becky,
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "Vid capital intl",
    avatarUrl: jim,
    comment:
      "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
  },
];

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: afterpay,
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: amplitude,
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: sonos,
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: maze,
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: drips,
    width: 77,
    height: 48,
  },
];

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: <Windows />,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: <Web />,
    url: "#",
  },
];

import discord from "../../public/images/socials/discord.svg";
import x from "../../public/images/socials/x.svg";
import threads from "../../public/images/socials/threads.svg";
import instagram from "../../public/images/socials/instagram.svg";

export const socials = [
  {
    id: "0",
    title: "x",
    icon: x,
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: threads,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: discord,
    url: "#",
  },
];
