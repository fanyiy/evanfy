"use server";

import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

const domainSchema = z.object({
  suggestions: z.array(
    z.object({
      name: z.string(),
      explanation: z.string(),
    })
  ),
});

type DomainSuggestions = z.infer<typeof domainSchema>;

export async function generateDomains(
  userPrompt: string,
  numberOfDomains: number
): Promise<DomainSuggestions> {
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    schema: domainSchema.extend({
      suggestions: z
        .array(
          z.object({
            name: z.string(),
            explanation: z.string(),
          })
        )
        .length(numberOfDomains),
    }),
    prompt: `Generate ${numberOfDomains} creative and memorable domain name suggestions for: ${userPrompt}.
    Each suggestion should include a domain name and a very brief explanation (less than 10 words).

    Guidelines for domain suggestions:
    - Prioritize .com domains for better recognition and trust
    - Consider alternative TLDs like .io, .ai, .app, .co, etc. if they enhance the brand
    - Keep names short, memorable and easy to type
    - Ensure the domain relates clearly to the core concept
    - Avoid hyphens and numbers unless they add significant value
    - Consider brandability and uniqueness`,
  });

  return object;
}
