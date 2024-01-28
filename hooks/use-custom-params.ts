import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useCustomParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);


  const handleReplaceParams = (params: URLSearchParams) => {
    replace(`${pathname}?${params}`, { scroll: false })
  }

  return {
    searchParams,
    pathname,
    params,
    replace: handleReplaceParams
  }
}