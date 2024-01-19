import { CompanyExperienceCardProps } from '@/app/components/ui/companyExperienceCard/companyExperienceCard.types';
import { Card } from '@/app/components/ui/card/card';
import { Text } from '@/app/components/ui/text/Text';
import { ListItem } from '@/components/ui/listItem/listItem';
import { FC } from 'react';
import styles from './companyExperienceCard.module.scss';
import { Link } from '@/components/ui/link/link.tsx';

export const CompanyExperienceCard: FC<CompanyExperienceCardProps> =
  ({
    company, background, time, skills, results
  }) => {
    return (
      <Card>
        <div className={styles.container}>
          <div className={styles.title}>
            <Text size='l' tag='p' color='highlight' className={styles.company}> {company}</Text>
            <Text size='m' tag='p' className={styles.time}> {time.from} - {time.to}</Text>
          </div>
          <div className={styles.background}>
            <Text size='m' tag='p' className={styles.backgroundText}> {background}</Text>
          </div>

          <Text size='l' tag='p' color='highlight' className={styles.listLabel}> {skills.label}</Text>
          <ul className={styles.skills}>
            <>
              {
                skills.list.map((element) => {
                  return <ListItem key={element.id}>{element.label}</ListItem>
                })
              }
            </>
          </ul>

          {
            results && (
              <div className={styles.results}>
                <Text size='l' tag='p' color='highlight' className={styles.listLabel}> {results.label}</Text>
                <ul className={styles.resultsList}>
                  <>
                    {
                      results.list.map((element) => {
                        return <ListItem key={element.id} noDecoration><Link href={element.link || '#'} label={element.label} size={'medium'}/></ListItem>
                      })
                    }
                  </>
                </ul>
              </div>
            )
          }

        </div>
      </Card>
    );
  };
