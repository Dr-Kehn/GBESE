"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react";

import TopNavbar from "@/components/layout/TopNavbar";
import BalanceCard from "@/components/dashboard/BalanceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const username = "dorothyubuara";
const message = `Hi, There! You can now send me money on gbese with my username: @${username}`;

export default function ShareUsernamePage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Copied successfully!");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mt-10">
        <BalanceCard />
        <section className="w-full px-4 py-10 flex flex-col items-center">
          {/* Back */}
          <div className="w-full max-w-xl mt-6 mb-4 text-sm text-gray-600">
            <Link
              href="/w2/dashboard/add-money"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <ChevronLeft size={16} />
              Back
            </Link>
          </div>

          <Card className="w-full max-w-xl rounded-2xl shadow-sm">
            <CardContent className="flex flex-col items-center py-10 px-4 text-center">
              <h2 className="text-xl font-semibold text-black">
                Hi, <span className="text-blue-700">@{username}</span>!
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Share your new Username with your friends
              </p>

              <div className="bg-gray-100 text-sm mt-6 p-4 rounded-lg w-full max-w-md">
                {message}
              </div>

              <Button
                variant="outline"
                onClick={handleCopy}
                className="mt-6 w-full max-w-md"
              >
                Copy Message
              </Button>

              <Button
                className="mt-3 w-full max-w-md bg-blue-600 cursor-pointer hover:bg-blue-700"
                onClick={() => router.push("/w2/dashboard/add-money")}
              >
                Done
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
