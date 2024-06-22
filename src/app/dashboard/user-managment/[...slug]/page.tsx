import { redirect } from 'next/navigation';

import { EditFormSupervisory } from '@/components/pages/dashboard/supervisory-list/EditFormSupervisory';
import { AddFormUsers } from '@/components/pages/dashboard/UsersManagement/Forms/AddForm';

import { DynamicRouteProps } from '../../data-bank/type';

export default function SupervisitortDetailPage({
  params,
}: {
  params: DynamicRouteProps;
}) {
  const path = params.slug;

  !path.includes('add') && !path.includes('edit') && redirect('/404');

  const routes: Record<string, React.ReactNode> = {
    add: <AddFormUsers />,
    edit: <EditFormSupervisory />,
  };

  const pathValue = path[0];
  const selectedRoute: React.ReactNode = routes[pathValue];

  return selectedRoute;
}
