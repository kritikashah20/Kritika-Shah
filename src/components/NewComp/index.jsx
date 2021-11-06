import styles from "./NewComp.module.css";

const NewComp = ({skill, rating}) => {
    return (
        <div className={styles.outerDiv}>
            
            <div className={styles.innerDiv}>
                {skill}
            </div>
            <div className={styles.innerDivv}>
                {rating}
            </div>
        </div>
    )
}

export default NewComp
