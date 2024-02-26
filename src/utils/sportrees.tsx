import { type ReactNode } from "react";
import { SocialIcon } from "react-social-icons";
const SPORTREE_NAMES = ["szymon-godziek"];
import ReactCountryFlag from "react-country-flag";

export type Sponsor = {
  imgUrl: string;
  name: string;
  link: string;
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
        place: "1st",
        description: "White Style Leogang 2016",
      },
      {
        place: "2nd",
        description: "Redbull Rampage 2022",
      },
      {
        place: "3rd",
        description: "FMB World Tour 2017",
      },
    ],
    sponsors: [
      {
        imgUrl: "https://i.ibb.co/GxVGwMb/adidasfiveten.jpg",
        name: "Adidas Five Ten",
        link: "https://www.adidas.com",
      },
      {
        imgUrl: "https://i.ibb.co/7YH3nqK/redbull.jpg",
        name: "Redbull",
        link: "https://www.redbull.com",
      },
      {
        imgUrl: "https://i.ibb.co/12HjFHh/reversecomponents.jpg",
        name: "Reverse Components",
        link: "https://www.reverse-components.com",
      },
      {
        imgUrl: "https://i.ibb.co/QpywqL0/specialized.jpg",
        name: "Specialized",
        link: "https://www.specialized.com",
      },
      {
        imgUrl: "https://i.ibb.co/zsJXyMY/specteyewear.jpg",
        name: "Spect Eyewear",
        link: "https://www.specteyewear.com",
      },
      {
        imgUrl: "https://i.ibb.co/fGk40L7/continentalmtb.jpg",
        name: "Continental MTB",
        link: "https://www.continental-tires.com",
      },
      {
        imgUrl: "https://i.ibb.co/M60X4V0/dometic.jpg",
        name: "Dometic",
        link: "https://www.dometic.com",
      },
      {
        imgUrl: "https://i.ibb.co/zZpXkbC/leatt.jpg",
        name: "Leatt",
        link: "https://www.leatt.com",
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
