import "../tb-pages.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

/** Shared shell for the Around Us, Culture and Cuisine pages. */
export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tb-page">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBar />
    </div>
  );
}
