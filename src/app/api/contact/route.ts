import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // If RESEND_API_KEY is not configured or is dummy, simulate success for demo
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_dummy") {
      console.log("Simulated email sending (No valid API key):", data);
      // Wait for a second to simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Simulated success" });
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["your-email@example.com"], // Ganti dengan email asli
      subject: `[Portfolio] ${data.subject}`,
      html: `
        <h2>New Message from ${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr />
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
