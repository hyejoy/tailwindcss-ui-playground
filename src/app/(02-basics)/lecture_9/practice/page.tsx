export default function page() {
  return (
    <>
      <article className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">타이포그래피 스타일링 예시</h1>
        <p className="text-lg leading-relaxed mb-6">
          Tailwind CSS를 사용하면 간단하게 텍스트의 스타일을 지정할 수 있습니다.
          폰트 크기, 폰트 두께, 텍스트 정렬, 라인 높이 등을 유틸리티 클래스로
          지정하여 간결하고 유지 관리가 쉬운 스타일링을 할 수 있습니다.
        </p>
        <p className="text-lg font-bold text-blue-500">
          예시 블로그 포스트 내용입니다.
        </p>
      </article>

      <hr />
      <article className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2.5">
          타이포그래피 스타일링 예시
        </h1>
        <p className="leading-relaxed font-lg mb-1.5">
          Tailwind CSS를 사용하면 간단하게 텍스트의 스타일을 지정할 수 있습니다.
          폰트 크기, 폰트 두께, 텍스트 정렬, 라인 높이 등을 유틸리티 클래스로
          지정하여 간결하고 유지 관리가 쉬운 스타일링을 할 수 있습니다.
        </p>
        <p className="font-bold text-blue-500 text-lg">
          예시 블로그 포스트 내용입니다.
        </p>
      </article>
    </>
  );
}
