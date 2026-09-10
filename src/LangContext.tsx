import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang } from './content'

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: <T extends Record<Lang, string>>(item: T) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: <T extends Record<Lang, string>>(item: T) => item[lang],
    }),
    [lang],
  )
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
