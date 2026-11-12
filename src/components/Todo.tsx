import { isTodo } from "@/config/site";

/** Renders a config value; unfilled TODO placeholders get a visible dashed-gold marker. */
export default function Val({ v }: { v: string }) {
  return isTodo(v) ? <span className="todo">{v}</span> : <>{v}</>;
}
