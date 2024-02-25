import Image from "next/image";
import Links from "~/components/sportree-site/links";
import Sponsors from "~/components/sportree-site/sponsors";
import { HARDCODED_SPORTREES } from "~/utils/sportrees";

interface Props {
  params: {
    name: string;
  };
}

export async function generateMetadata({ params: { name } }: Props) {
  return {
    title: `${name}`,
  };
}

const Page = ({ params: { name } }: Props) => {
  const sportree = HARDCODED_SPORTREES[name];

  if (!sportree) {
    return <div>Sportree not found</div>;
  }

  return (
    <div id="app">
      <video autoPlay loop muted playsInline className="back-video">
        <source src={sportree.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main-container no-scrollbar w-[90vw] overflow-auto p-2 sm:w-[450px] sm:p-5">
        <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
          <Image
            width={164}
            height={164}
            alt="avatar"
            src={sportree.avatar}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 px-6 sm:p-0">
            <h1 className="text-center text-2xl font-semibold">
              {sportree.name} {sportree.flag}
            </h1>
            <div className="bg-sportree-card-bg rounded-xl p-2 px-10 sm:w-60 sm:p-2">
              <div className="flex w-full flex-col items-center justify-center gap-1">
                {sportree.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center gap-2 overflow-hidden whitespace-nowrap"
                  >
                    <div className="flex w-full items-center justify-center gap-1.5 truncate font-semibold leading-5">
                      <span className="text-2xl">{achievement.place}</span>
                      <span className="no-scrollbar overflow-scroll sm:w-56">
                        {achievement.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Sponsors sponsors={sportree.sponsors} />

        <Links links={sportree.links} />
      </div>
      <footer className="fixed bottom-2 text-sm text-gray-200">
        © Sportree 2024
      </footer>
    </div>
  );
};
export default Page;
