import styles from './style.module.scss'

const Footer = () => {
    return <div className={styles.footer}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <a href="/admin.html" className={styles.link}>进入管理页面</a>
            </li>
        </ul>
    </div>
}

export default Footer;
