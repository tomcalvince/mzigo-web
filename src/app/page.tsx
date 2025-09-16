"use client"

import Image from "next/image";
import { useState } from "react";
import { CancelSquareIcon, Menu11Icon, PackageIcon, PackageSearchIcon, SentIcon, UserIcon } from 'hugeicons-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-3 sm:p-4 lg:p-6 container mx-auto">
      <main>
        <div className="flex flex-row justify-between items-start sm:items-center py-4 gap-4 sm:gap-0">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 font-bold">
            <PackageIcon size={24} className="text-green-700" />
            <h1 className="text-green-700 text-lg sm:text-xl">MZIGO.CO.KE</h1>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full sm:w-auto">
            {/* Mobile Menu Button */}
            <Button 
              className="sm:hidden self-end p-2 rounded-md bg-green-600"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Menu11Icon size={24} />
            </Button>

            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden sm:flex space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base">
                About
              </a>
            </nav>

            {/* Account Button - Hidden on mobile */}
            <div className="hidden sm:flex px-3 sm:px-4 py-2 rounded-2xl items-center bg-green-600 text-white space-x-2 hover:bg-green-700 transition-colors text-sm sm:text-base">
              <a href="#" className="font-medium">Account</a>
              <UserIcon size={18} className="sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 sm:hidden" onClick={() => setIsDrawerOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex justify-between items-center border-b">
              <div className="flex items-center space-x-2 font-bold">
                <PackageIcon size={24} className="text-green-700" />
                <h1 className="text-green-700 text-lg">MZIGO.CO.KE</h1>
              </div>
              <Button 
                className="p-2 rounded-md bg-green-600"
                onClick={() => setIsDrawerOpen(false)}
              >
                <CancelSquareIcon size={24} />
              </Button>
            </div>
            <div className="p-4 flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-gray-700 hover:text-green-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsDrawerOpen(false)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-green-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsDrawerOpen(false)}
              >
                About
              </a>
              <div className="px-4 py-2 rounded-2xl flex items-center bg-green-600 text-white space-x-2 hover:bg-green-700 transition-colors mt-4">
                <a href="#" className="font-medium" onClick={() => setIsDrawerOpen(false)}>Account</a>
                <UserIcon size={18} />
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="pt-6 sm:pt-10">
        <Card className="relative overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/delivery.jpg')" }}>
          <div className="absolute inset-0 bg-black/60"></div>

          <CardHeader className="relative z-10 p-4 sm:p-6 text-center">
            <CardTitle className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              Fast & Reliable Delivery
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-10 text-white p-4 sm:p-6 text-center flex flex-col items-center justify-center">
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 leading-relaxed max-w-2xl">
              Get your packages delivered quickly and safely across Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size={'lg'}
                className="bg-green-600 hover:bg-green-700 text-white p-6 sm:px-6 py-2 sm:py-3  font-medium flex justify-center"
              >
                <span className="text-2xl p-2">
                  Send
                </span>
                <SentIcon/>
              </Button>
              <Button
                size={'lg'}
                variant="outline" className="border-white text-black px-4 sm:px-6 py-2 sm:py-3 font-medium"
              >
                <span className="text-2xl">
                  Track
                </span>
                <PackageSearchIcon/>
              </Button>
            </div>
          </CardContent>

          <CardFooter className="relative z-10 p-4 sm:p-6 mt-auto justify-center">
            <div className="flex items-center space-x-2 text-white/80">
              <PackageIcon size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Trusted by 10,000+ customers</span>
            </div>
          </CardFooter>
        </Card>
      </section>

      <footer></footer>
    </div>
  );
}