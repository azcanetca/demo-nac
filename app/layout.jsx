import Layout from "./(layout)/Layout";
import "./globals.css";

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="./logo-fav.ico" />
        <link rel="apple-touch-icon" href={`./logo-fav.ico`} />
        <meta name="keywords" content='azcanet.ca,network,azerbijan,canada,organization ' />
        <meta property="og:keywords" content='azcanet.ca,network,azerbijan,canada,organization ' />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
