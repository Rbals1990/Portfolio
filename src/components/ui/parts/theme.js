import { createSystem, defaultConfig } from "@chakra-ui/react";
// Poppins
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

// Oswald
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/700.css";

// Chicle (heeft maar 1 gewicht: 400)
import "@fontsource/chicle/400.css";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Chicle', sans-serif` },
        body: { value: `'Oswald', sans-serif` },
        text: { value: `'Oswald', sans-serif` },
        title: { value: `'Chicle', sans-serif` },
      },
    },
  },
});

export default system;
