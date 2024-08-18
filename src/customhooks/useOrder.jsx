import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Order from "../cameracomponents/Order";

export default function useOrder() {
  const formik = useFormik({
    initialValues: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Pack: "",
      OrderStatus: "Pending",
    },
    validationSchema: Yup.object({
      Email: Yup.string().email("Invalid email address").required("Required"),
      PhoneNumber: Yup.string()
        .required("Required")
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits long"),
      FullName: Yup.string().required("Required"),
      Pack: Yup.string().nullable().required("Required"),
      
    }),

    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axios.post(
          "https://script.google.com/macros/s/AKfycbwAcxVziGHv0Dm8OOgxNNHu_5LnNYWXUDe4P75Ex6GGFugqtaoaGksrdFKm3mcLjEk/exec",
          values,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        formik.resetForm();
      } catch (err) {
        if (err.response && err.response.data) {
        } else {
          console.log(err);
        }
      }
    },
  });

  return formik;
}
