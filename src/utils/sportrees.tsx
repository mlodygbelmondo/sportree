import { type ReactNode } from "react";
import { SocialIcon } from "react-social-icons";
const SPORTREE_NAMES = ["szymon-godziek"];
import { FaMedal } from "react-icons/fa6";
import ReactCountryFlag from "react-country-flag";
export type Sponsor = {
  imgUrl: string;
  name: string;
};

export type SportreeLink = {
  icon: ReactNode;
  url: string;
  name: string;
};

type Sportree = {
  id: number;
  name: string;
  avatar: string;
  video: string;
  flag: ReactNode;
  achievements: Array<{
    place: ReactNode;
    description: string;
  }>;
  sponsors: Array<Sponsor>;
  links: Array<SportreeLink>;
};

export const HARDCODED_SPORTREES: Record<
  (typeof SPORTREE_NAMES)[number],
  Sportree
> = {
  "szymon-godziek": {
    id: 1,
    name: "Szymon Godziek",
    avatar: "/avatar.jpg",
    flag: <ReactCountryFlag countryCode="PL" />,
    video: "/simongodziek.mp4",
    achievements: [
      {
        place: <FaMedal className="text-amber-400" />,
        description: "White Style Leogang 2016",
      },
      {
        place: <FaMedal className="text-slate-200" />,
        description: "Redbull Rampage 2022",
      },
      {
        place: <FaMedal className="text-yellow-800" />,
        description: "FMB World Tour 2017",
      },
    ],
    sponsors: [
      {
        imgUrl: "https://i.ibb.co/GxVGwMb/adidasfiveten.jpg",
        name: "Adidas Five Ten",
      },
      {
        imgUrl: "https://i.ibb.co/7YH3nqK/redbull.jpg",
        name: "Redbull",
      },
      {
        imgUrl: "https://i.ibb.co/12HjFHh/reversecomponents.jpg",
        name: "Reverse Components",
      },
      {
        imgUrl: "https://i.ibb.co/QpywqL0/specialized.jpg",
        name: "Specialized",
      },
      {
        imgUrl: "https://i.ibb.co/zsJXyMY/specteyewear.jpg",
        name: "Spect Eyewear",
      },
      {
        imgUrl: "https://i.ibb.co/fGk40L7/continentalmtb.jpg",
        name: "Continental MTB",
      },
      {
        imgUrl: "https://i.ibb.co/M60X4V0/dometic.jpg",
        name: "Dometic",
      },
      {
        imgUrl: "https://i.ibb.co/zZpXkbC/leatt.jpg",
        name: "Leatt",
      },
    ],
    links: [
      {
        icon: "Instagram",
        url: "https://instagram.com/szymongodziek",
        name: "Instagram",
      },
      {
        icon: <SocialIcon url="https://youtube.com" />,
        url: "https://www.youtube.com/@GodziekBrothers",
        name: "Youtube",
      },
      {
        icon: "Tiktok",
        url: "https://www.tiktok.com/@godziekbrothers",
        name: "Tiktok",
      },
      {
        icon: "Facebook",
        url: "https://facebook.com/szymongodziek",
        name: "Facebook",
      },
      {
        icon: "Pinkbike",
        url: "https://www.pinkbike.com/",
        name: "Pinkbike",
      },
      {
        icon: "Beerduro",
        url: "https://beerduro.store/",
        name: "Beerduro Store",
      },
    ],
  },
};
