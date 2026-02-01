export default function Page() {
  return (
    <>
      {/* w-32 : 가로 32 */}
      {/* h-32 : 세로 32 */}
      {/* space-y-3 : 자식들 요소 세로로 요소 사이의 간격 생성 */}
      <div className="space-y-3">
        <div className="w-32 h-32 bg-blue-200"></div>
        <div className="w-32 h-32 bg-blue-500"></div>
        <div className="w-32 h-32 bg-blue-800"></div>
      </div>
      {/* space-x-3 : 가로로 요소 사이의 간격 생성  */}
      <div className="flex space-x-3 mt-4">
        <div className="w-32 h-32 bg-blue-200"></div>
        <div className="w-32 h-32 bg-blue-500"></div>
        <div className="w-32 h-32 bg-blue-800"></div>
      </div>
    </>
  );
}
