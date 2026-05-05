export default function Placeholder({ text, className = "aspect-[4/5]" }) {
  return (
    <div className={`w-full bg-stone flex items-center justify-center p-8 text-center text-ink/70 font-body text-sm ${className}`}>
      {text}
    </div>
  );
}
