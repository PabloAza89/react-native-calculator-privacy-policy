import "./globals.css";

export const metadata = {
  title: 'Privacy Policy for React Native Calculator',
  description: 'Privacy Policy for React Native Calculator'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  )
}
