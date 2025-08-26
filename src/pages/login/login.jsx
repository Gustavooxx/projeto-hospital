import './login.scss'

export default function Login() {
    
   return(
      <div className='login'>
         <h1>Login</h1>

         <form>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Senha' />

            <button>Entrar</button>
         </form>
      </div>
   )
}