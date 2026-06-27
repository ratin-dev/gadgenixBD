export default function Aurora() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div
          className="absolute top-[-250px] left-[-150px] w-[600px] h-[600px]
          rounded-full bg-blue-600/20 blur-[180px] animate-pulse"
        />

        <div
          className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px]
          rounded-full bg-violet-600/20 blur-[180px] animate-pulse"
        />

        <div
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px]
          rounded-full bg-cyan-500/20 blur-[140px]"
        />

      </div>
    </>
  );
}