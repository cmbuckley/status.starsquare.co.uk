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
    name: 'bux.re',
    url: 'https://bux.re',
	expectStatus: 302,
  }, {
    id: 'cmbuckley-co-uk',
    name: 'cmbuckley.co.uk',
    url: 'https://cmbuckley.co.uk/',
  }, {
    id: 'emilia-buckley-name',
    name: 'emilia.buckley.name',
    url: 'https://emilia.buckley.name',
  }, {
    id: 'emilia-chris-wedding',
    name: 'emilia-chris-wedding.starsquare.co.uk',
    url: 'https://emilia-chris-wedding.starsquare.co.uk',
  }, {
    id: 'icorrect-it',
    name: 'icorrect.it',
    url: 'https://icorrect.it',
  }, {
    id: 'misterf-co-uk',
    name: 'misterf.co.uk',
    url: 'https://misterf.co.uk',
  }, {
    id: 'setcookie-net',
    name: 'setcookie.net',
    url: 'https://setcookie.net/',
  }, {
    id: 'scripts-cmbuckley-co-uk',
    name: 'scripts.cmbuckley.co.uk',
    url: 'https://scripts.cmbuckley.co.uk/',
  }, {
    id: 'starsquare-co-uk',
    name: 'starsquare.co.uk',
    url: 'https://starsquare.co.uk',
  }, {
    id: 'thesparesshop-co-uk',
    name: 'thesparesshop.co.uk',
    url: 'https://thesparesshop.co.uk',
  }, {
    id: 'vistaverde-network-home-assistant',
    name: 'Home Assistant',
    url: 'https://pi.vistaverde.network',
  }, {
    id: 'yorkstudenthomes-com',
    name: 'yorkstudenthomes.com',
    url: 'https://yorkstudenthomes.com',
  }],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
