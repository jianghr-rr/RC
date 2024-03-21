"use client"

import Link from 'next/link'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import HomePageHref from "@/components/homepage/page-href"
import { SunIcon, MoonIcon } from 'lucide-react';

export default function PageHeader() {
  const { setTheme } = useTheme()

  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/#">logo</Link>
            <div className='hidden md:flex md:gap-x-6'>
              <HomePageHref.FeaturesHref />
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#pricing">Pricing</Link>
            </div>
          </div>
          <div className="flex items-center gap-x-2 md:gap-x-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="-my-1 ml-auto flex h-8 w-8 items-center justify-center rounded-lg">
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  )
}