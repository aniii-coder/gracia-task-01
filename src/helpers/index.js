import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useRouteInfo() {
  const { pathname, search } = useLocation();

  return useMemo(() => {
    const slugs = pathname.split("/").filter(Boolean);

    const query = Object.fromEntries(new URLSearchParams(search));

    return {
      pathname,
      search,

      // ["rms", "disbursement", "LN001-24-1001"]
      slugs,

      // { page: "1", status: "verified" }
      query,

      // ["rms", "disbursement", { page: "1" }]
      route: [
        ...slugs,
        ...(Object.keys(query).length ? [query] : []),
      ],

      // "/rms/disbursement"
      basePath: `/${slugs.slice(0, 2).join("/")}`,

      // "LN001-24-1001"
      dynamicSlug: slugs.length > 2 ? slugs[2] : null,
    };
  }, [pathname, search]);
}

export const toTitleCase = (text = "") =>
  text
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");