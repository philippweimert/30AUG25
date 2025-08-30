import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Shield, Users, Building2, TrendingUp, CheckCircle, ArrowRight, Award, AlertTriangle, DollarSign, Scale, FileText, PieChart, Calculator, Clock, Zap, Target } from "lucide-react";

const DieBavPageX = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Komplexe Verwaltung",
      description: "Aufwendige administrative Prozesse binden wertvolle HR-Ressourcen und sind fehleranfällig."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Rechtliche Unsicherheit",
      description: "Ständige Gesetzesänderungen erfordern permanente Überwachung und Anpassung."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Dokumentationspflichten",
      description: "Umfangreiche Dokumentations- und Meldepflichten müssen eingehalten werden."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Kostenintransparenz",
      description: "Versteckte Kosten und unklare Gebührenstrukturen erschweren die Budgetplanung."
    }
  ];

  const solutions = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Vollautomatisierung",
      description: "Digitale Prozesse eliminieren manuelle Fehler und sparen bis zu 80% der Verwaltungszeit."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance-Sicherheit",
      description: "Automatische Updates halten Sie immer auf dem neuesten rechtlichen Stand."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Transparente Kosten",
      description: "Klare Kostenstrukturen ohne versteckte Gebühren für planbare Budgets."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Zeitersparnis",
      description: "HR-Teams können sich auf strategische Aufgaben konzentrieren statt auf Verwaltung."
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mitarbeiterbindung",
      description: "Attraktiver Benefit zur Steigerung der Mitarbeiterzufriedenheit und -bindung"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Steuervorteile",
      description: "Reduzierung der Lohnnebenkosten durch steuerliche Förderung"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Employer Branding",
      description: "Positionierung als attraktiver Arbeitgeber im Wettbewerb um Fachkräfte"
    }
  ];

  const obligations = [
    {
      title: "Angebotspflicht",
      description: "Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung.",
      impact: "Rechtliche Verpflichtung"
    },
    {
      title: "Zuschussverpflichtung",
      description: "Seit 2019 müssen Arbeitgeber 15% Zuschuss zu Entgeltumwandlungsbeiträgen leisten (bei gesparten Sozialversicherungsbeiträgen).",
      impact: "Finanzielle Auswirkung"
    },
    {
      title: "Informationspflichten",
      description: "Arbeitgeber müssen über Möglichkeiten, Vor- und Nachteile der bAV informieren.",
      impact: "Dokumentationspflicht"
    },
    {
      title: "Portabilitätsregelung",
      description: "Bei Arbeitgeberwechsel müssen bestehende bAV-Ansprüche übertragbar sein.",
      impact: "Administrative Komplexität"
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
                bAV für <span className="text-orange-500">Unternehmen</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Digitale betriebliche Altersvorsorge - rechtssicher, automatisiert und mitarbeiterfreundlich
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
                { key: 'obligations', label: 'Pflichten' },
                { key: 'challenges', label: 'Herausforderungen' },
                { key: 'benefits', label: 'Vorteile' }
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
                    Warum betriebliche Altersvorsorge?
                  </h2>
                  <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Die betriebliche Altersvorsorge ist nicht nur ein attraktiver Mitarbeiterbenefit, sondern auch eine rechtliche Verpflichtung. 
                    Als Arbeitgeber profitieren Sie von Steuervorteilen, reduzieren Lohnnebenkosten und stärken Ihre Arbeitgebermarke.
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

            {/* Obligations Tab */}
            {activeTab === 'obligations' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Ihre rechtlichen Pflichten als Arbeitgeber
                  </h2>
                  <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Die betriebliche Altersvorsorge bringt verschiedene Verpflichtungen mit sich. 
                    Wir helfen Ihnen dabei, alle Anforderungen rechtssicher zu erfüllen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {obligations.map((obligation, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6 border border-slate-500">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Scale className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {obligation.title}
                          </h3>
                          <p className="text-slate-200 text-sm mb-3 leading-relaxed">
                            {obligation.description}
                          </p>
                          <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium">
                            {obligation.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges Tab */}
            {activeTab === 'challenges' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Herausforderungen & unsere Lösungen
                  </h2>
                  <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Die bAV-Verwaltung ist komplex und zeitaufwendig. Mit unseren digitalen Lösungen 
                    eliminieren wir diese Herausforderungen und sparen Ihnen wertvolle Ressourcen.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      <AlertTriangle className="w-6 h-6 inline-block mr-2 text-red-400" />
                      Herausforderungen
                    </h3>
                    <div className="space-y-4">
                      {challenges.map((challenge, index) => (
                        <div key={index} className="bg-gradient-to-br from-red-600/10 to-red-700/10 rounded-xl p-4 border border-red-500/20">
                          <div className="flex items-start space-x-3">
                            <div className="text-red-400 mt-1">
                              {challenge.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">
                                {challenge.title}
                              </h4>
                              <p className="text-slate-300 text-sm">
                                {challenge.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      <CheckCircle className="w-6 h-6 inline-block mr-2 text-green-400" />
                      Unsere Lösungen
                    </h3>
                    <div className="space-y-4">
                      {solutions.map((solution, index) => (
                        <div key={index} className="bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-xl p-4 border border-green-500/20">
                          <div className="flex items-start space-x-3">
                            <div className="text-green-400 mt-1">
                              {solution.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">
                                {solution.title}
                              </h4>
                              <p className="text-slate-300 text-sm">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Konkrete Vorteile für Ihr Unternehmen
                  </h2>
                  <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
                    Eine gut implementierte betriebliche Altersvorsorge zahlt sich in vielerlei Hinsicht aus - 
                    für Sie als Arbeitgeber und für Ihre Mitarbeitenden.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <DollarSign className="w-8 h-8" />,
                      title: "Bis zu 20% Kostenersparnis",
                      description: "Reduzierung der Lohnnebenkosten durch Steuervorteile und gesparte Sozialversicherungsbeiträge",
                      color: "from-green-500 to-green-600"
                    },
                    {
                      icon: <Users className="w-8 h-8" />,
                      title: "Höhere Mitarbeiterbindung",
                      description: "Bis zu 30% weniger Fluktuation durch attraktive Zusatzleistungen",
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      icon: <Clock className="w-8 h-8" />,
                      title: "80% Zeitersparnis",
                      description: "Automatisierte Verwaltung spart wertvolle HR-Ressourcen für strategische Aufgaben",
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "100% Rechtssicherheit",
                      description: "Automatische Compliance-Updates halten Sie immer auf dem neuesten Stand",
                      color: "from-orange-500 to-orange-600"
                    },
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: "Besseres Employer Branding",
                      description: "Positionierung als attraktiver Arbeitgeber im Kampf um Fachkräfte",
                      color: "from-red-500 to-red-600"
                    },
                    {
                      icon: <TrendingUp className="w-8 h-8" />,
                      title: "Langfristige Kostenkontrolle",
                      description: "Transparente Kostenstrukturen ohne versteckte Gebühren",
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

            {/* CTA Section - shown on all tabs */}
            <div className="mt-16 text-center bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Bereit für die digitale bAV-Transformation?
              </h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre betriebliche Altersvorsorge optimieren. 
                Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin.
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

export default DieBavPageX;