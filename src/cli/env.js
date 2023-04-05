const parseEnv = () => {
    //In order to see that it works you should add global env variables 
    const envVariables = Object.entries(process.env);
  envVariables.forEach(([key, value]) => {
    if (key.startsWith('RSS_')) {
      console.log(`RSS_${key.slice(4)}=${value}`);
    }
  });
};

parseEnv();