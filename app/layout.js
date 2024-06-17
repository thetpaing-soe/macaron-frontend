import { ApolloWrapper } from "../graphql/ApolloWrapper";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Navbar />
          <Banner />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
