import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPassword/ForgotPasswordPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ProgressPage from "../pages/Progress/ProgressPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SettingsPage from "../pages/Settings/SettingsPage";
import ProtectedRoute from "./ProtectedRoute";
import PracticePage from "../pages/Practice/PracticePage";
import PracticeDetailPage from "../pages/PracticeDetail/PracticeDetailPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        {/* Dashboard */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/practice"
            element={<PracticePage />}
          />

          {/* <Route
            path="/practice/:slug"
            element={<PracticeDetailPage />}
          /> */}

          <Route
            path="/progress"
            element={<ProgressPage />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}