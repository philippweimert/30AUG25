import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import Footer from "./Footer";
import { Award, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const Homepage = () => {
  const expertiseAreas = [
    {
      title: "bAV",
      subtitle: "Betriebliche Altersvorsorge",
      description: "Komplexe bAV-Herausforderungen einfach gelöst - mit über 30 Jahren Expertise",
      link: "/die-bav",
      color: "from-blue-500 to-blue-600",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "bKV", 
      subtitle: "Betriebliche Krankenversicherung",
      description: "Gesundheitsvorsorge als Mitarbeiterbenefit - professionell implementiert",
      link: "/bkv",
      color: "from-green-500 to-green-600", 
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "bUV",
      subtitle: "Betriebliche Unfallversicherung", 
      description: "Umfassender Schutz für Ihre Mitarbeitenden - über das Gesetz hinaus",
      link: "/buv",
      color: "from-purple-500 to-purple-600",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Über 30 Jahre Marktexpertise",
    "Komplette Digitalisierung aller Prozesse", 
    "Individuelle Lösungen für jede Unternehmensgröße",
    "Rechtssichere Implementierung"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Normaler Abstand zur Navigation */}
      <div className="pt-8">
        {/* Sehr kompakte Hero Section */}
        <div className="min-h-[40vh] flex items-center justify-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="absolute top-10 right-10 w-96 h-96 animate-pulse" viewBox="0 0 400 400">
              <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                       fill="none" stroke="white" strokeWidth="2"/>
            </svg>
            <svg className="absolute bottom-10 left-10 w-80 h-80 animate-bounce" viewBox="0 0 400 400" style={{animationDuration: '4s'}}>
              <polygon points="200,70 320,140 320,220 200,290 80,220 80,140" 
                       fill="none" stroke="white" strokeWidth="1"/>
            </svg>
          </div>

          <div className="relative z-10 text-center px-4">

            
            {/* Sehr kompakte Key Message */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 max-w-3xl mx-auto mb-6 border border-white/20">
              <h2 className="text-lg lg:text-xl font-bold text-white mb-3">
                Wir helfen Unternehmen dabei, alle Herausforderungen in der 
                <span className="text-acencia-orange"> bAV, bKV und bUV</span> zu meistern
              </h2>
              
              {/* Sehr kompakte Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span className="text-slate-200 text-xs">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sehr kompakte Expertise Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {expertiseAreas.map((area, index) => (
                <Link 
                  key={index}
                  to={area.link}
                  className="group block"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className={`w-10 h-10 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg`}>
                      {area.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-acencia-orange transition-colors duration-300 text-center">
                      {area.title}
                    </h3>
                    
                    <h4 className="text-sm text-slate-300 mb-2 text-center font-medium">
                      {area.subtitle}
                    </h4>
                    
                    <p className="text-slate-200 leading-relaxed mb-3 text-center text-xs">
                      {area.description}
                    </p>
                    
                    <div className="flex items-center justify-center text-acencia-orange group-hover:text-orange-300 transition-colors duration-300">
                      <span className="font-medium text-xs">Mehr erfahren</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Unsere Kunden vertrauen uns Sektion */}
        <CustomerSegments />
        
        {/* Google Bewertungen Section */}
        <GoogleReviews />
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;