import type { CollectionConfig } from 'payload'
import { lexicalHTML } from '@payloadcms/richtext-lexical'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedDate'],
    description: 'Tuyển dụng & Cơ hội nghề nghiệp',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Vị trí tuyển dụng',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: { position: 'sidebar' },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Mô tả công việc',
    },

    lexicalHTML('content', { name: 'lexicalHtml' }),
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Tóm tắt',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Ảnh đại diện',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Thư viện hình ảnh (Gallery)',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      label: 'Danh mục',
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Nháp', value: 'draft' },
        { label: 'Đã xuất bản', value: 'published' },
        { label: 'Đã đóng', value: 'closed' },
      ],
      label: 'Trạng thái',
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Ngày đăng',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'wpId',
      type: 'number',
      label: 'WordPress ID (migration)',
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}
