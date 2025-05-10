// src/atoms.ts
import { atom } from 'jotai';
import type { User } from 'firebase/auth';

// This atom will hold the Firebase user object or null
export const userAtom = atom<User | null>(null);

// This atom will hold Edit Variables state
export const editDetailsAtom = atom<boolean>(false);

// Optional: an atom to track loading state during auth changes
export const authLoadingAtom = atom<boolean>(true);