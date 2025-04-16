import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Datos del formulario:', formData)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitError(error.message || 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-h-full h-full px-2 sm:px-0 dark:text-slate-400 text-slate-600 bg-slate-700">
      <div className="max-w-2xl w-full p-6 bg-card rounded-xl shadow-lg border border-border bg-gray-900">
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
    </div>
  )
}

export default ContactForm
