"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
                NovaFund
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="/dashboard"
                  className={`text-sm font-medium transition-colors ${isActive('/dashboard') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/explore"
                  className={`text-sm font-medium transition-colors ${isActive('/explore') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Explore
                </Link>
                <Link
                  href="/create"
                  className={`text-sm font-medium transition-colors ${isActive('/create') ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Create
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default DashboardLayout;
