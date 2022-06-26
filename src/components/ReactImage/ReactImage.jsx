import { useImage, Img } from "react-image";
import Suspense from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export const ReactImage = (props) => {
  const { src } = useImage({
    srcList: props.image,
    useSuspense: typeof props.suspense === "undefined" ? true : props.suspense,
  });

  const { suspense, ...rest } = props;
  return <img src={src} alt="" {...rest} />;
};

export default ReactImage;
