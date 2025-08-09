import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Landing page | Empreendimentos",
    category: "Imobiliaria",
    image: portfolioEcommerce,
    description: "Plataforma completa de conversão de clientes.",
    technologies: ["React", "Node.js", "Stripe"],
    demoLink: "https://juzesempreedimentos.netlify.app/"
  },
  {
    id: 2,
    title: "Landing page | Doceria",
    category: "Restaurante",
    image: portfolioCorporate,
    description: "Landing page completa para conversão de clientes.",
    technologies: ["WordPress", "SEO", "Analytics"],
    demoLink: "https://elizangela-melo.vercel.app/"
  },
  {
    id: 3,
    title: "Clínica Veterinária",
    category: "Pets",
    image: portfolioRestaurant,
    description: "Site elegante para clínica veterinária com sistema de conversão online.",
    technologies: ["React", "CMS", "Booking System"],
    demoLink: "https://www.online-page.com.br/zooti-pet"
  },
  //{
    //id: 4,
    //title: "App de Fitness",
    //category: "Saúde & Bem-estar",
    //image: portfolioEcommerce,
    //description: "Aplicativo completo para acompanhamento de treinos e nutrição.",
    //technologies: ["React Native", "Firebase", "Analytics"],
    //demoLink: "https://www.exemplo.com/fitness"
  //},
  // {
   // id: 5,
   // title: "Portal Educacional",
  //  category: "Educação",
   // image: portfolioCorporate,
   // description: "Plataforma de ensino online com sistema de videoaulas e avaliações.",
   // technologies: ["Vue.js", "Laravel", "Video Streaming"],
    //demoLink: "https://www.exemplo.com/educacao"
  //} //
];

export default portfolioItems;

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Nosso Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada site é único e criado sob medida para atender às necessidades específicas do negócio.
          </p>
        </div>

        <div className="relative mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioItems.map((item, index) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-slide-up border-border/50 h-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex gap-2">
                            {item.demoLink && (
                              <a
                                href={item.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button size="sm" variant="outline" className="opacity-90">
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <span className="text-sm text-primary font-medium">{item.category}</span>
                        <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center animate-fade-in">
          <WhatsAppButton variant="gradient" className="text-lg px-8 py-4" />
        </div>
      </div>
    </section>
  );
};
