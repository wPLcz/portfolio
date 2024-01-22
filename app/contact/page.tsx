import { Text } from '@/app/components/ui/text/Text';
import { contactDetails } from '@/app/config/contactDetails.ts';
import styles from '@/app/contact/page.module.scss'
import { Card } from '@/components/ui/card/card';
import { Link } from '@/components/ui/link/link';
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.email}>
          <Card>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={'/images/gmail.png'} alt={'gmail icon'} width={75} height={75}/>
              </div>
              <Text className={styles.channel} size={'l'}>{contactDetails.email.channel}</Text>
              <Text className={styles.value} size={'xl'} color={'secondary'}>
                <Link
                  size='medium'
                  type='mailto'
                  href={contactDetails.email.value}
                  label={contactDetails.email.value}/>
              </Text>
            </div>
          </Card>
        </div>
        <div className={styles.linkedin}>
          <Card>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={'/images/linkedin.png'} alt={'gmail icon'} width={75} height={75}/>
              </div>
              <Text className={styles.channel} size={'l'}>{contactDetails.linkedin.channel}</Text>
              <Text className={styles.value} size={'l'} color={'secondary'}>
                <Link
                  size={'medium'}
                  href={contactDetails.linkedin.value}
                  label={contactDetails.name}/>
              </Text>
            </div>
          </Card>
        </div>
        <div className={styles.linkedin}>
          <Card>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={'/images/facebook.png'} alt={'gmail icon'} width={75} height={75}/>
              </div>
              <Text className={styles.channel} size={'l'}>{contactDetails.facebook.channel}</Text>
              <Text className={styles.value} size={'l'} color={'secondary'}>
                <Link
                  size={'medium'}
                  href={contactDetails.facebook.value}
                  label={contactDetails.name}/>
              </Text>
            </div>
          </Card>
        </div>
        <div className={styles.instagram}>
          <Card>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={'/images/instagram.png'} alt={'gmail icon'} width={75} height={75}/>
              </div>
              <Text className={styles.channel} size={'l'}>{contactDetails.instagram.channel}</Text>
              <Text className={styles.value} size={'l'} color={'secondary'}>
                <Link
                  size={'medium'}
                  href={contactDetails.instagram.value}
                  label={contactDetails.name}/>
              </Text>
            </div>
          </Card>
        </div>
      </main>
      <div className={styles.background}/>
    </>
  )
}
