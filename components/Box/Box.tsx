import { createElement, forwardRef } from "react";
import type { AllHTMLAttributes, ElementType } from "react";

import { sprinkles } from "../../styles";
import type { Sprinkles } from "../../styles";

type HTMLProperties<T = HTMLElement> = Omit<
  AllHTMLAttributes<T>,
  "as" | "color" | "height" | "width" | "size"
>;

export type BoxProps = Sprinkles &
  HTMLProperties & {
    as?: ElementType;
  };

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as = "div", className, children, ...props }, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    return createElement(
      as,
      {
        className: `${sprinkles(atomProps)}${className ? ` ${className}` : ""}`,
        ref,
        ...nativeProps,
      },
      children
    );
  }
);

Box.displayName = "Box";
