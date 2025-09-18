import { COMPANY_INFO } from './constants';

export const generateWhatsAppUrl = (message?: string): string => {
  const defaultMessage = message || 'Olá! Gostaria de saber mais sobre os serviços da MBG Financeira.';
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedMessage}`;
};