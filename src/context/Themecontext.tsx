import * as React from "react";
import { ThemeContextTypes } from "../Types";

export const ThemeContext = React.createContext<ThemeContextTypes| null >(null);
