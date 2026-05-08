import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import aiNeural from "@/assets/ai-neural.jpg";
import aiData from "@/assets/ai-data.jpg";
import aiAgent from "@/assets/ai-agent.jpg";
import aiChip from "@/assets/ai-chip.jpg";

const slides = [
  { src: aiNeural, title: "Redes Neurais", desc: "Arquiteturas que aprendem com seus dados." },
  { src: aiAgent, title: "Agentes de IA", desc: "Assistentes autônomos integrados ao seu negócio." },
  { src: aiData, title: "Dados em Tempo Real", desc: "Pipelines e analytics que alimentam decisões." },
  { src: aiChip, title: "Tecnologia de Ponta", desc: "Infraestrutura otimizada para inferência em escala." },
];

export function AICarousel() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [autoplay.current]);

  // ensure autoplay restarts on mount
  useEffect(() => {
    autoplay.current?.play?.();
  }, []);

  return (
    <div className="relative mx-auto mt-14 w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl glow-border" ref={emblaRef}>
        <div className="flex">
          {slides.map((s) => (
            <div key={s.title} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={640}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-left">
                  <h3 className="font-display text-xl font-bold md:text-3xl">{s.title}</h3>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground md:text-base">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
