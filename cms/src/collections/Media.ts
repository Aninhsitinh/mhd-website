import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const staticMediaDir = path.resolve(dirname, '../../../media')

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'filename', 'mimeType', 'createdAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  upload: {
    staticDir: staticMediaDir, // Files stored in root /media/
    mimeTypes: ['image/*', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 640,
        height: 480,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Mô tả ảnh (Alt Text)',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Chú thích',
    },
    {
      name: 'wpId',
      type: 'number',
      label: 'WordPress ID (migration)',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'wpUrl',
      type: 'text',
      label: 'WordPress URL gốc (migration)',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}
