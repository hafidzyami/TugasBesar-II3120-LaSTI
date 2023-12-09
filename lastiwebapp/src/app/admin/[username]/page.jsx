"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/app/config/supabase";
import { useParams } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";

const AdminDashboard = () => {
  const [transaksi, setTransaksi] = useState(false);

  const channels = supabase
    .channel("custom-update-channel")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "Transaksi" },
      (payload) => {
        fetchTransaksi();
      }
    )
    .subscribe();

  const fetchTransaksi = async () => {
    const { data, error } = await supabase.from("Transaksi").select("*");

    if (error) {
      console.log(error);
    }
    if (data) {
      setTransaksi(data);
    }
  };

  useEffect(() => {
    fetchTransaksi();
  }, []);

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="bg-dark bg-opacity-50"
      >
        <Container>
          <Navbar.Brand className="text-light fw-bold" href="#">
            Cospace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link className="text-light" href="#">
                Riwayat Pembayaran
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="bg-dark vh-100 vw-100 pt-5">
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID Transaksi</th>
              <th>Username</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Biaya</th>
            </tr>
          </thead>
          <tbody>
            {!transaksi
              ? ""
              : transaksi.map((item, index) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.username}</td>
                    <td>{item.timeIn}</td>
                    <td>{item.timeOut}</td>
                    <td>{item.biaya}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminDashboard;
