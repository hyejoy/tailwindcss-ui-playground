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
      <main className="container mx-auto mb-40 flex max-w-5xl gap-x-4 px-4 pt-24 pb-8">
        <section className="w-full md:w-3/5">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <img
              src="https://placehold.co/400x400.png?text=City"
              alt="City Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Landscape"
              alt="Landscape Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Mountain"
              alt="Mountain Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=River"
              alt="River Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Forest"
              alt="Forest Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Ocean"
              alt="Ocean Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Desert"
              alt="Desert Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Waterfall"
              alt="Waterfall Image"
              className="h-full w-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Beach"
              alt="Beach Image"
              className="h-full w-full rounded-lg shadow-md"
            />
          </div>
        </section>
        <aside className="hidden w-2/5 md:block">
          <div className="sticky top-16 rounded-lg border-2 border-gray-800 p-6">
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
            <button className="mt-4 w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              결제하기
            </button>
          </div>
        </aside>
      </main>
      <div className="fixed right-0 bottom-0 left-0 border-t-2 border-gray-800 bg-white p-4 md:hidden">
        <button className="mt-4 w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          결제하기
        </button>
      </div>
    </>
  );
}
