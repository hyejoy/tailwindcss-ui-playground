import Image from 'next/image';

export default function Page() {
  return (
    <>
      <main className="z-50 container mx-auto max-w-lg p-4">
        <div className="grid grid-cols-4 gap-4">
          <Image
            src="https://placehold.co/400x400.png?text=City"
            alt="City Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Landscape"
            alt="Landscape Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Mountain"
            alt="Mountain Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=River"
            alt="River Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Forest"
            alt="Forest Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Ocean"
            alt="Ocean Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Desert"
            alt="Desert Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Waterfall"
            alt="Waterfall Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Beach"
            alt="Beach Image"
            className="h-full w-full rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
        </div>
      </main>
    </>
  );
}
