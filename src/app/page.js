import styles from './page.module.css'
import MeuBotao from './componentes/meu-botao'

export default function Home() {
  return (
    <main className={styles.main}>
      <MeuBotao text="ola"/>
    </main>
  )
}
