// src/CalendarPage.tsx
import { useAppSelector } from "app/store";
import axios from "axios";
import { BACKEND_URL } from "constants/definitions";
import React, { useEffect, useState } from "react";
import { FaHandPaper } from "react-icons/fa";
interface EventState {
  id: string;
  type: string;
  title: string;
  date: Date;
  city: string;
  description: string;
  club: string;
}

const CalendarPage: React.FC = () => {
  const [eventList, setEventList] = useState<Array<EventState>>([]);
  const member = useAppSelector((state) => state.member.data);
  const d = new Date();
  const [selectedMonth, SetSelectedMonth] = useState(
    d.toLocaleString("en-US", { month: "short" })
  );
  const fetchData = async () => {
    const res = await axios.post(`${BACKEND_URL}/events/getByCity`, {
      city: "empty",
    });
    setEventList(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="h-max">
      <div className="mt-6 rounded-xl bg-white px-16 py-6 shadow-2xl">
        <h2 className="text-3xl font-bold capitalize text-navy-700 dark:text-white">
          All Marathons
        </h2>
        <div className="my-6 grid grid-cols-12">
          {monthList.map((month) => {
            return month == selectedMonth ? (
              <button className="mx-1 rounded-md bg-yellow-600 py-3 ">
                {month}
              </button>
            ) : (
              <button
                className="mx-1 rounded-md bg-yellow-200 py-3 "
                onClick={() => {
                  SetSelectedMonth(month);
                }}
              >
                {month}
              </button>
            );
          })}
        </div>
        <div>
          {eventList
            .filter(
              (e: EventState) =>
                selectedMonth == monthList[new Date(e.date).getMonth()]
            )
            .map((event) => (
              <div className="bordersolid my-3 rounded-md bg-blue-200 px-6 py-3">
                <div className="grid grid-cols-2">
                  <h4 className="text-lg font-bold capitalize text-navy-700 dark:text-white">
                    {" "}
                    {event.title}{" "}
                    <span className="ml-2 font-light">({event.club})</span>
                  </h4>
                  <div className="text-right ">
                    {localStorage.getItem("type") === "admin" ? null : (
                      <button className="mx-1 rounded-md bg-navy-500 p-2  text-white ">
                        Volunteer <FaHandPaper className="mb-1 inline" />
                      </button>
                    )}
                  </div>
                  <h5 className="text-lg font-bold capitalize text-navy-500 dark:text-white">
                    {event.city}
                  </h5>
                  <h5 className="text-lg font-bold capitalize text-navy-500 dark:text-white">
                    {new Date(event.date).toDateString()}
                  </h5>
                </div>
                <p className="my-2 text-sm font-bold text-navy-400 dark:text-white">
                  {event.description}
                </p>
              </div>
            ))}
          {eventList.filter(
            (e) => selectedMonth == monthList[new Date(e.date).getMonth()]
          ).length ? null : (
            <div className="bordersolid my-3 rounded-md bg-blue-200 px-6 py-3">
              <h4 className="text-lg font-bold capitalize text-navy-700 dark:text-white">
                No Events
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
