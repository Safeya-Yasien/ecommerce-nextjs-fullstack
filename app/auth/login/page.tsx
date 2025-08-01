import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Login to your account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input type="email" placeholder="Email" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <Input type="password" placeholder="Password" />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
