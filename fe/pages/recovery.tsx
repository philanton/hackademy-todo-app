import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { Layout } from "../components"

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  return (
    <Layout pageTitle="Forgot Password">
      <input
        type="email"
        className="gray-input"
        onChange={handleEmailChange}
        value={email}
        placeholder="Email"
      />
      <div className="flex justify-end mt-4">
        <Link href="/login">
          <button className="btn-sec">Back</button>
        </Link>
        <button className="btn-pr ml-4">Reset</button>
      </div>
    </Layout>
  )
}