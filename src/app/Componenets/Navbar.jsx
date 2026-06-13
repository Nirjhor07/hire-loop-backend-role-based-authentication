import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Hire<span className="text-blue-600">Loop</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#jobs" className="hover:text-blue-600 transition">
              Find Jobs
            </Link>
            <Link href="#recruiters" className="hover:text-blue-600 transition">
              For Recruiters
            </Link>
            <Link href="#" className="hover:text-blue-600 transition">
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/signin" className="hover:text-blue-600 transition">
              <Button variant="primary">Sign In</Button>
            </Link>
           <Link href="#post-job" className="hover:text-blue-600 transition">
               <Button variant="secondary">Post a Job</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
