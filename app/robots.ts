export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
        },
      ],
      sitemap: 'https://evanfy.com/sitemap.xml',
      host: 'https://evanfy.com',
    };
  }