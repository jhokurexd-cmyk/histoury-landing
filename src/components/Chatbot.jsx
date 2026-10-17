import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { CONTACT } from "../config/site";
import { answerQuestion, CHAT_TOPICS, supportEmail } from "../config/chat";
import "../styles/chat.css";

const WELCOME = { role: "bot", answer: "Hi, explorer! 👋 I'm Histoury's automated FAQ assistant. What would you like to know about the app?" };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [topics, setTopics] = useState(false);
  const timer = useRef(null);
  const scroll = useRef(null);
  const field = useRef(null);
  const launcher = useRef(null);
  const busy = useRef(false);

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    const viewport = window.visualViewport;
    if (!open || !viewport) return undefined;
    const update = () => {
      document.documentElement.style.setProperty("--chat-viewport-height", `${viewport.height}px`);
      document.documentElement.style.setProperty("--chat-keyboard-offset", `${Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop)}px`);
    };
    update();
    viewport.addEventListener("resize", update);
    viewport.addEventListener("scroll", update);
    return () => {
      viewport.removeEventListener("resize", update);
      viewport.removeEventListener("scroll", update);
      document.documentElement.style.removeProperty("--chat-viewport-height");
      document.documentElement.style.removeProperty("--chat-keyboard-offset");
    };
  }, [open]);
  useEffect(() => { if (scroll.current) scroll.current.scrollTop = scroll.current.scrollHeight; }, [messages, typing, open, topics]);
  useEffect(() => { if (open) field.current?.focus(); }, [open]);

  const close = () => { setOpen(false); launcher.current?.focus(); };
  const ask = (value) => {
    const question = value.trim().slice(0, 500);
    if (!question || busy.current) return;
    busy.current = true;
    setMessages((previous) => [...previous, { role: "user", answer: question }]);
    setInput("");
    setTopics(false);
    setTyping(true);
    timer.current = setTimeout(() => {
      setMessages((previous) => [...previous, { role: "bot", ...answerQuestion(question), question }]);
      setTyping(false);
      busy.current = false;
    }, 750);
  };

  return (
    <div className="histoury-chat">
      {open && <section className="chat-panel" role="dialog" aria-label="Histoury FAQ assistant" onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
        <header className="chat-header">
          <span className="chat-avatar"><Icon name="message" size={22} /></span>
          <div><strong>Ask Histoury</strong><span>Automated app help</span></div>
          <button className="chat-close" type="button" onClick={close} aria-label="Close chat"><Icon name="x" size={19} /></button>
        </header>
        <div className="chat-thread" ref={scroll} role="log" aria-live="polite" aria-relevant="additions" aria-label="Chat messages">
          <p className="chat-note">Quick answers from our FAQ. For anything else, we'll point you to support.</p>
          {messages.map((message, index) => <div className={`chat-message chat-message-${message.role}`} key={index}>
            <p>{message.answer}</p>
            {message.link && <a className="chat-answer-link" href={message.link} onClick={() => { if (message.link.startsWith("#")) close(); }} {...(message.link.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{message.linkLabel}<Icon name="arrow-right" size={13} /></a>}
            {message.support && <div className="chat-support"><a className="chat-email" href={supportEmail(message.question)}><Icon name="mail" size={15} /> Email support</a><small>{CONTACT.email}</small><a href={`mailto:${CONTACT.alternateEmail}`}>Or {CONTACT.alternateEmail}</a></div>}
          </div>)}
          {typing && <div className="chat-typing" role="status" aria-label="Preparing a reply"><span /><span /><span /><span className="chat-sr-only">Preparing a reply…</span></div>}
          {!typing && <div className="chat-suggestions" aria-label="Suggested questions">
            {(topics ? CHAT_TOPICS : [CHAT_TOPICS[1], CHAT_TOPICS[2], CHAT_TOPICS[4], CHAT_TOPICS[13]]).map((topic) => <button key={topic.label} type="button" onClick={() => ask(topic.label)}>{topic.label}</button>)}
          </div>}
        </div>
        <div className="chat-tools"><button type="button" onClick={() => setTopics((value) => !value)} aria-expanded={topics}>{topics ? "Fewer topics" : "Browse all topics"}</button><span>FAQ assistant · not live support</span></div>
        <form className="chat-form" onSubmit={(event) => { event.preventDefault(); ask(input); }}>
          <label className="chat-sr-only" htmlFor="chat-question">Your question about Histoury</label>
          <input id="chat-question" ref={field} value={input} onChange={(event) => setInput(event.target.value)} maxLength={500} placeholder="Ask about Histoury…" autoComplete="off" />
          <button type="submit" disabled={typing || !input.trim()} aria-label="Send question"><Icon name="arrow-right" size={19} /></button>
        </form>
      </section>}
      <button ref={launcher} className="chat-launcher" type="button" onClick={() => open ? close() : setOpen(true)} aria-expanded={open} aria-label={open ? "Close Histoury assistant" : "Open Histoury assistant"}><Icon name={open ? "x" : "message"} size={24} /></button>
    </div>
  );
}

