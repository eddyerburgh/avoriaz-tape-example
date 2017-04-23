import { mount } from 'avoriaz'
import test from 'tape'
import Foo from '../src/components/Foo.vue'
import Bar from '../src/components/Bar.vue'

test('renders an h1', (t) => {
  t.plan(1)
  const wrapper = mount(Foo)
  const numberOfH1 = wrapper.find('h1').length
  t.equal(numberOfH1, 1)
})

test('h1 renders data.msg as text', (t) => {
  t.plan(1)
  const wrapper = mount(Foo)
  const message = wrapper.data().msg
  const h1Text = wrapper.find('h1')[0].text()

  t.equal(h1Text, message)
})

test('h1 text changes when button is clicked', (t) => {
  t.plan(1)
  const expectedMessage = 'new message'

  const wrapper = mount(Foo)
  const button = wrapper.find('#change-message')[0]
  button.simulate('click')
  const h1Text = wrapper.find('h1')[0].text()

  t.equal(h1Text, expectedMessage)
})

test('renders a message that equals prop msg2', (t) => {
  t.plan(1)
  const msg2 = 'test message'
  const wrapper = mount(Foo, { propsData: { msg2 } })
  const text = wrapper.find('p')[0].text()

  t.equal(text, msg2)
})

test('renders Bar', (t) => {
  t.plan(1)
  const wrapper = mount(Foo)
  const bar = wrapper.find(Bar)[0]
  t.ok(bar.is(Bar))
})
