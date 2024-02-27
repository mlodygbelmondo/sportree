import { type ReactNode } from "react";
import { SocialIcon } from "react-social-icons";
import Flag from "react-world-flags";

const SPORTREE_NAMES = ["szymon-godziek"];

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
    avatar: "/hardcoded-sportrees/szymon-godziek/avatar.jpg",
    flag: <Flag code="PL" style={{ width: "24px", height: "24px" }} />,
    video: "/hardcoded-sportrees/szymon-godziek/simongodziek.mp4",
    achievements: [
      {
        place: "2nd",
        description: "Redbull Rampage 2022",
      },
      {
        place: "3rd",
        description: "Redbull Roof Ride 2021",
      },
      {
        place: "4th",
        description: "Redbull Roof Ride 2023",
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
        link: "https://www.redbull.com/pl-pl/athlete/szymon-godziek",
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
        icon: "Beerduro",
        url: "https://beerduro.store/",
        name: "Beerduro Store",
      },
    ],
  },
  "dawid-godziek": {
    id: 2,
    name: "Dawid Godziek",
    avatar:
      "https://i.ibb.co/H4sZzy5/361051929-818681839538378-8521255941823159424-n.jpg",
    flag: <Flag code="PL" style={{ width: "24px", height: "24px" }} />,
    video: "/hardcoded-sportrees/dawid-godziek/davidgodziek.mp4",
    achievements: [
      {
        place: "2nd",
        description: "best MTB Slopestyle Rider 2023",
      },
      {
        place: "1st",
        description: "X-Games BMX Dirt 2022",
      },
      {
        place: "1st",
        description: "X-Games BMX Dirt 2018",
      },
    ],
    sponsors: [
      {
        imgUrl: "https://i.ibb.co/GCg02Br/industrynine.jpg",
        name: "Industry Nine",
        link: "https://www.industrynine.com",
      },
      {
        imgUrl: "https://i.ibb.co/tmBWwQz/rockshox.jpg",
        name: "Rockshox",
        link: "https://www.sram.com/rockshox",
      },
      {
        imgUrl: "https://i.ibb.co/9HChFj3/sram.jpg",
        name: "Sram",
        link: "https://www.sram.com",
      },
      {
        imgUrl: "https://i.ibb.co/m99m54W/rtrbikes.jpg",
        name: "RTR Bikes",
        link: "https://www.rtrbikes.com",
      },
      {
        imgUrl: "https://i.ibb.co/Lt4DW9W/btproject.png",
        name: "BT Project",
        link: "https://btproject.eu/",
      },
      {
        imgUrl: "https://i.ibb.co/7YH3nqK/redbull.jpg",
        name: "Redbull",
        link: "https://www.redbull.com/pl-pl/athlete/dawid-godziek",
      },
      {
        imgUrl: "https://i.ibb.co/QpywqL0/specialized.jpg",
        name: "Specialized",
        link: "https://www.specialized.com",
      },
      {
        imgUrl: "https://i.ibb.co/fGk40L7/continentalmtb.jpg",
        name: "Continental MTB",
        link: "https://www.continental-tires.com",
      },
    ],
    links: [
      {
        icon: "Instagram",
        url: "https://www.instagram.com/davidgodziek/",
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
        url: "https://www.facebook.com/dgodziek",
        name: "Facebook",
      },
    ],
  },
};
