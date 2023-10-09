import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const pageTitles = [
  { pageID: 1, pageName: "Applications", pageLink: "/applications" },
  { pageID: 2, pageName: "Accomplishments", pageLink: "/accomplishments" },
  { pageID: 3, pageName: "Visual data", pageLink: "/visualData" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = useRouter().pathname;

  return (
    <Navbar
      className="bg-[#18122B] card-glass text-white"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex flex-row-reverse">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"}>
            <div className="flex items-center gap-1">
              <Image width={50} height={50} src={"/emit_logo.png"} alt="Logo" />
              <p className="font-bold text-inherit">EMIT</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {pageTitles.map((data) => (
          <NavbarItem key={data.pageID}>
            <Link href={data.pageLink}>
              <span
                className={
                  currentRoute === data.pageLink
                    ? "text-[#E5CFF7] text-2xl"
                    : "text-white text-2xl"
                }
              >
                {data.pageName}
              </span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-[#393053] card-glass flex flex-col items-center pt-16">
        {pageTitles.map((data) => (
          <NavbarMenuItem key={data.pageID}>
            <Link href={data.pageLink}>
              <span
                className={
                  currentRoute === data.pageLink
                    ? "text-[#E5CFF7] text-2xl"
                    : "text-white text-2xl"
                }
              >
                {data.pageName}
              </span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
