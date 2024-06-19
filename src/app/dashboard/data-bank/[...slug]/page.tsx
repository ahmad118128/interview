import { redirect } from 'next/navigation';
import { DynamicRouteProps } from '../type';
import AddForm from '@/components/pages/dashboard/data-bank/usersList/AddForm';
import AddFormGroup from '@/components/pages/dashboard/data-bank/groupList/AddFormGroup';
import EditForm from '@/components/pages/dashboard/data-bank/usersList/EditForm';
import EditFormGroup from '@/components/pages/dashboard/data-bank/groupList/EditFormGroup';
import AddGroupOfUser from '@/components/pages/dashboard/data-bank/groupRegister/AddGroupOfUser';
import EditGroupOfUser from '@/components/pages/dashboard/data-bank/groupRegister/EditGroupOfUser';

export default function Page({ params }: { params: DynamicRouteProps }) {
  const path = params.slug[0];

  if (!path.startsWith('add') && !path.startsWith('edit')) {
    return redirect('/404');
  }
  return (
    (path === 'addUser' && <AddForm />) ||
    (path === 'editUser' && <EditForm />) ||
    (path === 'addGroup' && <AddFormGroup />) ||
    (path === 'addgroupofuser' && <AddGroupOfUser />) ||
    (path === 'editgroupofuser' && <EditGroupOfUser />)
  );
}
