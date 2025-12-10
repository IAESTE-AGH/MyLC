import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src="/salata.png"
                alt="MyApp Logo"
                width={1095}
                height={1041}
                className="h-13 w-13"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/rejestracja"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Zarejestruj się
            </Link>
            <Link
              href="/login"
              className="bg-(--primary) text-white px-4 py-2 rounded-md hover:bg-(--primary-hover) transition-colors"
            >
              Zaloguj się
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
