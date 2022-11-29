import {Roboto} from '@next/font/google'

const roboto = Roboto({
  weight : ['300']
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
