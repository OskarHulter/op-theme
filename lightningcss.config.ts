import { transform } from 'lightningcss'

let { code, map, exports } = transform({
    filename: 'style.css',
    minify: true,
    sourceMap: true,
    cssModules: true,
    code: Buffer.from(`
    .logo {
      background: skyblue;
    }
  `)
})
