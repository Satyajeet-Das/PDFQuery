"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getTime } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?", timestamp: getTime() },
    { sender: "user", text: "Tell me about project deadlines.", timestamp: getTime() },
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input,
      timestamp: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Project deadlines are listed under the Tasks tab.",
          timestamp: getTime(),
        },
      ]);
    }, 1000);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <div className="flex items-center gap-2 text-sm px-4">
              <div className="text-muted-foreground hidden font-medium md:inline-block">
                Oct 08
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 px-4 py-1">
          <div className="bg-background mx-auto w-full rounded-xl shadow-md flex flex-col h-[90vh] overflow-hidden border">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "items-start"} gap-2`}
                >
                  <div className="flex flex-col items-end">
                    <div
                      className={`rounded-lg px-4 py-2 text-sm max-w-[75%] ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Field */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t px-4 py-3">
              <Input
                type="text"
                placeholder="Type your message..."
                className="flex-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
