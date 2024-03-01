"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();

  return (
    <header>
      <Navbar className="bg-purple-500">
        <NavbarBrand>
          <p className="font-bold text-inherit">SpotiQuiz</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="flex">
            {session.data && (
              <Dropdown>
                <DropdownTrigger>
                  <User
                    name={session.data.user.name ?? ""}
                    avatarProps={{
                      src: session.data.user.image ?? "",
                    }}
                  />
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    key="signout"
                    color="danger"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
