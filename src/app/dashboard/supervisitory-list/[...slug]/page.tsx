import { redirect } from 'next/navigation';
import Members from '@/components/pages/dashboard/supervisory-list/Members';
import { DynamicRouteProps } from '../../data-bank/type';
import { AddFormSupervisory } from '@/components/pages/dashboard/supervisory-list/AddFormSupervisory';
import { EditFormSupervisory } from '@/components/pages/dashboard/supervisory-list/EditFormSupervisory';

export default function SupervisitortDetailPage({
  params,
}: {
  params: DynamicRouteProps;
}) {
  const path = params.slug;

  !path.includes('add') &&
    !path.includes('edit') &&
    !path.includes('members') &&
    redirect('/404');

  const routes: Record<string, React.ReactNode> = {
    members: <Members />,
    add: <AddFormSupervisory />,
    edit: <EditFormSupervisory />,
  };

  const pathValue = path[0];
  const selectedRoute: React.ReactNode = routes[pathValue];

  return selectedRoute;
}
