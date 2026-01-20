import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Heart, MessageCircle, TrendingUp, Shield, Users, Clock } from "lucide-react";

const featureCategories = [
  {
    category: "Emotionel forbindelse",
    color: "brand-warm",
    features: [
      {
        title: "Føle sig set og hørt",
        description: "Få et trygt rum, hvor I begge kan udtrykke jeres følelser og behov uden at blive dømt. Mange i et forhold oplever, at de føler sig mere set og forstået gennem struktureret kommunikation.",
        icon: <Heart className="size-6 text-brand-warm" />,
      },
      {
        title: "Mere nærvær i hverdagen",
        description: "Byg en dybere forbindelse gennem bevidst tid sammen. Partnertid hjælper jer med at finde tilbage til hinanden, selv når hverdagen er travl.",
        icon: <Users className="size-6 text-brand-warm" />,
      },
    ],
  },
  {
    category: "Kommunikation",
    color: "brand-green",
    features: [
      {
        title: "Bedre kommunikation om følelser",
        description: "Lær at udtrykke jeres følelser på en måde, der skaber forståelse i stedet for konflikter. Guidede samtaler hjælper jer med at finde jeres fælles sprog.",
        icon: <MessageCircle className="size-6 text-brand-green" />,
      },
      {
        title: "Mindre konflikter, mere forståelse",
        description: "Forstå hinandens perspektiver bedre gennem struktureret refleksion. Mange par oplever færre misforståelser og mere gensidig respekt.",
        icon: <Shield className="size-6 text-brand-green" />,
      },
    ],
  },
  {
    category: "Forebyggelse",
    color: "brand-terracotta",
    features: [
      {
        title: "Ugentlig træning",
        description: "Ligesom du træner din krop eller din karriere, træner I jeres forhold hver uge gennem struktureret refleksion og samtaler. Konsistens er nøglen.",
        icon: <TrendingUp className="size-6 text-brand-terracotta" />,
      },
      {
        title: "I jeres tempo",
        description: "Udforsk jeres forhold, når det passer jer – ingen stressende møder eller eksterne tidsplaner. Bare en ugentlig rutine, der passer ind i jeres liv.",
        icon: <Clock className="size-6 text-brand-terracotta" />,
      },
    ],
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">
            Træn jeres forhold hver uge
          </h2>
          <p className="mx-auto max-w-2xl text-body text-muted-foreground">
            Partnertid skaber rammerne for forebyggende vedligeholdelse af jeres forhold. Ligesom træning eller en vitaminpille – 
            en ugentlig rutine der styrker jeres forbindelse, før problemer opstår.
          </p>
        </div>

        <div className="space-y-12">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="ui-caption mb-6 text-center">
                {category.category}
              </h3>
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
                {category.features.map((feature, featureIndex) => (
                  <Card
                    key={featureIndex}
                    className="border border-border/50 transition-shadow hover:shadow-md"
                  >
                    <CardHeader className="pb-3">
                      <div className="mb-3">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-body leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
