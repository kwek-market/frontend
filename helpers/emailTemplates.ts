export const getCouponEmailTemplate = (options: {
  code: string;
  discount: string;
  expirationDate?: string;
}) => {
  return /* HTML */ `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Kwekmarket Coupon</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          .header {
            text-align: center;
            padding: 10px 0;
            color: #af1328;
          }
          .coupon-code {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #af1328;
            margin: 20px 0;
          }
          .button {
            text-align: center;
            margin: 20px 0;
          }
          .button a {
            text-decoration: none;
            background-color: #af1328;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #666;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Exclusive Offer Just for You! Save Big at Kwekmarket</h1>
            <img
              src="https://res.cloudinary.com/dlui93ca3/image/upload/v1718139660/logo_puuhdx.svg"
              alt="Kwekmarket.com Logo"
            />
          </div>
          <p>Hi {{user.full_name}},</p>
          <p>
            We hope you are having a wonderful day! At Kwekmarket, we appreciate your loyalty and
            support. To show our gratitude, we have a special offer just for you.
          </p>
          <p><strong>🎉 Enjoy ${options.discount}% Off Your Next Purchase! 🎉</strong></p>
          <div class="coupon-code">COUPON CODE: ${options.code}</div>
          <p><strong>How to Redeem:</strong></p>
          <ol>
            <li>
              Visit <a href="http://www.kwekmarket.com">Kwekmarket</a> and add your favorite items
              to your cart.
            </li>
            <li>At checkout, enter the coupon code <strong>${options.code}</strong>.</li>
            <li>Enjoy your ${options.discount}% discount on your entire purchase!</li>
          </ol>
          ${options.expirationDate
            ? `<p><strong>Hurry, this offer is only valid until ${options?.expirationDate}.</strong></p>`
            : ""}
          <p>
            Thank you for being a valued customer. If you have any questions or need assistance,
            feel free to reach out to our customer support team at [support email] or [support phone
            number].
          </p>
          <p>Happy Shopping!</p>
          <p>Best regards,<br />The Kwekmarket Team</p>
          <div class="footer">
            <p>
              <em
                >Note: This coupon is valid for one-time use only and cannot be combined with other
                offers. Terms and conditions apply.</em
              >
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const getVendorApplicationEmail = () => /* HTML */ `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vendor Application Under Review</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .header {
          background-color: #af1328;
          color: #ffffff;
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
        }
        .content {
          padding: 20px;
          color: #333333;
        }
        .content p {
          line-height: 1.6;
        }
        .footer {
          background-color: #f4f4f4;
          color: #666666;
          padding: 10px;
          text-align: center;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Kwekmarket</h1>
          <img
            src="https://res.cloudinary.com/dlui93ca3/image/upload/v1718139660/logo_puuhdx.svg"
            alt="Kwekmarket.com Logo"
          />
        </div>
        <div class="content">
          <p>Dear {{user.fullName}},</p>
          <p>
            Thank you for submitting your application to become a vendor with us. We are pleased to
            inform you that your application is currently being reviewed by our team.
          </p>
          <p>
            We appreciate your interest in partnering with Kwekmarket and will get back to you
            shortly with the next steps. If we need any additional information, we will reach out to
            you.
          </p>
          <p>Thank you for your patience and understanding.</p>
          <p>Best regards,</p>
          <p>
            Kwekmarket<br />
            [Contact Information]
          </p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Kwekmarket. All rights reserved.
        </div>
      </div>
    </body>
  </html> `;

export const getWelcomeEmailTemplate = (name: string) => /* HTML */ `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Kwekmarket.com</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header img {
          max-width: 100%;
          height: auto;
        }
        .content {
          line-height: 1.6;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #777777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img
            src="https://res.cloudinary.com/dlui93ca3/image/upload/v1718139660/logo_puuhdx.svg"
            alt="Kwekmarket.com Logo"
          />
        </div>
        <div class="content">
          <h2>Hi ${name},</h2>
          <p>Welcome to Kwekmarket.com!</p>
          <p>
            We guarantee delivery within 24 hours. Shop confidently with our extensive product range
            and real-time tracking.
          </p>
          <p>Thank you for choosing us. We’re here for you 24/7.</p>
          <p>Best,</p>
          <p>James O.</p>
          <p>Kwekmarket.com</p>
        </div>
        <div class="footer">&copy; 2024 Kwekmarket.com. All rights reserved.</div>
      </div>
    </body>
  </html> `;

export const getVerifyEmailTemplate = (name: string) => /* HTML */ `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Kwekmarket.com</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header img {
          max-width: 100%;
          height: auto;
        }
        .content {
          line-height: 1.6;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #777777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img
            src="https://res.cloudinary.com/dlui93ca3/image/upload/v1718139660/logo_puuhdx.svg"
            alt="Kwekmarket.com Logo"
          />
        </div>
        <div class="content">
          <h2>Hi ${name},</h2>
          <p>Welcome to Kwekmarket.com!</p>
          <p>
            Thank you for signing up with <a href="https://www.kwekmarket.com">Kwekmarket.com</a>!
            Please confirm your email address to complete your registration.
          </p>
          <p>[Confirm Your Email]</p>
          <p>If you didn’t sign up, please ignore this email.</p>

          <p>Thank you,</p>
          <p>The <a href="https://www.kwekmarket.com">Kwekmarket.com</a> Team</p>
        </div>
        <div class="footer">&copy; 2024 Kwekmarket.com. All rights reserved.</div>
      </div>
    </body>
  </html> `;
