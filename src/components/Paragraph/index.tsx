import React from "react";
import classNames from "classnames";
interface ParagraphProps {
  children: React.ReactNode | string;
  classes?: string;
  type?: "xs" | "sm" | "md";
  spacings?: "zero" | "xs" | "sm" | "md";
}

const Paragraph = ({ children, classes, type }: ParagraphProps) => {
  const size = {
    xs: "text-body-12-16",
    sm: "text-body-14-20",
    md: "text-body-16-24",
  }[type || "md"];

  const spacingsSize = {
    zero: "mb-0",
    xs: "mb-2",
    sm: "mb-4",
    md: "mb-8",
  }[type || "md"];
  return (
    <p
      className={classNames(" text-lightPrimary", size, spacingsSize, classes)}>
      {children}
    </p>
  );
};

export default Paragraph;
