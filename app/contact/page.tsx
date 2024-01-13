import styles from '../styles/contact.module.scss'
import { contactDetails } from '@/app/contact/contactDetails';
import { Card } from '@/app/components/ui/card/Card';

export default function Page() {
    return (
        <main className={styles.container}>
            <Card title={'email'}/>
        </main>
    )
}
