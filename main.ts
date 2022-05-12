import { serve } from "https://deno.land/std@0.137.0/http/server.ts";

function handler(_req: Request): Response {
  const message = JSON.stringify({message: "This is what I want to say."})
  return new Response(message, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

serve(handler);