import { Text } from '@/app/components/ui/text/Text';
import { contactDetails } from '@/app/config/contactDetails.ts';
import styles from '@/app/contact/page.module.scss'
import { Anchor } from '@/components/ui/anchor/anchor.tsx';
import { Card } from '@/components/ui/card/card';
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.email}>
          <Card align={'right'}>
            <Anchor
              size='medium'
              href={contactDetails.email.value}>
              <div className={styles.content}>
                <div className={styles.image}>
                  <Image src={'/images/gmail.png'} alt={'gmail icon'} width={75} height={75}/>
                </div>
                <div className={styles.text}>
                  <Text className={styles.channel} size={'l'}>{contactDetails.email.channel}</Text>
                  <Text className={styles.value} size={'l'} color={'secondary'}>
                    {contactDetails.email.value}
                  </Text>
                </div>
              </div>
            </Anchor>
          </Card>
        </div>
        <div className={styles.linkedin}>
          <Card align='right'>
            <Anchor
              size={'medium'}
              href={contactDetails.linkedin.value}>
              <div className={styles.content}>
                <div className={styles.image}>
                  <Image src={'/images/linkedin.png'} alt={'gmail icon'} width={75} height={75}/>
                </div>

                <div className={styles.text}>
                  <Text className={styles.channel} size={'l'}>{contactDetails.linkedin.channel}</Text>
                  <Text className={styles.value} size={'l'} color={'secondary'}>
                    {contactDetails.linkedin.value}
                  </Text>
                </div>
              </div>
            </Anchor>
          </Card>
        </div>
        <div className={styles.linkedin}>
          <Card align='right'>
            <Anchor
              size={'medium'}
              href={contactDetails.facebook.value}>
              <div className={styles.content}>
                <div className={styles.image}>
                  <Image src={'/images/facebook.png'} alt={'gmail icon'} width={75} height={75}/>
                </div>

                <div className={styles.text}>
                  <Text className={styles.channel} size={'l'}>{contactDetails.facebook.channel}</Text>
                  <Text className={styles.value} size={'l'} color={'secondary'}>
                    {contactDetails.facebook.value}
                  </Text>
                </div>
              </div>
            </Anchor>
          </Card>
        </div>
        <div className={styles.instagram}>
          <Card align='right'>
            <Anchor
              size={'medium'}
              href={contactDetails.instagram.value}>
              <div className={styles.content}>
                <div className={styles.image}>
                  <Image src={'/images/instagram.png'} alt={'gmail icon'} width={75} height={75}/>
                </div>

                <div className={styles.text}>
                  <Text className={styles.channel} size={'l'}>{contactDetails.instagram.channel}</Text>
                  <Text className={styles.value} size={'l'} color={'secondary'}>
                    {contactDetails.name}
                  </Text>
                </div>
              </div>
            </Anchor>
          </Card>
        </div>
      </main>
      <div className={styles.background}>
        <Image
          src='/images/contact.png'
          alt='Background'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </>
  )
}
