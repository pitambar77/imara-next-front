"use client";

import PackageForm from "@/components/packages/PackageForm";

export default function Page() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Create New Package</h2>
      <PackageForm />
    </div>
  );
}