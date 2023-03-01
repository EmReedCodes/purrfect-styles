import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firsbase.utils"

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

//we only want to run it once on component mount
    useEffect(() => {
        //the moment it mounts it will check auth state automatically
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
            createUserDocumentFromAuth(user)
            }
    setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}