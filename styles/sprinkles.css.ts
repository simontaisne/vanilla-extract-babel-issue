import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const properties = defineProperties({
  properties: {
    display: ["flex", "block"],
    alignItems: ["center"],
    flexDirection: ["column"],
    justifyContent: ["space-between"],
  },
});

export const sprinkles = createSprinkles(properties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
