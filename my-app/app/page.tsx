"use client"

import Link from "next/link"
import Image from 'next/image';
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { SquareArrowOutUpRight, MoveRight } from 'lucide-react'
import PageHeader from "@/components/page-header"
import MainPage from "@/components/homepage/main-page"

export default function IndexPage() {

  return (
    <>
      <PageHeader />
      <main>
        <MainPage />
      </main>
    </>
  )
}