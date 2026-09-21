import { createReadStream, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineEventHandler, setResponseHeader, createError } from 'h3'

export default defineEventHandler((event) => {
  const filename = getRouterParam(event, 'filename')
  if (!filename) {
    throw createError({ statusCode: 400, statusMessage: 'Filename required' })
  }

  // Prevent directory traversal
  const safeFilename = filename.replace(/(\.\.[\/\\])+/g, '')

  // Look for the file in app/public/files/ or public/files/
  const possiblePaths = [
    resolve(process.cwd(), 'app', 'public', 'files', safeFilename),
    resolve(process.cwd(), 'public', 'files', safeFilename),
    resolve(process.cwd(), 'frontend', 'app', 'public', 'files', safeFilename),
    resolve(process.cwd(), 'frontend', 'public', 'files', safeFilename)
  ]

  let targetPath = null
  for (const p of possiblePaths) {
    if (existsSync(p)) {
      targetPath = p
      break
    }
  }

  if (!targetPath) {
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }

  if (safeFilename.endsWith('.pdf')) {
    setResponseHeader(event, 'Content-Type', 'application/pdf')
    setResponseHeader(event, 'Content-Disposition', `inline; filename="${safeFilename}"`)
  }

  return createReadStream(targetPath)
})
