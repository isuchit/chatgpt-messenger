const getEnvironmentVariable = (environmentVariable: string): string => {
    const unvalidatedEnvironmentVariable = process.env[environmentVariable];
    if (!unvalidatedEnvironmentVariable) {
      throw new Error(
        `Couldn't find environment variable: ${environmentVariable}`
      );
    } else {
      return unvalidatedEnvironmentVariable;
    }
  };
  
  export const config = {
    googleID: getEnvironmentVariable("GOOGLE_ID"),
    googleSecret: getEnvironmentVariable("GOOGLE_SECRET"),
    openAPIKey: getEnvironmentVariable("OPEN_API_KEY"),
    firebaseServiceAccountKey: getEnvironmentVariable("FIREBASE_SERVICE_ACCOUNT_KEY")
  };