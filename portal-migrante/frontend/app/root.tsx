import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
