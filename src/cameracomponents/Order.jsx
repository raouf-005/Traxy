import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
} from "@nextui-org/react";
import { packs } from "./utils/data";
import { useState } from "react";
import { SelectItem } from "@nextui-org/react";
import useOrder from "../customhooks/useOrder";
import InputOrder from "./components/InputOrder";

export default function Order(props) {
  const formik = useOrder();
  console.log(props?.packInfo?.name);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState(new Set([]));
  useEffect(() => {
   setValue(new Set([props?.packInfo?.name]));
  }, [props]);

  useEffect(() => {
    if (value.size > 0) {
      formik.setFieldValue("Pack", [...value][0]);
    }
  }, [value]);

  return (
    <div className=" shadow-lg shadow-slate-500/40 rounded-2xl flex flex-row mb-10  md:gap-24  gap-12  p-7 px-12 ">
      <ul className=" text-3xl font-light sm:block hidden list-disc ">
        {props?.packInfo?.caractesristics.map((caract) => (
          <li className="">{caract}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className=" sm:text-7xl text-6xl  "> {props?.packInfo?.price + "DA"}</p>
        <Button
          className=" bg-[#B28EFF] text-white text-2xl px-12 py-7"
          onPress={onOpen}
        >
          Order
        </Button>
        <ul className=" text-xl  font-light sm:hidden block list-disc ">
        {props?.packInfo?.caractesristics.map((caract) => (
          <li className="">{caract}</li>
        ))}
      </ul>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-black"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center justify-center text-white">
                ORDER FORM
              </ModalHeader>
              <ModalBody className=" bg-black px-3">
                <form
                  className=" bg-black gap-3 flex flex-col"
                  onSubmit={formik.handleSubmit}
                >
                  <InputOrder label="Full Name" type="text" formik={formik} />
                  <InputOrder label="Email" type="email" formik={formik} />
                  <InputOrder label="Phone Number" type="tel" formik={formik} />
                  <Select
                    label="Packs"
                    variant="bordered"
                    placeholder="Choose your pack"
                    classNames={{
                      label: "text-lg",
                      trigger: "bg-white",
                    }}
                    selectedKeys={value}
                    className="max-w-xs"
                    onSelectionChange={setValue}
                    isRequired
                  >
                    {packs.map((pack) => (
                      <SelectItem key={pack.key}>{pack.label}</SelectItem>
                    ))}
                  </Select>
                </form>
              </ModalBody>
              <ModalFooter className=" justify-center items-center ">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={formik.handleSubmit}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
