import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const SERVICE_ID = 'service_j2l9hl6'
const PUBLIC_KEY = 'w3keqlg_xukZ2uaHq'
const TEMPLATE_ID = 'template_ijvrw3c'

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState(null)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)
  const formRef = React.useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    emailjs.init({
      publicKey: PUBLIC_KEY,
    })

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      })
      .then(() => {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      })
      .catch((err) => {
        setSubmitError(err?.message || 'An error occurred. Please try again.')
        console.log(err)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-black p-4 md:p-8 px-2 sm:px-0 dark:text-slate-400 text-slate-600 bg-slate-700">
      <motion.section
        className="max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeInOut' },
          },
        }}
        transition={{ delay: 0.2 }}
      >
        <div className=" w-full p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-foreground">
            Contact My
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="mt-1"
                aria-label="Name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="mt-1"
                aria-label="Email"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message Subject"
                className="mt-1"
                aria-label="Subject"
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                className="mt-1 min-h-[100px] max-h-48"
                aria-label="Message"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'w-full flex items-center justify-center gap-2',
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              )}
            >
              {isSubmitting ? (
                <>
                  <Mail className="animate-spin w-4 h-4" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>

            {submitError && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive text-destructive-foreground rounded-md flex items-start gap-2">
                <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>{submitError}</p>
              </div>
            )}

            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500 text-green-500 rounded-md flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Message sent successfully. We will contact you soon.</p>
              </div>
            )}
          </form>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactForm
