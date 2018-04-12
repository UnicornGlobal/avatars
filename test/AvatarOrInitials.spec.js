import AvatarOrInitials from '@/AvatarOrInitials.vue'
import { createLocalVue, mount, shallow } from '@vue/test-utils'

const localVue = createLocalVue()

describe('AvatarOrInitials.vue', () => {
  it('mounts correctly with minimal values and renders an initial', () => {
    let avatarOrInitials = shallow(AvatarOrInitials, {
      attachToDocument: true,
      localVue,
      propsData: {
        title: 'xx',
        size: 45
      }
    })

    expect(avatarOrInitials.is(AvatarOrInitials)).toBe(true)
    expect(avatarOrInitials.find('div').exists()).toBe(true)
    expect(avatarOrInitials.find('.avatar-initials').exists()).toBe(true)
    expect(avatarOrInitials.find('.initials').text()).toBe('x')
  })

  it('mounts correctly with full values and renders an image', () => {
    let avatarOrInitials = mount(AvatarOrInitials, {
      attachToDocument: true,
      localVue,
      propsData: {
        title: 'AAA',
        size: 45,
        round: true,
        image: 'https://example.com/example.jpeg'
      }
    })

    expect(avatarOrInitials.contains('div')).toBe(true)
    const image = avatarOrInitials.find('.avatar-image')
    expect(image.is('img')).toBe(true)
    expect(image.element.getAttribute('width')).toBe('45px')
    expect(image.element.style.borderRadius).toBe('45px')
  })
})
