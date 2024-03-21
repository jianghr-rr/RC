/* eslint-disable react/display-name */
/**
 * @file 统一管理首页的路由锚信息
 * @author jianghaoran
 */
import React, { useContext, PropsWithChildren } from 'react';
import { cn } from "@/lib/utils"
import Link from 'next/link'

const HomePageHrefContext = React.createContext<{}>({});

interface IContainer {
  className?: string;
  children?: React.ReactNode;
}

interface IProps {
  text?: string;
  renderText?: (text?: string) => React.ReactNode;
}

// 包裹组件 用于包裹锚点的组件
const HomePageHref = (
  { children }: PropsWithChildren<{}>
): React.ReactNode => {

  return (
    <HomePageHrefContext.Provider value={{}}>
      {children}
    </HomePageHrefContext.Provider>
  );
};

// 渲染可以锚定的组件
const RenderHrefComponent = (id:string) => {
  return (props: PropsWithChildren<IContainer>) => {
    const { children, className } = props;
    return (
      <section id={id} className={cn('relative overflow-hidden pb-28 pt-20 sm:py-32', className)}>
        {children}
      </section>
    );
  }
}

// 渲染锚点
const RenderHref = (id:string, defaultText: string) => {
  return (props: IProps) => {
    const { text, renderText } = props;
    if (renderText) {
        return renderText(text);
    }
    return <Link href={`/#${id}`}>{text || defaultText}</Link>
  }
}


HomePageHref.Features = RenderHrefComponent('features');
HomePageHref.FeaturesHref = RenderHref('features', 'Features');

export default HomePageHref;