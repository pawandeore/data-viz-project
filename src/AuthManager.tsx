// src/AuthManager.tsx (New File)
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { userAtom, authLoadingAtom } from './atoms';

interface AuthManagerProps {
  children: React.ReactNode;
}

const AuthManager: React.FC<AuthManagerProps> = ({ children }) => {
  const setUser = useSetAtom(userAtom);
  const setLoading = useSetAtom(authLoadingAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [setUser, setLoading]);

  return <>{children}</>;
};

export default AuthManager;