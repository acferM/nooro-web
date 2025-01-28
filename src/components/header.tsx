import Image from "next/image";
import logoImg from '../../public/logo.png'

export function Header() {
  return (
    <header className="flex w-full items-center justify-center py-20 bg-[#0D0D0D]">
      <Image src={logoImg} alt="Todo App" width={226} height={48} priority />
    </header>
  )
}
