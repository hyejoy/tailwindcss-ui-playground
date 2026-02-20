import Image from 'next/image';

export default function page() {
  return (
    <>
      <header className="fixed right-0 left-0 z-50 bg-gray-800 p-4 text-white">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">MyShop</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto max-w-2xl px-4 py-8 pt-20">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://placehold.co/400x400.png?text=City"
            alt="City Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Landscape"
            alt="Landscape Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Mountain"
            alt="Mountain Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=River"
            alt="River Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Forest"
            alt="Forest Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Ocean"
            alt="Ocean Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Desert"
            alt="Desert Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Waterfall"
            alt="Waterfall Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
          <Image
            src="https://placehold.co/400x400.png?text=Beach"
            alt="Beach Image"
            className="rounded-lg object-cover shadow-md"
            width={400}
            height={400}
          />
        </div>
      </main>
    </>
  );
}
