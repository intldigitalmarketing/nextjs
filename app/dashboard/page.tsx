import Breadcrumb from '@/components/dashboard/breadcrumb';
import { auth } from '@/auth';

const title = 'Home';
const breadcrumbItems = [{ text: title, href: '#' }];

export const metadata = {
  title: 'Home',
  description: 'Generated by Home',
};

export default async function Page() {
  const session = await auth();

  return (
    <>
      <div className="h-full">
        <div className="mb-2 rounded-md bg-gray-100 p-3 text-black">
          <div className="border-b-5 flex items-center">
            <div className="w-full">
              <h1 className="text-2xl">{title}</h1>
            </div>
            <div className="w-full">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>
        <div className="min-h-max rounded-md bg-gray-100 p-3 text-black">
          <div className="w-full scroll-auto">
            <div className="relative overflow-x-auto">
              <div>
                <pre>{JSON.stringify(session, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
