import { redirect } from 'next/navigation';
import { DynamicRouteProps } from '../type';

export default function Page({ params }: { params: DynamicRouteProps }) {
  const path = params.slug[0];
  console.log(params.slug[0] !== 'add' || 'edit');
  if (path !== 'add' && path !== 'edit') {
    return redirect('/404');
  }
  return <div>My Post: {params.slug}</div>;
}
