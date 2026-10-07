const BCMember = require('../models/BCMember')
const BCPayment = require('../models/BCPayment')
exports.createBCMember = async (req, res) => {
  try {
    const { clientName,fatherName,startDate,interestRate, monthlyAmount} = req.body;
    if ( !clientName || !fatherName || !startDate || interestRate === undefined || !monthlyAmount){
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    const existingMenber = await BCMember.findOne({
      clientName:{
        $regex: `^${clientName.trim()}$`,
        $options: "i"
      },
       fatherName: {
        $regex: `^${fatherName.trim()}$`,
        $options: "i"
      }
    })
    if(existingMenber){
      return res.status(409).json({
        success: false,
        message:"This Client Already Exists"
      })
    }
    const member = await BCMember.create({
      clientName:clientName.trim(), fatherName:fatherName.trim(),
      startDate, interestRate,
      monthlyAmount,duration: 36,
      status: "Active"
    });
    return res.status(201).json({
      success: true,
      message: "BC member created successfully.",
      data: member
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


exports.getAllMembers = async (req, res) => {
  try {
    const members = await BCMember.find({
      status: "Active"
    }).sort({
      clientName: 1
    });

    return res.status(200).json({
      success: true,
      message: "Members fetched successfully.",
      data: members
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


exports.getPendingPayment = async (req, res) => {
  try {
    const { memberId } = req.params;

    const member = await BCMember.findById(memberId);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "BC member not found."
      });
    }

    const lastPayment = await BCPayment.findOne({
      memberId
    }).sort({
      paymentDate: -1
    });

    if (!lastPayment) {
      return res.status(200).json({
        success: true,
        message: "No previous payment found.",
        data: {
          pendingAmount: 0,
          pendingMonths: 0
        }
      });
    }

    const startDate = new Date(member.startDate);
    const lastPaymentDate = new Date(lastPayment.paymentDate);

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();

    const lastYear = lastPaymentDate.getFullYear();
    const lastMonth = lastPaymentDate.getMonth();

    const monthsPassed =
      (lastYear - startYear) * 12 +
      (lastMonth - startMonth);

    const expectedMonths = monthsPassed + 1;

    const paidMonths = await BCPayment.countDocuments({
      memberId
    });

    const pendingMonths = expectedMonths - paidMonths;

    if (pendingMonths <= 0) {
      return res.status(200).json({
        success: true,
        message: "No pending payment.",
        data: {
          pendingAmount: 0,
          pendingMonths: 0
        }
      });
    }

    const pendingAmount =
      pendingMonths * member.monthlyAmount;

    return res.status(200).json({
      success: true,
      message: "Pending payment found.",
      data: {
        pendingAmount,
        pendingMonths,
        monthlyAmount: member.monthlyAmount
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



exports.addMonthlyPayment = async (req, res) => {
  try {

    const { memberId, paymentDate } = req.body;
    const member = await BCMember.findById(memberId);
    if (!member) {
      return res.status(404).json({
        success: false,
        message: "BC member not found."
      });
    }
    const monthlyAmount = member.monthlyAmount;
    const interestRate = member.interestRate;
    const [year, month] = paymentDate.split("-").map(Number);
    const paymentMonth = month;
    const paymentYear = year;

    const existingPayment = await BCPayment.findOne({memberId, paymentMonth,paymentYear});

    if (existingPayment) {
      return res.status(400).json({
        success: false,
        message: "This month's payment has already been added."
      });
    }

    const previousPayment = await BCPayment.findOne({ memberId }).sort({ paymentDate: -1 });
    let previousBalance = 0;
    let previousMonthNumber = 0;

    if (previousPayment) {
      previousBalance = previousPayment.balanceAfterPayment;
      previousMonthNumber = previousPayment.monthNumber;}
    const monthNumber = previousMonthNumber + 1;
    const balanceBeforeInterest = previousBalance + monthlyAmount;
    const interestAmount = balanceBeforeInterest *(interestRate / 100);
    const balanceAfterPayment = balanceBeforeInterest +interestAmount;
    const totalAmount = monthlyAmount + interestAmount;

    const payment = await BCPayment.create({
      memberId,paymentDate,
      paymentMonth,paymentYear,
      monthNumber, monthlyAmount,
      interestAmount,penaltyAmount: 0,
      totalAmount, balanceAfterPayment
    });
    return res.status(201).json({
      success: true,
      message: "Monthly payment added successfully.",
      data: {
        clientName: member.clientName,
        fatherName: member.fatherName,
        monthNumber, paymentDate,
        paymentMonth, paymentYear,
        monthlyAmount,interestRate,
        interestAmount, totalAmount,
        balanceAfterPayment
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message:"This month's payment has already been added."
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};