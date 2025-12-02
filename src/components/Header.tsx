import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { MBGButton } from "./ui/mbg-button";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSelector from "./LanguageSelector";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimer = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { t } = useLanguage();
  const handleMouseEnterServices = () => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current);
    }
    setIsServicesOpen(true);
  };
  const handleMouseLeaveServices = () => {
    dropdownTimer.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/7741cee7-e182-4ffd-ba9e-01ba194d50e6.png" alt="Logo MBG Financeira" className="w-14 h-14 object-contain transition-transform duration-200 hover:scale-105" />
          <span className="text-xl font-bold text-primary">
        </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-semibold' : ''}`}>
            {t('nav.home')}
          </Link>
          <Link to="/sobre" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/sobre' ? 'text-primary font-semibold' : ''}`}>
            {t('nav.about')}
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnterServices} onMouseLeave={handleMouseLeaveServices}>
            <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <span>{t('nav.services')}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isServicesOpen && <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-elegant z-50" onMouseEnter={handleMouseEnterServices} onMouseLeave={handleMouseLeaveServices}>
                <Link to="/credito-pessoal" className="block px-4 py-3 text-sm text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-t-lg">
                  {t('nav.personalCredit')}
                </Link>
                <Link to="/poupanca-especial" className="block px-4 py-3 text-sm text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg">
                  {t('nav.specialSavings')}
                </Link>
              </div>}
          </div>
          
          <Link to="/vantagens" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/vantagens' ? 'text-primary font-semibold' : ''}`}>
            {t('nav.benefits')}
          </Link>
          <Link to="/blog" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/blog' ? 'text-primary font-semibold' : ''}`}>
            {t('nav.blog')}
          </Link>
          <Link to="/contato" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/contato' ? 'text-primary font-semibold' : ''}`}>
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Language Selector & CTA Button */}
        <div className="hidden md:flex items-center space-x-3">
          <LanguageSelector />
          <MBGButton asChild>
            <a href="https://wa.me/593968872067" target="_blank" rel="noopener noreferrer">
              {t('nav.contactUs')}
            </a>
          </MBGButton>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-4">
            <Link to="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.home')}
            </Link>
            <Link to="/sobre" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link to="/credito-pessoal" className="block text-foreground hover:text-primary transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              {t('nav.personalCredit')}
            </Link>
            <Link to="/poupanca-especial" className="block text-foreground hover:text-primary transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              {t('nav.specialSavings')}
            </Link>
            <Link to="/vantagens" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.benefits')}
            </Link>
            <Link to="/blog" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.blog')}
            </Link>
            <Link to="/contato" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
            </Link>
            <div className="pt-4 space-y-3">
              <div className="flex justify-center">
                <LanguageSelector />
              </div>
              <MBGButton asChild className="w-full">
                <a href="https://wa.me/593968872067" target="_blank" rel="noopener noreferrer">
                  {t('nav.contactUs')}
                </a>
              </MBGButton>
            </div>
          </nav>
        </div>}
    </header>;
};
export default Header;