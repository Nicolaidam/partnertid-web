import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcss from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tailwindcss.configs["flat/recommended"],
  {
    plugins: {
      tailwindcss,
    },
    rules: {
      "tailwindcss/no-custom-classname": [
        "warn",
        {
          config: "./tailwind.config.ts",
          callees: ["cn", "cva"],
        },
      ],
    },
  },
];

export default eslintConfig;
