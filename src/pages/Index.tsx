import { CreditCard, PiggyBank, Shield, Clock, Gift, Users, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import SpecialistConsultation from "@/components/SpecialistConsultation";
import Hero3DFinancial from "@/components/Hero3DFinancial";
import { MBGButton } from "@/components/ui/mbg-button";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/hooks/useLanguage";
import { TESTIMONIALS } from "@/lib/constants";
import heroBackground from "@/assets/hero-bg-professional.jpg";
const Index = () => {
  const {
    ref: featuresRef,
    visibleItems: visibleFeatures
  } = useStaggeredAnimation(4, 150);
  const {
    ref: testimonialsRef,
    visibleItems: visibleTestimonials
  } = useStaggeredAnimation(3, 200);
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroBackground})`
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent">
          {/* Premium Golden Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-orange-500/10 animate-pulse"></div>
          
          {/* Floating Golden Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-70 animate-bounce" style={{
            animationDelay: '0s',
            animationDuration: '3s'
          }}></div>
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-60 animate-bounce" style={{
            animationDelay: '1s',
            animationDuration: '4s'
          }}></div>
            <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full opacity-50 animate-bounce" style={{
            animationDelay: '2s',
            animationDuration: '5s'
          }}></div>
            <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full opacity-40 animate-bounce" style={{
            animationDelay: '0.5s',
            animationDuration: '3.5s'
          }}></div>
            <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full opacity-65 animate-bounce" style={{
            animationDelay: '1.5s',
            animationDuration: '4.5s'
          }}></div>
            <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-55 animate-bounce" style={{
            animationDelay: '2.5s',
            animationDuration: '3.2s'
          }}></div>
          </div>
          
          {/* Luxury Glow Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-amber-400/5 via-transparent to-transparent animate-pulse" style={{
          animationDuration: '4s'
        }}></div>
          
          {/* Premium Border Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-ping opacity-30" style={{
          animationDuration: '6s'
        }}></div>
        </div>
        <Hero3DFinancial className="z-1" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 animate-fade-in-up">
              {t('home.hero.welcome')}<br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                {t('home.hero.company')}
              </span>
            </h1>
            <p style={{
            animationDelay: '0.2s'
          }} className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              {t('home.hero.subtitle')}<br />
              {t('home.hero.description')}
            </p>
            <div className="animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <MBGButton asChild size="xl" className="shadow-gold-glow">
                <a href={`https://wa.me/593968872067?text=${encodeURIComponent(t('whatsapp.credit'))}`} target="_blank" rel="noopener noreferrer">
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </MBGButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-in-up">{t('home.services.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              {t('home.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-in-left">
              <ServiceCard icon={CreditCard} title={t('home.services.credit.title')} description={t('home.services.credit.description')} href="/credito-pessoal" buttonText={t('common.learnMore')} />
            </div>
            <div className="animate-slide-in-right">
              <ServiceCard icon={PiggyBank} title={t('home.services.savings.title')} description={t('home.services.savings.description')} href="/poupanca-especial" buttonText={t('common.learnMore')} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="diferenciais" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-in-up">{t('home.features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              {t('home.features.subtitle')}
            </p>
          </div>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${visibleFeatures.includes(0) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard icon={CheckCircle} title={t('features.noBureaucracy')} description={t('features.noBureaucracy.desc')} />
            </div>
            <div className={`${visibleFeatures.includes(1) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard icon={Clock} title={t('features.flexiblePayment')} description={t('features.flexiblePayment.desc')} />
            </div>
            <div className={`${visibleFeatures.includes(2) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard icon={Gift} title={t('features.benefits')} description={t('features.benefits.desc')} />
            </div>
            <div className={`${visibleFeatures.includes(3) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard icon={Shield} title={t('features.security')} description={t('features.security.desc')} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-in-up">{t('home.testimonials.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          
          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => <div key={testimonial.id} className={`${visibleTestimonials.includes(index) ? 'animate-fade-in-up animate-hover-lift' : 'opacity-0'}`}>
                <TestimonialCard name={testimonial.name} location={testimonial.location} testimonial={testimonial.content} rating={testimonial.rating} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Specialist Consultation Section */}
      <SpecialistConsultation />

      {/* CTA Final Section */}
      <section id="cta-final" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="mb-6 animate-fade-in-up">{t('home.cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            {t('home.cta.subtitle')}
          </p>
          <div className="animate-fade-in-up">
            <MBGButton asChild size="xl" className="shadow-gold-glow">
              <a href={`https://wa.me/593968872067?text=${encodeURIComponent(t('whatsapp.contact'))}`} target="_blank" rel="noopener noreferrer">
                {t('home.cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </MBGButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;