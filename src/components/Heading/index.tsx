import React, { createElement } from "react";
import classNames from "classnames";
interface HeadingProps {
  children: React.ReactNode | string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  classes?: string;
}

const styles = {
  h1: "text-heading-36-44 md:text-heading-64-76 font-semibold text-mediumPrimary",
  h2: "text-heading-28-36 md:text-heading-36-44 font-semibold text-mediumPrimary",
  h3: "text-heading-24-28 md:text-heading-28-36 font-semibold text-mediumPrimary",
  h4: "text-heading-18-20 md:text-heading-20-28 font-semibold text-mediumPrimary",
  h5: "text-heading-28-36 md:text-heading-36-44 font-semibold text-mediumPrimary",
  h6: "text-heading-28-36 md:text-heading-36-44 font-semibold text-mediumPrimary",
};

const coloredText = (children: React.ReactNode | string) => {
  if (typeof children === "string") {
    return children.split("$").map((word: string, index: number) => {
      return index % 2 === 0 ? (
        <span key={index}>{word}</span>
      ) : (
        <span key={index} className="text-green">
          {word}
        </span>
      );
    });
  } else {
    return children;
  }
};

const Heading = ({ children, level, classes }: HeadingProps) => {
  return createElement(
    level,
    { className: classNames(styles[level], classes) },
    coloredText(children)
  );
};

export default Heading;
