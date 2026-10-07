import useCreateMember from "../hooks/useCreateMember";

function CreateMember() {
  const {
    formData,
    loading,
    message,
    handleChange,
    handleSubmit,
  } = useCreateMember();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">

      {/* Main Container */}
      <div className="mx-auto max-w-4xl">

        {/* Page Header */}
        <div className="mb-6">
          <p className="mb-1 text-sm font-medium text-emerald-600">
            BC Management
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Create BC Member
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Add a new member to your BC scheme with their basic and financial
            details.
          </p>
        </div>


        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/60">

          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-5 sm:px-8">

            <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl text-white backdrop-blur-sm">
                👤
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Member Information
                </h2>

                <p className="text-sm text-emerald-50">
                  Enter the details carefully before creating the member.
                </p>
              </div>

            </div>

          </div>


          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8"
          >

            {/* Section Title */}
            <div className="mb-6">

              <h3 className="text-base font-semibold text-slate-800">
                Personal Details
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Basic information of the BC member.
              </p>

            </div>


            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


              {/* CLIENT NAME */}
              <div>
                <label
                  htmlFor="clientName"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Client Name
                </label>

                <div className="relative">

                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    👤
                  </span>

                  <input
                    id="clientName"
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    placeholder="Enter client name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />

                </div>
              </div>


              {/* FATHER NAME */}
              <div>
                <label
                  htmlFor="fatherName"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Father Name
                </label>

                <div className="relative">

                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    👨
                  </span>

                  <input
                    id="fatherName"
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Enter father name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />

                </div>
              </div>


              {/* START DATE */}
              <div>
                <label
                  htmlFor="startDate"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  BC Start Date
                </label>

                <div className="relative">

                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    📅
                  </span>

                  <input
                    id="startDate"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />

                </div>

                <p className="mt-1.5 text-xs text-slate-400">
                  BC will start from this date.
                </p>
              </div>


              {/* INTEREST RATE */}
              <div>
                <label
                  htmlFor="interestRate"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Interest Rate
                </label>

                <div className="relative">

                  <input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    min="0"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleChange}
                    placeholder="Example: 1.5"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-semibold text-emerald-600">
                    %
                  </span>

                </div>

                <p className="mt-1.5 text-xs text-slate-400">
                  Example: 1%, 1.25%, 1.5%, 2%
                </p>
              </div>

            </div>


            {/* Financial Section */}
            <div className="mb-6 mt-8 border-t border-slate-100 pt-7">

              <h3 className="text-base font-semibold text-slate-800">
                BC Financial Details
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Set the monthly contribution amount for this member.
              </p>

            </div>


            {/* MONTHLY AMOUNT */}
            <div className="max-w-md">

              <label
                htmlFor="monthlyAmount"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Monthly Amount
              </label>

              <div className="relative">

                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-emerald-600">
                  ₹
                </span>

                <input
                  id="monthlyAmount"
                  type="number"
                  min="1"
                  name="monthlyAmount"
                  value={formData.monthlyAmount}
                  onChange={handleChange}
                  placeholder="Example: 2000"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />

              </div>

              <p className="mt-1.5 text-xs text-slate-400">
                Amount that the member will contribute every month.
              </p>

            </div>


            {/* Info Box */}
            <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50 p-4">

              <div className="flex gap-3">

                <div className="mt-0.5 text-lg">
                  💡
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-emerald-800">
                    Important
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-emerald-700">
                    Member details such as interest rate and monthly amount
                    will be saved with the member. Future monthly payments
                    will use these details automatically.
                  </p>
                </div>

              </div>

            </div>


            {/* Message */}
            {message && (
              <div
                className={`mt-6 rounded-xl border px-4 py-3 text-sm font-medium ${
                  message.toLowerCase().includes("success")
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {message}
              </div>
            )}


            {/* Submit */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">

                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>

                    Creating...

                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>✓</span>
                    Create Member
                  </span>
                )}
              </button>

            </div>

          </form>

        </div>


        {/* Bottom Note */}
        <p className="mt-5 text-center text-xs text-slate-400">
          BC Management System • Member Registration
        </p>

      </div>

    </div>
  );
}

export default CreateMember;