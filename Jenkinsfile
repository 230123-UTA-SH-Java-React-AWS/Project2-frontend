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
                //Stop any running containers of this image
                sh 'sudo docker rm -f $(sudo docker ps -af name=p2front -q)'
                
                //Run latest version of image in a container
                sh 'sudo docker run -d -p 80:3000 --name p2front connoreg/p2frontend:latest'
            }
        }
    }
}