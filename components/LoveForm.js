import { useState, useCallback } from 'react';
import Image from 'next/image';

import twoHearts from '../public/images/two_hearts.png';
import message from '../public/images/message(front).png';

function calculateNamePercentage(name1, name2) {
  // Convert names to lowercase for case insensitivity
  name1 = name1.toLowerCase();
  name2 = name2.toLowerCase();

  // Count the number of common letters
  let commonLetters = 0;
  for (let i = 0; i < name1.length; i++) {
    if (name2.includes(name1[i])) {
      commonLetters++;
      // Avoid counting the same letter multiple times
      name2 = name2.replace(name1[i], '');
    }
  }

  // Calculate the percentage
  const percentage =
    (commonLetters / Math.max(name1.length, name2.length)) * 100;
  console.log('Percentage', percentage.toFixed(2));
}

function LoveForm() {
  const [name, setName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [error, setError] = useState('');

  const loversOrFriends = useCallback(() => {
    if (name.length <= 3 || crushName.length <= 3) {
      setError('names must be entered');
    } else {
      calculateNamePercentage(name, crushName);
      setError('');
    }
  }, [name, crushName]);

  return (
    <>
      <Image
        src={message}
        alt="hand love"
        className="w-40 rotate-12 mx-auto"
        priority
      />
      <section className="mt-8">
        <div className="flex flex-col items-center leading-[5rem] text-center">
          <div className="font-monofett text-4xl lg:text-[60px] whitespace-nowrap">
            not sure?
          </div>
          <div className="text-7xl lg:text-[120px] w-[90vw]">
            Take the love test
          </div>
        </div>
        <div className="grid gap-4 place-items-center justify-center text-lg lg:text-2xl mt-10">
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-3xl placeholder:text-center placeholder-white p-8 bg-transparent border border-white focus:outline-zinc-100"
          />
          <input
            type="text"
            placeholder="crush name"
            value={crushName}
            onChange={(e) => setCrushName(e.target.value)}
            className="rounded-3xl placeholder:text-center placeholder-white p-8 bg-transparent border border-white focus:outline-zinc-100"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Image
            src={twoHearts}
            alt="two hearts"
            onClick={loversOrFriends}
            className={`w-24 ${
              name && crushName.length >= 2
                ? 'opacity-100 cursor-pointer'
                : 'opacity-25'
            }`}
            priority
          />
        </div>
      </section>
    </>
  );
}

export default LoveForm;
