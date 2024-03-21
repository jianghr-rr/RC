/**
 * @file SecondaryFeatures
 */
import {LineChart} from 'lucide-react'

const SecondaryFeatures = () => {
  return (
    <section id='secondary-features' className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Simplify everyday business tasks.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {`Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.`}
          </p>
        </div>

        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
          <>
            <div className="mx-auto max-w-2xl">
              <div className="w-9 rounded-lg bg-blue-600"><LineChart /></div>
              <h3 className="mt-6 text-sm font-medium text-blue-600">Reporting</h3>
              <p className="mt-2 font-display text-xl text-slate-900">Stay on top of things with always up-to-date reporting features.</p>
              <p className="mt-4 text-sm text-slate-600">We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.</p>
            </div>
          </>
        </div>

        <div className="hidden lg:mt-20 lg:block"></div>

      </div>
    </section>
  )
}

export default SecondaryFeatures;
export {SecondaryFeatures}