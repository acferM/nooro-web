import Image from 'next/image'
import emptyStateImg from '../../../public/empty-state.png'

export function EmptyState() {
  return (
    <div className="w-full h-[266px] flex flex-col justify-center items-center gap-4">
      <Image src={emptyStateImg} alt="clipboard" width={56} height={56} />

      <footer className="flex flex-col items-center gap-6">
        <strong className="text-[#808080]">You don&apos;t have any tasks registered yet.</strong>

        <p className="text-[#808080]">Create tasks and organize your to-do items.</p>
      </footer>
    </div>
  )
}
