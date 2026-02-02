export default function Page() {
  return (
    <>
      <header className="mb-6 rounded-lg bg-gray-100 p-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">MyWebsite</div>

          <ul className="flex gap-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>

          <div>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
              type="button"
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      <hr />
      <div>내가 먼저 만들어본 코드</div>
      <header>
        <nav className="flex h-25 w-dvw bg-gray-100">
          <section className="flex w-[220px] items-center pl-6 text-2xl font-bold">
            My website
          </section>
          <section className="container flex items-center justify-center gap-4">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
          </section>
          <section className="flex w-[140px] items-center justify-center">
            <button className="w-auto rounded-md bg-blue-500 px-4 py-2 text-white">
              Login
            </button>
          </section>
        </nav>
      </header>

      <div>선생님이 진행한 코드</div>
      <header>
        <nav className="flex items-center justify-between bg-gray-100 p-6">
          <div className="text-2xl font-bold">GYMCODING</div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a className="text-gray-700 hover:text-indigo-400" href="#">
                  HOME
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-indigo-400" href="#">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-indigo-400" href="#">
                  SERVICES
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-indigo-400" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
