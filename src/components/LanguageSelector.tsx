import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors rounded-lg border border-border/20 bg-card/50 backdrop-blur"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-40 bg-card border border-border rounded-lg shadow-elegant z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'pt' | 'es');
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors ${
                language === lang.code ? 'bg-primary/10 text-primary' : 'text-card-foreground'
              } ${lang.code === 'pt' ? 'rounded-t-lg' : 'rounded-b-lg'}`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;