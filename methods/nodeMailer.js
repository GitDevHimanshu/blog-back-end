const nodemailer = require("nodemailer");

module.exports.sendMail = async (email, payload) => {
    try {
        let transporter = await nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.nodemailerUser,
                pass: process.env.nodemailerPass,
            }
        })

        let info = await transporter.sendMail({
            from: {
                name: "Blog Website",
                address: "geetahunny@gmail.com",
            },
            to: email,
            subject: "OTP verification",
            text: " confirm your OTP and this is your test email",
            html: `<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 500px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .otp-code {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin: 20px 0;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>OTP Verification</h2>
        <p>Your One-Time Password (OTP) for verification is:</p>
        <div class="otp-code">${payload}</div>
        <p>Please enter this code to proceed. The OTP is valid for 10 minutes.</p>
        <p class="footer">If you did not request this OTP, please ignore this email.</p>
    </div>
</body>
</html>
`,
        })
        return payload

    } catch (error) {
        console.log(error);
        return false
    }
}




