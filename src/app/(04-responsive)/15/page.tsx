/**
 * @returns 15_반응형 디자인 기초
 * 미디어 쿼리 사용하지 않고, 정의된 브레이크포인트 유틸리티를 통해 사용
 *
 * 1. 화면 사이즈가 작을때 전체 배경색 파란색
 * 화면 768px 이상일때 배경색 빨간색
 * 화면 1024px 이상일땐 녹색 이라는 요구사항을 반영
 *
 * 2. sm사이즈 배경색 파란색, md~xl 배경색 빨간색, 2xl 녹색
 *
 * 📒 모바일 우선 접근 방식
 * - Tailwind CSS는 모바일 우선 접근 방식 사용
 * - 브레이크포인트가 없는 경우 모바일 사이즈라고 인식하면 됨
 * - flex flex-col md:flex-row
 *   ---모바일---- ---- PC----
 */

export default function Page() {
  return (
    // 1. <div className="min-h-screen bg-blue-300 md:bg-red-300 lg:bg-green-300">
    <div className="min-h-screen bg-blue-300 md:max-2xl:bg-red-300 2xl:bg-green-300">
      <h1>Page Component</h1>
    </div>
  );
}
