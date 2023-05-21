import "./Login.css";
import BackgroundLogin from "../../image/l.jpg";

function Login() {
  return (
    <div className="container-card">
      <div className="image">
        <img src={BackgroundLogin} alt="" />
      </div>
      <div className="card">
        <div className="title">
          <h1>Fazer Login</h1>
          <p>
            Bem-vindo(a)! Ao fazer login, você desbloqueia um universo de
            oportunidades.
          </p>
        </div>
        <form action="" method="post">
          <div className="auth-fields">
            <div className="email">
              <input
                type="email"
                name=""
                id=""
                placeholder="Insira seu email"
              />
              <span class="material-symbols-outlined">alternate_email</span>
            </div>
            <div className="password">
              <input
                type="password"
                name=""
                id=""
                placeholder="Insira sua senha"
              />
              <span class="material-symbols-outlined">lock</span>
            </div>
          </div>
          <div className="confirm">
            <button type="submit">Login <span class="material-symbols-outlined">person</span></button>
          </div>
        </form>
      </div>
    </div>
  );
}

// TODO verificar o login form e depois ver como faz pra logar, senão vou deixar apenas o home page amostra

export default Login;
