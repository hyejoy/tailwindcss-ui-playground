export default function Page() {
  return (
    <>
      <h1>Color Border</h1>
      <p className="bg-blue-400 text-white text-2xl p-4 mb-6">
        배경이 파란색 , 글자색 흰색, 폰트 사이즈 크게 p-4 는 1rem
      </p>
      <p className="border-2 border-blue-300 rounded-full p-4">
        파란색 border와 둥근 모서리를 가진 border border-2 : solid 2px
      </p>
    </>
  );
}
