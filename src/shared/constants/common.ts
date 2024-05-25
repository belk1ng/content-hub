export interface BaseApiSliceValue {
  isLoading: boolean;
  error?: string;
}

export enum Currency {
  "RUB" = "RUB",
  "EUR" = "EUR",
  "USD" = "USD",
}

export enum Country {
  "Russia" = "Russia",
  "Belarus" = "Belarus",
  "USA" = "USA",
}
