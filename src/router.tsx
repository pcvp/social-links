import { Route, Routes } from "react-router-dom";
import { Share } from "./pages/Share";

export function Router() {
  return (
    <Routes>
      <Route path="/share/:slug" element={<Share />} />
    </Routes>
  );
}
