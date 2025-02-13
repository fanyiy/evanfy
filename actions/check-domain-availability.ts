// "use server";

// interface DomainCheck {
//   names: string[];
//   tlds: string[];
// }

// export async function checkDomains(domains: string[]) {
//   // Split domain names into name and TLD arrays
//   const names: string[] = [];
//   const tlds = new Set<string>();

//   domains.forEach((domain) => {
//     const lastDotIndex = domain.lastIndexOf(".");
//     names.push(domain);
//     tlds.add(domain.slice(lastDotIndex + 1));
//   });

//   const res = await fetch(
//     "https://n8n.evanfy.com/webhook/check-domain-availability",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         names,
//         tlds: Array.from(tlds),
//       }),
//     }
//   );

//   const data = await res.json();

//   console.log(data);

//   return data.domains;
// }


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
