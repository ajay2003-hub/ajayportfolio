
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_xg74r2g', // Your service ID
        'template_725el62', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ajykumar284@gmail.com', // Your email
        },
        'gq2aJavwtPfCNbLUO' // Your public key
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">ajykumar284@gmail.com</div>
                  </div>
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
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#00ff41] transition-colors duration-300"
                    required
                    disabled={isSubmitting}
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
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#00ff41] transition-colors duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                  />
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
