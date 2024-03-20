"use client"

import Link from "next/link"
import Image from 'next/image';
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { SquareArrowOutUpRight, MoveRight } from 'lucide-react';
import PageHeader from "@/components/page-header"

export default function IndexPage() {

  return (
    <>
      <PageHeader />
      <section className="relative mx-auto max-w-container px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Salient
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                Every SaaS marketing site uses the same formula — a hero, feature sections, some testimonials, you know the drill. But some are prettier than others.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.docs}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Live preview
                <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={buttonVariants({ variant: "outline" })}
              >
                Get template
                <MoveRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <Image
              width="1600"
              height="1280"
              alt="Salient marketing template"
              src="/static/images/banner.png"
              className="relative z-20 -mb-36 aspect-[853/682] max-w-[853px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
            />
          </div>
        </div>
      </section>
    </>
  )
}