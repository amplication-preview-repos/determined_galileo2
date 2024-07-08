import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UrlWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
};
