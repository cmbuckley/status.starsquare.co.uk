import janna from '@jannajs/lint/eslint'

export default janna({
  settings: {
    tailwindcss: {},
  },
}, {
  rules: {
    'style/jsx-indent': ['off'],
  },
})
