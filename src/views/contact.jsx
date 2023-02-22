import styles from '../../src/styleContact.module.css'
export const Contact = () => {
  return (

		<form method="post" className={styles.form}>
			<label className={styles.labels}><strong>Nome</strong></label>
			<input type="text" name="nome" placeholder="Digite seu nome" autoComplete="nome" className={styles.inputs}/>
			<label className={styles.labels}><strong>Email</strong></label>
			<input type="email" name="email" placeholder="Digite seu email" className={styles.inputs}/>
			<label className={styles.labels}><strong>Mensagem</strong></label>
			<textarea name="mensagem" cols="30" rows="10" placeholder="Digite sua mensagem aqui"></textarea>
			<button type="">Enviar</button>
		</form>
  )
}