<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: nuxt-healthz
- Description: My new Nuxt module
-->

# nuxt-healthz

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

The nuxt module to add the default healthcheck path `/healthcheck` in Nuxt App.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/lukhaiminh/nuxt-healthz?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://example.com)

## Features
<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp; Found 0 vulnerabilitiesup to date
```
audited 810 packages in 2s
192 packages are looking for funding
```

- 🚠 &nbsp; No dependencies, no third parties
- 🌲 &nbsp; Compatibility with all Nuxt versions: nuxt2, nuxt3.
- ⛰ &nbsp; After install done navigate to `/healthcheck`. e.g. http://localhost:3000/healthcheck
- 🚠 &nbsp; The important and necessary server parameters will be automatically retrieved and displayed.

```json
{
  "status": "success",
  "upSinceServerTime": "2025-05-05T07:17:18.060Z", // the server start time of service
  "upSince": "Mon May 05 2025 14:39:08 GMT+0700 (Indochina Time) | Monday, 5 May 2025 at 16:39:08 GMT+9 (Asia/Seoul)", // your local time | custom time converted (default is `Asia/Seoul`)
  "uptime": 15.137034667, // the number of seconds the current Node.js process has been running.
  "localTime": "2025-04-24T08:42:13.203Z",
  "service": {
    "name": "nuxt-healthz-playground"
  },
  "env": {
    "nodeEnv": "development",
    "nodeVersion": "v22.14.0",
    "processName": "/Users/moon/.nvm/versions/node/v22.14.0/bin/node",
    "pid": 1733,
    "cwd": "/Users/moon/Projects/2025/moon-module"
  }
}
```
- 🌲 &nbsp;Custom `/healthcheck` endpoint:
```
 healthz: {
    path: '/api/healthz',
  }
```
navigate to `/api/healthz`. e.g. http://localhost:3000/api/healthz
- 🚠 &nbsp; TODO: custom timezone: please write a comment if you need it. 

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-healthz
```

## Manual Setup
```
npm install nuxt-healthz

# or install as dev dependencies
npm i -D nuxt-healthz

# Using yarn
yarn add nuxt-healthz

