
# HelloDocker

HelloDocker is a project crafted to demonstrate my expertise in Docker, specifically focusing on the usage of images and containers. It showcases my ability to create and manage diverse development environments, illustrating the intricacies of separating different services and enabling seamless communication between them. Through this project, I emphasize not only the technical aspects of Docker but also the art of orchestrating distinct development setups. It highlights my proficiency in constructing tailored solutions while ensuring effective inter-service communication within complex infrastructures.


## Running the App in Docker

Install my-project with docker-compose.yml

```bash
  docker -f docker-compose.yml up --build
```
With this command, you will create the images and containers for the app, where they will download the Node modules for each service in the application.

The application will run on `localhost:`

![image](https://github.com/MrAndrey24/HelloDocker/assets/110435627/62adaa6e-c63d-4083-88bd-53a780f244bd)





## How to stop the App:

If you want to stop the containers, you should execute the following command.
```
docker compose down
```

![image-1](https://github.com/MrAndrey24/HelloDocker/assets/110435627/22890da3-2ffc-490b-a6c4-d01cfd39d19b)

The above command stops and removes the containers and their networks.

If you want to run the containers again, you should execute the following command.
```
docker compose up --build -d
```

![image-2](https://github.com/MrAndrey24/HelloDocker/assets/110435627/5731f169-4c3a-4b85-a8da-e0732ccea79c)

The above command creates and starts the containers. `--build` flag builds the images from scratch and doesn't use any previously created ones before starting the containers


## How to delete containers and images:

To delete containers, execute the following command:

```
docker container rm -f $(docker container ls -aq)
```
![image-4](https://github.com/MrAndrey24/HelloDocker/assets/110435627/fb772caa-3741-4f15-88ec-c658ed8fad43)


For images, execute the following command:

```
docker image rm $(docker image ls -q)
```
![image-3](https://github.com/MrAndrey24/HelloDocker/assets/110435627/8cf31484-2b08-4933-bffe-e0559b6e2436)
