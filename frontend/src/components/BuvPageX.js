import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Users, Building2, TrendingUp, CheckCircle, ArrowRight, Award, Star } from "lucide-react";

const BuvPageX = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Erweiterte Absicherung",
      description: "Umfassender Schutz für Ihre Mitarbeitenden über die gesetzliche Unfallversicherung hinaus"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mitarbeiterbinding",
      description: "Attraktiver Benefit zur Steigerung der Mitarbeiterzufriedenheit und -bindung"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Steuervorteile",
      description: "Steuerlich absetzbare Beiträge als Betriebsausgabe"
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-acencia via-acencia to-acencia-light py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
              <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                       fill="none" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                bUV für <span className="text-orange-500">Unternehmen</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Betriebliche Unfallversicherung - erweiterte Absicherung als starker Mitarbeiterbenefit
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-b from-acencia-light to-acencia-blue py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Vorteile für Ihr Unternehmen
              </h2>
              <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                Schaffen Sie attraktive Arbeitsplätze und zeigen Sie Fürsorge für Ihre Mitarbeitenden
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-orange-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-200">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default BuvPageX;