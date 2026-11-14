import obermayer from '../assets/klienti/obermayer.png';
import karlinblok from '../assets/klienti/karlinblok.png';
import skoda from '../assets/klienti/skoda.png';
import klaudianova from '../assets/klienti/klaudianova-nemocnice.png';
import precogroup from '../assets/klienti/precogroup.png';
import jilove from '../assets/klienti/jilove-u-prahy.png';
import praha5 from '../assets/klienti/praha5.png';

export const FOUNDED = 1992;
export const YEAR = new Date().getFullYear();

export const company = {
  name: 'IM Projekt spol. s r. o.',
  street: 'náměstí Míru 13',
  city: '293 01 Mladá Boleslav',
  phone: '+420 326 322 571',
  phoneHref: '+420326322571',
  email: 'info@improjekt.cz',
  ic: '42715466',
  dic: 'CZ42715466',
  account: '420546181/0100',
  register: 'Společnost je zapsána v OR u Městského soudu v Praze, oddíl C, vložka 6793.',
  facebook: 'https://www.facebook.com/share/1EeFqEnJt7/?mibextid=wwXIfr',
  mapy: 'https://mapy.cz/zakladni?q=n%C3%A1m%C4%9Bst%C3%AD%20M%C3%ADru%2013%2C%20Mlad%C3%A1%20Boleslav',
};

export const people = [
  {
    name: 'Ing. Lukáš Fridrich',
    role: 'jednatel společnosti',
    email: 'l.fridrich@improjekt.cz',
    phones: ['+420 774 082 085', '+420 326 324 265'],
  },
  {
    name: 'Markéta Veselá',
    role: 'vedoucí kanceláře',
    email: 'm.vesela@improjekt.cz',
    phones: ['+420 326 322 571'],
  },
];

export const nav = [
  { href: '/o-nas/', label: 'O nás' },
  { href: '/sluzby/', label: 'Služby' },
  { href: '/reference/', label: 'Reference' },
  { href: '/aktuality/', label: 'Aktuality' },
  { href: '/kariera/', label: 'Kariéra' },
  { href: '/kontakty/', label: 'Kontakty' },
];

export type Audience = {
  id: string;
  name: string;
  title: string;
  text: string;
  items: string[];
};

export const audiences: Audience[] = [
  {
    id: 'developeri',
    name: 'Developeři – investoři',
    title: 'Profesionální služby pro profesionály',
    text: 'Nabízíme služby profesionálům, kteří preferují optimalizaci záměru za účelem zisku.',
    items: [
      'Vytváříme ověřovací / architektonické studie',
      'Provádíme kompletní projektovou dokumentaci dle vyhlášky 131/2024 Sb.',
      'Dokumentaci pro výběr zhotovitele',
      'Položkový rozpočet',
      'Výkaz výměr',
      'Vypracováváme / podílíme se na výrobní dokumentaci',
      'Specializujeme se na atypické stavební detaily',
      'Provádíme autorský dozor',
      'Umíme zpracovat kompletní marketingovou strategii a propagaci projektu',
    ],
  },
  {
    id: 'stavebnici-jednotlivci',
    name: 'Stavebníci – jednotlivci',
    title: 'Prostor navržený podle vašich představ',
    text: 'Navrhujeme stavby, které odrážejí životní styl i osobní vizi klienta. Dohlížíme na každý detail tak, aby výsledkem bylo dílo, které má praktickou hodnotu a budí emoce.',
    items: [
      'Vytváříme architektonické studie a variantní návrhy',
      'Analyzujeme návratnost investic majících vliv na hospodárnost provozu stavby z pohledu energetické náročnosti (NPV, IRR, PP)',
      'Provádíme kompletní projektovou dokumentaci dle vyhlášky 131/2024 Sb.',
      'Dokumentaci pro výběr zhotovitele',
      'Položkový rozpočet',
      'Výkaz výměr',
      'Vypracováváme nebo se podílíme na výrobní dokumentaci',
      'Specializujeme se také na atypické stavební detaily',
      'Provádíme autorský dozor',
    ],
  },
  {
    id: 'mesta-a-statni-instituce',
    name: 'Města a státní instituce',
    title: 'Projekty, které zlepšují prostředí nás všech',
    text: 'Klienti, města a státní instituce financují stavební záměry z veřejných prostředků. Pro ně dle zadání tvoříme dokumentaci v souladu se zákonem 134/2016 Sb. o zadávání veřejných zakázek. Vše s důrazem na transparentnost, kvalitu a funkční urbanismus. Jsme zkušeným a spolehlivým partnerem pro veřejné zakázky.',
    items: [
      'Vytváříme architektonické studie a variantní návrhy',
      'Analyzujeme návratnost investic a jejich vliv na hospodárnost provozu stavby z pohledu energetické náročnosti (NPV, IRR, PP)',
      'Provádíme kompletní projektovou dokumentaci dle vyhlášky 131/2024 Sb.',
      'Provádíme dokumentaci pro výběr zhotovitele',
      'Položkový rozpočet (výkaz výměr) dle zákona č. 134/2016 Sb. a vyhlášky č. 169/2016 Sb.',
      'Výkaz výměr',
      'Vypracováváme nebo se podílíme na výrobní dokumentaci',
      'Specializujeme se na atypické stavební detaily',
      'Provádíme autorský dozor',
    ],
  },
  {
    id: 'architekti-a-projektanti',
    name: 'Architekti a projektanti',
    title: 'Technické zázemí pro vaše nápady',
    text: 'Spolupracujeme s architekty a projekčními kancelářemi, kterým zajišťujeme zpracování vyšších stupňů dokumentace na základě jejich návrhů. Respektujeme autorská řešení původního návrhu a za účelem jejich dosažení při realizaci vytváříme atypické stavební detaily nebo dílenské dokumentace.',
    items: [
      'Provádíme kompletní projektovou dokumentaci dle vyhlášky 131/2024 Sb.',
      'Dokumentaci pro výběr zhotovitele',
      'Položkový rozpočet',
      'Výkaz výměr',
      'Provádíme autorský dozor',
      'Navrhujeme betonové, ocelové a dřevěné konstrukce',
      'Vypracováváme nebo se podílíme na výrobní dokumentaci',
      'Posuzujeme konstrukce z pohledu tepelné techniky',
      'Specializujeme se na atypické stavební detaily',
    ],
  },
];

