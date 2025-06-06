
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';
import ObfuscatedEmail from './ObfuscatedEmail';
import { 
  sanitizeInput, 
  validateEmail, 
  validateName, 
  validateMessage, 
  checkRateLimit, 
  recordSubmission,
  generateSubmissionId 
} from '../utils/security';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-bot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot field (should be empty)
    if (formData.honeypot) {
      console.log('Bot detected via honeypot');
      return;
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message)
    };

    // Validation
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!validateName(sanitizedData.name)) {
      toast({
        title: "Invalid Name",
        description: "Name must be 2-50 characters and contain only letters, spaces, apostrophes, and hyphens",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(sanitizedData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (!validateMessage(sanitizedData.message)) {
      toast({
        title: "Invalid Message",
        description: "Message must be between 10-1000 characters",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting check
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      const minutes = Math.ceil((rateLimitCheck.timeRemaining || 0) / 60000);
      toast({
        title: "Too Many Requests",
        description: `Please wait ${minutes} minute(s) before submitting again`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionId = generateSubmissionId();
      
      await emailjs.send(
        'service_xg74r2g',
        'template_725el62',
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          message: sanitizedData.message,
          submission_id: submissionId,
          timestamp: new Date().toISOString()
        },
        'gq2aJavwtPfCNbLUO'
      );

      // Record successful submission for rate limiting
      recordSubmission();

      toast({
        title: "Success!",
        description: `Your message has been sent successfully. Reference ID: ${submissionId.slice(-6)}`,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: ''
      });

    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Apply length limits
    let limitedValue = value;
    if (name === 'name' && value.length > 50) limitedValue = value.slice(0, 50);
    if (name === 'email' && value.length > 254) limitedValue = value.slice(0, 254);
    if (name === 'message' && value.length > 1000) limitedValue = value.slice(0, 1000);
    
    setFormData({
      ...formData,
      [name]: limitedValue
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-[#00ff41]">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-[#00ff41] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#00ff41]">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00ff41]/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-[#00ff41]" size={24} />
                  </div>
                  <ObfuscatedEmail />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00ff41]/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-[#00ff41]" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400">+917023491946</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00ff41]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-[#00ff41]" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400">Udaipur, Rajasthan, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name (2-50 characters)"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#00ff41] transition-colors duration-300"
                    required
                    disabled={isSubmitting}
                    maxLength={50}
                    pattern="[a-zA-Z\s'-]{2,50}"
                    title="Name must be 2-50 characters and contain only letters, spaces, apostrophes, and hyphens"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#00ff41] transition-colors duration-300"
                    required
                    disabled={isSubmitting}
                    maxLength={254}
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message (10-1000 characters)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#00ff41] transition-colors duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                    maxLength={1000}
                    minLength={10}
                  />
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {formData.message.length}/1000
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#00ff41] text-black hover:bg-[#00ff41]/90 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
