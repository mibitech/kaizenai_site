import { useEffect, useState } from "react";

const phrases = [
  "Transforme sua ideia em um produto de IA",
  "Agentes inteligentes para o seu negócio",
  "Do dado bruto ao produto SaaS com IA",
];

export function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const speed = deleting ? 35 : 65;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDeleting(false); setI((i + 1) % phrases.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] -mb-1 bg-[var(--neon-blue)] animate-blink" />
    </span>
  );
}
