import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'
import { ISignInProps } from '../../infra/repositories/auth'
import { app } from '../../services/firebase'

interface IChildren {
  children: ReactNode
}

interface IAuthContext {
  user: ISignInProps
  isAuthenticated: boolean
  logOut: () => void
  handleCreateAccount: (credentials: ISignInProps) => void
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }: IChildren) => {
  const auth = getAuth(app)

  const [user, _setUser] = useState<ISignInProps>({} as ISignInProps)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const handleCreateAccount = useCallback(async ({ credentials }) => {
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    ).then(user => {
      setIsAuthenticated(true)
      console.log(user)
    })
  }, [])

  const logOut = useCallback(async () => {
    signOut(auth)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        logOut,
        handleCreateAccount,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}
