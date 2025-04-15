import { createContext, useContext, useEffect, useReducer } from 'react'
import { strapiLoginLocal, strapiRegisterLocal } from '../api/strapi'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const initialState = {
  user: null,
  jwt: null,
  isLoggedIn: false,
  loading: false,
  error: null
}

const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_SUCCES: 'REGISTER_SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT'
}

// previousState  = état précédent
const authReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_SUCCES:
      return {
        user: action.data.user,
        jwt: action.data.jwt,
        isLoggedIn: true,
        loading: false,
        error: null
      }
    case actionTypes.LOADING:
      return {
        ...previousState,
        loading: true
      }
    case actionTypes.ERROR:
      return {
        ...initialState,
        error: action.error
      }
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// Répartit les actions
const authFactory = (previousState, dispatch) => ({
  login: async (credentials) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const loginData = await strapiLoginLocal(credentials)
      if (loginData.user && loginData.jwt) {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          data: loginData
        })
      }
    } catch (error) {
      handleError(dispatch, error)
    }
  },
  register: async (credentials) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const registerData = await strapiRegisterLocal(credentials)
      if (registerData.user && registerData.jwt) {
        dispatch({
          type: actionTypes.REGISTER_SUCCES,
          data: registerData
        })
      }
    } catch (error) {
      handleError(dispatch, error)
    }
  },
  logout: () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
})

const handleError = (dispatch, error) => {
  console.error(error)
  toast.error('Identifiants manquants ou incorrects')
  dispatch({
    type: actionTypes.ERROR,
    error: error?.response?.data?.error?.message
  })
}

// Répartit aux composants enfants
const AuthProvider = ({ children }) => {
  // Récupère l'état de l'utilisateur depuis le localStorage
  const savedState = JSON.parse(window.localStorage.getItem('@AUTH'))

  const [state, dispatch] = useReducer(authReducer, savedState || initialState)

  // Permet de sauvegarder l'état de l'utilisateur dans le localStorage
  useEffect(() => {
    window.localStorage.setItem('@AUTH', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{ state, ...authFactory(state, dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
