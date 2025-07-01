import { Outlet, useLocation, useNavigation } from "react-router";
import Loading from "../components/Loading";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();

  const nextLocation = navigation.location;
  const isNavigateToNewRoute =
    nextLocation && nextLocation.pathname !== location.pathname;
  const isLoading = navigation.state === "loading" && isNavigateToNewRoute;

  return (
    <div>
      <header className="sticky top-0 backdrop-blur-xl z-50 border-b border-[#e0e0e0]">
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-386px)]">
        {isLoading ? <Loading /> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
