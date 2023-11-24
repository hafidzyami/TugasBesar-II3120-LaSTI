"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/app/config/supabase";
import { useParams } from "next/navigation";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  const params = useParams();
  const [isIn, setIsIn] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isDone, setIsDone] = useState(false);
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const [isBayar, setIsBayar] = useState(false);

  const calculateFee = (timeOut, timeIn) => {
    console.log(timeOut)
    console.log(timeIn)
    // Parse the date strings into Date objects
    const dateIn = new Date(timeIn);
    const dateOut = new Date(timeOut);

    console.log(dateIn)
    console.log(dateOut)

    // Calculate the time difference in milliseconds
    const timeDifferenceMs =  Math.abs(dateIn - dateOut);

    // Calculate the time difference in hours
    const timeDifferenceHours = timeDifferenceMs / (1000 * 60 * 60);
    console.log(timeDifferenceHours)
    return timeDifferenceHours
  };

  const channels = supabase
    .channel("custom-update-channel")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "Member" },
      (payload) => {
        fetchMember();
      }
    )
    .subscribe();

  const fetchMember = async () => {
    const { data, error } = await supabase
      .from("Member")
      .select("*")
      .eq("username", params.username);

    if (error) {
      console.log(error);
    }
    if (data) {
      setTimeIn(data[0].timeIn);
      setTimeOut(data[0].timeOut);

      if (data[0].timeOut == null && data[0].timeIn == null) {
        setImageUrl(`https://barcodeapi.org/api/qr/tI${params.username}`);
      } else if (data[0].timeOut == null && data[0].timeIn != null) {
        setIsIn(true);
        setImageUrl(`https://barcodeapi.org/api/qr/tO${params.username}`);
        console.log("Sudah masuk");
      } else if (data[0].timeOut != null && data[0].timeIn != null) {
        setIsDone(true);
      }
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <div>
      HomePage
      <div className="mt-5">
        {!isIn && !isDone ? <p>Barcode Masuk:</p> : <></>}
        {isIn && !isDone ? <p>Barcode Keluar:</p> : <></>}
        {isDone ? (
          <Button variant="primary" className="mt-3" onClick={()=> {setIsBayar(true)}}>
            Bayar
          </Button>
        ) : (
          <img src={imageUrl} width={300} height={300} className="mb-5" />
        )}

        <p>Waktu Masuk: {timeIn}</p>
        <p>Waktu Keluar: {timeOut}</p>

        {isBayar ? <p>{calculateFee(timeOut, timeIn)}</p> : <></>}
        
      </div>
    </div>
  );
};

export default HomePage;
