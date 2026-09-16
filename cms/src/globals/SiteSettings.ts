import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Cài đặt giao diện & Media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroBanner',
      type: 'upload',
      relationTo: 'media',
      label: 'Ảnh Hero Banner chính (Trang chủ)',
    },
    {
      name: 'teamPhoto',
      type: 'upload',
      relationTo: 'media',
      label: 'Ảnh tập thể Đội ngũ MHD (Trang Giới thiệu)',
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo MHD chính thức',
    },
  ],
}
