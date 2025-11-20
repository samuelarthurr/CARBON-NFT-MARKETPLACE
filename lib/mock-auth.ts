export interface MockUser {
  id: string;
  email: string;
  password: string;
  fullName: string;
  username: string;
  createdAt: string;
  avatar?: string;
}

const USERS_KEY = "carbon_nft_users";
const CURRENT_USER_KEY = "carbon_nft_current_user";

export class MockAuth {
  // Get all users from localStorage
  private static getUsers(): MockUser[] {
    if (typeof window === "undefined") return [];
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  // Save users to localStorage
  private static saveUsers(users: MockUser[]) {
    if (typeof window === "undefined") return;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  // Get current logged in user
  static getCurrentUser(): MockUser | null {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // Set current user
  private static setCurrentUser(user: MockUser | null) {
    if (typeof window === "undefined") return;
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }

  // Sign up new user
  static signUp(email: string, password: string, fullName: string, username?: string): { success: boolean; error?: string; user?: MockUser } {
    const users = this.getUsers();
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
      return { success: false, error: "This email is already registered" };
    }

    // Create new user
    const newUser: MockUser = {
      id: `user_${Date.now()}`,
      email,
      password, // In real app, this would be hashed
      fullName,
      username: username || `user_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    this.saveUsers(users);
    this.setCurrentUser(newUser);

    return { success: true, user: newUser };
  }

  // Login user
  static login(email: string, password: string): { success: boolean; error?: string; user?: MockUser } {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }

    this.setCurrentUser(user);
    return { success: true, user };
  }

  // Logout user
  static logout() {
    this.setCurrentUser(null);
  }

  // Check if user is logged in
  static isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}
