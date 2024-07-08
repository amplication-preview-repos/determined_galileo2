import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
};
