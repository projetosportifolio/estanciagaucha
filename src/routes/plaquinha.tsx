import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Brand } from '@/components/restaurant/common';
import { pageHead } from '@/data/restaurant';
export const Route=createFileRoute('/plaquinha')({head:()=>pageHead('Cardápio à mesa','Plaquinha de mesa com QR Code para consultar o cardápio da Estância Gaúcha.'),component:PrintPage});
function PrintPage(){const [url,setUrl]=useState('');useEffect(()=>setUrl(window.location.origin+'/cardapio'),[]);return <div className="print-page"><div className="table-sign"><Brand large/><div className="ornament"><span/>✦<span/></div><span className="script">Seu próximo favorito está aqui</span><h1>Escaneie e veja<br/>o nosso <em>cardápio</em></h1><div className="qr-code">{url&&<QRCodeSVG value={url} size={200} level="H" marginSize={2}/>}</div><p>Pizza, churrasco e boa companhia.</p><small>Estância Gaúcha · Uberlândia</small></div><Button className="h-12 no-print" onClick={()=>window.print()}><Printer/>Imprimir plaquinha</Button><p className="no-print image-disclaimer">O QR Code usa o endereço atual. Imprima a versão publicada do site.</p></div>}
