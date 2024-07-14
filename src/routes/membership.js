const express = require("express");
const router = express.Router();
const membershipController = require("../controllers/membershipController");

/**
 * @swagger
 * /api/membership/list:
 *   get:
 *     summary: Get a list of members
 *     tags: [Membership]
 *     responses:
 *       200:
 *         description: A list of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phoneNo:
 *                     type: string
 *                   joinDate:
 *                     type: string
 *                     format: date-time
 *                   remainedPoint:
 *                     type: integer
 *                   status:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get("/list", membershipController.getMembers);

/**
 * @swagger
 * /api/membership/detail/{id}:
 *   get:
 *     summary: Get details of a member
 *     tags: [Membership]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the member
 *     responses:
 *       200:
 *         description: Member details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phoneNo:
 *                   type: string
 *                 birthDate:
 *                   type: string
 *                   format: date-time
 *                 address:
 *                   type: string
 *                 joinDate:
 *                   type: string
 *                   format: date-time
 *                 referral:
 *                   type: string
 *                 earnedPoint:
 *                   type: integer
 *                 redeemedPoint:
 *                   type: integer
 *                 remainedPoint:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       transactionID:
 *                         type: string
 *                       transactionDate:
 *                         type: string
 *                         format: date-time
 *                       type:
 *                         type: string
 *                       poin:
 *                         type: integer
 *       404:
 *         description: Member not found
 *       500:
 *         description: Server error
 */
router.get("/detail/:id", membershipController.getMemberDetails);

module.exports = router;
