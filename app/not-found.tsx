import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="mt-6">
          <Link href="/">
            <Button size="lg" className="rounded-full px-6 cursor-pointer">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
