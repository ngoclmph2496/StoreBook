import React from "react";
import "./styles/styles.scss";
import BMAppLayout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./constants/route";
import BMLoading from "./components/shared/loading";
import { ToastContainer } from "react-toastify";

const BMBooksPage = React.lazy(() => import("./Pages/Book/components"));
const BMErrorPage = React.lazy(() => import("./Pages/Erro/index"));

function App() {
  return (
    <div className="bm-app">
      <Routes>
        <Route path={APP_ROUTES.DEFAULT} element={<BMAppLayout />}>
          <Route index element={<BMBooksPage />} />
          <Route
            path={APP_ROUTES.BOOK}
            element={
              <React.Suspense fallback={<BMLoading showLogo />}>
                <BMBooksPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<BMErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
