import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function page() {
  return (
    <>
      <main className="container flex min-h-screen flex-col items-center justify-center gap-y-4 p-10">
        <button
          type="button"
          className="flex items-center gap-x-3 rounded bg-indigo-500 p-5 text-3xl text-white"
          disabled
        >
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          Processing...
        </button>
        <span className="h-12 w-12 animate-ping rounded-full bg-sky-300"></span>
        <div className="h-10 w-full animate-pulse rounded-lg bg-gray-300"></div>
        <span className="h-12 w-12 animate-bounce rounded-full bg-sky-300"></span>
      </main>
    </>
  );
}
