import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Sobre Nós',
    'nav.services': 'Serviços',
    'nav.benefits': 'Vantagens',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',
    'nav.contactUs': 'Fale Conosco',
    'nav.personalCredit': 'Crédito Pessoal',
    'nav.specialSavings': 'Poupança Especial',
    
    // Common
    'common.learnMore': 'Saiba Mais',
    'common.getStarted': 'Começar Agora',
    'common.contactSpecialist': 'Falar com Especialista',
    'common.simulateNow': 'Simular Agora',
    
    // Hero Section
    'hero.title': 'Soluções Financeiras Que Transformam Sua Vida',
    'hero.subtitle': 'Crédito facilitado e poupança especial com as melhores condições do mercado',
    'hero.cta': 'Falar com Especialista',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções financeiras sob medida para você',
    'services.credit.title': 'Crédito Facilitado',
    'services.credit.description': 'Empréstimo pessoal com taxas competitivas e aprovação rápida',
    'services.savings.title': 'Poupança Especial',
    'services.savings.description': 'Conta poupança com rendimento diferenciado e flexibilidade',
    
    // Features
    'features.noBureaucracy': 'Sem Burocracia',
    'features.noBureaucracy.desc': 'Processo simplificado e documentação mínima necessária',
    'features.flexiblePayment': 'Pagamento Semanal Flexível',
    'features.flexiblePayment.desc': 'Parcelas adaptadas ao seu orçamento com pagamento semanal',
    'features.benefits': 'Programa de Vantagens',
    'features.benefits.desc': 'Benefícios exclusivos para clientes fiéis',
    'features.security': 'Segurança e Confiança',
    'features.security.desc': 'Empresa regulamentada com total transparência',
    
    // WhatsApp Messages
    'whatsapp.default': 'Olá! Gostaria de saber mais sobre os serviços da MBG Financeira.',
    'whatsapp.credit': 'Olá! Tenho interesse no Crédito Pessoal da MBG Financeira.',
    'whatsapp.savings': 'Olá! Gostaria de saber mais sobre a Poupança Especial.',
    'whatsapp.contact': 'Olá! Vim através do site e gostaria de falar com um especialista.',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.benefits': 'Ventajas',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.contactUs': 'Contáctanos',
    'nav.personalCredit': 'Crédito Personal',
    'nav.specialSavings': 'Ahorros Especiales',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.getStarted': 'Comenzar Ahora',
    'common.contactSpecialist': 'Hablar con Especialista',
    'common.simulateNow': 'Simular Ahora',
    
    // Hero Section
    'hero.title': 'Soluciones Financieras que Transforman tu Vida',
    'hero.subtitle': 'Crédito facilitado y ahorros especiales con las mejores condiciones del mercado',
    'hero.cta': 'Hablar con Especialista',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones financieras a tu medida',
    'services.credit.title': 'Crédito Facilitado',
    'services.credit.description': 'Préstamo personal con tasas competitivas y aprobación rápida',
    'services.savings.title': 'Ahorros Especiales',
    'services.savings.description': 'Cuenta de ahorros con rendimiento diferenciado y flexibilidad',
    
    // Features
    'features.noBureaucracy': 'Sin Burocracia',
    'features.noBureaucracy.desc': 'Proceso simplificado y documentación mínima necesaria',
    'features.flexiblePayment': 'Pago Semanal Flexible',
    'features.flexiblePayment.desc': 'Cuotas adaptadas a tu presupuesto con pago semanal',
    'features.benefits': 'Programa de Ventajas',
    'features.benefits.desc': 'Beneficios exclusivos para clientes leales',
    'features.security': 'Seguridad y Confianza',
    'features.security.desc': 'Empresa regulada con total transparencia',
    
    // WhatsApp Messages
    'whatsapp.default': '¡Hola! Me gustaría saber más sobre los servicios de MBG Financiera.',
    'whatsapp.credit': '¡Hola! Tengo interés en el Crédito Personal de MBG Financiera.',
    'whatsapp.savings': '¡Hola! Me gustaría saber más sobre los Ahorros Especiales.',
    'whatsapp.contact': '¡Hola! Vengo del sitio web y me gustaría hablar con un especialista.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('mbg-language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('mbg-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};