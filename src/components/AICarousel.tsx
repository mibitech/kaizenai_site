import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import aiNeural from "@/assets/ai-neural.jpg";
import aiData from "@/assets/ai-data.jpg";
import aiAgent from "@/assets/ai-agent.jpg";
import aiChip from "@/assets/ai-chip.jpg";

export const heroSlides = [
  { src: aiNeural, phrase: "Transforme sua ideia em um produto de IA" },
  { src: aiAgent, phrase: "Agentes inteligentes para o seu negócio" },
  { src: aiData, phrase: "Do dado bruto ao produto SaaS com IA" },
  { src: aiChip, phrase: "Tecnologia de ponta ao seu alcance" },
];

type EmblaApi = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;

type Props = {
  asBackground?: boolean;
  onSlideChange?: (index: number) => void;
  onApi?: (api: EmblaApi | undefined) => void;
};

export function AICarousel({ asBackground = false, onSlideChange, onApi }: Props) {
  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: false, stopOnMouseEnter: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [autoplay.current]);

  useEffect(() => {
    onApi?.(emblaApi);
  }, [emblaApi, onApi]);

  useEffect(() => {
    if (!emblaApi || !onSlideChange) return;
    const handler = () => onSlideChange(emblaApi.selectedScrollSnap());
    handler();
    emblaApi.on("select", handler);
    return () => {
      emblaApi.off("select", handler);
    };
  }, [emblaApi, onSlideChange]);


  if (asBackground) {
    return (
      <div className="absolute inset-0 h-full w-full overflow-hidden" ref={emblaRef} aria-hidden>
        <div className="flex h-full">
          {heroSlides.map((s, i) => (
            <div key={i} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={s.src}
                alt=""
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto mt-14 w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl glow-border" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <img src={s.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
