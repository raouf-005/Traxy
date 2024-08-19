import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

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
        .matches(/^0[0-9]{8,9}$/, " Must be a valid Algerian number"),
      FullName: Yup.string().required("Required"),
      Pack: Yup.string().nullable().required("Required"),
    }),

    onSubmit: async (values) => {
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

        if (response.status === 200) {
          toast.success("Order Submited", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        formik.resetForm();
      } catch (err) {
        toast.error("Submission Failed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        if (err.response && err.response.data) {
        } else {
          console.log(err);
        }
      }
    },
  });

  return formik;
}
