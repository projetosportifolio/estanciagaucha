import { createFileRoute } from '@tanstack/react-router';
import { Users, CalendarDays, Car } from 'lucide-react';
import { SectionTitle } from '@/components/restaurant/common';
import { ReservationForm } from '@/components/restaurant/reservation';
import { pageHead } from '@/data/restaurant';
import mesa from '@/assets/mesa-grupo.webp';
export const Route=createFileRoute('/reservar')({head:()=>pageHead('Reservar mesa','Planeje seu almoço ou jantar na Estância Gaúcha. Reservas para famílias e grupos em Uberlândia, sujeitas à confirmação.'),component:Reserve});
function Reserve(){return <div className="container reserve-page"><SectionTitle label="Tem lugar para você" title="Reserve sua" accent="mesa" description="Boa companhia merece um encontro especial."/><div className="reserve-layout"><div className="reserve-image"><img src={mesa} alt="Mesa posta com pizzas para um encontro em grupo, imagem ilustrativa" width={512} height={512}/><div><span className="script">Vamos estar juntos</span><h2>Seu próximo encontro<br/>é na <em>Estância.</em></h2></div></div><div><div className="reserve-perks"><span><Users/>Famílias e grupos</span><span><Car/>Estacionamento gratuito</span><span><CalendarDays/>Almoço e jantar</span></div><ReservationForm/></div></div></div>}
