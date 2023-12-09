"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/app/config/supabase";
import { useParams } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";

const HomePage = () => {
  const params = useParams();
  const [show, setShow] = useState(false);
  const [isIn, setIsIn] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isDone, setIsDone] = useState(false);
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const [isBayar, setIsBayar] = useState(false);
  const [totalWaktu, setTotalWaktu] = useState(0);

  function calculateHourDifference(timestamp1, timestamp2) {
    // Parse timestamps into Date objects
    const date1 = parseTimestamp(timestamp1);
    const date2 = parseTimestamp(timestamp2);

    // Calculate time difference in milliseconds
    const timeDifference = Math.abs(date2 - date1);

    // Convert milliseconds to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    return Math.ceil(hoursDifference);
  }

  function parseTimestamp(timestamp) {
    const [datePart, timePart] = timestamp.split(" ");
    const [day, month, year] = datePart.split("-").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);

    // Months are 0-indexed in JavaScript Dates, so subtract 1 from the month
    return new Date(year, month - 1, day, hours, minutes, seconds);
  }

  const inputTransaksi = async () => {
    const { data, error } = await supabase
      .from("Transaksi")
      .insert([
        {
          username: params.username,
          timeIn: timeIn,
          timeOut: timeOut,
          biaya: calculateHourDifference(timeIn, timeOut) * 5000,
        },
      ])
      .select();

    if (error) {
      window.alert("Gagal melakukan pembayaran!");
    }
  };

  const handleBayar2 = () => {
    setShow(true);
    setTotalWaktu(calculateHourDifference(timeIn, timeOut));
  };

  const handleBayar = async (e) => {
    // Ini Bayar
    setTimeIn(null);
    setTimeOut(null);
    setIsDone(false);
    setIsBayar(false);
    setIsIn(false);
    setShow(false);

    inputTransaksi();

    const { data, error } = await supabase
      .from("Member")
      .update({ timeIn: null, timeOut: null })
      .eq("username", params.username)
      .select();
    window.alert("Berhasil melakukan pembayaran!");
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
        setImageUrl(`https://barcodeapi.org/api/qr/tI${params.username}`);
      }
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <div>
      {/* Modal */}
      <>
        <Modal
          show={show}
          onHide={() => {
            setShow(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi Pembayaran</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Username : {params.username}</p>
            <p>Waktu Masuk : {timeIn}</p>
            <p>Waktu Keluar : {timeOut}</p>
            <p>Biaya per jam : Rp 5000</p>
            <p>Total waktu pembulatan ke atas : {totalWaktu} jam</p>
            <p>Biaya total : Rp {totalWaktu * 5000}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                setShow(false);
              }}
            >
              Batal
            </Button>
            <Button variant="success" onClick={handleBayar}>
              Bayar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <nav class="navbar navbar-expand-md bg-dark bg-opacity-50 fixed-top">
        <div class="container">
          <a class="navbar-brand mx-3 text-light fw-bold" href="#">
            Cospace
          </a>
          <button
            class="navbar-toggler collapsed bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end mx-3"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-light" data-toggle="dropdown" href="#">
                  Testimoni
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-light" data-toggle="dropdown" href="#">
                  Our Member
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="vh-100 vw-100">
        <div>
          <img
            src="/bgheader.png"
            alt="backgroundheader"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            className="d-flex vh-100 vw-100"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              width: "100%",
              height: "100%",
              color: "#fff",
            }}
          >
            <div className="mx-5 align-self-center">
              <b
                style={{
                  fontSize: "64px",
                }}
              >
                Scan Here
              </b>
              <div className="mt-1">
                {!isIn && !isDone ? <p>Barcode Masuk:</p> : <></>}
                {isIn && !isDone ? <p>Barcode Keluar:</p> : <></>}
                {isDone ? (
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={handleBayar2}
                  >
                    Bayar
                  </Button>
                ) : (
                  <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    className="mb-5"
                    alt = "barcode"
                  />
                )}
                <p>Waktu Masuk: {timeIn}</p>
                <p>Waktu Keluar: {timeOut}</p>
                {isBayar ? <p>{calculateFee(timeOut, timeIn)}</p> : <></>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
