"use client"
import './home.css'
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <main className="home-main">
        <div className="hero">
          <p className='hero-p'>{t('hero')}</p>
        </div>
      </main>

    </>
  );
}
