import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

import twoHearts from '../public/images/two_hearts.png';
import message from '../public/images/message(front).png';

import Results from './Results';

function LoveForm() {
  const [name, setName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [error, setError] = useState('');

  const [openResults, setOpenResults] = useState(false);

  const [results, setResults] = useState('');
  const [seconds, setSeconds] = useState(false);

  function countDown() {
    setTimeout(() => {
      setSeconds(true);
    }, 5000);
    // const interval = setInterval(() => {
    //   setSeconds((seconds) => seconds - 1);
    // }, 1000);

    // return () => clearInterval(interval);
  }

  const loversOrFriends = useCallback(() => {
    if (name.length <= 1 || crushName.length <= 1) {
      setError('names must be entered');
    } else {
      calculateNamePercentage(name, crushName);
      setError('');
      setOpenResults(true);
      countDown();
    }
  }, [name, crushName]);

  function calculateNamePercentage(name1, name2) {
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    let commonLetters = 0;
    for (let i = 0; i < name1.length; i++) {
      if (name2.includes(name1[i])) {
        commonLetters++;

        name2 = name2.replace(name1[i], '');
      }
    }

    const percentage =
      (commonLetters / Math.max(name1.length, name2.length)) * 100;
    setResults(percentage.toFixed(0));
  }

  return (
    <>
      <Image
        src={message}
        alt="hand love"
        className="w-28 md:w-40 rotate-12 mx-auto"
        priority
      />
      <section className="mt-8">
        <div className="flex flex-col items-center leading-[5rem] text-center">
          <div className="font-monofett text-4xl lg:text-[60px] whitespace-nowrap">
            not sure?
          </div>
          <div className="text-7xl lg:text-[120px] w-[90vw] pb-3">
            Take the love test
          </div>
          <span className="text-xs font-mono">
            enter you and your crush&apos;s name, then press the heart to know
            if they are THE ONE for you! good luck.
          </span>
        </div>
        <div className="grid gap-4 place-items-center justify-center text-lg lg:text-2xl mt-6">
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
          <Results
            seconds={seconds}
            setSeconds={setSeconds}
            openResults={openResults}
            setOpenResults={setOpenResults}
            name={name}
            setName={setName}
            setCrushName={setCrushName}
            crushName={crushName}
            results={results}
          />
        </div>
      </section>
    </>
  );
}

export default LoveForm;
