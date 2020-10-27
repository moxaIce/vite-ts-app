import { InjectionKey } from 'vue';
export const ThemeSymbol:InjectionKey<string> = Symbol();

export type TTheme = 'dark' | 'light';