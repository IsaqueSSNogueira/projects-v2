
import styles from "./Board.module.css"
import Cell from "./Cell/Cell";


const Board = () => {


    return (
        <div className={styles.board}>
            {
                Array.from({ length: 9 }, (_, i) => (
                    <Cell key={i} index={i} />
                ))
            }
        </div>
    )
}


export default Board;