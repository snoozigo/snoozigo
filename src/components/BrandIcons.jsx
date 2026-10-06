export function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.14h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.85c-.24.68-1.2 1.24-1.96 1.4-.52.11-1.2.2-3.48-.72-2.92-1.18-4.8-4.16-4.95-4.35-.14-.2-1.18-1.56-1.18-2.98s.75-2.11 1.01-2.4c.26-.28.58-.35.77-.35h.55c.18 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.56.16.28.7 1.15 1.5 1.86 1.03.91 1.9 1.2 2.17 1.33.28.14.44.12.6-.07.16-.18.69-.8.87-1.07.18-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z"
      />
    </svg>
  );
}
