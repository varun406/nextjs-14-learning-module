"use client";
import { Modal } from "antd";
import React, { useState } from "react";

const ModalF2 = () => {
  const [open, setopen] = useState(true);
  return (
    <Modal open={open} onCancel={() => setopen(false)}>
      <h1>Intercepted Modal</h1>
    </Modal>
  );
};

export default ModalF2;
