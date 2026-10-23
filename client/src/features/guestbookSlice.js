import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API = import.meta.env.VITE_API_URL || ""; // empty in dev: Vite proxies /api to the Express server
const fresh = { message: false, letter: false, text: "" };

// One Send click asks the server for two separate emails: her message to me, and my letter to her.
// The server answers with the status of each one. We remember which already succeeded, so pressing Send again after a
// partial failure only retries the one that failed (the other is sent as `skip`). The browser never sends addresses or keys.
export const sendMessage = createAsyncThunk("guestbook/send", async (payload, { getState, rejectWithValue }) => {
  const { done } = getState().guestbook;
  const skip = { message: done.message && done.text === payload.message, letter: done.letter };
  try {
    const res = await fetch(`${API}/api/guestbook`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, skip }) });
    const data = await res.json().catch(() => ({}));
    if (res.status === 201 || res.status === 207) return data; // { message, letter }: each "accepted" | "failed" | "not_configured" | "skipped"
    return rejectWithValue({ error: data.error || "Couldn't send your message.", result: data.message ? { message: data.message, letter: data.letter } : null });
  } catch { return rejectWithValue({ error: "Couldn't reach the server. Please try again.", result: null }); }
});

const ok = (s) => s === "accepted" || s === "skipped";
const slice = createSlice({ name: "guestbook", initialState: { status: "idle", error: "", result: null, done: fresh },
  reducers: { reset: () => ({ status: "idle", error: "", result: null, done: fresh }) },
  extraReducers: (b) => b
    .addCase(sendMessage.pending, (s) => { s.status = "loading"; s.error = ""; })
    .addCase(sendMessage.fulfilled, (s, a) => {
      const { message, letter } = a.payload; s.result = { message, letter };
      if (ok(message)) { s.done.message = true; s.done.text = a.meta.arg.message; }
      if (ok(letter)) s.done.letter = true;
      if (ok(message) && ok(letter)) { s.status = "sent"; s.done = fresh; } else s.status = "partial"; // partial: the typed text stays in the box
    })
    .addCase(sendMessage.rejected, (s, a) => { s.status = "failed"; s.error = a.payload?.error || "Something went wrong."; s.result = a.payload?.result || null; }) });
export const { reset } = slice.actions;
export default slice.reducer;
