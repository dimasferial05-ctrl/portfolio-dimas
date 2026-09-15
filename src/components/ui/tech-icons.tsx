import React from "react";

interface IconProps {
  className?: string;
}

export function HtmlIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718h11.402l.241-2.709H5.586l.705 8.136h8.99l-.31 3.479-3.003.812-2.993-.812-.191-2.148H6.66l.374 4.417 4.934 1.371 4.945-1.371.677-7.656H8.531z" />
    </svg>
  );
}

export function CssIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h11.402l.242-2.709H5.586l.705 8.136h6.29l-.272 3.064-2.341.632-2.333-.632-.149-1.671H4.767l.292 3.513 4.909 1.364 4.919-1.364.639-7.182H8.531z" />
    </svg>
  );
}

export function JsIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 3h18v18H3V3zm13.725 14.375c1.47 0 2.378-.77 2.378-2.023 0-1.423-1.002-1.93-2.338-2.502l-.462-.197c-.777-.333-1.222-.647-1.222-1.221 0-.54.413-.967 1.155-.967.75 0 1.206.34 1.488.948l1.375-.858c-.53-.98-1.436-1.503-2.863-1.503-1.493 0-2.583.874-2.583 2.227 0 1.341.874 1.913 2.126 2.456l.462.197c.928.398 1.444.708 1.444 1.375 0 .647-.53 1.077-1.374 1.077-.994 0-1.611-.531-1.939-1.29l-1.398.805c.52 1.248 1.583 1.916 3.23 1.916zm-6.275-.125V8.5h1.724v8.75h-1.724z" />
    </svg>
  );
}

export function TsIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 3h18v18H3V3zm8.25 5.5H6.5v1.65h1.7v7.1h1.75v-7.1h1.7V8.5zm3.95 6.35c.78.43 1.54.67 2.3.67.76 0 1.2-.32 1.2-.82 0-.5-.4-.76-1.32-1.12-1.33-.52-2.17-1.27-2.17-2.42 0-1.48 1.2-2.66 3.12-2.66.92 0 1.7.2 2.37.57l-.54 1.52c-.6-.32-1.25-.49-1.83-.49-.78 0-1.18.35-1.18.78 0 .46.38.7 1.38 1.11 1.4.57 2.12 1.32 2.12 2.47 0 1.62-1.26 2.68-3.3 2.68-1.02 0-2-.27-2.73-.72l.59-1.57z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.667 17.667l-7.334-9.334V16H8.667V6.333h1.666l7.334 9.334V8h1.666v9.667h-1.666z" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function ViteIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.15 2.587L12.503 21.677a.587.587 0 0 1-1.026 0L.85 2.587a.586.586 0 0 1 .59-.877l9.885 1.554a.586.586 0 0 0 .524-.188L14.73 0a.586.586 0 0 1 .917.433l.42 5.093a.586.586 0 0 0 .488.528l6.005.81a.586.586 0 0 1 .59.723z" />
    </svg>
  );
}

export function FlutterIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.314 0L2.3 12 6.8 16.5 22.314 1 14.314 0zm0 10.686L8.8 16.2 14.314 21.714 22.314 21.714 14.314 13.714 18.8 9.229 14.314 10.686z" />
    </svg>
  );
}

export function DartIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.105 4.105L12 0l7.895 4.105L24 12l-4.105 7.895L12 24l-7.895-4.105L0 12l4.105-7.895zm2.842 2.842L3.263 12l3.684 5.053L12 20.737l5.053-3.684L20.737 12l-3.684-5.053L12 3.263 6.947 6.947z" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zM4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4zm0-8c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4zm8-4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0zm0 8h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V8z" />
    </svg>
  );
}

export function BunIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 3.84 2.16 7.18 5.34 8.87-.09-.54-.15-1.14-.15-1.77 0-3.31 2.69-6 6-6s6 2.69 6 6c0 .63-.06 1.23-.15 1.77C22.22 19.18 24 15.84 24 12c0-5.52-4.48-10-10-10zm-3 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

export function ElysiaIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.3l6 3.33v6.74L12 18.7l-6-3.33v-6.74L12 5.3zm-1 3.7v6l4-3-4-3z" />
    </svg>
  );
}

export function PrismaIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.89 17.51L12.7 2.16a.83.83 0 0 0-1.46-.02L4.69 14.88a.83.83 0 0 0 .64 1.24l12.8 1.78a.83.83 0 0 0 .76-.39zm-6.84-12.7l4.7 11.64-9.8-1.37 5.1-10.27z" />
    </svg>
  );
}

export function DrizzleIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0zM12 6.83L8.46 10.36a5 5 0 1 0 7.07 0L12 6.83z" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V15h-2v3.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 11.5V9l3.5-3.5L16 9v2.5l4.79-2.29c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3c-5.52 0-10 2.24-10 5v8c0 2.76 4.48 5 10 5s10-2.24 10-5V8c0-2.76-4.48-5-10-5zm0 2c4.42 0 8 1.57 8 3.5S16.42 12 12 12 4 10.43 4 8.5 7.58 5 12 5zm0 14c-4.42 0-8-1.57-8-3.5V11c1.86 1.48 4.75 2.5 8 2.5s6.14-1.02 8-2.5v4.5c0 1.93-3.58 3.5-8 3.5z" />
    </svg>
  );
}

export function SqliteIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.5 12c0 4.14-4.25 7.5-9.5 7.5S2.5 16.14 2.5 12 6.75 4.5 12 4.5s9.5 3.36 9.5 7.5zm-3.2 0c0-2.2-2.82-4-6.3-4s-6.3 1.8-6.3 4 2.82 4 6.3 4 6.3-1.8 6.3-4z" />
    </svg>
  );
}

export function NeonIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L3 14h7v8l11-12h-8l1-8z" />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.7 10.7l-8.4-8.4c-.9-.9-2.5-.9-3.4 0L7.5 4.7l2.8 2.8c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l2.7 2.7c.8-.3 1.8-.1 2.4.6.9.9.9 2.5 0 3.4s-2.5.9-3.4 0c-.7-.7-.9-1.7-.5-2.5L11.8 12v4.8c.3.2.5.5.6.8.9.9.9 2.5 0 3.4s-2.5.9-3.4 0-2.5-.9-2.5-3.4c0-.7.3-1.4.8-1.9V8.9c-.5-.5-.8-1.2-.8-1.9 0-.7.3-1.4.8-1.9L2.3 9.9c-.9.9-.9 2.5 0 3.4l8.4 8.4c.9.9 2.5.9 3.4 0l7.6-7.6c.9-.9.9-2.5 0-3.4z" />
    </svg>
  );
}

export function LaragonIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 3h18v18H3V3zm4 4v10h10V7H7zm2 2h6v6H9V9z" />
    </svg>
  );
}

export function DrawIoIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm12 0h6v6h-6v-6zm-4-8h2v10h-2V7zm-4 4h10v2H7v-2z" />
    </svg>
  );
}
