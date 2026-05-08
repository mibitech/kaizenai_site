import { Building2, ShoppingBag, Factory, Stethoscope, Briefcase, GraduationCap } from "lucide-react";

type Client = {
  name: string;
  url?: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  real?: boolean;
};

// Clientes reais — substituir os placeholders abaixo conforme novos cases forem fechados.
const clients: Client[] = [
  {
    name: "Astor House",
    url: "https://www.astorhouse.com.br",
    tagline: "Hospitalidade & Hotelaria",
    icon: Building2,
    real: true,
  },
  {
    name: "A2 Brasil Supplies",
    url: "https://www.a2brasilsupplies.com.br",
    tagline: "Suprimentos Industriais",
    icon: Factory,
    real: true,
  },
  // Sugestões de clientes a substituir no futuro:
  { name: "RetailFlow", tagline: "E-commerce & Varejo", icon: ShoppingBag },
  { name: "MedCore", tagline: "HealthTech & Clínicas", icon: Stethoscope },
  { name: "LegalAI", tagline: "Escritórios Jurídicos", icon: Briefcase },
  { name: "EduPath", tagline: "Educação & EAD", icon: GraduationCap },
];

export function Clients() {
  return (
    <section id="clientes" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-green)]">
            Clientes & Parceiros
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Quem já confia na <span className="text-gradient">Kaizenai</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Empresas de diferentes setores escolhem a Kaizenai para construir produtos
            inteligentes, escalar operações com IA e tomar decisões guiadas por dados.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((c) => {
            const Tag = c.url ? "a" : "div";
            return (
              <Tag
                key={c.name}
                {...(c.url
                  ? { href: c.url, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="glow-border group relative flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl glass p-4 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                title={c.real ? "Cliente Kaizenai" : "Em breve"}
              >
                {c.real && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-[var(--neon-green)]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--neon-green)] ring-1 ring-[var(--neon-green)]/30">
                    <span className="h-1 w-1 rounded-full bg-[var(--neon-green)]" />
                    Cliente
                  </span>
                )}
                <c.icon className="h-7 w-7 text-[var(--neon-blue)] transition-colors group-hover:text-[var(--neon-violet)]" />
                <div>
                  <div className="text-sm font-semibold leading-tight">{c.name}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.tagline}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>

        <p className="reveal mt-8 text-center text-xs text-muted-foreground">
          Quer ver sua marca aqui?{" "}
          <span className="text-[var(--neon-blue)]">Vamos construir juntos.</span>
        </p>
      </div>
    </section>
  );
}
