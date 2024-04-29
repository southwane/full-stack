import Navbar from "../component/navbar/Navbar"
import "./global.css"




export const metadata = {
  title: "content layout",
  description:
    "Content for written copy.",
  author: "Southwane",
};

export default function ContentLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
