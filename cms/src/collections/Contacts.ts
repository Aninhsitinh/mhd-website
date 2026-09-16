import type { CollectionConfig } from 'payload'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'createdAt'],
    description: 'Yêu cầu liên hệ từ khách hàng',
  },
  access: {
    create: () => true, // Cho phép khách truy cập gửi form liên hệ
    read: ({ req: { user } }) => Boolean(user), // Chỉ admin/user đăng nhập mới đọc được
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Họ tên',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Số điện thoại',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Nội dung',
    },
    {
      name: 'isRead',
      type: 'checkbox',
      defaultValue: false,
      label: 'Đã đọc',
      admin: { position: 'sidebar' },
    },
  ],
}
