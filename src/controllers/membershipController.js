const { User, Transaction } = require('../models');

exports.getMembers = async (req, res) => {
  try {
    const members = await User.findAll({
      attributes: ['id', 'name', 'email', 'phoneNo', 'joinDate', 'remainedPoint', 'status'],
    });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMemberDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await User.findByPk(id, {
      attributes: [
        'name', 'email', 'phoneNo', 'birthDate', 'address', 'joinDate', 'referral',
        'earnedPoint', 'redeemedPoint', 'remainedPoint', 'status',
      ],
      include: {
        model: Transaction,
        as: 'transactions',
        attributes: ['transactionID', 'transactionDate', 'type', 'poin'],
      },
    });
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
