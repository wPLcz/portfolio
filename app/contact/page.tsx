import styles from '@/app/contact/page.module.scss'
import { contactDetails } from '@/app/contact/contactDetails';
import { Card } from '@/app/components/ui/card/Card';
import { Text } from '@/app/components/ui/text/Text';

export default function Page() {
  return (
  <>
    <main className={styles.container}>
      <div className={styles.email}>
        <Card>
          <div className={styles.email}>
            <Text size={'l'}>{contactDetails.email.channel}</Text>
            <Text size={'xl'} color={'secondary'}>{contactDetails.email.value}</Text>
          </div>
        </Card>
      </div>
      <div className={styles.linkedin}>
        <Card>
          <div className={styles.linkedin}>
            <Text size={'l'}>{contactDetails.linkedin.channel}</Text>
            <Text size={'xl'} color={'secondary'}>{contactDetails.linkedin.value}</Text>
          </div>
        </Card>
      </div>
      <div className={styles.instagram}>
        <Card>
          <div className={styles.instagram}>
            <Text size={'l'}>{contactDetails.email.channel}</Text>
            <Text size={'xl'} color={'secondary'}>{contactDetails.email.value}</Text>
          </div>
        </Card>
      </div>
    </main>
    <div className={styles.background}/>
  </>
  )
}
