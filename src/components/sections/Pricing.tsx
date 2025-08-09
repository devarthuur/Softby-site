import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const pricingPlans = [
  {
    id: 1,
    name: "Pacote Básico",
    description: "Ideal para pequenos negócios que estão começando",
    price: "R$ 299,90 ",
    period: "/mês",
    features: [
      "Landing Page",
      "Ideias de Criativos",
      "9 Posts para Redes Sociais",
      "Relatório Mensal",
      "Suporte via WhatsApp"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Pacote Médio",
    description: "Para empresas que querem crescer rapidamente",
    price: "R$ 499,90 ",
    period: "/mês",
    features: [
      "2 Landing Pages Otimizadas",
      "Tráfego Pago Multi-plataforma",
      "15 Posts + Stories",
      "Criação de Identidade Visual",
      "Domínio Personalizado",
      "Suporte Prioritário"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Pacote Softby",
    description: "Solução completa para dominar o mercado",
    price: "R$ 999,99",
    period: "/mês",
    features: [
      "Site Completo + Blog",     
      "Gestão Completa de Redes",
      "Automação de Marketing",
      "Treinamento de automação para WhatsApp",
      "Consultoria Estratégica",
      "Suporte 24/7"
    ],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pacotes" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Nossos Pacotes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para acelerar o crescimento do seu negócio. 
            Cada pacote foi desenvolvido para atender diferentes necessidades e orçamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-slide-up ${
                plan.popular 
                  ? 'border-primary shadow-glow-primary scale-105' 
                  : 'border-border/50 hover:shadow-elegant'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
                  <Star className="w-4 h-4 inline-block mr-1" />
                  Mais Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <WhatsAppButton 
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  message={`Olá! Tenho interesse no ${plan.name}. Gostaria de saber mais detalhes.`}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Não encontrou o pacote ideal? Vamos criar uma solução personalizada para você!
          </p>
          <WhatsAppButton 
            variant="gradient" 
            className="text-lg px-8 py-4"
            message="Olá! Gostaria de uma proposta personalizada para meu negócio."
          />
        </div>
      </div>
    </section>
  );
};