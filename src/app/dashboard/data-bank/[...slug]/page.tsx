import { redirect } from 'next/navigation';
import { DynamicRouteProps } from '../type';
import AddForm from '@/components/pages/dashboard/data-bank/usersList/AddForm';

export default function Page({ params }: { params: DynamicRouteProps }) {
  const path = params.slug[0];

  if (path !== 'add' && path !== 'edit') {
    return redirect('/404');
  }
  return <AddForm />;
}
