"use client"
import PageHeader from "@/components/homepage/page-header"
import HomePageHref from "@/components/homepage/page-href"
import MainPage from "@/components/homepage/main-page"
import FeaturePage from "@/components/homepage/feature-page"

export default function IndexPage() {

  return (
    <HomePageHref>
      <PageHeader />
      <main>
        <MainPage />
        <FeaturePage />
      </main>
    </HomePageHref>
  )
}