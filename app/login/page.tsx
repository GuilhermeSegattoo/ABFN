"use client";

import { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen pt-16  bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-lg mt-80">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Plataforma em Construção...</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/">
              <button className="items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">Voltar</button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}