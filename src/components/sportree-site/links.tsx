"use client";

import Link from "next/link";
import type { FunctionComponent } from "react";
import { SocialIcon } from "react-social-icons";
import { type SportreeLink } from "~/utils/sportrees";

interface Props {
  links: SportreeLink[];
}

const Links: FunctionComponent<Props> = ({ links }) => {
  return (
    <div className="links">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          className="link flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-110"
        >
          <SocialIcon
            as="div"
            style={{ width: "32px", height: "32px" }}
            url={link.url}
          />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Links;
