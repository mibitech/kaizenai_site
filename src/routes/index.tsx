import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Bot, Database, BrainCircuit, Workflow, Plug,
  Lightbulb, Cog, Rocket, Sparkles, ChevronRight, Linkedin, Github, Instagram,
  LineChart, Layers, ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { WhatsAppBubble, WHATSAPP } from "@/components/WhatsAppBubble";
import { Clients } from "@/components/Clients";
import { AICarousel, heroSlides } from "@/components/AICarousel";
import { Logo } from "@/components/Logo";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaizenai — Inteligência que transforma sua ideia em produto de IA" },
      {
        name: "description",
        content:
          "Kaizenai constrói agentes de IA, produtos SaaS e software sob demanda com Engenharia de Dados e Ciência de Dados. Você tem a ideia. Nós entregamos o produto.",
      },
      { property: "og:title", content: "Kaizenai — Inteligência que transforma" },
      { property: "og:description", content: "Agentes de IA, SaaS sob demanda e Engenharia de Dados para o seu negócio." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const solutions = [
  { icon: Bot, title: "Agentes de IA", desc: "Agentes autônomos que executam tarefas complexas, se integram a sistemas e automatizam processos ponta a ponta." },
  { icon: Layers, title: "Produtos SaaS sob Demanda", desc: "Plataformas SaaS completas com arquitetura moderna, prontas para escalar do dia 1." },
  { icon: Database, title: "Engenharia de Dados", desc: "Pipelines, ETL, data lakes, streaming em tempo real e qualidade de dados para alimentar sua IA." },
  { icon: BrainCircuit, title: "Ciência de Dados", desc: "Modelos preditivos, análise estatística e reconhecimento de padrões que tornam seus agentes mais inteligentes." },
  { icon: Workflow, title: "Automação de Processos", desc: "Automação inteligente que substitui fluxos manuais por soluções rápidas, escaláveis e auditáveis." },
  { icon: Plug, title: "Integração & APIs", desc: "Integração fluida entre sistemas, APIs, bancos de dados e serviços externos." },
];

const steps = [
  { icon: Lightbulb, title: "Sua Ideia", desc: "Compartilhe seu desafio ou visão." },
  { icon: Sparkles, title: "Diagnóstico", desc: "Mapeamos dados, processos e metas." },
  { icon: Database, title: "Engenharia de Dados", desc: "Estruturamos dados reais e limpos." },
  { icon: Bot, title: "Agentes de IA", desc: "Construímos agentes inteligentes." },
  { icon: Rocket, title: "Produto Entregue", desc: "Seu SaaS no ar, escalável e evoluindo." },
];

const techs = [
  "Python", "TypeScript", "Node.js", "React", "SQL", "PostgreSQL", "Redis",
  "Docker", "Supabase", "OpenAI", "LangChain", "N8N", "AWS", "GCP",
  "REST APIs", "LLMs", "RAG", "Vector DBs", "Databricks",
];

function Index() {
  useReveal();

  const [activeStep, setActiveStep] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveStep((s) => (s + 1) % steps.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <WhatsAppBubble />

      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Carousel background */}
        <div className="absolute inset-0 -z-20">
          <AICarousel asBackground onSlideChange={setActiveSlide} />
        </div>
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 -z-10 bg-background/75 backdrop-blur-[2px]" aria-hidden />
        {/* Neural network kept on top of the carousel */}
        <div className="absolute inset-0 -z-10 opacity-60">
          <NeuralNetwork />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-[600px]" style={{ background: "var(--gradient-glow)" }} aria-hidden />


        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="animate-fade-in mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="h-2 w-2 rounded-full bg-[var(--neon-green)] shadow-[0_0_10px_var(--neon-green)]" />
            <span className="text-muted-foreground">IA · Dados · Engenharia · Resultado real</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl md:text-7xl min-h-[3.5em] flex items-center justify-center">
            <span key={activeSlide} className="text-gradient animate-fade-in">
              {heroSlides[activeSlide]?.phrase}
            </span>
          </h1>


          <p className="animate-fade-up mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Você tem a ideia. Nós construímos o produto. Com{" "}
            <span className="text-foreground">Data Engineering</span>,{" "}
            <span className="text-foreground">Data Science</span> e{" "}
            <span className="text-foreground">Agentes de IA</span>, entregamos soluções que realmente funcionam.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.15s" }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] px-7 py-3.5 font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Quero meu produto com IA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold hover-glow"
            >
              Conheça nossas soluções
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>


          {/* floating icons */}
          <div className="pointer-events-none absolute left-[8%] top-[40%] hidden md:block">
            <div className="animate-float glass rounded-2xl p-3 shadow-[var(--shadow-glow)]"><Bot className="h-6 w-6 text-[var(--neon-blue)]" /></div>
          </div>
          <div className="pointer-events-none absolute right-[10%] top-[35%] hidden md:block">
            <div className="animate-float glass rounded-2xl p-3 shadow-[var(--shadow-glow-violet)]" style={{ animationDelay: "1.2s" }}><BrainCircuit className="h-6 w-6 text-[var(--neon-violet)]" /></div>
          </div>
          <div className="pointer-events-none absolute right-[18%] top-[65%] hidden md:block">
            <div className="animate-float glass rounded-2xl p-3 shadow-[var(--shadow-glow-green)]" style={{ animationDelay: "0.6s" }}><Database className="h-6 w-6 text-[var(--neon-green)]" /></div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Lightbulb, emoji: "💡", title: "Você traz a ideia", desc: "Ouvimos, entendemos e mapeamos o problema do seu negócio." },
              { icon: Cog, emoji: "⚙️", title: "Nós construímos", desc: "Engenharia de Dados + Agentes de IA + Desenvolvimento Full-Stack." },
              { icon: Rocket, emoji: "🚀", title: "Você escala", desc: "Produto SaaS confiável, pronto para crescer com seu negócio." },
            ].map((c, i) => (
              <div key={i} className="reveal glow-border hover-glow rounded-2xl glass p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="mb-4 text-3xl">{c.emoji}</div>
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solucoes" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">Nossas Soluções</p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Tudo que sua empresa precisa <span className="text-gradient">para operar com IA</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <div key={s.title} className="reveal glow-border group rounded-2xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-violet)]/20 ring-1 ring-border">
                  <s.icon className="h-6 w-6 text-[var(--neon-blue)] transition-colors group-hover:text-[var(--neon-violet)]" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-violet)]">Como Funciona</p>
            <h2 className="text-3xl font-bold md:text-5xl">Da ideia ao produto, <span className="text-gradient">em 5 passos</span></h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block" />
            <div
              className="absolute left-0 top-7 hidden h-px bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-violet)] to-[var(--neon-green)] shadow-[0_0_12px_var(--neon-violet)] transition-all duration-700 ease-out md:block"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
            <ol className="grid gap-10 md:grid-cols-5">
              {steps.map((s, i) => {
                const isActive = i === activeStep;
                const isDone = i < activeStep;
                return (
                  <li
                    key={s.title}
                    className="reveal relative text-center"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div
                      className={`relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background ring-2 transition-all duration-500 ${
                        isActive
                          ? "scale-110 ring-[var(--neon-violet)] shadow-[0_0_30px_var(--neon-violet)]"
                          : isDone
                            ? "ring-[var(--neon-blue)] shadow-[var(--shadow-glow)]"
                            : "ring-border"
                      }`}
                    >
                      {isActive && (
                        <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[var(--neon-violet)] [animation:pulse-ring_1.6s_ease-out_infinite]" />
                      )}
                      <s.icon
                        className={`h-6 w-6 transition-colors duration-500 ${
                          isActive
                            ? "text-[var(--neon-violet)]"
                            : isDone
                              ? "text-[var(--neon-blue)]"
                              : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div
                      className={`mt-2 text-xs font-semibold transition-colors duration-500 ${
                        isActive ? "text-[var(--neon-violet)]" : "text-muted-foreground"
                      }`}
                    >
                      PASSO {i + 1}
                    </div>
                    <h3
                      className={`mt-2 font-semibold transition-colors duration-500 ${
                        isActive ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* DATA + DS */}
      <section className="relative py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-green)]">Fundação</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              IA que funciona começa com <span className="text-gradient">dados de qualidade</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Agentes de IA são tão bons quanto os dados que consomem. Por isso, antes de construir qualquer agente, estruturamos sua base de dados com engenharia de dados e ciência de dados. Isso elimina alucinações, aumenta a precisão e garante que seu produto de IA entregue resultados reais.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { icon: ShieldCheck, t: "Reduz alucinações em até 90%" },
                { icon: LineChart, t: "Modelos preditivos com dados confiáveis" },
                { icon: Database, t: "Pipelines auditáveis e em tempo real" },
              ].map((it) => (
                <li key={it.t} className="flex items-center gap-3">
                  <it.icon className="h-5 w-5 text-[var(--neon-green)]" />
                  <span>{it.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal glow-border rounded-2xl glass p-6">
            <DataFlowDiagram />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <Clients />

      {/* TECH */}
      <section id="tecnologias" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">Stack</p>
            <h2 className="text-3xl font-bold md:text-5xl">Nossa Stack <span className="text-gradient">Tecnológica</span></h2>
          </div>
          <div className="reveal flex flex-wrap items-center justify-center gap-3">
            {techs.map((t) => (
              <span
                key={t}
                className="glow-border cursor-default rounded-full glass px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="relative py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="reveal">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-violet)]">Sobre</p>
            <h2 className="text-3xl font-bold md:text-5xl">Sobre a <span className="text-gradient">Kaizenai</span></h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              A Kaizenai é uma empresa de tecnologia especializada em transformar ideias em produtos inteligentes. Combinamos Engenharia de Dados, Ciência de Dados e Agentes de IA para criar software sob demanda e produtos SaaS que resolvem problemas reais, escalam com o negócio e entregam valor de forma contínua. Acreditamos que qualquer empresa pode ter acesso a IA de alta performance — você só precisa da ideia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="contato" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16">
            <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-glow)" }} />
            <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Sua ideia merece <span className="text-gradient">virar um produto real.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
              Fale com nossos especialistas e descubra como podemos construir sua solução com IA, dados e tecnologia de ponta.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] px-8 py-4 font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Falar no WhatsApp Agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3 md:items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-xl font-bold">Kaizen<span className="text-gradient">ai</span></span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Kaizenai — Inteligência que transforma.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground md:justify-center">
            <li><a href="#solucoes" className="hover:text-foreground">Soluções</a></li>
            <li><a href="#como-funciona" className="hover:text-foreground">Como Funciona</a></li>
            <li><a href="#clientes" className="hover:text-foreground">Clientes</a></li>
            <li><a href="#tecnologias" className="hover:text-foreground">Tecnologias</a></li>
            <li><a href="#contato" className="hover:text-foreground">Contato</a></li>
          </ul>
          <div className="flex gap-4 md:justify-end">
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-10 w-10 items-center justify-center rounded-full glass hover-glow">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">© 2026 Kaizenai. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function DataFlowDiagram() {
  const nodes = [
    { label: "Raw Data", color: "var(--neon-blue)" },
    { label: "Pipeline", color: "var(--neon-blue)" },
    { label: "Data Lake", color: "var(--neon-violet)" },
    { label: "DS Models", color: "var(--neon-violet)" },
    { label: "AI Agents", color: "var(--neon-green)" },
    { label: "Outcomes", color: "var(--neon-green)" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {nodes.map((n, i) => (
        <div key={n.label} className="relative">
          <div
            className="rounded-xl border border-border bg-background/50 px-4 py-3 text-center text-sm font-medium"
            style={{ boxShadow: `0 0 20px ${n.color}33` }}
          >
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Etapa {i + 1}</span>
            <span style={{ color: n.color }}>{n.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
