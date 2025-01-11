interface Target {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    name: string;
    userId: string;
    providerId: string | null | undefined; // Allow both null and undefined
    providerType: string;
    identifier: string;
    expired: boolean;
  }
  


export interface User {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    name: string;
    registration: string;
    status: boolean;
    labels: string[];
    passwordUpdate: string;
    email: string;
    phone: string;
    emailVerification: boolean;
    phoneVerification: boolean;
    mfa: boolean;
    prefs: Record<string, unknown>;
    targets: Target[];
    accessedAt: string;
  }
  