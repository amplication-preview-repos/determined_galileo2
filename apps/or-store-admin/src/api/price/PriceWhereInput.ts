import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PriceWhereInput = {
  id?: StringFilter;
  price?: IntNullableFilter;
};
