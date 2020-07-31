# Example project with config files

Config files can be useful for running the same test with different configurations or environment variables. For example, you can specify different values for `baseUrl` or add username/passwords. Config files should not be checked into source control. To demonstrate using a config file, run one of the following commands.

No config file specified:
```
npm run cypress
```

With "dev" config file specified:
```
npm run cypress:dev
```
