import { useState } from "react";

const TicketIndicatorColors = {
  onsale: "green",
  offsale: "red",
  canceled: "black",
  postponed: "orange",
  rescheduled: "orange",
};
type TicketIndicator = keyof typeof TicketIndicatorColors;

interface props {
  headline: string;
  text: string;
  href?: string;
}

interface statusProps {
  headline: string;
  ticketstatus?: TicketIndicator | string;
}

export function EventTextField({ headline, text }: props) {
  if (text.trim() === "") return null;
  return (
    <div className="flex flex-col items-center w-full">
      <Headline headline={headline} />
      <Text text={text} />
    </div>
  );
}

export function EventLinkField({ headline, text, href }: props) {
  if (text.trim() === "") return null;
  return (
    <div className="flex flex-col items-center w-full">
      <Headline headline={headline} />
      <Link text={text} href={href || "#"} />
    </div>
  );
}

export function EventSaleField({ headline, ticketstatus }: statusProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Headline headline={headline} />
      <div
        className="p-2 font-medium rounded-lg text-white uppercase"
        style={{
          backgroundColor:
            ticketstatus &&
            TicketIndicatorColors[
              ticketstatus.toLowerCase() as TicketIndicator
            ],
        }}
      >
        {ticketstatus}
      </div>
    </div>
  );
}

export function EventCollapsable({ headline, text }: props) {
  const [show, setShow] = useState(false);
  if(!text) return null
  return (
    <div className="flex flex-col items-center w-full">
      <Headline headline={headline} />
      <Text text={show ? text : text.substring(0, 100)} />
      {!(text.length <= 200) && (
        <button
          className="py-2 underline text-cyan-400"
          onClick={() => setShow((prev) => !prev)}
        >
          Show {show ? "less" : "more"}
        </button>
      )}
    </div>
  );
}

function Headline({ headline }: { headline: string }) {
  return <h4 className="font-bold text-white">{headline}</h4>;
}

function Text({ text }: { text: string }) {
  return <p className="whitespace-normal text-gray-300 text-center">{text}</p>;
}

function Link({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} className="whitespace-normal underline text-cyan-400">
      {text}
    </a>
  );
}
