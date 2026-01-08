import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AdultCurriculum } from "./pages/AdultCurriculum";
import { KidsCurriculum } from "./pages/KidsCurriculum";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pyon-moo-do-curriculum-videos" element={<AdultCurriculum />} />
          <Route path="/pyon-moo-do-kids-videos" element={<KidsCurriculum />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
