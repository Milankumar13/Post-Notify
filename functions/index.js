const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const database = admin.database();
const rootRef = database.ref("User");
const nodemailer = require("nodemailer");
exports.sendEmail = functions.database.ref("User/U1/Notify")
    .onUpdate((change, context) => {
      const newval = change.after.val();
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "parthsaliya86@gmail.com",
          pass: "sph@8448",
        },
      });
      if (newval == 1) {
        rootRef.on("value", (snapshot) => {
          const emailadd = snapshot.child("U1/emailss").val();
          const mailOptions = {
            from: "parthsaliya86@gmail.com",
            to: emailadd,
            subject: "Post Notification",
            html: "<h1>You have a post in your letterbox !!!</h1>",
          };
          transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
              console.log(error);
              return "Error in send transport error";
            }
            console.log("Sent!");
          });
          return database.ref("metadata/lc/").set(emailadd);
        });
      }
    });
