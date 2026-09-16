import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'logo', 'order'],
    group: 'Nội dung',
  },
  access: {
    read: () => true, // Anyone can read
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tên đối tác',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo đối tác',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Thứ tự hiển thị',
      defaultValue: 0,
    }
  ],
}
