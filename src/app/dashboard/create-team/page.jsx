"use client";

import { useRouter } from "next/navigation";
import TeamForm from "@/components/Team/TeamForm";

export default function Page() {
  const router = useRouter();

  return (
    <div className="p-6">
      <TeamForm onSuccess={() => router.push("/dashboard/team-list")} />
    </div>
  );
}