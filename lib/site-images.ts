/**
 * Foto reali in public/images (set Montecchia Green).
 * Hero e galleria home mappati in base al nome file.
 */

/** Logo ufficiale (PNG) */
export const BRAND_LOGO_SRC = '/images/logo-montecchia-green.png' as const;
export const BRAND_LOGO_ALT_IT = 'La Montecchia Green — lounge bar e ristorante a Selvazzano Dentro, Padova, ai Colli Euganei';
export const BRAND_LOGO_ALT_EN = 'La Montecchia Green — lounge bar and restaurant in Selvazzano Dentro, near Padua, Euganean Hills';

export const PAGE_HERO_IMAGES = {
  // Hero homepage: facciata storica della Club House con terrazza e dehors.
  home: '/images/facciata-montecchia-green.jpg',
  ristorante: '/images/chef-preparing-a-dish.jpg',
  eventi: '/images/Sala-Ristorante-eventi.jpg',
  menu: '/images/tagliatelle-funghi.jpg',
  prenota: '/images/tavolo-in-salone-con-piatti.jpg',
  contatti: '/images/terrazza-from-outside.jpg',
} as const;

export type HomeGalleryItem = {
  src: string;
  altIt: string;
  altEn: string;
};

export const HOME_GALLERY: HomeGalleryItem[] = [
  {
    src: '/images/tavolo-in-salone-con-piatti.jpg',
    altIt: 'Tavolo apparecchiato nel salone del ristorante La Montecchia Green a Selvazzano Dentro, Padova',
    altEn: 'Set table in the dining room at La Montecchia Green restaurant, Selvazzano Dentro near Padua',
  },
  {
    src: '/images/scrimp-carpaccio.jpg',
    altIt: 'Carpaccio di gamberi — antipasto al ristorante La Montecchia Green, cucina italiana ai Colli Euganei',
    altEn: 'Shrimp carpaccio appetizer at La Montecchia Green, Italian cuisine in the Euganean Hills near Padua',
  },
  {
    src: '/images/parmigiana-di-melanzane-sfondoverde.jpg',
    altIt: 'Parmigiana di melanzane — piatto del ristorante La Montecchia Green, Selvazzano Dentro, Padova',
    altEn: 'Eggplant parmigiana dish at La Montecchia Green restaurant, Selvazzano Dentro near Padua',
  },
  {
    src: '/images/aperl-spritz.jpg',
    altIt: 'Aperitivo spritz sulla terrazza de La Montecchia Green con vista sul Golf della Montecchia, Colli Euganei',
    altEn: 'Aperitif spritz on the terrace at La Montecchia Green overlooking Montecchia Golf Course, Euganean Hills',
  },
  {
    src: '/images/cappuccino-croassint.jpg',
    altIt: 'Colazione con cappuccino e cornetto al lounge bar La Montecchia Green, Selvazzano Dentro, Padova',
    altEn: 'Breakfast with cappuccino and croissant at La Montecchia Green lounge bar, Selvazzano Dentro near Padua',
  },
  {
    src: '/images/verdure-del-nostro-orto.jpg',
    altIt: 'Verdure fresche dell’orto de La Montecchia Green, ingredienti km zero ai Colli Euganei, Padova',
    altEn: 'Fresh vegetables from the garden at La Montecchia Green, locally sourced ingredients in the Euganean Hills near Padua',
  },
];
