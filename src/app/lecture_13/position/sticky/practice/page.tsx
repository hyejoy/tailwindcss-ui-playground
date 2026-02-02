import Image from 'next/image';

export default function page() {
  return (
    <>
      <header>
        <nav className="fixed flex w-full justify-between bg-gray-900 px-6 py-4 text-white">
          <div className="text-2xl font-bold">MySHop</div>
          <ul className="flex gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto flex max-w-4xl gap-x-4 bg-amber-200 px-4 pt-20 pb-8">
          <section className="grid w-3/5 max-w-2xl grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Image
                key={item}
                src="https://placehold.co/400x400.png?text=City"
                alt="City Image"
                className="rounded-lg object-cover shadow-md"
                width={400}
                height={400}
              />
            ))}
          </section>
          <aside className="ml-4 w-2/5">
            {/* <---------------------------------------------sticky */}
            <div className="sticky top-20 ml-1 rounded-4xl border-2 p-5">
              <h2 className="mb-4 text-xl font-bold">장바구니</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>상품 1</span>
                  <span>₩ 10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>상품 2</span>
                  <span>₩ 20,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-bold">
                  <span>총합계</span>
                  <span>₩ 30,000</span>
                </div>
              </div>
              <button
                className="mt-4 w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                type="button"
              >
                결제하기
              </button>
            </div>
          </aside>
        </main>
      </header>
    </>
  );
}
