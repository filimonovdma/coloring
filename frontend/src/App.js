import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Singel from "./pages/Singel";
import Category from "./pages/Category";
import Component from "./pages/Component";
import Dima from './pages/dima';
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/category":
        title = "";
        metaDescription = "";
        break;
      case "/span":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="*" element={<Singel />} />
      <Route path="/category" element={<Category />} />
      <Route path="/span" element={<Component />} />
      <Route path="/1" element={<Dima />}/>
    </Routes>
  );
}
export default App;
