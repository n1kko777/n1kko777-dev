import React, { useEffect } from "react";

export const PatreonButton = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://c6.patreon.com/becomePatronButton.bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <a
      href="https://www.patreon.com/bePatron?u=35246432"
      data-patreon-widget-type="become-patron-button"
    >
      Become a Patron!
    </a>
  );
};
