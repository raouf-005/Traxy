import React from "react";
import { Input } from "@nextui-org/react";

export default function InputOrder({ type, label, formik }) {
  const formikfield = formik.getFieldProps(label.replace(/\s+/g, ""));

  return (
    <div className="flex flex-col max-w-screen ">
      <Input
        label={label}
        type={type}
        classNames={{
          input: "border-none   focus:ring-0  ",
          inputWrapper: "bg-white ",
          label: "text-lg",
        }}
        {...formikfield}
        radius="none"
        isRequired
        size="sm"
      />

      <div className="max-w-[300px]">
        {formik.touched[formikfield.name] && formik.errors[formikfield.name] ? (
          <p className="text-red-500 text-xs  max-w-[300px] ">
            {formik.errors[formikfield.name]}
          </p>
        ) : null}
      </div>
    </div>
  );
}
