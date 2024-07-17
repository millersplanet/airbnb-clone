import Image from "next/image";
import DesktopLogo from "@/public/homers.png";
import MobileLogo from "@/public/homer.png";
import { UserNav } from "./UserNav";
import { SearchModal } from "./SearchModal";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <a href="/">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />

          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </a>

        <SearchModal />

        <UserNav />
      </div>
    </nav>
  );
}
