export const business = {
  name: 'Estância Gaúcha', fullName: 'Estância Gaúcha — Restaurante e Pizzaria',
  address: 'Av. Nicomedes Alves dos Santos, 330', city: 'Centro · Uberlândia / MG', cep: '38411-106',
  phone: '(34) 3477-9840', tel: 'tel:+553434779840',
  // CONFIRMAR COM O DONO: número de WhatsApp, horários completos e Pix.
  whatsapp: '', minimumOrder: 55, deliveryFee: 'a combinar',
  delivery: 'https://pedido.anota.ai/loja/restaurante-e-pizzaria-estancia-gaucha-1',
  instagram: 'https://www.instagram.com/estanciagaucha_pizzaria/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Est%C3%A2ncia+Ga%C3%BAcha+Uberl%C3%A2ndia&query_place_id=ChIJS-dK3stFpJQR3dBW6iXRzrA',
  hours: null as null | Record<number, [string, string]>,
};
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Estância Gaúcha · Uberlândia` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Estância Gaúcha` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
export const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
