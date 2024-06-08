'use client'
import clsx from "clsx"
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type? : "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick? : () => void;
  actionButton? : boolean;
  

}

export default function Button({type, text, onClick, actionButton}: buttonProps) {
    return (
      <>
      <button
      onClick={onClick}
      type={type}
      className={clsx(actionButton && 'bg-slate-950 rounded-full p-2 text-white','bg-sky-400 px-3 py-1 text-white rounded-xl')}
      >

        {text}
      </button>
      </>
    );
  }