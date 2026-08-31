import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_visitor_id";
const SESSION_KEY = "portfolio_visit_tracked";

function getVisitorId(): string {
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `v_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    // localStorage blocked - fall back to an ephemeral id
    return `v_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  }
}

/**
 * Records one visit per browser session and returns the total distinct
 * visitor count. Fails silently (returns null) if the backend is unreachable.
 */
export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        // Loaded lazily so the Supabase client stays out of the initial bundle.
        const { supabase } = await import("@/integrations/supabase/client");

        let alreadyTracked = false;
        try {
          alreadyTracked = sessionStorage.getItem(SESSION_KEY) === "1";
        } catch {
          /* ignore */
        }

        if (!alreadyTracked) {
          await supabase.rpc("track_visit", { p_visitor_id: getVisitorId() });
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {
            /* ignore */
          }
        }

        const { data, error } = await supabase.rpc("get_visitor_count");
        if (!cancelled && !error && typeof data === "number") {
          setCount(data);
        }
      } catch {
        /* backend unavailable - leave count null */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}
