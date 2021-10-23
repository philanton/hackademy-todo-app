import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Layout } from "../components"
import { userService } from "../utils"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handlePasswordCChange = (e: ChangeEvent<HTMLInputElement>) => setPasswordC(e.target.value);

  const handleSubmit = () => {
    if (!email || !password || !passwordC) {
      alert("Fill in all fields");
      return
    } else if (password != passwordC) {
      alert("Password mismatch");
      return
    }

    userService.registerUser(email, password).then(data => {
      router.push('/login')
    }).catch((error) => alert(error.response.data.error))
  }

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
        <button onClick={handleSubmit} className="btn-pr ml-4">Sign up</button>
      </div>
    </Layout>
  )
}
