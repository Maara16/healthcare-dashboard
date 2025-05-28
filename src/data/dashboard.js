import bicep from "../assets/bicep.png";
import bone from "../assets/bone.png";
import doctor from "../assets/doctor.png";
import eye from "../assets/eye.png";
import heart from "../assets/heart.png";
import lung from "../assets/lung.png";
import syringe from "../assets/syringe.png";
import tooth from "../assets/tooth.png";

export const bodyParts = [
  { label: "Lungs", date: "26 Oct 2025", img: lung },
  { label: "Teeth", date: "26 Oct 2025", img: tooth },
  { label: "Bone", date: "26 Oct 2025", img: bone },
];

export const calendarAppointments = [
  {
    day: "Mon",
    date: "26",
    slot: [
      { time: "10:00", app: false },
      { time: "11:00", app: false },
      { time: "12:00", app: false },
    ],
    today: true,
  },

  {
    day: "Tue",
    date: "27",
    slot: [
      { time: "10:00", app: false },
      { time: "11:00", app: false },
      { time: "12:00", app: false },
    ],
    today: true,
  },

  {
    day: "Wed",
    date: "28",
    slot: [
      { time: "10:00", app: false },
      { time: "11:00", app: false },
      { time: "12:00", app: false },
    ],
    today: true,
  },

  {
    day: "Thu",
    date: "29",
    slot: [
      { time: "10:00", app: false },
      { time: "11:00", app: false },
      { time: "12:00", app: false },
    ],
    today: true,
  },

  {
    day: "Fri",
    date: "30",
    slot: [
      { time: "10:00", app: false },
      { time: "11:00", app: false },
      { time: "12:00", app: false },
    ],
    today: true,
  },

  {
    day: "Sat",
    date: "31",
    slot: [
      { time: "10:00", app: false },
      { time: "11:00", app: false },
      { time: "12:00", app: false },
    ],
    today: true,
  },

  {
    day: "Sun",
    date: "1",
    slot: [
      { time: "10:00", app: false },
      { time: "11:00", app: false },
      { time: "12:00", app: false },
    ],
    today: true,
  },
];

export const appointments = [
  { for: "Dentist", img: tooth, time: "09:00-10:00", by: "Dr. John Doe" },
  {
    for: "Physiotherapy Appointment",
    img: bicep,
    time: "11:00-12:00",
    by: "Dr. John Doe",
  },
];

export const upcoming = [
  {
    day: "Thursday",
    apppointments: [
      { for: "Health Checkup Complete", img: syringe, time: "09:00" },
      { for: "Ophtalmologist", img: eye, time: "09:00" },
    ],
  },
  {
    day: "Saturday",
    apppointments: [
      { for: "Cardiologist", img: heart, time: "09:00" },
      { for: "Neurologist", img: doctor, time: "09:00" },
    ],
  },
];

export const barHeights = [
  [30, 60, 40],
  [40, 80, 50],
  [20, 55, 35],
  [40, 60, 35],
  [30, 60, 80],
  [40, 50, 20],
  [40, 60, 50],
];

export const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
