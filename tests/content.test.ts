import { test } from 'node:test'
import assert from 'node:assert/strict'
import { caseStudies } from '../src/content/case-studies/index.ts'
import { en } from '../src/content/dictionaries/en.ts'
import { pt } from '../src/content/dictionaries/pt.ts'
import { experience } from '../src/content/experience.ts'
import { stack, stackGroups } from '../src/content/stack.ts'

const slugs = new Set(caseStudies.map((c) => c.slug))

/** Every string inside a value, with its path, for content-wide checks. */
function strings(value: unknown, path = ''): [string, string][] {
  if (typeof value === 'string') return [[path, value]]
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => strings(v, `${path}.${k}`))
  }
  return []
}

test('case study slugs are unique kebab-case', () => {
  const slugs = caseStudies.map((c) => c.slug)
  assert.equal(new Set(slugs).size, slugs.length)
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/)
})

test('every case study is complete in both languages', () => {
  for (const c of caseStudies) {
    for (const [path, s] of strings(c)) assert.ok(s.trim(), `${c.slug}${path} is empty`)
    assert.ok(c.content.en.metrics.length >= 3, `${c.slug} needs 3+ metrics`)
    assert.ok(c.content.en.decisions.length >= 2, `${c.slug} needs 2+ decisions`)
    assert.equal(c.content.pt.metrics.length, c.content.en.metrics.length, `${c.slug} metric count differs`)
    assert.equal(c.content.pt.decisions.length, c.content.en.decisions.length, `${c.slug} decision count differs`)
  }
})

test('no em or en dashes in visible copy', () => {
  for (const [path, s] of strings({ caseStudies, en, pt, experience, stack })) {
    assert.doesNotMatch(s, /[—–]/, `dash found at ${path}`)
  }
})

test('stack items are unique and production items link to a real case study', () => {
  const names = stack.map((i) => i.name)
  assert.equal(new Set(names).size, names.length, 'duplicate stack item')
  for (const item of stack) {
    assert.ok(stackGroups.includes(item.group), `${item.name} has unknown group`)
    if (item.level === 'production') assert.ok(slugs.has(item.caseStudy), `${item.name} links to missing ${item.caseStudy}`)
    else assert.ok(!('caseStudy' in item), `${item.name} is a personal-project item but has a link`)
  }
})

test('every role is complete in both languages and links to a real case study', () => {
  for (const role of experience) {
    assert.ok(slugs.has(role.caseStudy), `${role.company} links to missing ${role.caseStudy}`)
    for (const [path, s] of strings(role)) assert.ok(s.trim(), `${role.company}${path} is empty`)
  }
})
