import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Lilita_One, Monofett } from 'next/font/google';

import handLove from '../public/images/hand_with_love.png';
import heart from '../public/images/hearlock1.svg';
import loveHeart from '../public/images/loveeee.svg';
import hotairballoon from '../public/images/airballoon.png';

import Footer from '@/components/Footer';
import LoveForm from '@/components/LoveForm';
import SoundPlay from '@/components/SoundPlay';

const lilita = Lilita_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});
const monoFett = Monofett({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-monofett',
});

export default function Home() {
  return (
    <main
      className={`text-8xl lg:text-[120px] text-white uppercase ${lilita.className} ${monoFett.variable}`}
    >
      <SoundPlay />
      <div className="flex-col gap-10 p-24">
        <Image
          src={loveHeart}
          alt="love hearts"
          className="w-44 lg:w-96 absolute left-8 -top-6 -rotate-45 opacity-10"
        />
        <Image
          src={heart}
          width={250}
          height={250}
          alt="hand love"
          className="w-36 lg:w-44 mx-auto mb-10"
          priority
        />
        <div className="flex flex-col items-center text-center lg:leading-[5rem]">
          <div className="font-monofett text-5xl lg:text-[60px] whitespace-nowrap">
            My heart
          </div>
          <div className="text-7xl lg:text-[120px] w-[90vw]">belongs to...</div>
        </div>
        <section className="my-20 lg:my-40 flex flex-col lg:flex-row items-center justify-center gap-12">
          <Image
            src={hotairballoon}
            alt="hot air balloon"
            className="w-[30rem] -rotate-12"
            priority
          />
          <div className="text-7xl lg:text-8xl">
            <div className="">You?</div>
            <div className=" pl-20">Him?</div>
            <div className="">Her?</div>
          </div>
        </section>
        <LoveForm />
      </div>
      <Footer />
    </main>
  );
}
