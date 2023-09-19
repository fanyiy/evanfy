export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
        },
      ],
      sitemap: 'https://evanyang.dev/sitemap.xml',
      host: 'https://evanyang.dev',
    };
  }