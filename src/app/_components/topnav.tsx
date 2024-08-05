import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./upload-button";
import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 bg-black/50 px-4 py-4 backdrop-blur-lg">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Gallery</p>
      </aside>
      <aside className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </aside>
    </nav>
  );
}