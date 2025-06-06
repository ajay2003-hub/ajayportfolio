import DOMPurify from 'dompurify';

// Rate limiting configuration
const RATE_LIMIT_KEY = 'contact_form_submissions';
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 3; // Max 3 submissions per minute

export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim());
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  return nameRegex.test(name);
};

export const validateMessage = (message: string): boolean => {
  return message.length >= 10 && message.length <= 1000;
};

export const checkRateLimit = (): { allowed: boolean; timeRemaining?: number } => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
  
  // Remove old submissions outside the rate limit window
  const recentSubmissions = submissions.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    const oldestSubmission = Math.min(...recentSubmissions);
    const timeRemaining = RATE_LIMIT_WINDOW - (now - oldestSubmission);
    return { allowed: false, timeRemaining };
  }
  
  return { allowed: true };
};

export const recordSubmission = (): void => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
  submissions.push(now);
  
  // Keep only recent submissions
  const recentSubmissions = submissions.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
};

export const generateSubmissionId = (): string => {
  return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
