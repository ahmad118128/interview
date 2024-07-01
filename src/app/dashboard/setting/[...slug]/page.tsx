import { redirect } from 'next/navigation';
import { DynamicRouteProps } from '../../data-bank/type';
import EditClient from '@/components/pages/dashboard/setting/EditClient';

export default function SupervisitortDetailPage({
  params,
}: {
  params: DynamicRouteProps;
}) {
  const path = params.slug;

  !path.includes('edit') && redirect('/404');

  const routes: Record<string, React.ReactNode> = {
    edit: <EditClient />,
  };

  const pathValue = path[0];
  const selectedRoute: React.ReactNode = routes[pathValue];

  return selectedRoute;
}
