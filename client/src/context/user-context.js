import { useState, useEffect, createContext, useContext } from "react"


const UserContext = createContext({
    user: null,
    loginUser: () => { },
})
const useUser = () => useContext(UserContext);

export {useUser}