import Parser from 'rss-parser';

export async function getFeed() {
    const parser = new Parser();
    const feed = await parser.parseURL('http://127.0.0.1:8000/blog/feed');
    return {
        props: {
            imginsights: feed.items,
        }
    }
}