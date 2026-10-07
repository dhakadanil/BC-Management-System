import { useEffect, useState } from "react";
import API from "../services/API";

function useMonthlyPayment() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [paymentDate, setPaymentDate] = useState("");
  const [pendingAmount, setPendingAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMembers = async () => {
    try {
      const response = await API.get("/members");
      setMembers(response.data.data || []);
    } catch (error) {
      console.log("MEMBERS ERROR:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleMemberChange = async (e) => {
    const memberId = e.target.value;

    if (!memberId) {
      setSelectedMember(null);
      setPendingAmount(0);
      return;
    }

    const member = members.find(
      (item) => item._id === memberId
    );
    setSelectedMember(member);
    try {
      const response = await API.get(`/members/${memberId}/pending`);
      const pending = response.data.data;
      if (pending?.pendingAmount > 0) {
        setPendingAmount(pending.pendingAmount);
        alert(
          `${member.clientName}, Father: ${member.fatherName}\n\n` +
          `Aapka pichle month ka payment baki hai.\n\n` +
          `Previous Payment: ₹${pending.pendingAmount}\n` +
          `Current Payment: ₹${member.monthlyAmount}\n\n` +
          `OK karne par dono amount add honge.`
        );
      } else {
        setPendingAmount(0);
      }
    } catch (error) {
      console.log("PENDING PAYMENT ERROR:", error);
    }
  };

  const handleDateChange = (e) => {
    setPaymentDate(e.target.value);
  };

  const monthlyAmount = selectedMember?.monthlyAmount || 0;
  const totalBeforePenalty =Number(monthlyAmount) + Number(pendingAmount);

  const penaltyAmount = pendingAmount > 0 ? (Number(pendingAmount) / 1000) * 100 : 0;
  const totalAmount = totalBeforePenalty + penaltyAmount;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMember) {
      alert("Please select a member.");
      return;
    }

    if (!paymentDate) {
      alert("Please select payment date.");
      return;
    }

    try {
      setLoading(true);
      const response = await API.post("/monthly-payment",{
          memberId: selectedMember._id, paymentDate }
      );

      if (penaltyAmount > 0) {
        alert(
          `Payment Details\n\n` +
          `Client: ${selectedMember.clientName}\n` +
          `Father: ${selectedMember.fatherName}\n\n` +
          `Previous Pending: ₹${pendingAmount}\n` +
          `Current Payment: ₹${monthlyAmount}\n` +
          `Penalty: ₹${penaltyAmount}\n\n` +
          `Total: ₹${totalAmount}`
        );
      }

      alert( response.data.message || "Payment added successfully.");

      setSelectedMember(null);
      setPaymentDate("");
      setPendingAmount(0);
    } catch (error) {
      console.log("PAYMENT ERROR:", error);

      alert(error.response?.data?.message || "Payment failed." );
    } finally {
      setLoading(false);
    }
  };

  return {
    members,
    selectedMember,
    paymentDate,
    monthlyAmount,
    pendingAmount,
    penaltyAmount,
    totalAmount,
    loading,
    handleMemberChange,
    handleDateChange,
    handleSubmit
  };
}

export default useMonthlyPayment;