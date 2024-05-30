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
            color: #AF1328;
          }
          .coupon-code {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #AF1328;
            margin: 20px 0;
          }
          .button {
            text-align: center;
            margin: 20px 0;
          }
          .button a {
            text-decoration: none;
            background-color: #AF1328;
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
