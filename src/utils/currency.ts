export function formattedValue(
  language: "pt-BR",
  currencyType = "BRL",
  value: number
) {
  return new Intl.NumberFormat(language, {
    style: "currency",
    currency: currencyType,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
