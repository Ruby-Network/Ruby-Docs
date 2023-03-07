# Docker

Docker images for proxies

## First you need to have docker and docker-compose installed

if you don't have docker or docker-compose installed, you can install it by running the following commands:

Update the package index by running the following command

```bash
sudo apt update
```

Install necessary packages to allow the use of Docker repositories over HTTPS

```bash
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

Add the official Docker GPG key

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add the Docker repository to your system

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

Update the package index again

```bash
sudo apt update
```

now we can add docker from the repository added and not just the ubuntu package one

```bash
apt-cache policy docker-ce
```

now we can finnaly install docker and docker-compose

```bash
sudo apt install docker-ce docker-compose-plugin
```

# Now you should have docker and docker-compose installed

# You can follow theses steps to get the most use out of the docker images

first run this command

```bash
mkdir -p ~/docker-images/ && \
cd ~/docker-images/ && \
mkdir -p hypertabs/ && \
mkdir -p ludicrous/ && \
mkdir -p website-aio/ && \
mkdir -p abyss-browser/ && \
mkdir -p webOS/ && \
mkdir -p metallic/ && \
mkdir -p ruby/
```

Note you don't need to create all of the directories, just the ones you want to use

## Hypertabs

An incredible browser-themed web proxy service.

```bash
cd ~/docker-images/hypertabs/
```

Now lets make the docker-compose.yml file

```bash
nano docker-compose.yml
```

now copy and paste this into the file

```yaml
version: "2"
services:
  hypertabs:
    restart: unless-stopped
    image: " ghcr.io/ruby-network/hypertabs-docker"
    ports:
      #IMPORTANT: DO NOT CHANGE THE 8080 PART ONLY CHANGE THE YOUR PORT HERE PART
      - your port here:8080
# network config if youi want a network config feel free to use the one below and change the name to your liking. YOU MUST RUN docker network create <your name> BEFORE RUNNING THE CONTAINER
#networks:
#  default:
#    external:
#      name: default
```

Save the file and exit

Now we can run the container

```bash
docker-compose up -d
```