import { StaticImageData } from "next/image";

export type BlogTypes = {
  id: string;
  title: string;
  image: string | StaticImageData;
  description: string;
};
