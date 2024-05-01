
import Link from "next/link";
import './globals.css'
export default function Home() {
  return (
 <>
 <Link href={`/Users`}>
<button className="head">Go to Details </button></Link>
    </>
     );
}
