import { shade } from "polished";

export const defaultTheme = {
  white: "#fff",

  "gray-100": "#E1E1E6",
  "gray-200": "rgba(40,43,55,0.5)",
  "gray-300": "#C4C4CC",
  "gray-400": "#8D8D99",
  "gray-500": "#7C7C8A",
  "gray-600": "#323238",
  "gray-700": "#29292E",
  "gray-800": "#202024",
  "gray-900": "#121214",

  "green-100": '#67e480',
  "green-300": "#00B37E",
  "green-500": "#00875F",
  "green-700": "#015F43",

  "red-100": '#E96379',
  "red-300": "#F75A68",
  "red-500": "#AB222E",
  "red-700": "#7A1921",

  "grey-200": shade(0.3, '#E1E1E6'),
  
  "opaque-500": '#41414D',
  
  "purple-500": '#6633cc',
  "purple-600": '#5A4B81',
  
  
  "orange-400": '#E89E64',
  
  "pink-300": '#FF79C6',
  
  "cyan-100": '#78D1E1',
  
  "yellow-200": '#e7de79',

  "bg-spinner": "hsl(360, 50%, 68%, 0.37)",
  "bg-overlay": "rgba(0, 0, 0, 0.75)",
} as const;
