import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'parent'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tên danh mục',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả',
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Danh mục cha',
      admin: {
        position: 'sidebar',
      },
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
  ],
}
