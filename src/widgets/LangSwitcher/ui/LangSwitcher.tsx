import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
//import cls from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher({ className }: LangSwitcherProps): JSX.Element {
  const { t, i18n } = useTranslation();

  const toggle = (): void => {
    i18n
      .changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
      .then(() => {})
      .catch(() => {});
      //dd
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
}
