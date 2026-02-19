"use client";

import dynamic from "next/dynamic";

const FloatingNav = dynamic(
  () => import("@/components/animated/FloatingNav").then((mod) => mod.FloatingNav),
  { ssr: false }
);

interface ClientNavProps {
  items: { label: string; href: string }[];
  logo?: string;
  companyName: string;
}

export function ClientNav({ items, logo, companyName }: ClientNavProps) {
  return <FloatingNav items={items} logo={logo} companyName={companyName} />;
}
