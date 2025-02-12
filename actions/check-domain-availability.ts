"use server";

export async function checkDomains(domains: string[]) {
  const res = await fetch(
    "https://n8n.evanfy.com/webhook/check-domain-availability",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domains }),
    }
  );

  const data = await res.json();

  return data.domains;
}
