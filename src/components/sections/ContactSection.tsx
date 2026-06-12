"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import SpotlightCard from "@/components/animations/SpotlightCard";
import Magnet from "@/components/animations/MagneticButton";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-background relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            Let's <span className="text-cyan-primary">Connect</span>
          </h2>
          <p className="text-dim-text max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <SpotlightCard className="p-8 md:p-10" spotlightColor="rgba(0, 212, 255, 0.15)">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                <input
                  id="name"
                  {...register("name")}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-primary focus:ring-1 focus:ring-cyan-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-primary focus:ring-1 focus:ring-cyan-primary transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
              <input
                id="subject"
                {...register("subject")}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-primary focus:ring-1 focus:ring-cyan-primary transition-all"
                placeholder="Project Inquiry"
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
              <textarea
                id="message"
                {...register("message")}
                rows={5}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-primary focus:ring-1 focus:ring-cyan-primary transition-all resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div>
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                )}
              </div>
              
              <Magnet padding={20} magnetStrength={3}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-primary text-background font-bold px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Magnet>
            </div>
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
}
