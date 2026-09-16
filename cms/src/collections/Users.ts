import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    description: 'Quản trị viên hệ thống',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Họ tên',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      label: 'Vai trò',
      admin: { position: 'sidebar' },
    },
  ],
}
