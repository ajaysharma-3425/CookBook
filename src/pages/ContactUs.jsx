import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  Users,
  Globe,
  Shield,
  Coffee,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ChefHat,
  Sparkles
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    
    try {
      // BACKEND API CALL
      // Agar aapke frontend .env mein URL hai toh import.meta.env.VITE_API_URL use karein
      const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please check if the server is running.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["hello@cookbook.com", "support@cookbook.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["123 Food Street", "New York, NY 10001"],
      description: "Come say hello!"
    }
  ];

  const faqs = [
    {
      question: "How do I submit a recipe?",
      answer: "Click on 'Add Recipe' in the navigation bar, fill in the details, and submit. Our team will review it within 48 hours."
    },
    {
      question: "Can I edit my submitted recipes?",
      answer: "Yes, you can edit pending recipes. Once approved, you cannot edit them to maintain quality consistency."
    },
    {
      question: "How long does recipe approval take?",
      answer: "Typically 24-48 hours. We review each recipe manually to ensure quality and accuracy."
    },
    {
      question: "Do you have a mobile app?",
      answer: "Yes! Our mobile app is available on both iOS and Android stores. Search for 'CookBook Recipes'."
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", url: "#" },
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", url: "#" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", url: "#" },
    { icon: <Youtube className="h-5 w-5" />, label: "YouTube", url: "#" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", url: "#" }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-500 rounded-b-[40%] md:rounded-b-[20%] shadow-xl z-0"></div>

      {/* Hero Header Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-full mb-6 shadow-lg border border-white/30">
            <MessageSquare className="h-8 w-8 text-white" />
            <Sparkles className="h-4 w-4 text-yellow-300 ml-1 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-50 max-w-2xl mx-auto font-medium">
            Whether you have questions, feedback, or just want to say hello, 
            our team is ready to assist you.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100/50 text-orange-600 rounded-xl">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                      <div className="space-y-0.5">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm font-medium">{detail}</p>
                        ))}
                      </div>
                      <p className="text-xs text-green-600 font-semibold mt-3 flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5" />
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white/80 backdrop-blur-lg border border-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Mon - Fri</span>
                  <span className="font-bold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Saturday</span>
                  <span className="font-bold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Sunday</span>
                  <span className="font-bold text-red-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-lg border border-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2.5 bg-gray-50 hover:bg-orange-500 text-gray-500 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 p-8 md:p-10 relative overflow-hidden">
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"></div>

              {submitted ? (
                <div className="text-center py-16 animate-fade-in">
                  <div className="h-24 w-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle className="h-12 w-12 text-green-500 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg">
                    Thank you for reaching out! Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-gray-500">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none text-gray-800"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none text-gray-800"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none text-gray-800 cursor-pointer appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Recipe Submission">Recipe Submission</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Business Partnership">Business Partnership</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none resize-none text-gray-800"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>Your information is 100% secure and will never be shared.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="hidden md:flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full text-sm font-semibold">
                  <Globe className="h-4 w-4" />
                  <span>Quick Answers</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-tight">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Stay Updated with Food Trends
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter for weekly recipe inspirations, cooking tips, and exclusive content.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-sm"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all shadow-lg hover:shadow-orange-500/25">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Standard CSS for Animations (Instead of style jsx) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}