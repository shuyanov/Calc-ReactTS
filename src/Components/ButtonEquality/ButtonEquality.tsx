import style from './ButtonEquality.module.scss'

type Props = {
    onClick: () => void
}

export const ButtonEquality: React.FC<Props> = ({ onClick }) => {

    return (
        <button className={style.Numbers} onClick={onClick}>
            <div className={style.child}>
                =
            </div>
        </button>
    )
} 