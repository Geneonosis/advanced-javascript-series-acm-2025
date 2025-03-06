import fetch from "node-fetch";

export async function shortenUrl(description, longUrl) {
    const longUrlEncoded = encodeURIComponent(longUrl);
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${longUrlEncoded}`);
    const shortUrl = await response.text();
    console.log(`Mermaid Diagram: ${shortUrl} - ${description}`);
}