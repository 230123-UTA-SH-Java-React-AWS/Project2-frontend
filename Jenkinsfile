pipeline {
    agent any
    
    stages {
        
        stage('Creating Docker image') {
            steps {
                //Removes any extra docker images
                sh 'sudo docker image prune -f'
                
                //Builds the image of our application
                sh 'sudo docker build -t connoreg/p2frontend:latest .'
            }
        }

        stage('Deploying into docker container') {
            steps {
                //Stop all running containers
                sh 'sudo docker rm -f $(sudo docker ps -f name=p2front -q)'
                
                //Run latest version of image in a container
                sh 'sudo docker run -p 80:3000 --name p2front connoreg/p2frontend:latest'
            }
        }
    }
}