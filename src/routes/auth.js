const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const checkRememberMe = require('../middleware/checkRememberMe');

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: User Sign In
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               rememberMe:
 *                 type: boolean
 *                 description: "Set to true to remember the user"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid email or password
 */

router.post('/signin', checkRememberMe, authController.signIn);

module.exports = router;