# Using pnpm
pnpm add nuxt-healthz
```

```
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    'nuxt-healthz'
  ],
  healthz: {
    // options here
    path: '/api/healthz'
  }
})
```

That's it! You can now use `nuxt-healthz` module in your Nuxt app ✨

## List of All Timezones
<details>
  <summary>Support 417 timezones -  Javascript official timezones</summary>

  ```
  Africa/Abidjan
  Africa/Accra
  Africa/Addis_Ababa
  Africa/Algiers
  Africa/Asmera
  Africa/Bamako
  Africa/Bangui
  Africa/Banjul
  Africa/Bissau
  Africa/Blantyre
  Africa/Brazzaville
  Africa/Bujumbura
  Africa/Cairo
  Africa/Casablanca
  Africa/Ceuta
  Africa/Conakry
  Africa/Dakar
  Africa/Dar_es_Salaam
  Africa/Djibouti
  Africa/Douala
  Africa/El_Aaiun
  Africa/Freetown
  Africa/Gaborone
  Africa/Harare
  Africa/Johannesburg
  Africa/Juba
  Africa/Kampala
  Africa/Khartoum
  Africa/Kigali
  Africa/Kinshasa
  Africa/Lagos
  Africa/Libreville
  Africa/Lome
  Africa/Luanda
  Africa/Lubumbashi
  Africa/Lusaka
  Africa/Malabo
  Africa/Maputo
  Africa/Maseru
  Africa/Mbabane
  Africa/Mogadishu
  Africa/Monrovia
  Africa/Nairobi
  Africa/Ndjamena
  Africa/Niamey
  Africa/Nouakchott
  Africa/Ouagadougou
  Africa/Porto-Novo
  Africa/Sao_Tome
  Africa/Tripoli
  Africa/Tunis
  Africa/Windhoek
  America/Adak
  America/Anchorage
  America/Anguilla
  America/Antigua
  America/Araguaina
  America/Argentina/La_Rioja
  America/Argentina/Rio_Gallegos
  America/Argentina/Salta
  America/Argentina/San_Juan
  America/Argentina/San_Luis
  America/Argentina/Tucuman
  America/Argentina/Ushuaia
  America/Aruba
  America/Asuncion
  America/Bahia
  America/Bahia_Banderas
  America/Barbados
  America/Belem
  America/Belize
  America/Blanc-Sablon
  America/Boa_Vista
  America/Bogota
  America/Boise
  America/Buenos_Aires
  America/Cambridge_Bay
  America/Campo_Grande
  America/Cancun
  America/Caracas
  America/Catamarca
  America/Cayenne
  America/Cayman
  America/Chicago
  America/Chihuahua
  America/Ciudad_Juarez
  America/Coral_Harbour
  America/Cordoba
  America/Costa_Rica
  America/Creston
  America/Cuiaba
  America/Curacao
  America/Danmarkshavn
  America/Dawson
  America/Dawson_Creek
  America/Denver
  America/Detroit
  America/Dominica
  America/Edmonton
  America/Eirunepe
  America/El_Salvador
  America/Fort_Nelson
  America/Fortaleza
  America/Glace_Bay
  America/Godthab
  America/Goose_Bay
  America/Grand_Turk
  America/Grenada
  America/Guadeloupe
  America/Guatemala
  America/Guayaquil
  America/Guyana
  America/Halifax
  America/Havana
  America/Hermosillo
  America/Indiana/Knox
  America/Indiana/Marengo
  America/Indiana/Petersburg
  America/Indiana/Tell_City
  America/Indiana/Vevay
  America/Indiana/Vincennes
  America/Indiana/Winamac
  America/Indianapolis
  America/Inuvik
  America/Iqaluit
  America/Jamaica
  America/Jujuy
  America/Juneau
  America/Kentucky/Monticello
  America/Kralendijk
  America/La_Paz
  America/Lima
  America/Los_Angeles
  America/Louisville
  America/Lower_Princes
  America/Maceio
  America/Managua
  America/Manaus
  America/Marigot
  America/Martinique
  America/Matamoros
  America/Mazatlan
  America/Mendoza
  America/Menominee
  America/Merida
  America/Metlakatla
  America/Mexico_City
  America/Miquelon
  America/Moncton
  America/Monterrey
  America/Montevideo
  America/Montserrat
  America/Nassau
  America/New_York
  America/Nome
  America/Noronha
  America/North_Dakota/Beulah
  America/North_Dakota/Center
  America/North_Dakota/New_Salem
  America/Ojinaga
  America/Panama
  America/Paramaribo
  America/Phoenix
  America/Port-au-Prince
  America/Port_of_Spain
  America/Porto_Velho
  America/Puerto_Rico
  America/Punta_Arenas
  America/Rankin_Inlet
  America/Recife
  America/Regina
  America/Resolute
  America/Rio_Branco
  America/Santarem
  America/Santiago
  America/Santo_Domingo
  America/Sao_Paulo
  America/Scoresbysund
  America/Sitka
  America/St_Barthelemy
  America/St_Johns
  America/St_Kitts
  America/St_Lucia
  America/St_Thomas
  America/St_Vincent
  America/Swift_Current
  America/Tegucigalpa
  America/Thule
  America/Tijuana
  America/Toronto
  America/Tortola
  America/Vancouver
  America/Whitehorse
  America/Winnipeg
  America/Yakutat
  Antarctica/Casey
  Antarctica/Davis
  Antarctica/DumontDUrville
  Antarctica/Macquarie
  Antarctica/Mawson
  Antarctica/McMurdo
  Antarctica/Palmer
  Antarctica/Rothera
  Antarctica/Syowa
  Antarctica/Troll
  Antarctica/Vostok
  Arctic/Longyearbyen
  Asia/Aden
  Asia/Almaty
  Asia/Amman
  Asia/Anadyr
  Asia/Aqtau
  Asia/Aqtobe
  Asia/Ashgabat
  Asia/Atyrau
  Asia/Baghdad
  Asia/Bahrain
  Asia/Baku
  Asia/Bangkok
  Asia/Barnaul
  Asia/Beirut
  Asia/Bishkek
  Asia/Brunei
  Asia/Calcutta
  Asia/Chita
  Asia/Colombo
  Asia/Damascus
  Asia/Dhaka
  Asia/Dili
  Asia/Dubai
  Asia/Dushanbe
  Asia/Famagusta
  Asia/Gaza
  Asia/Hebron
  Asia/Hong_Kong
  Asia/Hovd
  Asia/Irkutsk
  Asia/Jakarta
  Asia/Jayapura
  Asia/Jerusalem
  Asia/Kabul
  Asia/Kamchatka
  Asia/Karachi
  Asia/Katmandu
  Asia/Khandyga
  Asia/Krasnoyarsk
  Asia/Kuala_Lumpur
  Asia/Kuching
  Asia/Kuwait
  Asia/Macau
  Asia/Magadan
  Asia/Makassar
  Asia/Manila
  Asia/Muscat
  Asia/Nicosia
  Asia/Novokuznetsk
  Asia/Novosibirsk
  Asia/Omsk
  Asia/Oral
  Asia/Phnom_Penh
  Asia/Pontianak
  Asia/Pyongyang
  Asia/Qatar
  Asia/Qostanay
  Asia/Qyzylorda
  Asia/Rangoon
  Asia/Riyadh
  Asia/Saigon
  Asia/Sakhalin
  Asia/Samarkand
  Asia/Seoul
  Asia/Shanghai
  Asia/Singapore
  Asia/Srednekolymsk
  Asia/Taipei
  Asia/Tashkent
  Asia/Tbilisi
  Asia/Tehran
  Asia/Thimphu
  Asia/Tokyo
  Asia/Tomsk
  Asia/Ulaanbaatar
  Asia/Urumqi
  Asia/Ust-Nera
  Asia/Vientiane
  Asia/Vladivostok
  Asia/Yakutsk
  Asia/Yekaterinburg
  Asia/Yerevan
  Atlantic/Azores
  Atlantic/Bermuda
  Atlantic/Canary
  Atlantic/Cape_Verde
  Atlantic/Faeroe
  Atlantic/Madeira
  Atlantic/Reykjavik
  Atlantic/South_Georgia
  Atlantic/St_Helena
  Atlantic/Stanley
  Australia/Adelaide
  Australia/Brisbane
  Australia/Broken_Hill
  Australia/Darwin
  Australia/Eucla
  Australia/Hobart
  Australia/Lindeman
  Australia/Lord_Howe
  Australia/Melbourne
  Australia/Perth
  Australia/Sydney
  Europe/Amsterdam
  Europe/Andorra
  Europe/Astrakhan
  Europe/Athens
  Europe/Belgrade
  Europe/Berlin
  Europe/Bratislava
  Europe/Brussels
  Europe/Bucharest
  Europe/Budapest
  Europe/Busingen
  Europe/Chisinau
  Europe/Copenhagen
  Europe/Dublin
  Europe/Gibraltar
  Europe/Guernsey
  Europe/Helsinki
  Europe/Isle_of_Man
  Europe/Istanbul
  Europe/Jersey
  Europe/Kaliningrad
  Europe/Kiev
  Europe/Kirov
  Europe/Lisbon
  Europe/Ljubljana
  Europe/London
  Europe/Luxembourg
  Europe/Madrid
  Europe/Malta
  Europe/Mariehamn
  Europe/Minsk
  Europe/Monaco
  Europe/Moscow
  Europe/Oslo
  Europe/Paris
  Europe/Podgorica
  Europe/Prague
  Europe/Riga
  Europe/Rome
  Europe/Samara
  Europe/San_Marino
  Europe/Sarajevo
  Europe/Saratov
  Europe/Simferopol
  Europe/Skopje
  Europe/Sofia
  Europe/Stockholm
  Europe/Tallinn
  Europe/Tirane
  Europe/Ulyanovsk
  Europe/Vaduz
  Europe/Vatican
  Europe/Vienna
  Europe/Vilnius
  Europe/Volgograd
  Europe/Warsaw
  Europe/Zagreb
  Europe/Zurich
  Indian/Antananarivo
  Indian/Chagos
  Indian/Christmas
  Indian/Cocos
  Indian/Comoro
  Indian/Kerguelen
  Indian/Mahe
  Indian/Maldives
  Indian/Mauritius
  Indian/Mayotte
  Indian/Reunion
  Pacific/Apia
  Pacific/Auckland
  Pacific/Bougainville
  Pacific/Chatham
  Pacific/Easter
  Pacific/Efate
  Pacific/Enderbury
  Pacific/Fakaofo
  Pacific/Fiji
  Pacific/Funafuti
  Pacific/Galapagos
  Pacific/Gambier
  Pacific/Guadalcanal
  Pacific/Guam
  Pacific/Honolulu
  Pacific/Kiritimati
  Pacific/Kosrae
  Pacific/Kwajalein
  Pacific/Majuro
  Pacific/Marquesas
  Pacific/Midway
  Pacific/Nauru
  Pacific/Niue
  Pacific/Norfolk
  Pacific/Noumea
  Pacific/Pago_Pago
  Pacific/Palau
  Pacific/Pitcairn
  Pacific/Ponape
  Pacific/Port_Moresby
  Pacific/Rarotonga
  Pacific/Saipan
  Pacific/Tahiti
  Pacific/Tarawa
  Pacific/Tongatapu
  Pacific/Truk
  Pacific/Wake
  Pacific/Wallis
```
</details>

## License

[MIT License](./LICENSE)


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-healthz/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-healthz

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-healthz.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-healthz

[license-src]: https://img.shields.io/npm/l/nuxt-healthz.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-healthz

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
