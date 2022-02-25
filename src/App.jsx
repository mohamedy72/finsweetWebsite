import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./Assets/styles/base.css";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Home from "./Pages/Home/Home";

const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const Features = lazy(() => import("./Pages/Features/Features"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"));
const FAQ = lazy(() => import("./Pages/FAQ/FAQ"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const Work = lazy(() => import("./Pages/Work/Work"));

function App() {
  return (
    <div className="App">
      <Header background="var(--tint-blue)" />
      <main className="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="aboutus"
            element={
              <Suspense fallback="Loading About us">
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="features"
            element={
              <Suspense fallback="Loading Features">
                <Features />
              </Suspense>
            }
          />
          <Route
            path="pricing"
            element={
              <Suspense fallback="Loading Pricing">
                <Pricing />
              </Suspense>
            }
          />
          <Route
            path="faq"
            element={
              <Suspense fallback="Loading FAQ">
                <FAQ />
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback="Loading Blog">
                <Blog />
              </Suspense>
            }
          />
          <Route path="*" element={<p>Page Not Found!</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
