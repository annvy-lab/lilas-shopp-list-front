"use client";

import { LogOut } from "lucide-react";

import { authRoutes } from "@/app/_lib/auth-routes";

import { Button } from "../ui/button";

const LogoutButton = () => {
  const handleLogout = () => {
    window.location.assign(authRoutes.signOut);
  };

  return (
    <Button className="w-full" onClick={handleLogout}>
      <LogOut />
      Logout
    </Button>
  );
};

export default LogoutButton;
