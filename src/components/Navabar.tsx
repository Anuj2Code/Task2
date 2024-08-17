"use client";
import React, { useState } from "react";
import { Button } from "./ui/moving-border";

const Navabar = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-slate-300 font-semibold">
                        Tournamax Assignment
                    </a>
                </div>
                <div className="flex-none">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black border-2  dark:text-white border-neutral-200 dark:border-slate-800"
                        onClick={openModal}
                    >
                        Add Topic
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Navabar
