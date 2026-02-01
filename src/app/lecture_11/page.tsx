export default function Page() {
  return (
    // container은 뷰포트에 맞춰 max-width를 자동으로 설정
    // mx-auto : 마진 좌우 auto
    // max-w-3xl : 최대 가로넓이 768px
    // space-y-4 줄간격 상하 1rem
    <main className="container mx-auto max-w-3xl p-4">
      <section
        className="space-y-4 p-4
      bg-amber-100 rounded-3xl border-2  border-amber-700 w-140 h-auto"
      >
        <h1 className="text-2xl mb-2">폰트 크기 조절 </h1>
        <p className="text-xs">Lorem ipsum dolor sit amet.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet.</p>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        <p className="text-[38px]">Lorem ipsum dolor sit amet.</p>
      </section>

      <section>
        <h1 className="text-2xl">폰트 두께 조절 </h1>
        <p className="font-light">Lorem ipsum dolor sit amet.</p>
        <p className="font-bold">Lorem ipsum dolor sit amet.</p>
        <p className="font-black">Lorem ipsum dolor sit amet.</p>
      </section>

      <section>
        <h1 className="text-2xl">줄 간격 </h1>
        <p className="leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veniam
          est aliquid culpa ipsam nobis. Quaerat assumenda sequi a vitae. Ut ad
          deleniti amet ratione optio non iusto vero sequi?
        </p>
        <p className="leading-loose">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veniam
          est aliquid culpa ipsam nobis. Quaerat assumenda sequi a vitae. Ut ad
          deleniti amet ratione optio non iusto vero sequi?
        </p>
        <p className="leading-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veniam
          est aliquid culpa ipsam nobis. Quaerat assumenda sequi a vitae. Ut ad
          deleniti amet ratione optio non iusto vero sequi?
        </p>
      </section>

      <section>
        <h1 className="text-2xl">폰트 컬러 조절</h1>
        <p className="text-indigo-800">Lorem ipsum dolor sit amet.</p>
        <p className="text-sky-900">Lorem ipsum dolor sit amet.</p>
        <p className="text-red-900">Lorem ipsum dolor sit amet.</p>
        <p className="text-[#4C79FF]">Lorem ipsum dolor sit amet.</p>

        <h1 className="text-2xl">폰트 hover,focus, other state</h1>
        <h1 className="text-2xl">모든 유틸리티에 적용할 수 있음</h1>
        <p className="text-slate-400 hover:text-sky-200">
          Lorem ipsum dolor sit amet.
        </p>
      </section>
    </main>
  );
}
