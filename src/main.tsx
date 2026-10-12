import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import {
  ACCENT_COLORS,
  MARK_SYMBOLS,
  THEMES,
  TicketFormState,
  TIERS,
} from "./types";

const defaultTicketState: TicketFormState = {
  eventName: "",
  holderName: "",
  date: "",
  tier: TIERS.VIP,
  accentColor: ACCENT_COLORS.INDIGO,
  mark: MARK_SYMBOLS.MARK,
  theme: THEMES.Midnight,
};

function App() {
  const [ticket, setTicket] = useState(defaultTicketState);

  const formChangeHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    const target = e.target;

    setTicket((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <main className="grid min-h-dvh lg:grid-cols-[1fr_1fr]">
      <section className="flex flex-col">
        <form
          className="flex flex-col gap-5 p-6 lg:min-h-dvh"
          onChange={formChangeHandler}
        >
          <header className="flex flex-col gap-1">
            <h1>New ticket</h1>
            <p>Edits render live in the preview →</p>
          </header>

          <fieldset className="grid grid-cols-2 gap-5 lg:grid-cols-1">
            <legend className="sr-only">User info</legend>
            <label htmlFor="eventName">
              Event Name
              <input
                type="text"
                name="eventName"
                id="eventName"
                defaultValue={defaultTicketState.eventName}
              />
            </label>

            <label htmlFor="holderName">
              Holder Name
              <input
                type="text"
                name="holderName"
                id="date"
                defaultValue={defaultTicketState.holderName}
              />
            </label>

            <label htmlFor="date">
              Date
              <input
                type="date"
                name="date"
                id="date"
                defaultValue={defaultTicketState.date}
              />
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
                  defaultChecked={defaultTicketState.tier === tier}
                />
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Accent Color</legend>
            {Object.entries(ACCENT_COLORS).map(([label, color]) => (
              <label
                htmlFor={`accentColor-${color}`}
                key={`accentColor-${color}`}
              >
                {label}
                <input
                  type="radio"
                  name="accentColor"
                  id={`accentColor-${color}`}
                  value={color}
                  defaultChecked={defaultTicketState.accentColor === color}
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
                  defaultChecked={defaultTicketState.mark === symbol}
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
                  defaultChecked={defaultTicketState.theme === theme}
                />
              </label>
            ))}
          </fieldset>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white text-center py-3.5 rounded-xl"
          >
            Save Ticket
          </button>
        </form>
      </section>
      <section className="flex flex-col h-full min-h-0 items-center justify-center bg-slate-300 p-6">
        <p>event name: {ticket.eventName}</p>
        <p>holder name: {ticket.holderName}</p>
        <p>date: {ticket.date}</p>
        <p>accent color: {ticket.accentColor}</p>
        <p>mark: {ticket.mark}</p>
        <p>theme: {ticket.theme}</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
