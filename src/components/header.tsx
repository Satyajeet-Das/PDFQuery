import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-gray-900 dark:bg-background dark:text-foreground shadow-md">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">PDFQuery</h1>

        <nav>
          <ul className="flex space-x-10 text-sm md:text-base font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-gray-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 dark:hover:text-gray-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 dark:hover:text-gray-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 dark:hover:text-gray-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="cursor-pointer text-sm px-4 py-2 border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600 dark:text-white"
          >
            Login
          </Button>
          <Button className="cursor-pointer text-sm px-4 py-2">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
