import "./globals.css";

export const metadata = {
  title: "SWAPI useEffect",
  description: "Fetching data from SWAPI with useEffect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
