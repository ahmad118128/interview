import { redirect } from 'next/navigation';
import { DynamicRouteProps } from '../type';
import AddForm from '@/components/pages/dashboard/data-bank/usersList/AddForm';
import AddFormGroup from '@/components/pages/dashboard/data-bank/groupList/AddFormGroup';
import EditForm from '@/components/pages/dashboard/data-bank/usersList/EditForm';

export default function Page({ params }: { params: DynamicRouteProps }) {
  const path = params.slug[0];

  if (!path.startsWith('add') && !path.startsWith('edit')) {
    return redirect('/404');
  }
  return (
    (path === 'addUser' && <AddForm />) ||
    (path === 'editUser' && <EditForm />) ||
    (path === 'addGroup' && <AddFormGroup />)
  );
}
