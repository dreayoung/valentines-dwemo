import Image from 'next/image';

import mail from '../public/images/mail.png';

function Footer() {
  return (
    <section className="mt-40 text-[#FF88C5] rounded-t-full lg:w-[80vw] mx-auto backdrop-blur-sm bg-slate-50/40 lg:h-96 relative p-12 lg:p-24">
      <Image
        src={mail}
        alt="hand love"
        className="w-28 absolute -translate-x-1/2 left-1/2 -top-28 lg:-top-20"
      />
      <div className="flex flex-col items-center leading-[5rem]">
        <div className="font-monofett text-3xl lg:text-[60px]">dwemo</div>
        <div className="text-4xl lg:text-[120px]">createdbydwe</div>
      </div>
    </section>
  );
}

export default Footer;
