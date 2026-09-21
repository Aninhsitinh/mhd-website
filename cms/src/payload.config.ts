import 'dotenv/config'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor, HTMLConverterFeature, defaultEditorFeatures } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'
import { Documents } from './collections/Documents'
import { Jobs } from './collections/Jobs'
import { Partners } from './collections/Partners'
import { Team } from './collections/Team'
import { Contacts } from './collections/Contacts'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' | MHD CMS',
      description: 'Hệ thống quản lý nội dung MHD Valuation',
    },
  },
  localization: {
    locales: [
      { label: 'Tiếng Việt', code: 'vi' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'vi',
    fallback: true,
  },
  globals: [
    SiteSettings,
  ],
  collections: [
    Users,
    Media,
    Categories,
    Posts,
    Projects,
    Documents,
    Jobs,
    Partners,
    Team,
    Contacts,
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HTMLConverterFeature({}),
    ]
  }),
  graphQL: { disable: true },
  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  cors: [
    'http://localhost:3000', // Nuxt dev server
    'https://mhd.com.vn',   // Production
  ],
})
