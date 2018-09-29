import AvatarOrInitials from '@/AvatarOrInitials.vue'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

const localVue = createLocalVue()

describe('AvatarOrInitials.vue', () => {
  it('mounts correctly with minimal values and renders an initial', () => {
    let avatarOrInitials = shallowMount(AvatarOrInitials, {
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

  it('displays a dark font on light backgrounds', () => {
    let avatarOrInitials = mount(AvatarOrInitials, {
      attachToDocument: true,
      localVue,
      propsData: {
        // This title produces a dark initial
        title: 'abcde',
        round: false,
        size: 50
      }
    })

    expect(avatarOrInitials.vm.initialsStyle).toBe('width: 50px; height: 50px; border-radius: 50px; background-color: #ffeb3b; text-transform: uppercase; color: #000000;');
    expect(avatarOrInitials.find('.initials').text()).toBe('a')
  })

  it('mounts correctly with full values and renders an image', () => {
    let avatarOrInitials = mount(AvatarOrInitials, {
      attachToDocument: true,
      localVue,
      propsData: {
        title: 'AAA',
        size: 5,
        round: true,
        image: 'https://example.com/example.jpeg'
      }
    })

    expect(avatarOrInitials.contains('div')).toBe(true)
    const image = avatarOrInitials.find('.avatar-image')
    expect(image.is('img')).toBe(true)
    expect(image.element.getAttribute('width')).toBe('5px')
    expect(image.element.style.borderRadius).toBe('5px')
  })
})
