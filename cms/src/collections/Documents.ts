import type { CollectionConfig } from 'payload'
import { lexicalHTML } from '@payloadcms/richtext-lexical'

export const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'docType', 'status', 'publishedDate'],
    description: 'Tài liệu (Văn bản pháp luật, Tài liệu chuyên ngành, Kinh nghiệm & kiến thức)',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Tiêu đề',
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
      label: 'Nội dung',
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
      name: 'fileAttachment',
      type: 'upload',
      relationTo: 'media',
      label: 'File đính kèm (PDF, DOCX...)',
    },
    {
      name: 'docType',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      label: 'Loại tài liệu',
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Nháp', value: 'draft' },
        { label: 'Đã xuất bản', value: 'published' },
      ],
      label: 'Trạng thái',
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Ngày xuất bản',
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
    {
      name: 'contentHtml',
      type: 'textarea',
      admin: { hidden: true },
    },
  ],
}
