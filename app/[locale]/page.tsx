import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  return <>{t('hello-world')}</>;
}