import styles from './layout.module.css'

const Layout =(props)=>{

    return(
        <div className={`${styles.container} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Layout