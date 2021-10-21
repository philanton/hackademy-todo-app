import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { Layout } from "../components"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <Layout pageTitle="Sign in">
      <input
        type="email"
        className="gray-input"
        onChange={handleEmailChange}
        value={email}
        placeholder="Email"
      />
      <input
        type="password"
        className="gray-input"
        onChange={handlePasswordChange}
        value={password}
        placeholder="Password"
      />
      <div className="flex justify-start my-2">
        <p className="text-xs">No account?</p>
        <Link href="/signup">
          <a className="text-xs text-yellow-300 mx-2">Create one!</a>
        </Link>
      </div>
      <div className="flex justify-start my-2">
        <p className="text-xs">Forgot password?</p>
        <Link href="/recovery">
          <a className="text-xs text-yellow-300 mx-2">Reset it!</a>
        </Link>
      </div>
      <div className="flex justify-end">
        <button className="btn-pr">Sign in</button>
      </div>
    </Layout>
  )
}