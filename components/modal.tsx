'use client';

import { MouseEventHandler, ReactNode, useEffect, useRef } from "react";
import { useCustomParams } from "@/hooks/use-custom-params";

type ModalProps = {
  children: ReactNode
  paramsName: string
}

const Modal = ({ paramsName, children }: ModalProps) => {
  const { params, searchParams, replace } = useCustomParams();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const showModal = searchParams.get('showModal');

  const handleCloseByOverlay: MouseEventHandler<HTMLDialogElement> = (e) => {
    if (e.target === modalRef.current) {
      modalRef?.current?.close();
      params.delete('showModal');
      params.delete(paramsName);
      replace(params);
    }
  };

  useEffect(() => {
    if (showModal === 'y') {
      modalRef?.current?.showModal();
    } else {
      modalRef?.current?.close();
    }
  }, [showModal]);

  return (
    <>
      {showModal === 'y'
        ? (
          <dialog
            onClick={handleCloseByOverlay}
            ref={modalRef}
            className="fixed flex items-center z-10  rounded-xl backdrop:bg-gray-800/50"
          >
            <div className="w-[500px] max-w-full p-4 bg-gray-200 flex flex-col rounded-md">
              {children}
            </div>
          </dialog>
        )
        : null
      }
    </>
  );
};

export default Modal;