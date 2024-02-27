import Image from "next/image";
import { notFound } from "next/navigation";
import BackgroundVideo from "~/components/sportree-site/background-video";
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
    return notFound();
  }

  return (
    <div id="app">
      <BackgroundVideo video={sportree.video} />
      <div className="main-container no-scrollbar w-[90vw] overflow-y-auto overflow-x-hidden p-2 sm:w-[450px] sm:p-5">
        <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
          <Image
            width={154}
            height={154}
            alt="avatar"
            src={sportree.avatar}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 px-6 sm:p-0">
            <h1 className="flex items-center justify-center gap-2 text-center text-2xl font-semibold">
              {sportree.name} {sportree.flag}
            </h1>
            <div className="xs:px-4 xs:text-base rounded-xl bg-sportree-card-bg p-2 px-2 text-[15px] sm:w-64 sm:p-2">
              <div className="flex w-full flex-col items-center justify-center gap-1">
                {sportree.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center gap-2 overflow-hidden whitespace-nowrap"
                  >
                    <div className="flex w-full items-center justify-start gap-1.5 truncate leading-5">
                      <span className="">{achievement.place}</span>
                      <span className="no-scrollbar overflow-scroll sm:w-64">
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
    </div>
  );
};
export default Page;
