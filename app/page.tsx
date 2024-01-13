import styles from './page.module.scss'
import { Text } from '@/app/components/ui/text/Text';
import { Card } from '@/app/components/ui';

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
            </main>
            <div className={styles.background}/>
        </>
    )
}
