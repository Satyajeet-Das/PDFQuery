"use client";

import { useRouter } from "next/navigation";
import { type LucideIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const router = useRouter();

  const handleClick = (url: string) => {
    if (url === "/new-chat") {
      router.push(url);
    } else {
      router.push(url);
    }
  };

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <button
              onClick={() => handleClick(item.url)}
              className="flex items-center gap-2 w-full text-left"
            >
              <item.icon />
              <span>{item.title}</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
