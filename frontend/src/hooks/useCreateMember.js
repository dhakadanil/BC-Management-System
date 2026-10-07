import { useState } from "react";
import API from "../services/API"

function useCreateMember() {

  // =========================================
  // FORM DATA
  // =========================================

  const [formData, setFormData] = useState({
    clientName: "",
    fatherName: "",
    startDate: "",
    interestRate: "",
    monthlyAmount: ""
  });


  // =========================================
  // LOADING
  // =========================================

  const [loading, setLoading] = useState(false);


  // =========================================
  // MESSAGE
  // =========================================

  const [message, setMessage] = useState("");


  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  };


  // =========================================
  // RESET FORM
  // =========================================

  const resetForm = () => {

    setFormData({
      clientName: "",
      fatherName: "",
      startDate: "",
      interestRate: "",
      monthlyAmount: ""
    });

  };


  // =========================================
  // CREATE MEMBER
  // =========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setMessage("");


      const response = await API.post(
        "/add/member",
        {
          clientName: formData.clientName,

          fatherName: formData.fatherName,

          startDate: formData.startDate,

          interestRate:
            Number(formData.interestRate),

          monthlyAmount:
            Number(formData.monthlyAmount)
        }
      );


      console.log(
        "Response:",
        response.data
      );


      setMessage(
        response.data.message
      );


      // Form clear
      resetForm();


    } catch (error) {

      console.log(
        "FULL ERROR:",
        error
      );


      setMessage(
        error.response?.data?.message ||
        "Something went wrong"
      );


    } finally {

      setLoading(false);

    }

  };


  // =========================================
  // RETURN
  // =========================================

  return {
    formData,
    loading,
    message,
    handleChange,
    handleSubmit
  };

}

export default useCreateMember;