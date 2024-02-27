import type { FunctionComponent } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/loading.json";
const Loading: FunctionComponent = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={options} width={200} height={200} />;
};

export default Loading;
