import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PasswordProtection } from "@/components/PasswordProtection";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/components/HomePage";
import { RoutesPage } from "@/components/RoutesPage";
import { RouteDetailPage } from "@/components/RouteDetailPage";
import { PlannerPage } from "@/components/PlannerPage";
import { PassportPage } from "@/components/PassportPage";
import { TipsPage } from "@/components/TipsPage";
import { SupportPage } from "@/components/SupportPage";
import { AuthPage } from "@/components/AuthPage";
import { UserDashboard } from "@/components/UserDashboard";
import { AdminDashboard } from "@/components/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PasswordProtection>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/routes" element={<RoutesPage />} />
              <Route path="/routes/:routeId" element={<RouteDetailPage />} />
              <Route path="/planner" element={<PlannerPage />} />
              <Route path="/passport" element={<PassportPage />} />
              <Route path="/tips" element={<TipsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </PasswordProtection>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
