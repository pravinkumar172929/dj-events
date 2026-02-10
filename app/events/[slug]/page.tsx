"use client";
import React from "react";
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>EventPage</h1>
      <h3>{router.query.slug}</h3>
    </>
  );
};

export default EventPage;
