import {
  Calendar,
  LayoutDashboard,
  ChartLine,
  MessageCircleMore,
  Phone,
  NotepadText,
  History,
} from "lucide-react";

export const genrealMenu = [
  { label: "Dashboard", icon: <LayoutDashboard /> },
  { label: "History", icon: <History /> },
  { label: "Calendar", icon: <Calendar /> },
  { label: "Appointments", icon: <NotepadText /> },
  { label: "Statistics", icon: <ChartLine /> },
];

export const toolsMenu = [
  { label: "Chat", icon: <MessageCircleMore /> },
  { label: "Support", icon: <Phone /> },
];
