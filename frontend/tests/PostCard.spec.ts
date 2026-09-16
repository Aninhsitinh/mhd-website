import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PostCard from '../app/components/PostCard.vue'

describe('PostCard.vue Component', () => {
  it('renders a news post correctly (Category 191 - Tin Thị Trường)', async () => {
    const mockPost = {
      id: 101,
      title: 'Mock News Title',
      excerpt: 'This is a mock excerpt for news.',
      slug: 'mock-news',
      date: '2026-08-21T10:00:00',
      categories: [191],
      featured_image: 'https://example.com/image.jpg'
    }

    const wrapper = await mountSuspended(PostCard, {
      props: { post: mockPost }
    })

    // Check link structure
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/tin-tuc/mock-news')

    // Check title and excerpt
    expect(wrapper.text()).toContain('Mock News Title')
    expect(wrapper.text()).toContain('This is a mock excerpt for news.')

    // Check category label mapping
    expect(wrapper.text()).toContain('Tin Thị Trường')
  })

  it('renders a document post correctly (Category 92 - Tài liệu)', async () => {
    const mockPost = {
      id: 202,
      title: 'Mock Document Title',
      excerpt: 'This is a mock excerpt for document.',
      slug: 'mock-document',
      date: '2026-08-21T10:00:00',
      categories: [92],
      featured_image: null
    }

    const wrapper = await mountSuspended(PostCard, {
      props: { post: mockPost }
    })

    // Check link structure for document
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/tai-lieu/mock-document')

    // Check category label mapping
    expect(wrapper.text()).toContain('Tài liệu')
  })
})
