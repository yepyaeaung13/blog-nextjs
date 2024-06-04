import "./globals.css";
import UserProvider from "../context/UserProvider";
import PostProvider from "../context/PostProvider";
import NavtabProvider from "../context/NavtabProvider";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <PostProvider>
            <NavtabProvider>
              <Header />
              <div>
                <Toaster />
              </div>
              {children}
              <Footer />
            </NavtabProvider>
          </PostProvider>
        </UserProvider>
      </body>
    </html>
  );
}