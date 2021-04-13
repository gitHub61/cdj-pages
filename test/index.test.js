const cdjPages = require('..')

// TODO: Implement module test
test('cdj-pages', () => {
  expect(cdjPages('w')).toBe('w@zce.me')
  expect(cdjPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => cdjPages(100)).toThrow('Expected a string, got number')
})
