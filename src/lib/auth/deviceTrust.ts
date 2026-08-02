import { createHash, randomBytes } from "crypto";

export const DEVICE_TRUST_COOKIE = "device_trust";
export const DEVICE_TRUST_MAX_AGE_SECONDS = 30 * 24 * 60 * 60; // 30 days

export function hashDeviceToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function generateDeviceToken(): string {
  return randomBytes(32).toString("hex");
}
