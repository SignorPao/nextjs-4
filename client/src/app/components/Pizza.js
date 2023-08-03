"use client";

import React, { useEffect, useState } from "react";

// image
import Image from "next/image";

// modal
import Modal from "react-modal";

// components
import PizzaDetails from "./PizzaDetails";

// icons
import { IoCloseOutline } from "react-icons/io5";

// bind modal
Modal.setAppElement("body");

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  // remove body scroll when modal is open
  useEffect(() => {
    modal
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");
  }, [modal]);

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      {/* image */}
      <Image
        width={270}
        height={270}
        src={pizza.image}
        alt="pizza"
        priority={1}
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        onClick={openModal}
      />
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      {/* price & button */}
      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex text-xl font-semibold">
          Starts at $ {pizza.priceSm}
        </div>
        {/* desktop btn */}
        <button
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
          onClick={openModal}
        >
          Choose
        </button>
        {/* mobile btn */}
        <button
          className="btn btn-sm gradient text-xs lg:hidden px-3"
          onClick={openModal}
        >
          Starts at $ {pizza.priceSm}
        </button>
      </div>
      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza modal"
          className="bg-white w-full h-full lg:max-w-[60vw] lg:max-h-[70vh] lg:rounded-3xl lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          {/* close modal */}
          <div
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
            onClick={closeModal}
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          {/* pizza details */}
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
