import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { User, Mail, Phone, Award, Users, Clock, Star, ArrowRight } from "lucide-react";

const ServiceTeamPage = () => {
  const teamMembers = [
    {
      name: "Uwe Weimert",
      position: "Geschäftsführer",
      description: "Über 30 Jahre Expertise in der betrieblichen Altersvorsorge und Geschäftsführung",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specializations: ["bAV-Strategien", "Unternehmensberatung", "Compliance"]
    },
    {
      name: "Sarah Mueller",
      position: "Senior Beraterin bAV",
      description: "Spezialisiert auf digitale bAV-Lösungen und Prozessoptimierung",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b900?w=300&h=300&fit=crop&crop=face",
      specializations: ["Digitalisierung", "Prozessoptimierung", "Mittelstand"]
    },
    {
      name: "Dr. Thomas Weber",
      position: "Rechtsexperte",
      description: "Jurist mit Fokus auf Arbeitsrecht und betriebliche Altersvorsorge",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specializations: ["Arbeitsrecht", "Compliance", "Vertragsgestaltung"]
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-acencia via-acencia to-acencia py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
              <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                       fill="none" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Unser <span className="text-orange-500">Service-Team</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Lernen Sie die Experten kennen, die Ihnen bei der betrieblichen Altersvorsorge zur Seite stehen
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gradient-to-b from-acencia via-acencia-light to-acencia-blue py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-400"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-slate-200 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Spezialisierungen:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specializations.map((spec, specIndex) => (
                        <span key={specIndex} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Bereit für ein Gespräch?
              </h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Unser Service-Team steht Ihnen für alle Fragen zur betrieblichen Altersvorsorge zur Verfügung. 
                Vereinbaren Sie noch heute einen Termin.
              </p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt Gespräch vereinbaren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default ServiceTeamPage;