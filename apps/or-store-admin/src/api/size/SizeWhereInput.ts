import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SizeWhereInput = {
  id?: StringFilter;
  size?: IntNullableFilter;
};
