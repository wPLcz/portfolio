import { companies } from '@/app/config/companies.ts';
import styles from '@/app/experience/page.module.scss'
import { CompanyExperienceCard } from '@/components/ui/companyExperienceCard/companyExperienceCard.tsx';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.companies}>
          {
            companies.map((companyExp) => {
              return (
                <CompanyExperienceCard
                  id={companyExp.id}
                  key={companyExp.id}
                  company={companyExp.company}
                  background={companyExp.background}
                  skills={companyExp.skills}
                  results={companyExp.results}
                  time={companyExp.time}/>
              )
            })
          }
        </div>
      </main>
      <div className={styles.background}>
        <Image
          src='/images/experience.png'
          alt='Background'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </>
  )
}
