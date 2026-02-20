'use client';

import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';

export default function Page() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    /* 1. 최상위 부모에 dark 클래스를 직접 넣어줍니다. */
    <div
      className={clsx(
        dark ? 'dark' : '',
        'flex min-h-screen items-center justify-center bg-red-100'
      )}
    >
      <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring ring-gray-900/5 dark:bg-gray-800">
        <div>
          <span
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
            onClick={() => {
              setDark((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faPencil} /> Mode Change
          </span>
        </div>
        <h3 className="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white">
          Writes upside-down
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}
