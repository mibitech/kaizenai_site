import logo from "@/assets/kaizenai-logo.png";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Kaizenai logo"
      width={64}
      height={64}
      className={`${className} object-contain drop-shadow-[0_0_12px_oklch(0.7_0.2_245/0.45)]`}
    />
  );
}
