export const WHATSAPP_NUMBER = '5354956111';
export const WHATSAPP_DISPLAY = '+53 54956111';

/**
 * Generates a clean WhatsApp link for the user's phone number
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!customMessage) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(customMessage.trim())}`;
}

/**
 * Pre-defined messages for common conversion actions
 */
export const WHATSAPP_PRESETS = {
  general: '¡Hola! Me gustaría recibir información sobre sus servicios de diseño y creación de páginas web.',
  personal: '¡Hola! Me interesa solicitar una cotización para una página web personal (portafolio / currículum / marca personal).',
  empresarial: '¡Hola! Deseo cotizar el desarrollo de una página web empresarial / corporativa para mi negocio.',
  landing: '¡Hola! Quisiera información y presupuesto para una Landing Page optimizada para ventas.',
  urgente: '¡Hola! Tengo un proyecto web y me gustaría coordinar una llamada o consulta directa hoy.',
};
