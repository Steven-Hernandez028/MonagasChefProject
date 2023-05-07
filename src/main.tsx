import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const theme = extendTheme({
  colors: {
    color: {
      primary: "#A24502",
      secondary: "#595D2B",
      font: "#CD8A39",
      blackbase: "#1B1F22",
      whitebase: "#F5F2EB",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
    <App/>
  </ChakraProvider>
  </BrowserRouter>
);
