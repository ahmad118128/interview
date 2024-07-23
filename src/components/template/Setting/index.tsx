'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { SettingRoute } from '@/strings';

import { Backup } from '@/components/pages/dashboard/setting/Backup';
import { SocialSetting } from '@/components/pages/dashboard/setting/SocialSetting';
import CustomModal from '@/components/organisms/Modal/CustomModal';

export function SettingTemplate() {
  const [frameModal, setFrameModal] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const tabs = [
    {
      id: 0,
      label: SettingRoute.publicSetting,
      disableTabRipple: false,
      tabPanel: <SocialSetting />,
    },
    {
      id: 1,
      label: SettingRoute.backup,
      disableTabRipple: false,
      tabPanel: <Backup />,
    },
  ];
  // const activeId = Number(searchParams.get('index')) ?? 0;
  return (
    <>
      <CustomTab data={tabs} type={'normalTab'} tabKey={'index'} />

      {frameModal ? (
        <CustomModal
          onClose={() => setFrameModal(false)}
          open={frameModal}
          setOpen={setFrameModal}
          title={SettingRoute.canFramesBeRecorded}
          buttons
        />
      ) : null}
    </>
  );
}
