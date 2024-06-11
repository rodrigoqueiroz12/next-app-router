import { cn } from '@/utils/cn'

type SkeletonProps = React.ComponentProps<'div'>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-zinc-50/10', className)}
      {...props}
    />
  )
}
