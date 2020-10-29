import React, { useState, useEffect } from 'react';
import { say } from 'cowsay-browser';

import FakeTerminal from './FakeTerminal';
import { cowsayFortune } from 'utils/api';

export default function Fortune() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function applyFortune() {
      setMessage(await cowsayFortune());
      // This will spit out 80 columns + 15 lines of numbers to help with tweaking formatting
      // setMessage(
      //   say({
      //     text: Array(15)
      //       .fill()
      //       .map((i) => [...Array(10).keys()].join('').repeat(8) + '\n')
      //       .join(''),
      //     e: '??',
      //     n: true,
      //   })
      // );
    }
    applyFortune();
    document.title = '~gminteer/';
  }, []);

  return (
    <FakeTerminal
      message={
        message
          ? message
          : say({ text: 'Taking the auspices...', e: '--', n: true })
      }
    />
  );
}