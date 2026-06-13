import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminGate from "./admin/AdminGate";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminCalendar from "./admin/AdminCalendar";
import AdminAvailability from "./admin/AdminAvailability";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <AdminGate>
              <AdminLayout />
            </AdminGate>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="calendario" element={<AdminCalendar />} />
          <Route path="disponibilidad" element={<AdminAvailability />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
