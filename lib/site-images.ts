/**
 * Foto reali in public/images (set Montecchia Green).
 * Hero e galleria home mappati in base al nome file.
 */

/** Logo ufficiale (PNG) */
export const BRAND_LOGO_SRC = '/images/logo-montecchia-green.png' as const;
export const BRAND_LOGO_ALT_IT = 'La Montecchia Green — lounge bar e ristorante';
export const BRAND_LOGO_ALT_EN = 'La Montecchia Green — lounge bar and restaurant';

export const PAGE_HERO_IMAGES = {
  home: '/images/terrace-outside.jpeg',
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
    altIt: 'Tavolo apparecchiato nel salone del ristorante',
    altEn: 'Set table in the restaurant dining room',
  },
  {
    src: '/images/scrimp-carpaccio.jpg',
    altIt: 'Carpaccio di gamberi — antipasto',
    altEn: 'Shrimp carpaccio appetizer',
  },
  {
    src: '/images/parmigiana-di-melanzane-sfondoverde.jpg',
    altIt: 'Parmigiana di melanzane',
    altEn: 'Eggplant parmigiana',
  },
  {
    src: '/images/aperl-spritz.jpg',
    altIt: 'Aperitivo e spritz',
    altEn: 'Aperitif and spritz',
  },
  {
    src: '/images/cappuccino-croassint.jpg',
    altIt: 'Colazione con cappuccino e cornetto',
    altEn: 'Breakfast with cappuccino and croissant',
  },
  {
    src: '/images/verdure-del-nostro-orto.jpg',
    altIt: 'Verdure dell’orto de La Montecchia Green',
    altEn: 'Vegetables from our garden at La Montecchia Green',
  },
];
