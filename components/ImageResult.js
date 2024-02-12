import Image from 'next/image';
import gift from '../public/images/gift.png';
import brokenheart from '../public/images/broken_heart.png';
import ring from '../public/images/box_with_ring(angle).png';
import coffee from '../public/images/coffee.png';
import arrow from '../public/images/bow_with_arrow.png';

function ImageResult({ results }) {
  return (
    <div>
      {results >= 90 ? (
        <div className="grid gap-4 place-items-center">
          <Image src={ring} className="w-40" alt="love meter" />
          <div className="pt-4 text-4xl">{results}%</div>
          <div>What you waiting for?</div>
        </div>
      ) : results >= 70 ? (
        <div className="grid gap-4 place-items-center">
          <Image src={arrow} className="w-40" alt="love meter" />
          <div className="pt-4 text-4xl">{results}%</div>
          <div>Thats cute</div>
        </div>
      ) : results >= 50 ? (
        <div className="grid gap-4 place-items-center">
          <Image src={coffee} className="w-40" alt="love meter" />
          <div className="pt-4 text-4xl">{results}%</div>
          <div>Id take a sip on that</div>
        </div>
      ) : (
        <div className="grid gap-4 place-items-center">
          <Image src={brokenheart} className="w-40" alt="love meter" />
          <div className="pt-4 text-4xl">{results}%</div>
          <div>Not this one gang</div>
        </div>
      )}
    </div>
  );
}

export default ImageResult;
