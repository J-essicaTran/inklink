![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# InkLink🦑
Welcome to the InkLink repository! We are aiming to build an application specialized for artists, providing a collaborative space with a unique journal tool. Artists can seamlessly work together, brainstorm ideas, showcase processes, and create art pieces. The platform fosters a supportive community where artists can give and receive feedback, making it a hub for meaningful collaboration and inspiration.

## Contributors
- Jessica Tran (Full-stack Developer) [@J-essicaTran](https://github.com/J-essicaTran)
- Jasraj Sandhu (Back-end Developer) [@JSandhu223](https://github.com/JSandhu223)
- Manreet Bansal (Front-end Developer) [@GreenStripedSweater](https://github.com/GreenStripedSweater)
- John Lugue (Front-end Developer) [@JohnLugue](https://github.com/JohnLugue)
- Monty Al-Amiri (Front-end Developer) [@montyalamiri](https://github.com/montyalamiri)

## Deploying InkLink with Docker
This guide will walk you through the process of deploying InkLink using Docker. Docker provides a convenient way to package an application and its dependencies into a container, ensuring consistency across different environments.

### Prerequisites
Before you can containerize InkLink, you need to have Docker installed on your machine. You can download the appropriate version of Docker for your operating system from the Docker website:
- [Docker](https://www.docker.com/get-started)

### Getting Started
1. **Have the Docker Desktop Application Running**
2. **Clone the Repository**
    ```
    git clone https://github.com/J-essicaTran/inklink.git
    ```
3. **Navigate Into Project Directory**
    ```
    cd inklink
    ```
4. **Build Docker Image**
    ```
    docker build -t ink-link-img .
    ```
5. **Run Docker Container**
    ```
    docker run -p 3000:3000 -d ink-link-img
    ```
6. **Access InkLink Application**

    Open your web browser and navigate to http://localhost:3000 to access the deployed InkLink application.
### Troubleshooting
If you encounter any issues, refer to the [Docker documentation](https://docs.docker.com/) for troubleshooting and additional information.

