import { mount } from 'avoriaz'
import Bar from '../src/components/Bar.vue'
var test = require('tape')

test('renders a div with class bar', (t) => {
  t.plan(1)
  const wrapper = mount(Bar)
  t.ok(wrapper.hasClass('bar'))
})

test('renders 4 list elements inside .parent-ul', (t) => {
  t.plan(1)
  const wrapper = mount(Bar)
  const listElements = wrapper.find('.parent-ul li')
  t.equal(listElements.length, 4)
})

test('renders 2 list elements as direct descendants of .parent-ul', (t) => {
  t.plan(1)
  const wrapper = mount(Bar)
  const listElements = wrapper.find('.parent-ul > li')
  t.equal(listElements.length, 2)
})

test('.child-ul has color style set to red', (t) => {
  t.plan(1)
  const wrapper = mount(Bar)
  const childUl = wrapper.find('.child-ul')[0]
  t.ok(childUl.hasStyle('color', 'red'))
})
