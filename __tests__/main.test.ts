import {packageFileModifiedWithOtherFiles, commitingWithPackageFileRemoved} from '../src/main'

test.each([
  [['config.json', 'package.json', 'package-lock.json'], ['package.json', 'package-lock.json'], true],
  [['config.json', 'package.json', 'package-lock.json'], ['package.json'], true],
  [['config.json', 'package.json', 'package-lock.json'], ['package-lock.json'], true],
  [['config.json', 'package.json', 'package-lock.json'], ['config.json'], false],
  [['config.json', 'package.json', 'package-lock.json'], [], false]
])('.packageFileModifiedWithOtherFiles(%s, %s)', (all, modified, expected) => {
  expect(packageFileModifiedWithOtherFiles(all, modified)).toBe(expected)
})

test.each([
  [['config.json', 'package.json', 'package-lock.json'], true],
  [['config.json', 'package-lock.json'], true],
  [['config.json', 'package.json'], true],
  [['config.json', 'script.ts', 'package-lock.ts'], false],
  [['config.json', 'package.js', 'package-lock.yml'], false]
])('.commitingWithPackageFileRemoved(%s)', (removed, expected) => {
  expect(commitingWithPackageFileRemoved(removed)).toBe(expected)
})
