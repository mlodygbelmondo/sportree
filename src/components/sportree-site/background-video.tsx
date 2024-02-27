"use client";

import { type FunctionComponent, Suspense } from "react";
import Loading from "../shared/loading";

interface Props {
  video: string;
}

const BackgroundVideo: FunctionComponent<Props> = ({ video }) => {
  return (
    <Suspense
      fallback={
        <div
          className={`-z-[1] flex h-screen w-screen items-center justify-center bg-white`}
        >
          <Loading />
        </div>
      }
    >
      <video autoPlay loop muted playsInline className="back-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Suspense>
  );
};

export default BackgroundVideo;
