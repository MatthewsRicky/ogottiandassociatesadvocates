"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHtmlWithBreaks(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

export async function submitContact(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    matter: formData.get("matter"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Please check the highlighted fields and try again.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const data = result.data;

  try {
    await resend.emails.send({
      from: "Website Enquiries <onboarding@resend.dev>",
      to: ["matthewsrickypro@gmail.com"],
      replyTo: data.email,

      subject: `New Website Enquiry — ${data.matter}`,

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Website Enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f5f1e8;
              color: #151513;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                width: 100%;
                background-color: #f5f1e8;
                padding: 40px 16px;
                box-sizing: border-box;
              "
            >
              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  background-color: #fbfaf6;
                  border: 1px solid #ded9cd;
                "
              >
                <!-- Header -->
                <div
                  style="
                    background-color: #0b0b0a;
                    padding: 32px 36px;
                    border-bottom: 3px solid #b89a5a;
                  "
                >
                  <p
                    style="
                      margin: 0 0 8px;
                      color: #d4bd88;
                      font-size: 11px;
                      line-height: 1.5;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                    "
                  >
                    L.A. Ogotti &amp; Associates
                  </p>

                  <h1
                    style="
                      margin: 0;
                      color: #fffefa;
                      font-size: 28px;
                      line-height: 1.25;
                      font-weight: 500;
                    "
                  >
                    New Website Enquiry
                  </h1>

                  <p
                    style="
                      margin: 12px 0 0;
                      color: #c9c6bd;
                      font-size: 14px;
                      line-height: 1.6;
                    "
                  >
                    A new consultation request has been submitted through the
                    firm's website.
                  </p>
                </div>

                <!-- Main content -->
                <div style="padding: 36px;">
                  
                  <!-- Matter -->
                  <div
                    style="
                      margin-bottom: 28px;
                      padding: 18px 20px;
                      background-color: #f1eadc;
                      border-left: 3px solid #b89a5a;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 6px;
                        color: #68665e;
                        font-size: 11px;
                        line-height: 1.5;
                        letter-spacing: 1.5px;
                        text-transform: uppercase;
                      "
                    >
                      Matter Type
                    </p>

                    <p
                      style="
                        margin: 0;
                        color: #151513;
                        font-size: 17px;
                        line-height: 1.5;
                        font-weight: 600;
                      "
                    >
                      ${escapeHtml(data.matter)}
                    </p>
                  </div>

                  <!-- Contact details -->
                  <h2
                    style="
                      margin: 0 0 16px;
                      color: #151513;
                      font-size: 17px;
                      line-height: 1.4;
                      font-weight: 600;
                    "
                  >
                    Contact Details
                  </h2>

                  <table
                    role="presentation"
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="margin-bottom: 30px;"
                  >
                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2ded5;
                          color: #68665e;
                          font-size: 13px;
                          width: 120px;
                        "
                      >
                        Name
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2ded5;
                          color: #151513;
                          font-size: 14px;
                          font-weight: 600;
                        "
                      >
                        ${escapeHtml(data.name)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2ded5;
                          color: #68665e;
                          font-size: 13px;
                        "
                      >
                        Email
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2ded5;
                          color: #151513;
                          font-size: 14px;
                        "
                      >
                        <a
                          href="mailto:${escapeHtml(data.email)}"
                          style="
                            color: #8f7642;
                            text-decoration: none;
                          "
                        >
                          ${escapeHtml(data.email)}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2ded5;
                          color: #68665e;
                          font-size: 13px;
                        "
                      >
                        Phone
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          border-bottom: 1px solid #e2ded5;
                          color: #151513;
                          font-size: 14px;
                        "
                      >
                        ${escapeHtml(data.phone || "Not provided")}
                      </td>
                    </tr>
                  </table>

                  <!-- Enquiry -->
                  <h2
                    style="
                      margin: 0 0 16px;
                      color: #151513;
                      font-size: 17px;
                      line-height: 1.4;
                      font-weight: 600;
                    "
                  >
                    Enquiry
                  </h2>

                  <div
                    style="
                      padding: 20px;
                      background-color: #ffffff;
                      border: 1px solid #e2ded5;
                      color: #3f3e39;
                      font-size: 14px;
                      line-height: 1.8;
                    "
                  >
                    ${escapeHtmlWithBreaks(data.message)}
                  </div>

                  <!-- Reply CTA -->
                  <div style="padding-top: 30px;">
                    <a
                      href="mailto:${escapeHtml(data.email)}"
                      style="
                        display: inline-block;
                        padding: 13px 22px;
                        background-color: #b89a5a;
                        color: #0b0b0a;
                        font-size: 13px;
                        line-height: 1.4;
                        font-weight: 600;
                        text-decoration: none;
                        letter-spacing: 0.3px;
                      "
                    >
                      Reply to ${escapeHtml(data.name)}
                    </a>
                  </div>
                </div>

                <!-- Footer -->
                <div
                  style="
                    padding: 24px 36px;
                    background-color: #151513;
                    border-top: 1px solid #292824;
                  "
                >
                  <p
                    style="
                      margin: 0 0 6px;
                      color: #d4bd88;
                      font-size: 11px;
                      line-height: 1.5;
                      letter-spacing: 1.5px;
                      text-transform: uppercase;
                    "
                  >
                    L.A. Ogotti &amp; Associates Advocates
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #aaa79f;
                      font-size: 12px;
                      line-height: 1.7;
                    "
                  >
                    Advocates | Commissioners for Oaths | Notaries Public
                    <br />
                    Kirsch Plaza, 1st Floor, Unit 5
                    <br />
                    Diani Beach Road, Diani Beach, Kenya
                  </p>
                </div>
              </div>

              <!-- System footer -->
              <p
                style="
                  max-width: 680px;
                  margin: 16px auto 0;
                  padding: 0 16px;
                  color: #8a877f;
                  font-size: 11px;
                  line-height: 1.6;
                  text-align: center;
                "
              >
                This message was generated by the contact form on the
                L.A. Ogotti &amp; Associates Advocates website.
              </p>
            </div>
          </body>
        </html>
      `,

      text: `
NEW WEBSITE ENQUIRY
L.A. Ogotti & Associates Advocates

Matter Type:
${data.matter}

CONTACT DETAILS
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

ENQUIRY
${data.message}

----------------------------------------
L.A. Ogotti & Associates Advocates
Advocates | Commissioners for Oaths | Notaries Public
Kirsch Plaza, 1st Floor, Unit 5
Diani Beach Road, Diani Beach, Kenya
      `.trim(),
    });

    return {
      success: true,
      message:
        "Thank you. Your enquiry has been received and the Firm will respond as appropriate.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message:
        "We were unable to send your enquiry. Please contact the Firm directly by phone or email.",
    };
  }
}
