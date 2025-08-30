import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, CheckCircle, ArrowRight, Award, DollarSign, Calculator, PieChart, Target, Heart, Clock } from "lucide-react";

const DieBavPageY = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Steuervorteile",
      description: "Reduzierung der Steuerlast durch Entgeltumwandlung - mehr Netto vom Brutto"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zusätzliche Rente",
      description: "Aufbau einer zusätzlichen Altersvorsorge neben der gesetzlichen Rente"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Arbeitgeberzuschuss",
      description: "Seit 2019 müssen Arbeitgeber 15% Zuschuss bei gesparten Sozialversicherungsbeiträgen leisten"
    }
  ];

  const taxSavings = [
    {
      title: "Sofortige Ersparnis",
      description: "Weniger Steuern und Sozialabgaben bereits heute",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Langfristig profitieren", 
      description: "Aufbau einer zusätzlichen Rente für das Alter",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Flexibilität",
      description: "Anpassung der Beiträge je nach Lebenssituation",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
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
            <svg className="absolute bottom-20 left-0 w-80 h-80" viewBox="0 0 400 400">
              <polygon points="200,30 320,120 320,200 200,290 80,200 80,120" 
                       fill="none" stroke="#f97316" strokeWidth="1"/>
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                bAV für <span className="text-orange-500">Arbeitnehmer</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Ihre betriebliche Altersvorsorge - steuerliche Vorteile nutzen und zusätzliche Rente aufbauen
              </p>
              <p className="text-sm text-slate-400 mb-8 max-w-2xl mx-auto">
                Informationen aus dem Geschäftsbetrieb des Versicherungsmaklers gemäß §93 HGB, keine Rechtsberatung, keine Steuerberatung
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-acencia-light py-8 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { key: 'overview', label: 'Überblick' },
                { key: 'benefits', label: 'Ihre Vorteile' },
                { key: 'taxes', label: 'Steuervorteile' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="bg-gradient-to-b from-acencia-light to-acencia-blue py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Was ist betriebliche Altersvorsorge?
                  </h2>
                  <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Die betriebliche Altersvorsorge (bAV) ist eine zusätzliche Altersvorsorge, die über Ihren Arbeitgeber organisiert wird. 
                    Sie haben seit 2002 einen gesetzlichen Anspruch darauf und profitieren von attraktiven Steuervorteilen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Ihre konkreten Vorteile
                  </h2>
                  <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Die betriebliche Altersvorsorge bietet Ihnen viele Vorteile - sowohl heute als auch im Alter.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <DollarSign className="w-8 h-8" />,
                      title: "Bis zu 584€ jährlich sparen",
                      description: "Maximale Steuer- und Sozialversicherungsersparnis durch optimale Entgeltumwandlung",
                      color: "from-green-500 to-green-600"
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Sicherheit im Alter",
                      description: "Zusätzliche Rente ergänzt die gesetzliche Rente für finanzielle Sicherheit",
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      icon: <Heart className="w-8 h-8" />,
                      title: "Arbeitgeberzuschuss",
                      description: "15% Zuschuss vom Arbeitgeber bei gesparten Sozialversicherungsbeiträgen",
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      icon: <Clock className="w-8 h-8" />,
                      title: "Sofort profitieren",
                      description: "Bereits heute weniger Steuern und Sozialabgaben zahlen",
                      color: "from-orange-500 to-orange-600"
                    },
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: "Flexibilität",
                      description: "Anpassung der Beiträge je nach Lebenssituation und Gehaltsentwicklung",
                      color: "from-red-500 to-red-600"
                    },
                    {
                      icon: <Award className="w-8 h-8" />,
                      title: "Staatliche Förderung",
                      description: "Profitieren Sie von der steuerlichen Förderung der Bundesregierung",
                      color: "from-teal-500 to-teal-600"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 text-white mx-auto`}>
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 text-center">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-200 text-center text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tax Savings Tab */}
            {activeTab === 'taxes' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    So funktionieren die Steuervorteile
                  </h2>
                  <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Bei der Entgeltumwandlung wird ein Teil Ihres Bruttogehalts für die Altersvorsorge verwendet. 
                    Dadurch zahlen Sie weniger Steuern und Sozialversicherungsbeiträge.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 rounded-2xl p-8 border border-orange-500/30 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    Beispielrechnung für einen Angestellten
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Ohne bAV</h4>
                      <div className="space-y-2 text-slate-200">
                        <div className="flex justify-between">
                          <span>Bruttogehalt:</span>
                          <span>3.000€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Steuern & SV-Beiträge:</span>
                          <span>-1.080€</span>
                        </div>
                        <div className="border-t border-white/20 pt-2 flex justify-between font-semibold text-white">
                          <span>Netto:</span>
                          <span>1.920€</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Mit bAV (100€ Entgeltumwandlung)</h4>
                      <div className="space-y-2 text-slate-200">
                        <div className="flex justify-between">
                          <span>Bruttogehalt:</span>
                          <span>2.900€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Steuern & SV-Beiträge:</span>
                          <span>-1.044€</span>
                        </div>
                        <div className="flex justify-between text-green-300">
                          <span>+ Arbeitgeberzuschuss:</span>
                          <span>+15€</span>
                        </div>
                        <div className="border-t border-white/20 pt-2 flex justify-between font-semibold text-white">
                          <span>Netto:</span>
                          <span>1.871€</span>
                        </div>
                        <div className="text-green-300 text-sm text-center mt-2">
                          Effektive Kosten für 100€ bAV: nur 49€
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {taxSavings.map((saving, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${saving.color} rounded-xl flex items-center justify-center mb-4 text-white mx-auto`}>
                        {saving.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {saving.title}
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        {saving.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section - shown on all tabs */}
            <div className="mt-16 text-center bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Starten Sie Ihre betriebliche Altersvorsorge
              </h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Nutzen Sie Ihr Recht auf betriebliche Altersvorsorge und profitieren Sie von den Steuervorteilen. 
                Sprechen Sie mit Ihrem Arbeitgeber oder kontaktieren Sie uns direkt.
              </p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt informieren
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

export default DieBavPageY;