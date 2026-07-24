import antfu from "@antfu/eslint-config";
import reactHooks from "eslint-plugin-react-hooks";

export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: [".pnpm-store/*", "public/r/*"],
  },
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["off"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["off"],
      "style/operator-linebreak": ["off"],
      "regexp/no-unused-capturing-group": ["off"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfig: { rootDir: "." },
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
    },
  },
).renamePlugins?.({ ts: "@typescript-eslint" });
