import { useAuth } from "@/app/hooks/useAuth";

const { user } = useAuth();

export function Page() {
  // if (user?.role === "admin") return <AdminDashboard />;
  // if (user?.role === "expert") return <ExpertDashboard />;
  // if (user?.role === "user") return <UserDashboard />;

  return <div>Yetkin yok</div>;
}
