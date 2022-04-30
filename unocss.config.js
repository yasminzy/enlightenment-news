import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives
} from "unocss"

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: "Fira Sans:300,400,500",
        mono: "Fira Code"
      }
    })
  ],

  shortcuts: [
    ["card", "bg-stone-100 p-8 rounded-lg shadow"],
    ["date", "mb-0 text-base text-stone-500"],
    ["list", "list-none my-0 pl-0"],
    [
      "pill",
      "bg-stone-500 block font-light max-w-fit mb-4 px-3 py-1 rounded-lg text-base text-stone-50"
    ]
  ],

  transformers: [transformerDirectives()]
})
