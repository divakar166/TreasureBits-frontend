import Link from "next/link";

export default function MainHeader() {
  return (
    <div
      className="flex w-screen text-lg justify-center items-center px-20 py-6 bg-orange-400 h-20"
    >
      <div className="w-1/3 text-center flex justify-center">
        <Link href='' className="active:text-green-600 hover:text-green-600">Home</Link>
        <Link href='' >About</Link>
      </div>
      <div className="brand text-2xl w-1/12 text-center">
        TreasureBits
      </div>
      <div className="w-1/3 text-center">
        <Link href='' className="active:text-green-600 hover:text-green-600">Home</Link>
        <Link href='' >About</Link>
      </div>
    </div>
  )
}
