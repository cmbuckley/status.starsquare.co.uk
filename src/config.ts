import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Status Page',
    url: 'https://status.starsquare.co.uk',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [{
    id: 'bux-re',
    name: 'Bux Short URL',
    url: 'https://bux.re',
	expectStatus: 302,
  }, {
    id: 'cmbuckley-co-uk',
    name: 'Chris Personal Site',
    url: 'https://cmbuckley.co.uk/',
  }, {
    id: 'cmbuckley-me',
    name: 'Bluesky',
    url: 'https://cmbuckley.me/',
	expectStatus: 302,
  }, {
    id: 'emilia-buckley-name',
    name: 'Emilia Buckley',
    url: 'https://emilia.buckley.name',
  }, {
    id: 'emilia-chris-wedding-starsquare-co-uk',
    name: 'Emilia & Chris Wedding',
    url: 'https://emilia-chris-wedding.starsquare.co.uk',
  }, {
    id: 'icorrect-it',
    name: 'I Correct It',
    url: 'https://icorrect.it',
  }, {
    id: 'jordanhume-co-uk',
    name: 'Jordan Hume',
    url: 'https://jordanhume.co.uk',
  }, {
    id: 'misterf-co-uk',
    name: 'Mister F',
    url: 'https://misterf.co.uk',
  }, {
    id: 'setcookie-net',
    name: 'Set Cookie',
    url: 'https://setcookie.net/',
  }, {
    id: 'scripts-cmbuckley-co-uk',
    name: 'Scripts',
    url: 'https://scripts.cmbuckley.co.uk/',
  }, {
    id: 'starsquare-co-uk',
    name: 'StarSquare Designs',
    url: 'https://starsquare.co.uk',
  }, {
    id: 'thesparesshop-co-uk',
    name: 'The Spares Shop',
    url: 'https://thesparesshop.co.uk',
  }, {
    id: 'vistaverde-network-home-assistant',
    name: 'Home Assistant',
    url: 'https://pi.vistaverde.network',
  }, {
    id: 'yorkstudenthomes-com',
    name: 'York Student Homes',
    url: 'https://yorkstudenthomes.com',
  }],
}
