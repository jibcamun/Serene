import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <h1 className="text-9xl font-bold">404</h1>
      <h1 className="text-2xl font-semibold mb-8">Not Found</h1>
      <h1>
        <Link href={"/"} className="text-blue-400 text-lg">
          Return to Home
        </Link>
      </h1>
    </div>
  );
}
