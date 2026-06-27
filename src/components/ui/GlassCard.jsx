export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      rounded-[30px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      shadow-2xl
      ${className}
      `}
    >
      {children}
    </div>
  );
}