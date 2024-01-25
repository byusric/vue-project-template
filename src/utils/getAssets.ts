import { defineAsyncComponent } from 'vue'

export const getAsset = (path: string) =>
  new URL(`/src/assets/${path}`, import.meta.url).href
/* @vite-ignore */
export const getIcon = (icon: string) =>
  defineAsyncComponent(() => import(`@/assets/icons/${icon}.svg`))
