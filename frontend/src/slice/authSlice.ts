import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn } from "../api/authApi";

// --- Thunks ---
export const signUpUser = createAsyncThunk(
  "auth/signup",
  async (
    { name, email, password }: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await signUp(name, email, password);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.error || "Signup failed");
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signin",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await signIn(email, password);
      return data; // should include user + token
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.error || "Signin failed");
    }
  }
);

// --- State Interface ---
interface AuthState {
  user: { name: string; email: string } | null;
  token: string | null; // ✅ added
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
}

// --- Initial State ---
const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("authToken"), // ✅ keep user signed in
  isAuthenticated: !!localStorage.getItem("authToken"),
  error: null,
  loading: false,
};

// --- Slice ---
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign Up
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Sign In
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
