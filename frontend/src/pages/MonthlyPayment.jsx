import useMonthlyPayment from "../hooks/useMonthlyPayment";

function MonthlyPayment() {
  const {
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
    handleSubmit,
  } = useMonthlyPayment();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-emerald-600">
            BC Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-800 sm:text-3xl">
            Monthly Payment
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Select a member and record their monthly BC payment.
          </p>
        </div>


        {/* Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/60">

          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-6 py-5 sm:px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
                💰
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Record Monthly Payment
                </h2>

                <p className="text-sm text-emerald-50">
                  Payment details will be calculated automatically.
                </p>
              </div>

            </div>

          </div>


          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-7 p-6 sm:p-8"
          >

            {/* Member */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Select Member
              </label>

              <select
                value={selectedMember?._id || ""}
                onChange={handleMemberChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              >

                <option value="">
                  Select Client
                </option>

                {members.map((member) => (
                  <option
                    key={member._id}
                    value={member._id}
                  >
                    {member.clientName} - S/o {member.fatherName}
                  </option>
                ))}

              </select>

            </div>


            {/* Member Details */}
            {selectedMember && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                {/* Name */}
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs font-medium text-emerald-600">
                    Client
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {selectedMember.clientName}
                  </p>
                </div>


                {/* Father */}
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs font-medium text-blue-600">
                    Father Name
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {selectedMember.fatherName}
                  </p>
                </div>


                {/* Interest */}
                <div className="rounded-xl bg-purple-50 p-4">
                  <p className="text-xs font-medium text-purple-600">
                    Interest Rate
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {selectedMember.interestRate}%
                  </p>
                </div>

              </div>
            )}


            {/* Date + Amount */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Payment Date */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Payment Date
                </label>

                <input
                  type="date"
                  value={paymentDate}
                  onChange={handleDateChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />

              </div>


              {/* Monthly Amount */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Monthly Amount
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-emerald-600">
                    ₹
                  </span>

                  <input
                    type="text"
                    value={monthlyAmount}
                    readOnly
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 py-3 pl-9 pr-4 text-sm font-semibold text-slate-700 outline-none"
                  />

                </div>

              </div>

            </div>


            {/* Pending Payment */}
            {pendingAmount > 0 && (
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">

                <div className="flex items-start gap-3">

                  <div className="text-2xl">
                    ⚠️
                  </div>

                  <div>

                    <h3 className="font-bold text-orange-800">
                      Previous Payment Pending
                    </h3>

                    <p className="mt-1 text-sm text-orange-700">
                      Previous month payment:
                      <span className="ml-1 font-bold">
                        ₹{pendingAmount}
                      </span>
                    </p>

                    <p className="mt-1 text-sm text-orange-700">
                      Current month:
                      <span className="ml-1 font-bold">
                        ₹{monthlyAmount}
                      </span>
                    </p>

                  </div>

                </div>

              </div>
            )}


            {/* Payment Summary */}
            {selectedMember && (
              <div className="rounded-2xl bg-slate-900 p-5 text-white">

                <h3 className="mb-4 text-sm font-semibold text-slate-300">
                  Payment Summary
                </h3>

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Current Payment
                    </span>

                    <span>
                      ₹{monthlyAmount}
                    </span>
                  </div>


                  {pendingAmount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-orange-400">
                        Previous Pending
                      </span>

                      <span className="text-orange-400">
                        ₹{pendingAmount}
                      </span>
                    </div>
                  )}


                  {penaltyAmount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-red-400">
                        Penalty
                      </span>

                      <span className="text-red-400">
                        ₹{penaltyAmount}
                      </span>
                    </div>
                  )}


                  <div className="border-t border-slate-700 pt-3">

                    <div className="flex justify-between">

                      <span className="font-semibold">
                        Total Payable
                      </span>

                      <span className="text-xl font-bold text-emerald-400">
                        ₹{totalAmount}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            )}


            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !selectedMember}
              className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Processing Payment..."
                : "✓ Submit Payment"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default MonthlyPayment;