import { ref, computed } from "vue";

export function useRelativeTime() {
  const now = ref(new Date());
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const formatRelativeTime = (date: Date) => {
    const diffInSeconds = Math.floor((now.value.getTime() - date.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return rtf.format(-diffInDays, "day");
    } else if (diffInHours > 0) {
      return rtf.format(-diffInHours, "hour");
    } else if (diffInMinutes > 0) {
      return rtf.format(-diffInMinutes, "minute");
    } else {
      return rtf.format(-diffInSeconds, "second");
    }
  };

  return { now, formatRelativeTime };
}
