export function getSafeRedirectPath(
  nextPath: string | null | undefined,
  fallback = "/dashboard"
) {
  if (!nextPath) {
    return fallback;
  }

  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return fallback;
  }

  return nextPath;
}
