const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email)

export default defineEventHandler(async (event) => {
  // Rate limit: max 5 submissions per 10 minutes per IP address to block spam bots
  checkRateLimit(event, 5, 10 * 60 * 1000, 'contact-form')

  try {
    const body = await readBody(event) || {}
    const config = useRuntimeConfig()
    const payloadApiUrl = config.public.payloadApiUrl || 'http://localhost:3001/api'

    // Same rules as the contact form UI — valid submissions are unchanged
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const message = String(body.message || '').trim()

    if (!name || !email || !phone || !message || !isValidEmail(email)) {
      return {
        success: false,
        data: { message: 'Invalid form data' }
      }
    }

    // Send request to Payload CMS endpoint
    const response = await $fetch(`${payloadApiUrl}/contacts`, {
      method: 'POST',
      body: {
        name,
        email,
        phone,
        message
      }
    })
    
    console.log('Payload Response:', response)

    return {
      success: response && response.doc && response.doc.id ? true : false,
      data: response
    }
  } catch (error) {
    console.error('Contact Form Proxy Error:', error)
    return createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: error.message
    })
  }
})
