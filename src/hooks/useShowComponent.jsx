import { usePathname } from 'next/navigation';

export const useShowComponent = () => {
  const router = usePathname();
  const excludedRoutes = ['/generate-image'];
  // const showComponent = router !== '/generate-image';
  const showComponent = !excludedRoutes.includes(router);

  return showComponent;
};
