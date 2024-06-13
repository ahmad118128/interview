import { redirect } from 'next/navigation';
import Members from '@/components/pages/dashboard/supervisory-list/Members';
import { DynamicRouteProps } from '../../data-bank/type';
import AddFormSupervisory from '@/components/pages/dashboard/supervisory-list/AddFormSupervisory';
import EditFormSupervisory from '@/components/pages/dashboard/supervisory-list/EditFormSupervisory';

export default function Page({ params }: { params: DynamicRouteProps }) {
  const path = params.slug[0];

  if (
    !path.startsWith('add') &&
    !path.startsWith('edit') &&
    !path.startsWith('members')
  ) {
    return redirect('/404');
  }
  return (
    (path === 'members' && <Members />) ||
    (path === 'add' && <AddFormSupervisory />) ||
    (path === 'edit' && <EditFormSupervisory />)
  );
}
