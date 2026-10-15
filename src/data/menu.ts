import cheese from '@/assets/pizza-5-queijos.webp';
import calabresa from '@/assets/pizza-calabresa.webp';
import costela from '@/assets/pizza-costela.webp';
import chocolate from '@/assets/pizza-chocolate-morango.webp';
import velvet from '@/assets/pizza-red-velvet.webp';
import oreo from '@/assets/pizza-oreo.webp';
import pistache from '@/assets/pizza-pistache.webp';
import merengue from '@/assets/pizza-merengue.webp';
import pudim from '@/assets/pizza-pudim.webp';
import banana from '@/assets/pizza-pudim-banana.webp';
import acai from '@/assets/pizza-acai.webp';
import noffe from '@/assets/pizza-morangonoffe.webp';
import cupim from '@/assets/cupim.webp';
import file from '@/assets/file-nata.webp';
import empanada from '@/assets/empanada.webp';
import flan from '@/assets/flan.webp';
import beer from '@/assets/heineken.webp';
import drink from '@/assets/caipiroska.webp';
import churros from '@/assets/combo-churros.webp';
import superCombo from '@/assets/combo-super.webp';
import gaucho from '@/assets/combo-gaucho.webp';
import economico from '@/assets/combo-economico.webp';
import almoco from '@/assets/almoco.webp';
import rodizio from '@/assets/rodizio.webp';
export { almoco, rodizio };
export interface MenuItem { id: string; name: string; category: string; description: string; image: string; price: number | null; tag?: string; sizes?: { name: string; price: number }[]; }
export const categories = [{id:'experiencias',name:'Na nossa casa',icon:'utensils'}, {id:'salgadas',name:'Pizzas salgadas',icon:'pizza'}, {id:'doces',name:'Pizzas doces',icon:'cake'}, {id:'pratos',name:'Pratos',icon:'beef'}, {id:'entradas',name:'Entradas',icon:'utensils'}, {id:'sobremesas',name:'Sobremesas',icon:'cake'}, {id:'bebidas',name:'Bebidas',icon:'wine'}, {id:'combos',name:'Combos',icon:'package'}];
// CONFIRMAR COM O DONO: todos os preços, tamanhos e nomes truncados. Imagens ilustrativas geradas.
const item = (id:string,name:string,category:string,description:string,image:string,tag?:string):MenuItem => ({id,name,category,description,image,price:null,tag});
export const menu: MenuItem[] = [
 item('almoco','Self-service','experiencias','Buffet variado no almoço, para montar o prato do seu jeito.',almoco,'Almoço'),
 item('rodizio','Rodízio','experiencias','Pizzas doces e salgadas, churrasco e boa companhia à mesa.',rodizio,'Jantar'),
 item('queijos','5 Queijos','salgadas','Cinco queijos em uma combinação cheia de sabor.',cheese),
 item('calabresa','Calabresa com Cebola','salgadas','O encontro clássico da calabresa com a cebola.',calabresa),
 item('costela','Costela de Boi com Queijo','salgadas','Costela de boi e queijo em uma combinação especial.',costela,'Destaque'),
 item('chocolate','Chocolate com Morango','doces','Chocolate e morango para adoçar a sua noite.',chocolate),
 item('velvet','Chocolate Branco com Red Velvet','doces','Uma combinação especial de chocolate branco e red velvet.',velvet,'Destaque'),
 item('oreo','Chocolate Branco com Oreo','doces','Chocolate branco com o sabor inconfundível de Oreo.',oreo),
 item('pistache','Pistache','doces','O sabor delicado do pistache em uma pizza doce.',pistache),
 item('merengue','Merengue de Morango','doces','Merengue e morango em uma deliciosa combinação.',merengue),
 item('pudim','Pizza de Pudim','doces','Seu doce favorito em uma pizza surpreendente.',pudim,'Destaque'),
 item('banana','Pudim e Banana com Canela','doces','Pudim, banana e o toque acolhedor da canela.',banana),
 item('acai','Açaí com Banana','doces','Açaí e banana em uma combinação diferente.',acai),
 item('noffe','Morangonoffe','doces','Uma das opções doces da nossa casa. Consulte os detalhes.',noffe),
 item('cupim','Cupim ao Alho','pratos','Cupim com o sabor marcante do alho.',cupim),
 item('file','Filé ao Molho de Nata','pratos','Filé acompanhado de um cremoso molho de nata.',file),
 item('empanada','Empanada','entradas','Uma entrada para começar a sua experiência.',empanada),
 item('flan','Flan','sobremesas','Um final doce para a sua refeição.',flan),
 item('heineken','Heineken','bebidas','Consulte as opções e apresentações disponíveis.',beer),
 item('caipiroska','Caipiroska','bebidas','Consulte os sabores disponíveis na casa.',drink),
 item('churros','Combo Churros','combos','Consulte a composição e o valor no cardápio de delivery.',churros),
 item('super','Super Econômicas','combos','Consulte a composição e o valor no cardápio de delivery.',superCombo),
 item('gaucho','Combo Gaúcho','combos','Consulte a composição e o valor no cardápio de delivery.',gaucho),
 item('economico','Combo Econômico','combos','Consulte a composição e o valor no cardápio de delivery.',economico),
 ...['Casal','Premium','Estância','Família'].map((name,i)=>item(`combo-${i}`,`Combo ${name}`,'combos','Consulte a composição e o valor no cardápio de delivery.',[economico,gaucho,superCombo,churros][i] ?? economico)),
];
export const normalize = (value:string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
