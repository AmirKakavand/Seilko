"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every minute (60000ms)
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update to current time
    }, 60000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = weekdays[currentTime.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[currentTime.getMonth()];
  const dateName = currentTime.getDate();
  const year = currentTime.getFullYear();
  const hours = currentTime.getHours().toString().padStart(2, "0"); // Ensure 2 digits
  const minutes = currentTime.getMinutes().toString().padStart(2, "0"); // Ensure 2 digits

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-hover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="max-w-[270px] rounded py-2 text-center text-base font-normal">
            {/* Upcoming Meeting at: 12:30 PM */}
          </h2>
          <div className="flex flex-col gap-2 px-5 py-8">
            <h1 className="text-3xl font-extrabold lg:text-7xl">
              {hours}:{minutes}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {dayName}, {monthName} {dateName}, {year}
            </p>
          </div>
        </div>
      </div>

      {/* Meeting Types */}
      <MeetingTypeList />
      
    </section>
  );
};

export default Home;
