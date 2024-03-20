'use client';

import { useChangeLocale } from '../locales/client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import { Languages } from 'lucide-react'

export function SwitchLocales() {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);
// const locale = useCurrentLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="-my-1 ml-auto flex h-8 w-8 items-center justify-center rounded-lg">
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle Locales</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          en
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('zh')}>
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
