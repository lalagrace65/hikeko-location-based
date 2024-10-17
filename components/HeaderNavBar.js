'use client';
import { signOut, useSession } from 'next-auth/react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function HeaderNavBar() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between p-2 shadow-md">
      <div className="flex gap-7 items-center">
        <Image src="/hikeko_logo.png" alt="logo" width={50} height={50} />
        <h1>Hikeko</h1>
        <Link href="/">Home</Link>
        <Link href="/trails">Trails</Link>
      </div>

      {/* Search bar */}
      <div className="bg-gray-100 p-[6px] rounded-md w-[40%] gap-3 hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>

      <div>
        {session?.user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session.user.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full cursor-pointer hover:border-[2px] border-blue-500"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-2 shadow-md">
              <DropdownMenuItem>
                <Link href="/accountSettings"> Profile </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

export default HeaderNavBar;
