// src/Dashboard.tsx
import { useAppSelector } from "app/store";
import React, { useState } from "react";
import { BsPencilFill, BsChatLeftDotsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface EventState {
  id: string;
  eventType: string;
  name: string;
  date: Date;
  location: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const d = new Date();

  const navigate = useNavigate();
  const [selectedMonth, SetSelectedMonth] = useState(
    d.toLocaleString("en-US", { month: "short" })
  );

  const [eventList, SetEventList] = useState<Array<EventState>>([
    {
      id: "adasasjfjfs",
      eventType: "Marathon",
      name: "SPIT Marathon",
      date: new Date(),
      location: "Andheri, Mumbai",
      description:
        "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
    },
    {
      id: "adasasjfjfs",
      eventType: "Marathon",
      name: "SPIT Marathon",
      date: new Date(),
      location: "Andheri, Mumbai",
      description:
        "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
    },
    {
      id: "adasasjfjfs",
      eventType: "Marathon",
      name: "SPIT Marathon",
      date: new Date(),
      location: "Andheri, Mumbai",
      description:
        "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
    },
    {
      id: "adasasjfjfs",
      eventType: "Marathon",
      name: "SPIT Marathon",
      date: new Date(),
      location: "Andheri, Mumbai",
      description:
        "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
    },
    {
      id: "adasasjfjfs",
      eventType: "Marathon",
      name: "SPIT Marathon",
      date: new Date(),
      location: "Andheri, Mumbai",
      description:
        "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
    },
  ]);
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
          My Marathons
        </h2>
        <div className="my-6 grid grid-cols-12">
          {monthList.map((month) => {
            return month == selectedMonth ? (
              <button className="mx-1 rounded-md bg-yellow-600 py-3 ">
                {month}
              </button>
            ) : (
              <button
                className="mx-1  rounded-md bg-yellow-200 py-3 "
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
            .filter((e) => selectedMonth == monthList[e.date.getMonth()])
            .map((event) => (
              <div className="bordersolid my-3 rounded-md bg-blue-200 px-6 py-3">
                <div className="grid grid-cols-2">
                  <h4 className="text-lg font-bold capitalize text-navy-700 dark:text-white">
                    {" "}
                    {event.eventType} ({event.location})
                  </h4>
                  <div className="text-right">
                    {localStorage.getItem("type") === "admin" ? (
                      <button
                        className="mx-1 inline rounded-md bg-navy-500 p-2 text-white "
                        onClick={() => {
                          navigate("/admin/editevent", {
                            state: { event: event },
                          });
                        }}
                      >
                        <BsPencilFill />
                      </button>
                    ) : (
                      <button className="mx-1 inline rounded-md bg-navy-500 p-2 text-white ">
                        <BsChatLeftDotsFill />
                      </button>
                    )}
                  </div>

                  <h5 className="text-lg font-bold capitalize text-navy-500 dark:text-white">
                    {event.name}
                  </h5>
                  <h5 className="text-lg font-bold capitalize text-navy-500 dark:text-white">
                    {event.date.toDateString()}
                  </h5>
                </div>
                <p className="my-2 text-sm font-bold text-navy-400 dark:text-white">
                  {event.description}
                </p>
              </div>
            ))}
          {eventList.filter(
            (e) => selectedMonth == monthList[e.date.getMonth()]
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

export default Dashboard;
