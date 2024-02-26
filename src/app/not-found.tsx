import type { FunctionComponent } from "react";

const NotFoundPage: FunctionComponent = () => {
  return (
    <div className="bg-beige flex h-screen w-full items-center justify-center">
      <div className="flex h-40 w-40 flex-col items-center justify-center border-2 border-gray-800 text-[40px] font-medium leading-10 text-gray-800">
        <span>PAGE</span>
        <span>NOT</span>
        <span>FOUND</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
