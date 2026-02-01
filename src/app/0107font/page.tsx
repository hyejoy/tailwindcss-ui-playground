export default function Page() {
  return (
    <>
      <h1 className="text-2xl text-amber-600">
        폰트 크기 조절 : test-size 입력
      </h1>
      <p className="text-xs">Lorem ipsum dolor sit amet.</p>
      <p className="text-lg">Lorem ipsum dolor sit amet.</p>
      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      <p className="text-[58px]">Lorem ipsum dolor sit amet.</p>

      <h1 className="text-2xl text-amber-600">폰트 두께 조절 </h1>
      <p className="font-light">Lorem ipsum dolor sit amet.</p>
      <p className="font-bold">Lorem ipsum dolor sit amet.</p>
      <p className="font-black">Lorem ipsum dolor sit amet.</p>

      <h1 className="text-2xl text-amber-600">줄 간격 </h1>
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

      <h1 className="text-2xl text-amber-600">폰트 컬러 조절</h1>
      <p className="text-indigo-800">Lorem ipsum dolor sit amet.</p>
      <p className="text-sky-900">Lorem ipsum dolor sit amet.</p>
      <p className="text-red-900">Lorem ipsum dolor sit amet.</p>
      <p className="text-[#4C79FF]">Lorem ipsum dolor sit amet.</p>

      <h1 className="text-2xl text-amber-600">폰트 opacity = color/opacity</h1>
      <p className="text-pink-500/35">Lorem ipsum dolor sit amet.</p>

      <h1 className="text-2xl text-amber-600">폰트 hover,focus, other state</h1>
      <h1 className="text-2xl text-amber-600">
        모든 유틸리티에 적용할 수 있음
      </h1>
      <p className="text-slate-400 hover:text-sky-200">
        Lorem ipsum dolor sit amet.
      </p>
    </>
  );
}
