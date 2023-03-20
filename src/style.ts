import { Styling } from "./types";

export const text: Styling['Text'] = {
  normal: "lg:text-sm xs:text-xs",
  small: "text-xs lg:text-ss",
  smallest: "text-xs lg:text-ss",
  heading: "lg:text-4xl sm:text-xl xs:text-lg",
  subHeading: "lg:text-xl sm:text-ss md:text-ss xs:text-xs text-primary font-semibold ",
  body: "font-normal text-gray-500 text-xs",
};