import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const TOP_FOCUS_ID = "page-top";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure the browser doesn't try to restore scroll position on SPA navigations.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    // Prevent focused footer links from pulling the scroll back down after navigation.
    const topEl = document.getElementById(TOP_FOCUS_ID) as HTMLElement | null;
    if (topEl) {
      try {
        topEl.focus({ preventScroll: true });
      } catch {
        topEl.focus();
      }
    }

    // Force instant scroll to top even if the site uses smooth scrolling.
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    window.scrollTo({ top: 0, left: 0 });
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      html.style.scrollBehavior = prev;
    });
  }, [pathname]);

  // Focus target at the top of the document for accessibility + scroll stability
  return <div id={TOP_FOCUS_ID} tabIndex={-1} className="sr-only" aria-hidden="true" />;
};

export default ScrollToTop;
