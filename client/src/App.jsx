import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Envelope from "./components/Envelope";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Memories from "./pages/Memories";
import Flowers from "./pages/Flowers";
import Reasons from "./pages/Reasons";
import Letter from "./pages/Letter";
import Surprises from "./pages/Surprises";
import Future from "./pages/Future";
import Messages from "./pages/Messages";
import Apology from "./pages/Apology";
import FirstChat from "./pages/FirstChat";
import DayIMetYou from "./pages/DayIMetYou";
import Reminds from "./pages/Reminds";
import OpenWhen from "./pages/OpenWhen";
import Distance from "./pages/Distance";
import Temple from "./pages/Temple";
import Guestbook from "./pages/Guestbook";

const seen = () => { try { return sessionStorage.getItem("intro") === "1"; } catch { return true; } };
export default function App() {
  const [entered, setEntered] = useState(seen());
  const { pathname } = useLocation();
  const enter = () => { try { sessionStorage.setItem("intro", "1"); } catch { /* ignore */ } setEntered(true); };
  if (!entered && pathname === "/") return <Envelope onEnter={enter} />; // intro shows once per visit, only on the home URL
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} /><Route path="story" element={<Story />} /><Route path="memories" element={<Memories />} />
        <Route path="flowers" element={<Flowers />} /><Route path="reasons" element={<Reasons />} /><Route path="message" element={<Guestbook />} />
        <Route path="letter" element={<Letter />} /><Route path="surprises" element={<Surprises />} /><Route path="future" element={<Future />} />
        <Route path="little-messages" element={<Messages />} /><Route path="apology" element={<Apology />} />
        <Route path="first-chat" element={<FirstChat />} /><Route path="day-i-met-you" element={<DayIMetYou />} /><Route path="reminds-me" element={<Reminds />} /><Route path="open-when" element={<OpenWhen />} />
        <Route path="distance" element={<Distance />} />
        <Route path="temple-date" element={<Temple />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
