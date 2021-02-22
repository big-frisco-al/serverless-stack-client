const config = {
  STRIPE_KEY: "pk_test_51INc64AHVtOaLLfLlyjTfNGbf3Np23l1rU4Kbp6ojoU3aQ1PwejAG6bRLj0K0mvUBrhMaXOHuJN8ysjrIOcdy89y00LjmFuQuv",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-1",
    BUCKET: "sdfkasjhflkwjehrlasnf",
  },
  apiGateway: {
    REGION: "us-west-1",
    URL: "https://g74l1lmsvb.execute-api.us-west-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-1",
    USER_POOL_ID: "us-west-1_GRATDlwGa",
    APP_CLIENT_ID: "5g76vtmcoc751mr86tle6u4fgs",
    IDENTITY_POOL_ID: "us-west-1:7b053684-61e9-4af5-be98-c1620fb3eac8",
  },
};

export default config;
