import {useMemo, useState} from 'react'
import HomePageHref from "@/components/homepage/page-href"
import Image from 'next/image'

export interface IFeature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const FeaturePage = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const features = useMemo<Array<IFeature>>(
    () => [
      {
        id: 1,
        title: 'Payroll',
        description: `Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.`,
        image: '/static/images/payroll.webp',
      },
      {
        id: 2,
        title: 'Claim expenses',
        description: `All of your receipts organized into one place, as long as you don't mind typing in the data by hand.`,
        image: '/static/images/expenses.webp',
      },
      {
        id: 3,
        title: 'VAT handling',
        description: `We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.`,
        image: '/static/images/vat-returns.webp',
      },
      {
        id: 4,
        title: 'Reporting',
        description: `Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.`,
        image: '/static/images/reporting.webp',
      },
  ], []);

  return (
    <HomePageHref.Features className="bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren t that picky about minor details like tax compliance.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <div className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {
                features?.map(item => (
                  <div
                    key={item.id}
                    className={
                      `group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6
                       ${activeId === item.id ? ' bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10' : ' hover:bg-white/10 lg:hover:bg-white/5'}
                      `
                    }
                  >
                    <h3>
                      <div
                        className={`
                          font-display text-lg ui-not-focus-visible:outline-none cursor-pointer
                          ${activeId === item.id ? ' text-blue-600 lg:text-white' : ' text-blue-100 hover:text-white lg:text-white'}
                        `}
                        onClick={() => setActiveId(item.id)}
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {item.title}
                      </div>
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-white">
                      {item.description}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="lg:col-span-7">
            
          {
            features?.map(item => (
              <div key={item.id} className={item.id === activeId ? 'block' : 'hidden'}>
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {item.description}
                  </p>
                </div>
                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <Image
                    width={2174}
                    height={1464}
                    alt={item.title}
                    src={item.image}
                    loading='lazy'
                    decoding='async'
                  />
                </div>
              </div>
            ))
            }
            {/* <div>
              <div className="relative sm:px-6 lg:hidden">
                <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  Keep track of everyone s salaries and whether or not they ve been paid. Direct deposit not supported.
                </p>
              </div>
              <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                <Image
                  width={2174}
                  height={1464}
                  alt='Payroll'
                  src='/static/images/payroll.webp'
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </HomePageHref.Features>
  )
}

export default FeaturePage;
export {FeaturePage};
