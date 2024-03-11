import React from "react";
import Images from "../../assets/WFT.jpg";
interface ImageProps {
  src?: string;
  width: number;
  height: number;
}

const Logo: React.FC<ImageProps> = ({ src = Images, width, height }) => (
  <img src={src} alt="Library Image" width={width} height={height} />
);
export default Logo;
