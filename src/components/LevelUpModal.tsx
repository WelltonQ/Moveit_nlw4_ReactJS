import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

// interface LevelUpModalProps {
//   level: number
//   completedChallanges: number
//   currentExperience: number
// }

export function LevelUpModal() {

  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  // let totalExperience = 0

  // for (let i = 1; i <= currentLevel - 1; i++) {
  //   totalExperience += Math.pow((i + 1) * 4, 2)
  // }

  // totalExperience += currentExperience

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </div>
    </div>
  )
}