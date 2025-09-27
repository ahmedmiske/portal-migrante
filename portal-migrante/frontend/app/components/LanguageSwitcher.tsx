// frontend/app/components/LanguageSwitcher.tsx
import { useI18n } from "../i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale, locales } = useI18n();

  return (
    <select
      className="form-select form-select-sm w-auto"
      value={locale}
      onChange={(e) => setLocale(e.target.value as any)}
      aria-label="Language"
    >
      {locales.map((l) => (
        <option key={l} value={l}>{l.toUpperCase()}</option>
      ))}
    </select>
  );
}
