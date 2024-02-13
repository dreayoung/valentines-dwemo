import { Lilita_One, Monofett } from 'next/font/google';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import ImageResult from './ImageResult';
import Image from 'next/image';

import loadingG from '../public/images/loadingG.gif';
import hand from '../public/images/hand_with_love.png';
import twoHearts from '../public/images/two_hearts.png';

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

function Results({
  seconds,
  setSeconds,
  openResults,
  setOpenResults,
  name,
  setName,
  crushName,
  setCrushName,
  results,
}) {
  function resetForm() {
    setOpenResults(!openResults);
    setName('');
    setCrushName('');
    setSeconds(false);
  }

  return (
    <Dialog open={openResults}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <div
              className={`${lilita.className} ${monoFett.variable} text-2xl flex flex-col items-center justify-center text-center py-14 px-4 gap-8 capitalize text-[#ff88c5]`}
            >
              <div className="flex items-center justify-center gap-2 capitalize">
                {name}
                <Image src={twoHearts} alt="loading" className="w-8" />
                {crushName}
              </div>
              {seconds ? (
                <ImageResult results={results} />
              ) : (
                <>
                  <Image
                    src={hand}
                    alt="loading"
                    className="w-40 animate-pulse"
                  />
                  <span>Loading . . . </span>
                </>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="ghost" onClick={resetForm}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Results;
