// app/(expert)/dashboard/layout.tsx
"use client";

import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ExpertDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    if (user.role !== "expert") {
      alert("Bu alana erişiminiz yok");
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
