import { NextRequest } from "next/server";

const OPENAI_URL = "region-9.seetacloud.com:19628";
const DEFAULT_PROTOCOL = "http";
const PROTOCOL = process.env.PROTOCOL ?? DEFAULT_PROTOCOL;
const BASE_URL = process.env.BASE_URL ?? OPENAI_URL;

export async function requestOpenai(req: NextRequest) {
  const apiKey = req.headers.get("token");
  const openaiPath = req.headers.get("path");

  console.log("[RequestPath] ", `${PROTOCOL}://${BASE_URL}/${openaiPath}`);

  return fetch(`${PROTOCOL}://${BASE_URL}/${openaiPath}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    method: req.method,
    body: req.body,
    cache: "no-store",
  });
}
