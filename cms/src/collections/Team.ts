import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'photo', 'order'],
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
      label: 'Tên nhân sự',
    },
    {
      name: 'position',
      type: 'text',
      required: true,
      label: 'Chức vụ',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả thêm',
    },
    {
      name: 'experience',
      type: 'text',
      label: 'Kinh nghiệm',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Ảnh đại diện',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Thứ tự hiển thị',
      defaultValue: 0,
    }
  ],
}
