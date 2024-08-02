import "../App.scss";
import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Epath } from "./routes/routerConfig";
import SuspenseFallback from "./components/Commom/SuspenseFallback";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<SuspenseFallback></SuspenseFallback>}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path={Epath.homePage} element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
