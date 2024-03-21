/**
 * @file 首页的第一个模块
 * @author jianghaoran01
 */
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import { Video } from 'lucide-react'
import { lexend } from "@/app/fonts";

const MainPage = () => {

    return (
        <div className={`${lexend.className} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32`}>
            <h1 className='mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'>
                Accounting
                <br className='block sm:block lg:hidden'/>
                <span className='relative whitespace-nowrap text-blue-600'>
                    <span className='relative'>made simple</span>
                </span>
                <br/>
                for small businesses.
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>
                Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
            </p>
            <div className='mt-10 flex justify-center gap-x-6'>
                <Button>Get 6 months free</Button>
                <Button variant="outline">
                    <Video color="#2563eb" />
                    <span className='ml-3'>Watch video</span>
                </Button>
            </div>
            <div className='mt-36 lg:mt-44'>
                <p className='font-display text-base text-slate-900'>
                    Trusted by these six companies so far
                </p>
                <ul className='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'>
                    <li>
                        <ul className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'>
                            <li className='flex'>
                                <Image
                                    width={158}
                                    height={48}
                                    alt='Transistor'
                                    src='/static/images/transistor.svg'
                                    loading='lazy'
                                    decoding='async'
                                />
                            </li>
                            <li className='flex'>
                                <Image
                                    width={108}
                                    height={48}
                                    alt='Tuple'
                                    src='/static/images/tuple.svg'
                                    loading='lazy'
                                    decoding='async'
                                />
                            </li>
                            <li className='flex'>
                                <Image
                                    width={127}
                                    height={48}
                                    alt='Statickit'
                                    src='/static/images/statickit.svg'
                                    loading='lazy'
                                    decoding='async'
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'>
                            <li className='flex'>
                                <Image
                                    width={138}
                                    height={48}
                                    alt='Mirage'
                                    src='/static/images/mirage.svg'
                                    loading='lazy'
                                    decoding='async'
                                />
                            </li>
                            <li className='flex'>
                                <Image
                                    width={136}
                                    height={48}
                                    alt='Laravel'
                                    src='/static/images/laravel.svg'
                                    loading='lazy'
                                    decoding='async'
                                />
                            </li>
                            <li className='flex'>
                                <Image
                                    width={147}
                                    height={48}
                                    alt='Statamic'
                                    src='/static/images/statamic.svg'
                                    loading='lazy'
                                    decoding='async'
                                />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainPage;
export { MainPage };