import { configureStore } from "@reduxjs/toolkit";
import guestbook from "./features/guestbookSlice";
export const store = configureStore({ reducer: { guestbook } });
