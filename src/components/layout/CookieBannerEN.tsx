"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CookieBannerEN() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", choice);
    setVisible(false);
    // Optionally trigger callback to enable/disable scripts
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 animate-slide-up"
      )}
    >
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-lg font-semibold mb-2">🍪 We value your privacy</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          We use cookies and similar technologies to:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mb-4">
          <li>Improve your browsing experience</li>
          <li>Analyze website traffic and performance</li>
          <li>Show personalized ads and recommendations</li>
          <li>Understand user behavior to enhance features</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          By clicking &quot;Accept&quot;, you agree to the storing of
          cookies on your device to enhance site navigation, analyze site usage,
          and assist in our marketing efforts.{" "}
          <a href="/en/privacy-policy" className="underline">
            Learn more in our Privacy Policy
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            size="sm"
            className="bg-priColor hover:bg-blue-700"
            onClick={() => handleConsent("accepted")}
          >
            Accept
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleConsent("rejected")}
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}