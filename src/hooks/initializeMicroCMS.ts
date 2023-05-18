import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  apiKey: import.meta.env.VITE_MICROCMS_APIKEY,
  serviceDomain: import.meta.env.VITE_MICROCMS_DOMAIN,
});
