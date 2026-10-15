export const business = {
  name: 'Estância Gaúcha', fullName: 'Estância Gaúcha — Restaurante e Pizzaria',
  address: 'Av. Nicomedes Alves dos Santos, 330', city: 'Centro · Uberlândia / MG', cep: '38411-106',
  phone: '(34) 3477-9840', tel: 'tel:+553434779840',
  whatsapp: '553434779840', minimumOrder: 55, deliveryFee: 'a combinar',
  instagram: 'https://www.instagram.com/estanciagaucha_pizzaria/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Est%C3%A2ncia+Ga%C3%BAcha+Uberl%C3%A2ndia&query_place_id=ChIJS-dK3stFpJQR3dBW6iXRzrA',
  hours: [['Domingo','19h às 21h28'],['Segunda-feira','Fechado'],['Terça-feira','19h às 23h'],['Quarta-feira','19h às 23h'],['Quinta-feira','19h às 23h'],['Sexta-feira','19h às 23h'],['Sábado','19h às 23h']] as [string,string][],
  payments: ['Dinheiro','Visa Crédito','Visa Débito','Mastercard Crédito','Mastercard Débito','Elo Crédito','Elo Débito','Hipercard','American Express','Cabal'],
};
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Estância Gaúcha · Uberlândia` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Estância Gaúcha` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
export const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
export const whatsappLink=(text:string)=>`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
export const openWhatsApp=(text:string)=>{window.open(whatsappLink(text),'_blank','noopener,noreferrer')};
