import { Card } from '@/app/components/ui';
import { Text } from '@/app/components/ui/text/Text';
import Image from 'next/image';
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <Card>
            <div className={styles.card}>
              <Text tag={'h1'} bold color={'secondary'}>Wojciech Palacz</Text>
              <Text tag={'p'} bold size={'xl'}>Frontend Developer</Text>
            </div>
          </Card>
        </div>

        <div className={styles.workInProgress}>
          <Text size='xl' color='secondary'>Work in progres</Text>
        </div>
      </main>
      <div className={styles.background}>
        <Image
          src='/images/w4.jpg'
          alt='Background'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </>
  )
}
