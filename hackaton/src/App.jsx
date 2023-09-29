import React from "react";
import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
const LazyContact = React.lazy(() => import("./pages/contact/ContactPage"));
const LazyRegister = React.lazy(() =>
  import("./pages/register-page/RegisterPage")
);
import "./components/banners/banner.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/contact"
          element={
            <React.Suspense
              fallback={
                <div className="bg-mainBlue text-white text-2xl min-h-screen flex justify-center items-center left-banner-left">
                  Loading...
                </div>
              }
            >
              <LazyContact />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense
              fallback={
                <div className="bg-mainBlue text-white text-2xl min-h-screen flex justify-center items-center left-banner-left">
                  Loading...
                </div>
              }
            >
              <LazyRegister />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
