"use client";

import { toast } from "react-toastify";

export const showToast = async () => {
    toast('Signed Up Succesfully!', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    });
}