import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, useEffect, useState } from "react";
import  api  from "../../../services/api";
import { AuthContext, SignInCredentials } from "../contexts/Auth";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: number;
  email: string;
  name: string;
  token: string;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const router = useRouter();
  const toast = useToast();

  async function signIn(credentials: SignInCredentials) {
    try {
      const { data } = await api.post("/users/signin", credentials);
      if (!data.error) {

        setUser({
          id: data.data._id,
          email: data.data.email,
          name: data.data.name,
          token: data.data.token
        });

        localStorage.setItem('userEmail', data.data.email);
        localStorage.setItem('userName', data.data.name);
        setCookie(undefined, "@devlearning.token", data.data.token);

        router.push("/web/class");
      } else {
        toast({
          title: data.message,
          status: "error"
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    destroyCookie(undefined, "@devlearning.token");
    localStorage.clear();
    router.push("/");
  }

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies["@devlearning.token"];

    console.log("TOKEN:" + token);

    if (token != 'undefined') {
      api
        .get("/users/", { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUser({
            ...response.data,
            token
          });

        }).catch(response => {
          toast({
            title: response,
            status: "error"
          })
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