export const services = [
  {
    id: 'projekcni-kancelar',
    title: 'Projekční kancelář',
    text: 'Poskytujeme komplexní projekční a konzultační služby pro bytové, občanské i průmyslové stavby, včetně koordinace všech přidružených profesí.',
  },
  {
    id: 'inzenyrska-cinnost',
    title: 'Inženýrská činnost',
    text: 'Zajišťujeme projednání záměru s dotčenými orgány státní správy a povolení záměru.',
  },
  {
    id: 'marketing-a-branding',
    title: 'Marketing a branding',
    text: 'Pomůžeme vám vybudovat silnou značku. Navrhneme komunikační strategii, firemní identitu i web a zajistíme také online i offline materiály.',
  },
];

export const values = [
  {
    title: 'Odpovědnost',
    motto: ['ctíme dohodu', 'a vycházíme klientovi vstříc'],
    text: 'Projektům se věnujeme naplno – od návrhu po dokončení.',
  },
  {
    title: 'Přesnost',
    motto: ['každý detail', 'má svůj význam'],
    text: 'Projekty tvoříme s technickou a estetickou přesností.',
  },
  {
    title: 'Partnerství',
    motto: ['nasloucháme, přemýšlíme,', 'hledáme řešení'],
    text: 'Úspěch našich klientů je i naším úspěchem.',
  },
];

export const history = [
  {
    when: '1990',
    text: 'Vznikají první základy společnosti IM Projekt. Budoucí společníci definují vizi firmy poskytující komplexní služby v oblasti investiční výstavby.',
  },
  {
    when: '1992',
    text: 'Společnost IM Projekt, spol. s r. o., je zapsána do obchodního rejstříku a zahajuje činnost v právní formě s ručením omezeným. Firma získává první významné zakázky s dlouhodobým přesahem.',
  },
  {
    when: '90. léta',
    text: 'Postupná stabilizace a rozvoj společnosti i v náročném období proměn trhu. Vzniká silné odborné zázemí postavené na zkušenostech projektantů a inženýrů z renomovaných projektových organizací.',
  },
  {
    when: 'Rozšíření služeb',
    text: 'Z původně projektové kanceláře se IM Projekt rozvíjí v partnera poskytujícího kompletní servis v oblasti investiční výstavby – od předprojektové přípravy přes projektovou dokumentaci až po inženýrskou činnost, technický dozor a kolaudace.',
  },
  {
    when: 'Dnes',
    text: 'IM Projekt je stabilní a respektovaná projekční a inženýrská kancelář, která klientům nabízí komplexní technická řešení a dlouhodobé partnerství při realizaci jejich záměrů.',
  },
];

export const clients = [
  { name: 'Obermayer Helika', logo: obermayer },
  { name: 'Karlín blok', logo: karlinblok },
  { name: 'Škoda', logo: skoda },
  { name: 'Klaudiánova nemocnice', logo: klaudianova },
  { name: 'Preco Group', logo: precogroup },
  { name: 'Jílové u Prahy', logo: jilove },
  { name: 'Městská část Praha 5', logo: praha5 },
];
