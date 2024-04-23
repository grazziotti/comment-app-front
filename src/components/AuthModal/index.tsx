import Link from 'next/link'

import LoginForm from '../LoginForm'
import SignUpForm from '../SignUpForm'

type Props = {
  type: 'login' | 'signup'
  useAnchorTag?: boolean
}

export default function AuthModal({ type, useAnchorTag }: Props) {
  return (
    <div className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-primary p-12">
      <h2 className="text-textTile text-center text-3xl font-bold">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h2>
      {type === 'login' ? <LoginForm /> : <SignUpForm />}
      <div className="mt-10 flex items-center justify-center">
        <span className="text-textTitle">
          {type === 'login'
            ? 'Don’t have an account?'
            : 'Already have an account?'}
        </span>
        {!useAnchorTag ? (
          <Link
            href={`/${type === 'login' ? 'signup' : 'login'}`}
            className="ml-1 font-medium text-target transition-colors hover:text-targetInactive"
          >
            {type === 'login' ? 'Sign up' : 'Login'}
          </Link>
        ) : (
          <a
            href={`/${type === 'login' ? 'signup' : 'login'}`}
            className="ml-1 font-medium text-target transition-colors hover:text-targetInactive"
          >
            {type === 'login' ? 'Sign up' : 'Login'}
          </a>
        )}
      </div>
    </div>
  )
}