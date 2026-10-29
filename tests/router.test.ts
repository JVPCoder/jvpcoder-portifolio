import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseRoute, preferredLang, switchLangPath } from '../src/lib/route.ts'

test('parseRoute maps known paths', () => {
  assert.deepEqual(parseRoute('/'), { name: 'root' })
  assert.deepEqual(parseRoute('/en'), { name: 'home', lang: 'en' })
  assert.deepEqual(parseRoute('/pt/'), { name: 'home', lang: 'pt' })
  assert.deepEqual(parseRoute('/pt/work/checkout-refactor'), { name: 'work', lang: 'pt', slug: 'checkout-refactor' })
})

test('parseRoute rejects unknown paths', () => {
  assert.deepEqual(parseRoute('/fr'), { name: 'notFound', lang: 'en' })
  assert.deepEqual(parseRoute('/pt/about'), { name: 'notFound', lang: 'pt' })
  assert.deepEqual(parseRoute('/en/work'), { name: 'notFound', lang: 'en' })
  assert.deepEqual(parseRoute('/en/work/a/b'), { name: 'notFound', lang: 'en' })
})

test('switchLangPath keeps the current page', () => {
  assert.equal(switchLangPath('/en/work/checkout-refactor', 'pt'), '/pt/work/checkout-refactor')
  assert.equal(switchLangPath('/pt', 'en'), '/en')
  assert.equal(switchLangPath('/en/nope', 'pt'), '/pt')
})

test('preferredLang picks pt only for Portuguese browsers', () => {
  assert.equal(preferredLang('pt-BR'), 'pt')
  assert.equal(preferredLang('en-US'), 'en')
  assert.equal(preferredLang(undefined), 'en')
})
