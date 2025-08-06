import { Skeleton } from "./ui/skeleton";

export const SkeletonProductCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-4 p-4 border rounded-md shadow animate-pulse">
      <Skeleton className="w-full h-24 rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-5/6" />
      </div>
      <Skeleton className="h-6 w-1/2 mt-2" />
      <Skeleton className="h-8 w-full rounded-md mt-auto" />
    </div>
  );
};
