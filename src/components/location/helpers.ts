export const getUTCTimeDifference = (
  offset: number | undefined
): string | null => {
  if (offset) {
    const start = offset > 0 ? "+" : "";
    return `${start}${(offset / 3600).toString().padStart(2, "0")}:00`;
  }
  return null;
};
