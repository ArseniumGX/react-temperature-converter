import { Dispatch, SetStateAction } from "react";

export type FieldType = {
  temperature: string;
  value: string | number;
  onchange: Dispatch<SetStateAction<string | number>>;
};
