/**
 * 17강 트랜지션 효과
 * duration-시간
 */
export default function page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-4">
        {/* 트랜지션 미적용 */}
        <button className="rounded bg-blue-500 px-4 py-2 text-5xl font-bold text-white hover:bg-blue-900">
          Hover me
        </button>
        {/* 트랜지션 적용 */}
        <button className="rounded bg-blue-500 px-4 py-2 text-5xl font-bold text-white transition duration-500 hover:bg-blue-900">
          Hover me
        </button>
      </div>
    </>
  );
}
