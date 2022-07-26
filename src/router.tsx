import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Share } from "./pages/Share";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<Share />} />
    </Routes>
  );
}
