import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { ACCENT_COLORS, MARK_SYMBOLS, THEMES, TIERS } from "./types";

function App() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-[1fr_1fr]">
      <section className="flex flex-col">
        <form className="flex flex-col gap-5 p-6 lg:min-h-dvh">
          <header className="flex flex-col gap-1">
            <h1>New ticket</h1>
            <p>Edits render live in the preview →</p>
          </header>

          <fieldset className="grid grid-cols-2 gap-5 lg:grid-cols-1">
            <legend className="sr-only">User info</legend>
            <label htmlFor="eventName">
              Event Name
              <input type="text" name="eventName" id="eventName" />
            </label>

            <label htmlFor="holderName">
              Holder Name
              <input type="text" name="holderName" id="date" />
            </label>

            <label htmlFor="date">
              Date
              <input type="date" name="date" id="date" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Tier</legend>
            {Object.entries(TIERS).map(([label, tier]) => (
              <label htmlFor={`tier-${tier}`} key={`tier-${tier}`}>
                {label}
                <input
                  type="radio"
                  name="tier"
                  id={`tier-${tier}`}
                  value={tier}
                />
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Accent Color</legend>
            {Object.entries(ACCENT_COLORS).map(([label, color]) => (
              <label
                htmlFor={`accent-color-${color}`}
                key={`accent-color-${color}`}
              >
                {label}
                <input
                  type="radio"
                  name="accent-color"
                  id={`accent-color-${color}`}
                  value={color}
                />
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Mark</legend>
            {Object.entries(MARK_SYMBOLS).map(([label, symbol]) => (
              <label htmlFor={`mark-${symbol}`} key={`mark-${symbol}`}>
                {label}
                <input
                  type="radio"
                  name="mark"
                  id={`mark-${symbol}`}
                  value={symbol}
                />
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Theme</legend>
            {Object.entries(THEMES).map(([label, theme]) => (
              <label htmlFor={`theme-${theme}`} key={`theme-${theme}`}>
                {label}
                <input
                  type="radio"
                  name="theme"
                  id={`theme-${theme}`}
                  value={theme}
                />
              </label>
            ))}
          </fieldset>
        </form>
      </section>
      <section className="flex h-full min-h-0 items-center justify-center bg-slate-300 p-6"></section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
