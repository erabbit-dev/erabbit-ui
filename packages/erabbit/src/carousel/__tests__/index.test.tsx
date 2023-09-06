import { mount } from '@vue/test-utils'
import { Carousel, CarouselItem, type CarouselInstance } from '..'

test('should render default Carousel', () => {
  const wrapper = mount(
    <Carousel>
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
      <CarouselItem>4</CarouselItem>
    </Carousel>
  )
  expect(wrapper.html()).toMatchSnapshot()
})

test('should trigger prev next and indicators change active item', async () => {
  const wrapper = mount(
    <Carousel>
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
      <CarouselItem>4</CarouselItem>
    </Carousel>
  )

  await Promise.resolve().then()

  expect(wrapper.find('.carousel-item.fade').text()).toBe('1')

  await wrapper.find('.carousel-btn.next').trigger('click')

  expect(wrapper.find('.carousel-item.fade').text()).toBe('2')

  await wrapper.find('.carousel-btn.prev').trigger('click')

  expect(wrapper.find('.carousel-item.fade').text()).toBe('1')

  await wrapper.findAll('.carousel-indicator span')[2].trigger('click')

  expect(wrapper.find('.carousel-item.fade').text()).toBe('3')
})

test('should use component instance methods to toggle active item', async () => {
  const wrapper = mount({
    render() {
      return (
        <Carousel ref="carousel">
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
          <CarouselItem>4</CarouselItem>
        </Carousel>
      )
    }
  })

  const { carousel } = wrapper.vm.$refs as {
    carousel: CarouselInstance
  }

  console.log(carousel)

  await Promise.resolve().then()

  expect(wrapper.find('.carousel-item.fade').text()).toBe('1')

  await carousel.prev()

  expect(wrapper.find('.carousel-item.fade').text()).toBe('4')

  await carousel.next()

  expect(wrapper.find('.carousel-item.fade').text()).toBe('1')

  await carousel.setActiveItem(2)

  expect(wrapper.find('.carousel-item.fade').text()).toBe('3')
})
