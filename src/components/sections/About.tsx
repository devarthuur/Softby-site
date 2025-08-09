import { Target, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const features = [
  {
    icon: Target,
    title: "Estratégia Personalizada",
    description: "Desenvolvemos estratégias únicas para cada cliente, focando em seus objetivos específicos e público-alvo."
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprovados",
    description: "Mais de 200% de aumento médio no ROI dos nossos clientes através de campanhas otimizadas."
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais certificados em Google Ads, Facebook Ads e as principais ferramentas do mercado."
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Designs modernos e funcionais que convertem visitantes em clientes reais."
  }
];

export const About = () => {
  return (
    // Reduzido o topo no mobile: pt-8 (mobile) e md:pt-20 (desktop)
    <section id="sobre" className="pt-8 md:pt-20 pb-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo textual */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Sobre a Softby
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos uma agência de marketing digital especializada em transformar negócios através de estratégias inovadoras e criativas. Nossa missão é acelerar o crescimento dos nossos clientes no ambiente digital.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Com anos de experiência no mercado, desenvolvemos soluções completas que incluem tráfego pago, criação de landing pages otimizadas e design que converte. Cada projeto é único e desenvolvido sob medida.
              </p>
              {/* Botão centralizado */}
              <div className="flex justify-center">
                <WhatsAppButton variant="hero" className="text-lg px-8 py-4" />
              </div>
            </div>
          </div>

          {/* Grid de características */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border/50">
          {[
            { number: "150+", label: "Projetos Entregues" },
            { number: "98%", label: "Clientes Satisfeitos" },
            { number: "200%", label: "Aumento Médio ROI" },
            { number: "24h", label: "Suporte Dedicado" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
