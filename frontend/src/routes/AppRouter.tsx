import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import WorkspacePage from "../pages/Workspace/WorkspacePage";
import ProfilePage from "../pages/Profile/ProfilePage";
import ProgressPage from "../pages/Progress/ProgressPage";
import SettingsPage from "../pages/Settings/SettingsPage";
import ForgotPasswordPage from "../pages/ForgotPassword/ForgotPasswordPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />

        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

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

      </Routes>
    </BrowserRouter>
  );
}