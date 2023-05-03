import React from "react";
import ReactDOM from "react-dom/client";
import HomeSection from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const theme = extendTheme({
  colors: {
    color: {
      primary: "#A24502",
      secondary: "#595D2B",
      blackbase: "#1B1F22",
      whitebase: "#F5F2EB",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
    <HomeSection    title="¡Bienvenido a mi sitio web!"
        subtitle="Este es el mejor lugar para encontrar información sobre mí y lo que hago."
        buttonText="Contacto"
        buttonLink="/contacto" />
  </ChakraProvider>
  </BrowserRouter>
);
