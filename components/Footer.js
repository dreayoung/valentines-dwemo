import Link from 'next/link';
import Image from 'next/image';

import mail from '../public/images/mail.png';

function Footer() {
  return (
    <section className="mt-40 text-[#FF88C5] rounded-t-full md:w-[70vw] mx-auto backdrop-blur-sm bg-slate-50/40 relative p-12 lg:p-40">
      <Image
        src={mail}
        alt="hand love"
        className="w-20 lg:w-28 absolute -translate-x-1/2 left-1/2 -top-16 lg:-top-20"
        priority
      />
      <div className="flex flex-col items-center">
        <div className="font-monofett text-3xl lg:text-[60px]">dwemo</div>
        <Link href="https://createdbydwe.tech/" target="_blank">
          <div className="text-4xl lg:text-[85px] lg:pt-10">createdbydwe</div>
        </Link>
      </div>
    </section>
  );
}

export default Footer;
