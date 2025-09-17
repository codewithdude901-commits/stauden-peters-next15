// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { FormSubmissions } from './collections/FormSubmissions'
import { TeamMembers } from './collections/TeamMembers'
import { ProductCategories } from './collections/ProductCategories'
import { Locations } from './collections/Locations'
import { Products } from './collections/Products'
import { Projects } from './collections/Projects'
import { Home } from './globals/Home'
import { About } from './globals/About'
import { LocationsIndex } from './globals/LocationsIndex'
import { ProductsIndex } from './globals/ProductsIndex'
import { ProjectsIndex } from './globals/ProjectsIndex'
import { Contact } from './globals/Contact'
import { LegalImprint } from './globals/LegalImprint'
import { PrivacyPolicy } from './globals/PrivacyPolicy'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    TeamMembers,
    FormSubmissions,
    Locations,
    ProductCategories,
    Products,
    Projects,
  ],
  globals: [
    Home,
    About,
    LocationsIndex,
    ProductsIndex,
    ProjectsIndex,
    Contact,
    LegalImprint,
    PrivacyPolicy,
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  localization: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: {
          disableLocalStorage: true,
          generateFileURL: ({ filename }) => {
            // Return the direct S3 URL
            return `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${filename}`
          },
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION!,
      },

      // clientUploads: true,
    }),
  ],
})
