import { CardBox, ContentBox, CountText, ImageBox, TitleText } from './styled';
import Image from 'next/image';
import { DashboardCardProps } from './type';

export default function DashboardCard(props: DashboardCardProps) {
  const { count, src, title } = props;
  return (
    <CardBox>
      <ImageBox>
        <Image src={src} width={50} height={50} alt="" />
      </ImageBox>
      <ContentBox>
        <TitleText>{title}</TitleText>
        <CountText>{count}</CountText>
      </ContentBox>
    </CardBox>
  );
}
