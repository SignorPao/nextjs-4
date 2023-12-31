// css
import "./globals.css";

// components
import Nav from "./components/Nav";
import CartMobileIcon from "./components/CartMobileIcon";
import CartMobile from "./components/CartMobile";
import CartDesktop from "./components/CartDesktop";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// context
import CartProvider from "./context/CartContext";

// fonts
import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "PizzaLand - NextApp || Mark Powell",
  description: "Generated by create Next app",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body
          className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </CartProvider>
  );
}
