const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Or any other email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

exports.sendAnnouncementEmail = functions.https.onCall(async (data, context) => {
  const { fileUrl, recipients } = data;

  // Create the email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: recipients.join(', '),
    subject: 'New Announcement',
    html: `<p>Dear recipient,</p><p>Please find the attached document.</p>`,
    attachments: [
      {
        filename: 'document.pdf',
        path: fileUrl
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email: ', error);
    throw new functions.https.HttpsError('internal', 'Unable to send email.');
  }
});
