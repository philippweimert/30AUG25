import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import { Shield, AlertTriangle, CheckCircle, Scale, FileText, DollarSign, Users, Clock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const EmployerObligationsPage = () => {
  const [expandedSection, setExpandedSection] = useState('overview');

  const obligations = [
    {
      id: 'angebot',
      title: 'Angebotspflicht nach § 1a BetrAVG',
      description: 'Alle Arbeitnehmer haben seit 2002 einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung.',
      details: [
        'Anspruch auf Entgeltumwandlung von bis zu 4% der Beitragsbemessungsgrenze',
        'Arbeitgeber muss mindestens eine Durchführungsweg anbieten',
        'Information über Möglichkeiten und Vor-/Nachteile erforderlich',
        'Dokumentation der Beratung und Entscheidung'
      ],
      penalty: 'Schadensersatzansprüche bei Unterlassung',
      deadline: 'Seit 1. Januar 2002',
      color: 'from-blue-600 to-blue-700',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 'zuschuss',
      title: 'Zuschussverpflichtung nach § 1a Abs. 1a BetrAVG',
      description: 'Arbeitgeber müssen 15% Zuschuss zu Entgeltumwandlungsbeiträgen leisten, wenn sie Sozialversicherungsbeiträge sparen.',
      details: [
        '15% des umgewandelten Entgelts als Zuschuss',
        'Nur bei gesparten Sozialversicherungsbeiträgen',
        'Für neue Verträge ab 2019, bestehende ab 2022',
        'Alternative: höherwertige Leistung möglich'
      ],
      penalty: 'Nachzahlungspflicht mit Zinsen',
      deadline: 'Neue Verträge ab 1.1.2019, Altverträge ab 1.1.2022',
      color: 'from-green-600 to-green-700',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      id: 'information',
      title: 'Informationspflichten nach § 4a BetrAVG',
      description: 'Umfassende Aufklärungs- und Informationspflichten gegenüber den Arbeitnehmern.',
      details: [
        'Information über alle verfügbaren Durchführungswege',
        'Aufklärung über steuerliche Auswirkungen',
        'Hinweise auf mögliche Nachteile (z.B. Krankenkassenbeiträge)',
        'Jährliche Information über Entwicklung der Ansprüche'
      ],
      penalty: 'Haftung bei unzureichender Information',
      deadline: 'Fortlaufend bei Vertragsabschluss und jährlich',
      color: 'from-yellow-600 to-yellow-700',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'portabilitaet',
      title: 'Portabilitätsregelung nach § 4 BetrAVG',
      description: 'Sicherstellung der Übertragbarkeit von bAV-Ansprüchen bei Arbeitgeberwechsel.',
      details: [
        'Übertragung der Ansprüche an neuen Arbeitgeber ermöglichen',
        'Alternative: Abfindung oder private Weiterführung',
        'Information über Übertragungsmöglichkeiten',
        'Koordination mit neuem Arbeitgeber'
      ],
      penalty: 'Schadensersatz bei nicht ordnungsgemäßer Übertragung',
      deadline: 'Bei Beendigung des Arbeitsverhältnisses',
      color: 'from-purple-600 to-purple-700',
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      id: 'haftung',
      title: 'Haftung nach § 1 Abs. 1 S. 3 BetrAVG',
      description: 'Umfassende Arbeitgeberhaftung für die zugesagten bAV-Leistungen.',
      details: [
        'Subsidiäre Haftung für alle bAV-Zusagen',
        'Haftung auch bei Insolvenz des Versorgungsträgers',
        'Schutz durch PSVaG (Pensions-Sicherungs-Verein)',
        'Haftung für ordnungsgemäße Verwaltung'
      ],
      penalty: 'Vollständige Übernahme der Versorgungsleistungen',
      deadline: 'Lebenslange Haftung',
      color: 'from-red-600 to-red-700',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const riskMitigation = [
    {
      title: 'Vollständige Digitalisierung',
      description: 'Automatisierte Prozesse eliminieren menschliche Fehler und Compliance-Risiken',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Rechtssichere Dokumentation',
      description: 'Lückenlose Aufzeichnung aller Beratungen und Entscheidungen',
      icon: <FileText className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Automatische Updates',
      description: 'Permanente Überwachung von Gesetzesänderungen und automatische Anpassung',
      icon: <Scale className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Expertensupport',
      description: '24/7 Zugang zu bAV-Experten und rechtlicher Beratung',
      icon: <Users className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      <div className="pt-8 bg-acencia">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-acencia via-acencia to-acencia py-20 relative overflow-hidden">
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
                <span className="text-orange-500">Arbeitgeber</span>pflichten in der bAV
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-4xl mx-auto">
                Umfassender Überblick über rechtliche Verpflichtungen und Haftungsrisiken in der betrieblichen Altersvorsorge
              </p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Informationen aus dem Geschäftsbetrieb des Versicherungsmaklers gemäß §93 HGB, keine Rechtsberatung, keine Steuerberatung
              </p>
            </div>
          </div>
        </section>

        {/* Obligations Overview */}
        <section className="bg-gradient-to-b from-acencia via-acencia-light to-acencia-blue py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Warning Box */}
            <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-2xl p-8 border border-red-500/30 mb-12">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">
                  Wichtiger Hinweis: Umfassende Arbeitgeberhaftung
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed">
                Als Arbeitgeber tragen Sie eine lebenslange, subsidiäre Haftung für alle bAV-Zusagen. 
                Diese Haftung besteht unabhängig vom gewählten Durchführungsweg und kann bei unsachgemäßer 
                Handhabung zu erheblichen finanziellen Risiken führen.
              </p>
            </div>

            {/* Obligations List */}
            <div className="space-y-6 mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Ihre konkreten Pflichten im Detail
              </h2>
              
              {obligations.map((obligation, index) => (
                <div key={obligation.id} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl overflow-hidden shadow-lg">
                  <div 
                    className="p-6 cursor-pointer hover:bg-slate-600/50 transition-colors"
                    onClick={() => setExpandedSection(expandedSection === obligation.id ? '' : obligation.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${obligation.color} rounded-xl flex items-center justify-center text-white`}>
                          {obligation.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {obligation.title}
                          </h3>
                          <p className="text-slate-300 text-sm">
                            {obligation.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-white">
                        {expandedSection === obligation.id ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedSection === obligation.id && (
                    <div className="px-6 pb-6 border-t border-slate-500/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Konkrete Anforderungen:</h4>
                          <ul className="space-y-2">
                            {obligation.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start space-x-2 text-slate-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                            <h5 className="text-red-300 font-semibold mb-2">Bei Nicht-Einhaltung:</h5>
                            <p className="text-red-200 text-sm">{obligation.penalty}</p>
                          </div>
                          
                          <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                            <h5 className="text-blue-300 font-semibold mb-2">Frist/Geltung:</h5>
                            <p className="text-blue-200 text-sm">{obligation.deadline}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Risk Mitigation */}
            <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-2xl p-8 border border-green-500/20 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                So minimieren Sie Ihre Haftungsrisiken
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {riskMitigation.map((mitigation, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {mitigation.icon}
                    <div>
                      <h3 className="text-white font-semibold mb-2">{mitigation.title}</h3>
                      <p className="text-slate-300 text-sm">{mitigation.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Rechtssichere bAV-Implementierung
              </h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Lassen Sie sich von unseren Experten beraten und minimieren Sie Ihre Haftungsrisiken durch eine 
                professionelle, digitalisierte bAV-Lösung.
              </p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt Beratung vereinbaren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default EmployerObligationsPage;