import { useState } from 'react';
import useSound from 'use-sound';

import { FaPlay, FaPause } from 'react-icons/fa';

export default function SoundPlay() {
  const [isPlaying, setIsPlaying] = useState(false);

  const soundUrl = '/sounds/sure_thing(spedup).mp3';

  const [play, { pause }] = useSound(soundUrl, {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={togglePlay}
      className="flex items-center justify-center text-lg backdrop-blur-sm bg-slate-50/40 text-center rounded-full p-4 fixed z-50 top-2 right-6 cursor-pointer"
    >
      {!isPlaying ? <FaPlay /> : <FaPause />}
    </div>
  );
}
