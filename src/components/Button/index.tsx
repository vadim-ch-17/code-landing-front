import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  as: "button" | "link";
  url?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  classes?: string;
}

const Button = ({
  as,
  url = "#",
  children,
  size = "md",
  classes = "",
}: ButtonProps) => {
  const sizeBtn = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-3 px-6",
  }[size];

  return (
    <>
      {as === "button" ? (
        <button
          className={classNames(
            "flex inset-2/4 rounded-[4px] bg-green hover:bg-green/70 text-white transition-colors duration-300",
            sizeBtn,
            classes
          )}
          aria-label={`button ${children}`}>
          {children}
          <span className="sr-only">{children}</span>
        </button>
      ) : (
        <Link
          href={url}
          className={classNames(
            "text-green hover:text-green/70 transition-colors duration-300",
            classes
          )}
          aria-label={`link to ${url.replace("/", "")}`}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
