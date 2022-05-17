import styles from './style.module.scss'

const Index = () => {
    return <div className={styles.banner}>
        <div className={styles.person}>
            <img src={require('./defaultIcon.png')} className={styles.avatar} alt="avatar"/>
            <div className={styles.title}>这是标题区域</div>
            <div className={styles.desc}>这是描述区域</div>
        </div>
    </div>
}

export default Index;
