"use client";

import Image from "next/image";
import type { FunctionComponent } from "react";
import { useMediaQuery } from "usehooks-ts";
import { type Sponsor } from "~/utils/sportrees";

interface Props {
  sponsors: Sponsor[];
}

const Sponsors: FunctionComponent<Props> = ({ sponsors }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const sponsorSize = isMobile ? 48 : 64;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-10 sm:p-0">
      {sponsors.map((sponsor, index) => (
        /** @todo add link */
        <Image
          key={index}
          width={sponsorSize}
          height={sponsorSize}
          draggable={false}
          className=" none rounded-full transition-transform duration-300 ease-in-out hover:scale-125 hover:cursor-pointer"
          alt={sponsor.name}
          src={sponsor.imgUrl}
        />
      ))}
    </div>
  );
};

export default Sponsors;
