import { DimensionValue } from "react-native";

type FlexDirectionType =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse"
  | undefined;

interface TitleTheme {
  fontSize: number;
  padding: number;
  color: string;
  fontWeight: "bold" | "normal";
  textAlign: "auto" | "center" | "left" | "right" | "justify" | undefined;
}

interface RowItemTheme {
  fontSize: number;
  color: string;
  backgroundColor: string;
  borderRadius: number;
  flexDirection: FlexDirectionType;
  marginBottom: number;
}

interface RowImageTheme {
  borderRadius: number;
  margin: number;
  aspectRatio: number;
  width: DimensionValue;
}

export interface AppTheme {
  title: TitleTheme;
  rowItem: RowItemTheme;
  rowImage: RowImageTheme;
  text: string;
  background: string;
  primary: string;
  emphasis: string;
  link: string;
  minor: string;
  targetWidth: DimensionValue;
  largeWidth: DimensionValue;
}
