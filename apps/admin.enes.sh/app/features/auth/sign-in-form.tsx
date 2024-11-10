import { Button } from '@enes-sh/ui'

export type SignInFormTypes = {
  disabled: boolean
  onSubmit: () => Promise<void>
}

const SignInForm = ({ disabled = false, onSubmit }: SignInFormTypes) => {
  return (
    <Button className='w-full text-sm' onClick={onSubmit} disabled={disabled}>
      Sign In
    </Button>
  )
}

export { SignInForm }
