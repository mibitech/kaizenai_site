import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import aiNeural from "@/assets/ai-neural.jpg";
import aiData from "@/assets/ai-data.jpg";
import aiAgent from "@/assets/ai-agent.jpg";
import aiChip from "@/assets/ai-chip.jpg";

const slides = [aiNeural, aiAgent, aiData, aiChip];

export function AICarousel({ asBackground = false }: { asBackground?: boolean }) {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [autoplay.current]);

  if (asBackground) {
    return (
      <div className="absolute inset-0 h-full w-full overflow-hidden" ref={emblaRef} aria-hidden>
        <div className="flex h-full">
          {slides.map((src, i) => (
            <div key={i} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={src}
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
          {slides.map((src, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
