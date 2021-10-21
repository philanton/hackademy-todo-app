import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { Layout } from "../components"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handlePasswordCChange = (e: ChangeEvent<HTMLInputElement>) => setPasswordC(e.target.value);

  return (
    <Layout pageTitle="Sign up">
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
      <input
        type="password"
        className="gray-input"
        onChange={handlePasswordCChange}
        value={passwordC}
        placeholder="Password"
      />
      <div className="flex justify-end mt-6">
        <Link href="/login">
          <button className="btn-sec">Back</button>
        </Link>
        <button className="btn-pr ml-4">Sign up</button>
      </div>
    </Layout>
  )
}