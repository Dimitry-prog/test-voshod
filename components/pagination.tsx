'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  page: number
  pages: number
}

const Pagination = ({ pages, page }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handlePagination = (direction: string) => {
    const value = direction === 'next' ? page + 1 : page - 1;
    params.set('page', value.toString());
    replace(`${pathname}?${params}`, { scroll: false });
  }

  return (
    <div className='flex gap-4'>
      <button
        onClick={() => handlePagination('prev')}
        type='button'
        disabled={page === 1}
        aria-label='pagination previous'
        className='w-28 p-2 border rounded-md hover:opacity-50  disabled:cursor-not-allowed disabled:opacity-30 duration-500 transition-all'
      >
        Previous
      </button>

      <button
        onClick={() => handlePagination('next')}
        type='button'
        disabled={page >= pages}
        aria-label='pagination next'
        className='w-28 p-2 border rounded-md hover:opacity-50  disabled:cursor-not-allowed disabled:opacity-30 duration-500 transition-all'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;