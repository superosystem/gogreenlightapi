# TravelAgentNet

Sample Web Application use Asp.Net

## Best Commands

* Build TravelAgentNet Project

```zsh
$ mkdir TravelAgentNet && cd TravelAgentNet
$ dotnet new sln
$ mkdir src && cd src
$ mkdir core && mkdir infrastructure && mkdir presentation
## Layer Core
$ cd core
$ dotnet new classlib -f netstandard2.1 --name Travel.Domain
$ dotnet new classlib -f netstandard2.1 --name Travel.Application
$ cd Travel.Application
$ dotnet add reference ../Travel.Domain/Travel.Domain.csproj
## Infrastructure Layer
$ cd ../../infrastructure
$ dotnet new classlib -f net6.0 --name Travel.Data
$ dotnet new classlib -f net6.0 --name Travel.Shared
$ cd Travel.Data
$ dotnet add reference ../../core/Travel.Domain/Travel.Domain.csproj
$ dotnet add reference ../../core/Travel.Application/Travel.Application.csproj
## Presentation Layer
$ cd ../../presentation
$ dotnet new webapi --name Travel.WebApi
$ cd Travel.WebApi
$ dotnet add reference ../../core/Travel.Application/Travel.Application.csproj
$ dotnet add reference ../../infrastructure/Travel.Data/Travel.Data.csproj
$ dotnet add reference ../../infrastructure/Travel.Shared/Travel.Shared.csproj
## Project Solution
$ cd ../../../
$ dotnet sln add src/core/Travel.Domain/Travel.Domain.csproj
$ dotnet sln add src/core/Travel.Application/Travel.Application.csproj
$ dotnet sln add src/infrastructure/Travel.Data/Travel.Data.csproj
$ dotnet sln add src/infrastructure/Travel.Shared/Travel.Shared.csproj
$ dotnet sln add src/presentation/Travel.WebApi/Travel.WebApi.csproj
```