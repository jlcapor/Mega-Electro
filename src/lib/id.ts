import { customAlphabet } from "nanoid";

const prefixes = {
  post: "post",
  product: "prd",
  category: "cat",
  subcategory: "sub",
  cart: "crt",
  subscription: "sub",
  user: "user",
  role: "role"
};

interface GenerateIdOptions {
  /**
   * The length of the generated ID.
   * @default 16
   * @example 16 => "abc123def456ghi7"
   * */
  length?: number;
  /**
   * The separator to use between the prefix and the generated ID.
   * @default "_"
   * @example "_" => "str_abc123"
   * */
  separator?: string;
}

/**
 * Generates a unique ID with a given prefix.
 * @param prefix The prefix to use for the generated ID.
 * @param options The options for generating the ID.
 * @example
 * generateId("store") => "str_abc123def456"
 * generateId("store", { length: 8 }) => "str_abc123d"
 * generateId("store", { separator: "-" }) => "str-abc123def456"
 */
export function generateId(
  prefix?: keyof typeof prefixes,
  { length = 16, separator = "_" }: GenerateIdOptions = {},
) {
  const id = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    length,
  )();
  return prefix ? `${prefixes[prefix]}${separator}${id}` : id;
}

///mega-electro 125Julio# - B4se_electro2023
